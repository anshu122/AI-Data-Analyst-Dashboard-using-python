from fastapi import APIRouter
from models.schema import QueryRequest
from services.data_service import get_dataframe
from services.ai_service import generate_code

router = APIRouter()

@router.post("/query")
def query_data(request: QueryRequest):
    df = get_dataframe()

    code = generate_code(request.query)

    try:
        result = eval(code)
        return {
            "result": str(result),
            "executed_code": code
        }
    except Exception as e:
        return {"error": str(e)}