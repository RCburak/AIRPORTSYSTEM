from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from scheduler import optimize_gate_allocation
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Smart Gate Allocation API")

# Frontend (Vite) bağlantısı için CORS ayarlarını kesinleştiriyoruz
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Geliştirme aşamasında tüm kökenlere izin verir
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API'ye gelecek verinin yapısını tanımlıyoruz
class AllocationRequest(BaseModel):
    flights: List[dict]
    gates: List[dict]

@app.get("/")
async def root():
    return {"message": "Airport System Backend is Running"}

@app.post("/allocate")
async def allocate(data: AllocationRequest):
    """
    Frontend'den gelen uçuş ve kapı listesini alır, 
    optimizasyon algoritmasını çalıştırır ve sonuçları döner.
    """
    try:
        # scheduler.py içindeki geliştirilmiş algoritmayı çağırıyoruz
        optimized_flights = optimize_gate_allocation(data.flights, data.gates)
        
        return {
            "status": "success", 
            "data": optimized_flights,
            "message": "AI: Python üzerinden yoğunluk dengelemesi tamamlandı."
        }
    except Exception as e:
        return {
            "status": "error", 
            "message": f"Optimizasyon sırasında hata oluştu: {str(e)}"
        }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)