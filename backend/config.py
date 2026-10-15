import os
from pathlib import Path
from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent

# Load .env if present
env_file = BASE_DIR / ".env"
if env_file.exists():
    load_dotenv(env_file)


class Config:
    """Base application configuration."""

    FLASK_ENV = os.getenv("FLASK_ENV", "development")
    DEBUG = os.getenv("FLASK_DEBUG", "0") in ("1", "true", "True")
    SECRET_KEY = os.getenv("SECRET_KEY", "imceodev-default-dev-secret-key")

    # SQLite Database Path
    db_env_path = os.getenv("DATABASE_PATH", "contact_submissions.db")
    if os.path.isabs(db_env_path):
        DATABASE_PATH = Path(db_env_path)
    else:
        DATABASE_PATH = BASE_DIR / db_env_path

    # CORS Allowed Origins (comma-separated string)
    raw_cors = os.getenv(
        "CORS_ORIGINS",
        "http://localhost:5173,http://127.0.0.1:5173,https://imceodev.netlify.app",
    )
    CORS_ORIGINS = [
        origin.strip() for origin in raw_cors.split(",") if origin.strip()
    ]

    PORT = int(os.getenv("PORT", 5000))


class TestConfig(Config):
    """Testing configuration with in-memory or dedicated test database."""

    TESTING = True
    DEBUG = False
    DATABASE_PATH = BASE_DIR / "test_contact_submissions.db"
    CORS_ORIGINS = ["*"]
