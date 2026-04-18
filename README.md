# AI-Data-Analyst-Dashboard-using-python
To build a highly efficient AI-powered analytics dashboard using Python where users can: • Upload CSV • Ask questions • Get insights instantly

1. Project Architecture (Simple View)
   Frontend (React) → FastAPI → Pandas → OpenAI (optional) → Response (Charts + Insights)

2. Folder Structure
   ai-data-dashboard/
│
├── backend/
│   ├── main.py
│   ├── routes/
│   │   ├── upload.py
│   │   ├── query.py
│   │
│   ├── services/
│   │   ├── data_service.py
│   │   ├── ai_service.py
│   │
│   ├── models/
│   │   ├── schema.py
│   │
│   ├── utils/
│   │   ├── file_handler.py
│   │
│   ├── requirements.txt
│   └── .env


3. STEP-BY-STEP LOCAL SETUP

Step 1: Create Project

mkdir ai-data-dashboard
cd ai-data-dashboard
mkdir backend
cd backend

Step 2: Create Virtual Environment

python -m venv venv

then activate on windows
venv\Scripts\activate

Step 3: Install Dependencies
pip install -r requirements.txt

Step 4: Run Server
uvicorn main:app --reload

Step 5: Test API
Open browser:

 http://127.0.0.1:8000/docs

Test:

/upload
/query

5. DEPLOYMENT ON RENDER
Step 1: Push to GitHub

git init
git add .
git commit -m "initial commit"
git remote add origin <your-repo>
git push -u origin main

Step 2: Go to Render
https://render.com

Step 3: Create Web Service
Connect GitHub repo
Select backend folder

Step 4: Add Settings
Build Command:
pip install -r requirements.txt

Start Command:
uvicorn main:app --host 0.0.0.0 --port 10000

Step 5: Add Environment Variables (Optional)
OPENAI_API_KEY=your_key

Step 6: Deploy 🚀



------------------------------------------Frontend------------------------

FRONTEND (React + Tailwind + Recharts)

This frontend will:

Upload CSV 
Ask questions 
Show results 


Frontend Folder Structure
frontend/
│
├── src/
│   ├── components/
│   │   ├── Upload.jsx
│   │   ├── Chat.jsx
│   │   ├── ChartView.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│
├── package.json
├── index.html


1. Setup React Project

Use Vite (fastest way)

npm create vite@latest frontend
cd frontend
npm install


Install dependencies
npm install axios recharts


CONNECT BACKEND + FRONTEND

first Make sure: Backend running on:
http://127.0.0.1:8000

and Frontend:
npm run dev


