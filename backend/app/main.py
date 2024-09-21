from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.routes import legislator, bill, votes

app = FastAPI()

# Configuração do CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],  # Permitir o frontend local
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos os métodos (GET, POST, etc)
    allow_headers=["*"],  # Permitir todos os cabeçalhos
)

# Incluindo as rotas
app.include_router(legislator.router, prefix="/legislators", tags=["Legislators"])
app.include_router(bill.router, prefix="/bills", tags=["Bills"])
app.include_router(votes.router, prefix="/votes", tags=["Votes"])
