from fastapi import APIRouter
from app.services.bill_service import get_all_bill_statistics

router = APIRouter()

# Nova rota sem id, retornando todos os projetos de lei
@router.get("/stats")
def get_bills_stats():
    return get_all_bill_statistics()
