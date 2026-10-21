@echo off
echo ========================================================
echo   Starting IMCEO DEV Local Development Stack
echo ========================================================
echo.

echo Starting Flask Backend on http://127.0.0.1:5000 ...
start "IMCEO DEV - Backend" cmd /k "cd /d %~dp0backend && .\venv\Scripts\python.exe app.py"

timeout /t 2 >nul

echo Starting Vite Frontend on http://127.0.0.1:5173 ...
start "IMCEO DEV - Frontend" cmd /k "cd /d %~dp0frontend && npm run dev"

echo.
echo Both servers started!
echo Frontend: http://localhost:5173
echo Backend:  http://localhost:5000/api/health
echo.
pause
