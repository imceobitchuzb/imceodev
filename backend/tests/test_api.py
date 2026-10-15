import os
import sys
from pathlib import Path
import pytest

# Ensure backend root is in sys.path
backend_dir = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(backend_dir))

from app import create_app
from config import TestConfig
from database import get_db_connection


@pytest.fixture
def client(tmp_path):
    """Provides a Flask test client with an isolated temporary SQLite database."""
    test_db = tmp_path / "test_contacts.db"

    class TempConfig(TestConfig):
        DATABASE_PATH = test_db

    app = create_app(TempConfig)
    app.config["TESTING"] = True

    with app.test_client() as client:
        yield client, test_db


def test_health_endpoint(client):
    test_client, _ = client
    response = test_client.get("/api/health")
    assert response.status_code == 200
    data = response.get_json()
    assert data["status"] == "healthy"
    assert data["service"] == "imceodev-api"
    assert data["database"] == "healthy"
    assert "timestamp" in data


def test_contact_submission_success(client):
    test_client, db_path = client
    payload = {
        "name": "Alex Mercer",
        "email": "alex@example.com",
        "company": "Proto Corp",
        "service": "Website Development",
        "budget": "$1,000 - $3,000",
        "message": "We need a modern landing page for our new software launch.",
    }
    response = test_client.post("/api/contact", json=payload)
    assert response.status_code == 201
    data = response.get_json()
    assert data["success"] is True
    assert "submission_id" in data
    assert "Thank you" in data["message"]

    # Verify database persistence
    conn = get_db_connection(db_path)
    cur = conn.cursor()
    cur.execute("SELECT * FROM contact_submissions WHERE email = ?;", ("alex@example.com",))
    row = cur.fetchone()
    conn.close()

    assert row is not None
    assert row["name"] == "Alex Mercer"
    assert row["company"] == "Proto Corp"
    assert row["service"] == "Website Development"
    assert row["message"] == "We need a modern landing page for our new software launch."


def test_contact_missing_fields(client):
    test_client, _ = client
    payload = {
        "name": "Jane Doe",
        # missing email, service, message
    }
    response = test_client.post("/api/contact", json=payload)
    assert response.status_code == 400
    data = response.get_json()
    assert data["success"] is False
    assert "validation_errors" in data
    assert "email" in data["validation_errors"]
    assert "service" in data["validation_errors"]
    assert "message" in data["validation_errors"]


def test_contact_invalid_email(client):
    test_client, _ = client
    payload = {
        "name": "John Smith",
        "email": "not-an-email-format",
        "service": "Web Applications",
        "message": "Need a custom CRM dashboard for internal project tracking.",
    }
    response = test_client.post("/api/contact", json=payload)
    assert response.status_code == 400
    data = response.get_json()
    assert "email" in data.get("validation_errors", {})


def test_contact_message_too_short(client):
    test_client, _ = client
    payload = {
        "name": "Alice",
        "email": "alice@domain.org",
        "service": "Telegram Bots",
        "message": "Short",  # < 10 chars
    }
    response = test_client.post("/api/contact", json=payload)
    assert response.status_code == 400
    data = response.get_json()
    assert "message" in data.get("validation_errors", {})


def test_contact_non_json_request(client):
    test_client, _ = client
    response = test_client.post(
        "/api/contact",
        data="Plain text content",
        headers={"Content-Type": "text/plain"},
    )
    assert response.status_code == 400
    data = response.get_json()
    assert data["success"] is False


def test_contact_honeypot_bot_prevention(client):
    test_client, db_path = client
    # Spammer fills honeypot hidden field 'website'
    payload = {
        "name": "Spam Bot",
        "email": "spammer@botnet.ru",
        "service": "Website Development",
        "message": "Visit our casino link immediately for free credits!",
        "website": "http://spamsite.com",
    }
    response = test_client.post("/api/contact", json=payload)
    # App returns decoy 200 success
    assert response.status_code == 200
    data = response.get_json()
    assert data["success"] is True

    # But does NOT store in database
    conn = get_db_connection(db_path)
    cur = conn.cursor()
    cur.execute("SELECT * FROM contact_submissions WHERE email = ?;", ("spammer@botnet.ru",))
    row = cur.fetchone()
    conn.close()
    assert row is None


def test_rate_limiting(client):
    test_client, _ = client
    payload = {
        "name": "Test User",
        "email": "rate@example.com",
        "service": "Telegram Bots",
        "message": "Automated pipeline inquiry for continuous testing.",
    }

    # Post 6 times
    for _ in range(6):
        res = test_client.post("/api/contact", json=payload)
        assert res.status_code == 201

    # 7th request from same IP within window should trigger 429
    res7 = test_client.post("/api/contact", json=payload)
    assert res7.status_code == 429
    data = res7.get_json()
    assert data["error"] == "Rate Limit Exceeded"
