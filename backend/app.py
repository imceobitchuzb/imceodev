import datetime
import re
import uuid
import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS
from config import Config
from database import init_db, get_db_connection

EMAIL_REGEX = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


def create_app(config_class=Config) -> Flask:
    """Application factory for IMCEO DEV backend API."""
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize Database Schema
    init_db(app.config["DATABASE_PATH"])

    # Configure CORS
    allowed_origins = app.config.get("CORS_ORIGINS", ["*"])
    CORS(
        app,
        resources={r"/api/*": {"origins": allowed_origins}},
        supports_credentials=False,
        methods=["GET", "POST", "OPTIONS"],
        allow_headers=["Content-Type"],
    )

    @app.errorhandler(400)
    def bad_request(error):
        return (
            jsonify(
                {
                    "success": False,
                    "error": "Bad Request",
                    "message": "Malformed request or invalid JSON payload.",
                }
            ),
            400,
        )

    @app.errorhandler(404)
    def not_found(error):
        return (
            jsonify(
                {
                    "success": False,
                    "error": "Not Found",
                    "message": "The requested endpoint does not exist.",
                }
            ),
            404,
        )

    @app.errorhandler(405)
    def method_not_allowed(error):
        return (
            jsonify(
                {
                    "success": False,
                    "error": "Method Not Allowed",
                    "message": "HTTP method not supported on this endpoint.",
                }
            ),
            405,
        )

    @app.errorhandler(500)
    def server_error(error):
        return (
            jsonify(
                {
                    "success": False,
                    "error": "Internal Server Error",
                    "message": "An internal error occurred. Please try again later.",
                }
            ),
            500,
        )

    @app.route("/api/health", methods=["GET"])
    def health_check():
        """Health check endpoint confirming API and database availability."""
        db_status = "unavailable"
        try:
            conn = get_db_connection(app.config["DATABASE_PATH"])
            conn.execute("SELECT 1;").fetchone()
            conn.close()
            db_status = "healthy"
        except Exception:
            db_status = "degraded"

        return (
            jsonify(
                {
                    "status": "healthy" if db_status == "healthy" else "degraded",
                    "service": "imceodev-api",
                    "database": db_status,
                    "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
                }
            ),
            200,
        )

    @app.route("/api/contact", methods=["POST"])
    def submit_contact():
        """Handles contact form submissions with validation and parameterized SQLite storage."""
        if not request.is_json:
            return (
                jsonify(
                    {
                        "success": False,
                        "error": "Validation Error",
                        "message": "Request body must be JSON.",
                    }
                ),
                400,
            )

        try:
            data = request.get_json()
        except Exception:
            return (
                jsonify(
                    {
                        "success": False,
                        "error": "Validation Error",
                        "message": "Malformed JSON payload.",
                    }
                ),
                400,
            )

        if not isinstance(data, dict):
            return (
                jsonify(
                    {
                        "success": False,
                        "error": "Validation Error",
                        "message": "Request payload must be a JSON object.",
                    }
                ),
                400,
            )

        # 1. Honeypot check for bots
        # If 'website' or 'hp_url' is filled, silently fake success to mislead spammers
        honeypot = data.get("website", "").strip() or data.get("hp_url", "").strip()
        if honeypot:
            return (
                jsonify(
                    {
                        "success": True,
                        "message": "Your message has been received.",
                        "submission_id": str(uuid.uuid4()),
                    }
                ),
                200,
            )

        # 2. Extract and sanitize fields
        name = str(data.get("name", "")).strip()
        email = str(data.get("email", "")).strip().lower()
        company = str(data.get("company", "")).strip()
        service = str(data.get("service", "")).strip()
        budget = str(data.get("budget", "")).strip()
        message = str(data.get("message", "")).strip()

        # 3. Field Validations
        errors = {}

        if not name or len(name) < 2:
            errors["name"] = "Name must be at least 2 characters."
        elif len(name) > 100:
            errors["name"] = "Name cannot exceed 100 characters."

        if not email:
            errors["email"] = "Email address is required."
        elif len(email) > 254 or not EMAIL_REGEX.match(email):
            errors["email"] = "Please provide a valid email address."

        if not service:
            errors["service"] = "Please select a service."
        elif len(service) > 100:
            errors["service"] = "Service value cannot exceed 100 characters."

        if not message or len(message) < 10:
            errors["message"] = "Project description must be at least 10 characters."
        elif len(message) > 3000:
            errors["message"] = "Project description cannot exceed 3000 characters."

        if len(company) > 120:
            errors["company"] = "Company name cannot exceed 120 characters."

        if len(budget) > 50:
            errors["budget"] = "Budget value cannot exceed 50 characters."

        if errors:
            return (
                jsonify(
                    {
                        "success": False,
                        "error": "Validation Error",
                        "validation_errors": errors,
                        "message": next(iter(errors.values())),
                    }
                ),
                400,
            )

        client_ip = (
            request.headers.get("X-Forwarded-For", request.remote_addr or "")
            .split(",")[0]
            .strip()
        )

        # 4. Basic rate limiting: max 6 requests per IP in the last 5 minutes
        conn = None
        try:
            conn = get_db_connection(app.config["DATABASE_PATH"])
            with conn:
                cur = conn.cursor()
                if client_ip:
                    cur.execute(
                        """
                        SELECT COUNT(*) FROM contact_submissions 
                        WHERE ip_address = ? 
                        AND created_at >= datetime('now', '-5 minutes');
                        """,
                        (client_ip,),
                    )
                    count = cur.fetchone()[0]
                    if count >= 6:
                        return (
                            jsonify(
                                {
                                    "success": False,
                                    "error": "Rate Limit Exceeded",
                                    "message": "Too many requests from this address. Please wait a few moments before trying again.",
                                }
                            ),
                            429,
                        )

                # 5. Insert submission
                submission_id = str(uuid.uuid4())
                cur.execute(
                    """
                    INSERT INTO contact_submissions (
                        id, name, email, company, service, budget, message, ip_address
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?);
                    """,
                    (
                        submission_id,
                        name,
                        email,
                        company or None,
                        service,
                        budget or None,
                        message,
                        client_ip or None,
                    ),
                )

            return (
                jsonify(
                    {
                        "success": True,
                        "message": "Thank you! Your message has been received. We will get back to you shortly.",
                        "submission_id": submission_id,
                    }
                ),
                201,
            )
        except sqlite3.Error as e:
            app.logger.error(f"Database error during contact submission: {e}")
            return (
                jsonify(
                    {
                        "success": False,
                        "error": "Database Error",
                        "message": "Failed to store submission. Please try again or reach out directly on Telegram.",
                    }
                ),
                500,
            )
        finally:
            if conn:
                conn.close()

    return app


app = create_app()

if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=app.config.get("PORT", 5000),
        debug=app.config.get("DEBUG", False),
    )
