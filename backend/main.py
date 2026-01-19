from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from datetime import datetime, timedelta
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Flight(BaseModel):
    id: str
    title: str
    start: str
    end: str
    extendedProps: dict

class Gate(BaseModel):
    id: str
    title: str
    block: str
    extendedProps: dict

class AllocationRequest(BaseModel):
    flights: List[Flight]
    gates: List[Gate]

@app.post("/allocate")
async def allocate_gates(request: AllocationRequest):
    # 1. Uçuşları iniş saatine göre sırala
    sorted_flights = sorted(request.flights, key=lambda x: x.start)
    
    # 2. Kapıları mesafeye göre sırala (Önce en yakın kapılar dolsun)
    sorted_gates = sorted(request.gates, key=lambda x: x.extendedProps.get('distance', 999))
    
    allocated_flights = []
    # Kapı doluluk takvimi: {gate_id: [(start, end)]}
    gate_schedule = {gate.id: [] for gate in request.gates}

    for flight in sorted_flights:
        f_start = datetime.fromisoformat(flight.start.replace('Z', '+00:00'))
        f_end = datetime.fromisoformat(flight.end.replace('Z', '+00:00'))
        f_type = flight.extendedProps.get('aircraftType')
        assigned_gate_id = 'APRON' # Varsayılan: Apron

        for gate in sorted_gates:
            # Bakım modunda mı?
            if gate.extendedProps.get('isClosed', False):
                continue

            # Uçak tipi uyumlu mu? (Wide uçak Narrow kapıya giremez)
            g_type = gate.extendedProps.get('type', '')
            if f_type == "Wide" and "Narrow" in g_type:
                continue

            # Kapı o saatte boş mu? (Overlap check)
            is_busy = False
            for (b_start, b_end) in gate_schedule[gate.id]:
                if not (f_end <= b_start or f_start >= b_end):
                    is_busy = True
                    break
            
            if not is_busy:
                assigned_gate_id = gate.id
                gate_schedule[gate.id].append((f_start, f_end))
                break
        
        flight_dict = flight.dict()
        flight_dict['resourceId'] = assigned_gate_id
        allocated_flights.append(flight_dict)

    return {"status": "success", "data": allocated_flights}