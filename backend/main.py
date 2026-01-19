from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from scheduler import optimize_gate_allocation
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Frontend'in bağlanabilmesi için CORS ayarı
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class AllocationRequest(BaseModel):
    flights: List[dict]
    gates: List[dict]

@app.post("/allocate")
async def allocate(data: AllocationRequest):
    optimized_flights = optimize_gate_allocation(data.flights, data.gates)
    return {"status": "success", "data": optimized_flights}