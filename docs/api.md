# IMCEO DEV — API Specifications

Base URL: `http://127.0.0.1:5000` (Local) / Configured Cloud Domain (Production)

---

## 1. Health Endpoint

### `GET /api/health`
Checks service health and SQLite database connectivity without leaking sensitive server internals.

#### Request
```http
GET /api/health HTTP/1.1
Host: 127.0.0.1:5000
Accept: application/json
```

#### Response: `200 OK`
```json
{
  "status": "healthy",
  "service": "imceodev-api",
  "database": "healthy",
  "timestamp": "2026-10-15T10:30:37.535016+00:00"
}
```

---

## 2. Contact Inquiries Endpoint

### `POST /api/contact`
Accepts, validates, sanitizes, and stores new project inquiries in the SQLite database.

#### Security & Rate Limiting
- **CORS**: Enforced based on `CORS_ORIGINS` environment variable.
- **Honeypot**: Hidden `website` field traps bots (returns 200 decoy without saving).
- **Throttling**: Maximum 6 submissions per client IP address within a 5-minute rolling window.
- **Queries**: All inserts utilize parameterized SQL queries.

#### Request Headers
```http
Content-Type: application/json
```

#### Request Body Schema
| Field | Type | Required | Constraints |
|---|---|---|---|
| `name` | string | **Yes** | 2 - 100 characters |
| `email` | string | **Yes** | 5 - 254 characters, RFC 5322 regex format |
| `company` | string | No | Max 120 characters |
| `service` | string | **Yes** | 2 - 100 characters |
| `budget` | string | No | Max 50 characters |
| `message` | string | **Yes** | 10 - 3000 characters |
| `website` | string | No | Honeypot field (must remain empty for humans) |

#### Example Payload
```json
{
  "name": "Alex Mercer",
  "email": "alex@example.com",
  "company": "Proto Corp",
  "service": "Website Development",
  "budget": "$1,500 - $3,000",
  "message": "We need a modern landing page for our new software launch."
}
```

#### Response: `201 Created`
```json
{
  "success": true,
  "message": "Thank you! Your message has been received. We will get back to you shortly.",
  "submission_id": "f9fa1ca3-dfbb-42b8-95e3-fe7788f0a1a8"
}
```

#### Response: `400 Bad Request` (Validation Error)
```json
{
  "success": false,
  "error": "Validation Error",
  "validation_errors": {
    "email": "Please provide a valid email address.",
    "message": "Project description must be at least 10 characters."
  },
  "message": "Please provide a valid email address."
}
```

#### Response: `429 Too Many Requests`
```json
{
  "success": false,
  "error": "Rate Limit Exceeded",
  "message": "Too many requests from this address. Please wait a few moments before trying again."
}
```
