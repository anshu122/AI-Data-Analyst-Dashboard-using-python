from fastapi import FastAPI
from routes import upload, query

app = FastAPI()

app.include_router(upload.router)
app.include_router(query.router)

@app.get("/")
def root():
    return {"message": "AI Data Analyst Dashboard Running"}