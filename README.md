# IMCEO DEV — Digital Products, Built to Work

[![Build Status](https://img.shields.io/badge/Build-Passing-emerald.svg)](https://imceodev.netlify.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Frontend](https://img.shields.io/badge/Frontend-React_18_%7C_TypeScript_%7C_Tailwind-1e40af.svg)](frontend/)
[![Backend](https://img.shields.io/badge/Backend-Python_3_%7C_Flask_%7C_SQLite-1552db.svg)](backend/)

IMCEO DEV is an independent software development studio based in Uzbekistan, delivering practical web platforms, responsive websites, Telegram bots, and backend automation pipelines for local and international clients.

This repository contains the complete full-stack codebase:
- **`frontend/`**: Modern, accessible React + TypeScript + Vite web application styled with Tailwind CSS, supporting English, Russian, and Uzbek languages.
- **`backend/`**: Modular Python Flask REST API with parameterized SQLite persistence, health diagnostics, input validation, honeypot spam protection, and IP rate limiting.

---

## 🌟 Key Features

1. **Light, Premium Minimalist UI**:
   - Palette based on restrained cobalt blue accents (`#123fb3`, `#1552db`), neutral white, and graphite text surfaces.
   - Fully responsive, mobile-first design with smooth transitions and zero heavy bloated animation libraries.

2. **Multilingual Architecture**:
   - Fully functional, zero-reload language switcher supporting **English (`en`)**, **Russian (`ru`)**, and **Uzbek (`uz`)** with persistent `localStorage` memory.

3. **Filterable Portfolio of Verified Builds**:
   - Filter by **Websites**, **Web Apps**, and **Automation**.
   - Clear and honest status indicators:
     - **NEXORA MARKET**: Live web store ([nexoramarketss.netlify.app](https://nexoramarketss.netlify.app)) + active Telegram Bot ([@nexoramarketsbot](https://t.me/nexoramarketsbot)).
     - **CEOWEB**: Gamified social media showcase with challenge feed ([socialmediauz.netlify.app/challenges](https://socialmediauz.netlify.app/challenges)) and public code on GitHub.
     - **SAT MASTER**: AI-powered Digital SAT training Telegram Mini App with diagnostic remediation loop ([github.com/imceobitchuzb/newbot](https://github.com/imceobitchuzb/newbot)).
     - **CEOSAVDOUZ**: Trade and business automation SaaS platform with smart warehouse, POS cash register, and Telegram WebApp integration ([ceosavdouz.netlify.app](https://ceosavdouz.netlify.app) | [GitHub](https://github.com/imceobitchuzb/ceosavdouz)).

4. **Honest Engineering Case Studies**:
   - Deep-dive architectural breakdowns covering real technical challenges, solutions, and verified outcomes without exaggerated metrics or fabricated claims.

5. **Production-Ready Contact Pipeline**:
   - Client-side validation for emails, character lengths, and service selection.
   - Honeypot bot protection: hidden trap fields reject spammers without affecting real visitors.
   - IP-based rate limiting (maximum 6 submissions per 5 minutes).
   - Generates unique UUID submission IDs and persists inquiries to parameterized SQLite database.

6. **Accessibility & SEO**:
   - Semantic HTML5 structure with accessible labels, keyboard focus visibility (`:focus-visible`), and Escape key handlers on modals and menus.
   - Open Graph tags, Twitter metadata, and custom SVG brand favicon.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18, TypeScript, Vite, Tailwind CSS, Lucide React, Vitest |
| **Backend** | Python 3, Flask 3, Flask-CORS, SQLite3, Pytest, Gunicorn |
| **Deployment** | Netlify (Frontend CDN), Render / Linux VPS (Backend API) |

---

## 📁 Repository Structure

```
imceodev/
├── .gitignore                      # Global gitignore (excludes secrets, venvs, DBs)
├── README.md                       # Comprehensive project documentation
├── docs/
│   ├── deployment.md               # Netlify and Render deployment guide
│   └── api.md                      # REST API endpoint reference
├── backend/
│   ├── .env.example                # Backend environment template
│   ├── requirements.txt            # Python dependencies
│   ├── config.py                   # App configuration and CORS origins
│   ├── database.py                 # SQLite initialization and connection
│   ├── app.py                      # Flask application and route handlers
│   └── tests/
│       └── test_api.py             # Pytest automated test suite
└── frontend/
    ├── .env.example                # Frontend environment template
    ├── package.json                # NPM dependencies and scripts
    ├── tsconfig.json               # TypeScript configuration
    ├── vite.config.ts              # Vite bundler configuration
    ├── tailwind.config.js          # Tailwind CSS theme customization
    ├── public/
    │   └── _redirects              # Netlify SPA routing rules
    └── src/
        ├── types/                  # TypeScript interface definitions
        ├── i18n/                   # Multi-language translations (EN, RU, UZ)
        ├── context/                # Language context and state
        ├── data/                   # Verified projects, services & case studies
        ├── components/             # Reusable modular UI components
        ├── tests/                  # Vitest frontend unit tests
        ├── index.css               # Global styles & keyframe animations
        ├── App.tsx                 # Root layout and section coordinator
        └── main.tsx                # React DOM mount point
```

---

## 🚀 Local Development Setup (Windows 11 / PowerShell)

### Prerequisites
- Node.js (v20+ recommended) & npm
- Python (v3.10+ recommended)
- Git

---

### Step 1: Backend Setup

Open **PowerShell Terminal 1**:

```powershell
# 1. Navigate to the backend directory
cd C:\Users\user\Documents\imceodev\backend

# 2. Create Python virtual environment
python -m venv venv

# 3. Activate the virtual environment
.\venv\Scripts\Activate.ps1

# 4. Install dependencies
pip install -r requirements.txt

# 5. Create local environment configuration
Copy-Item .env.example .env

# 6. Run the Flask development server
python app.py
```

The Flask API will start running at:
👉 `http://127.0.0.1:5000`

---

### Step 2: Frontend Setup

Open **PowerShell Terminal 2**:

```powershell
# 1. Navigate to the frontend directory
cd C:\Users\user\Documents\imceodev\frontend

# 2. Install npm dependencies
npm install

# 3. Create local environment configuration
Copy-Item .env.example .env

# 4. Start the Vite development server
npm run dev
```

The frontend web application will start running at:
👉 `http://127.0.0.1:5173`

---

## 🧪 Automated Testing

### Backend Unit Tests (Pytest)
From `backend/`:
```powershell
.\venv\Scripts\pytest.exe -v tests/test_api.py
```
**Test Coverage Includes:**
- `test_health_endpoint`: Checks HTTP 200 and healthy database response.
- `test_contact_submission_success`: Validates field persistence in SQLite.
- `test_contact_missing_fields`: Validates 400 rejection for missing parameters.
- `test_contact_invalid_email`: Enforces email format validation.
- `test_contact_message_too_short`: Enforces minimum length constraint.
- `test_contact_non_json_request`: Validates rejection of non-JSON requests.
- `test_contact_honeypot_bot_prevention`: Checks decoy response without saving spam.
- `test_rate_limiting`: Verifies 429 response after 6 rapid requests.

### Frontend Production Build & Tests
From `frontend/`:
```powershell
# Run TypeScript compilation and Vite production build
npm run build

# Run unit tests
npm test
```

---

## 📡 API Reference

Detailed API specifications are documented in [`docs/api.md`](docs/api.md).

- **`GET /api/health`**: Returns application and database health status.
- **`POST /api/contact`**: Validates, sanitizes, and stores client inquiries in SQLite.

---

## 🌐 Production Deployment

Complete deployment instructions are documented in [`docs/deployment.md`](docs/deployment.md).

1. **Frontend (Netlify)**:
   - Connect repository `imceobitchuzb/imceodev`.
   - Build command: `npm run build`
   - Publish directory: `frontend/dist`
   - Environment variable: `VITE_API_BASE_URL=https://your-api.onrender.com`

2. **Backend (Render)**:
   - Connect repository `imceobitchuzb/imceodev`.
   - Build command: `pip install -r requirements.txt`
   - Start command: `gunicorn app:app --bind 0.0.0.0:$PORT`
   - Environment variables: `CORS_ORIGINS=https://your-site.netlify.app`, `DATABASE_PATH=contact_submissions.db`

---

## ⚠️ Known Limitations & Future Improvements

1. **Free Tier Cold Starts**: On free hosting platforms like Render, inactive instances go to sleep after 15 minutes. Initial API requests may experience a 30–50 second delay.
2. **Persistent Storage in Production**: SQLite works locally and on persistent servers (like VPS or Render with persistent disks). For ephemeral container scaling, migrating to a free managed PostgreSQL instance (e.g. Neon or Supabase) is recommended.
3. **Automated Telegram Notifications**: Future iterations can add an instant Telegram webhook notification to alert the studio whenever a new contact submission is saved.

---

## 📄 License & Attribution

Designed and engineered for **IMCEO DEV**. Built with modern open-source technologies.
Telegram: [@imceouz](https://t.me/imceouz) | Instagram: [@imceouz](https://www.instagram.com/imceouz)
