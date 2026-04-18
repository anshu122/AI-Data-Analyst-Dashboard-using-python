from fastapi import APIRouter, UploadFile, File
import pandas as pd
from utils.file_handler import save_file
from services.data_service import store_dataframe

router = APIRouter()

@router.post("/upload")
async def upload_csv(file: UploadFile = File(...)):
    file_path = save_file(file)
    df = pd.read_csv(file_path)

    store_dataframe(df)

    return {
        "message": "File uploaded successfully",
        "columns": list(df.columns)
    }