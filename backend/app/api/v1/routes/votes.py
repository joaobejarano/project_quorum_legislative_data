from fastapi import APIRouter
from app.services.votes_service import get_votes_stats

router = APIRouter()

@router.get("/stats")
def get_votes():
    return get_votes_stats()