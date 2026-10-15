import sqlite3
from pathlib import Path
from typing import Optional


def get_db_connection(db_path: Path) -> sqlite3.Connection:
    """Creates a connection to the SQLite database with row factory enabled."""
    db_path.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(db_path))
    conn.row_factory = sqlite3.Row
    # Enable WAL mode for better concurrency in SQLite
    conn.execute("PRAGMA journal_mode=WAL;")
    return conn


def init_db(db_path: Path) -> None:
    """Initializes the database schema if tables do not exist."""
    conn = get_db_connection(db_path)
    try:
        with conn:
            conn.execute(
                """
                CREATE TABLE IF NOT EXISTS contact_submissions (
                    id TEXT PRIMARY KEY,
                    name TEXT NOT NULL,
                    email TEXT NOT NULL,
                    company TEXT,
                    service TEXT NOT NULL,
                    budget TEXT,
                    message TEXT NOT NULL,
                    ip_address TEXT,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
                """
            )
            conn.execute(
                """
                CREATE INDEX IF NOT EXISTS idx_contact_email 
                ON contact_submissions(email);
                """
            )
            conn.execute(
                """
                CREATE INDEX IF NOT EXISTS idx_contact_created_at 
                ON contact_submissions(created_at);
                """
            )
    finally:
        conn.close()
