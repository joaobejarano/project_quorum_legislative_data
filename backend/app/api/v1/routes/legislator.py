from fastapi import APIRouter
from app.services.legislator_service import get_all_legislator_statistics

router = APIRouter()

# Nova rota sem id, retornando todos os legisladores
@router.get("/stats")
def get_legislators_stats():
    return get_all_legislator_statistics()
