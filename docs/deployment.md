# IMCEO DEV — Deployment Guide

This guide details how to deploy the **IMCEO DEV** static frontend to Netlify and the Python Flask backend to a cloud host (such as Render).

---

## 1. Frontend Deployment (Netlify)

The frontend is a Vite + React + TypeScript Single Page Application (SPA) with zero server-side dependencies. It can be hosted completely free on Netlify's global edge network.

### Netlify Configuration Summary
- **Base directory**: `frontend`
- **Build command**: `npm run build`
- **Publish directory**: `frontend/dist`
- **Redirects rule**: `frontend/public/_redirects` contains `/* /index.html 200` to support client-side routing.

### Step-by-Step Deployment Steps
1. Log in to [Netlify](https://app.netlify.com).
2. Click **Add new site** > **Import an existing project**.
3. Authorize GitHub and select the `imceodev` repository.
4. Configure Build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist` (or `frontend/dist` if root-relative)
5. Set Environment Variables under **Site configuration > Environment variables**:
   - `VITE_API_BASE_URL`: The production URL of your backend API (e.g. `https://imceodev-api.onrender.com`).
6. Click **Deploy imceodev**.

---

## 2. Backend Deployment (Render Free Web Service)

The backend is a Flask API configured with Flask-CORS, input validation, and rate limiting.

### Render Configuration Summary
- **Environment**: Python 3
- **Root directory**: `backend`
- **Build command**: `pip install -r requirements.txt`
- **Start command**: `gunicorn app:app --bind 0.0.0.0:$PORT`

### Step-by-Step Deployment Steps
1. Log in to [Render Dashboard](https://dashboard.render.com).
2. Click **New +** > **Web Service**.
3. Connect the GitHub repository `imceodev`.
4. Configure settings:
   - **Name**: `imceodev-api`
   - **Region**: Frankfurt (EU Central) or Singapore
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app --bind 0.0.0.0:$PORT`
   - **Instance Type**: `Free`
5. Configure Environment Variables:
   - `FLASK_ENV`: `production`
   - `FLASK_DEBUG`: `0`
   - `SECRET_KEY`: Generate a random 32-character string.
   - `CORS_ORIGINS`: `https://imceodev.netlify.app` (or your actual frontend domain)
   - `DATABASE_PATH`: `contact_submissions.db`
6. Click **Create Web Service**.

### ⚠️ Free Tier Limitations & Operational Notes
- **Cold Starts**: Render free instances automatically spin down after 15 minutes of inactivity. When a new contact form or health check request arrives, the instance may take 30–50 seconds to wake up.
- **Ephemeral Storage**: Render free web services do not include persistent disks. If the container restarts or re-deploys, local SQLite files (`contact_submissions.db`) are reset to initial state.
- **Production Migration Recommendation**: For permanent submission storage without losing records across container restarts, link a free managed PostgreSQL instance (e.g. Neon.tech or Supabase) or configure automated email / Telegram bot alerts upon every submission.

---

## 3. Post-Deployment Verification Checklist

- [ ] Frontend loads over HTTPS at your Netlify domain.
- [ ] Mobile hamburger navigation opens and closes smoothly.
- [ ] Language toggle switches between English, Russian, and Uzbek.
- [ ] Portfolio category filter buttons display correct projects.
- [ ] Call `https://your-api.onrender.com/api/health` and verify `{"status": "healthy"}`.
- [ ] Submit a test inquiry via the contact form and verify receipt of a unique `submission_id`.
- [ ] Check CORS headers to verify requests from unauthorized domains are blocked.
