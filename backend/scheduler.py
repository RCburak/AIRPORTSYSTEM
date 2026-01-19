from datetime import datetime, timedelta

def check_conflict(flight, gate_id, allocated_flights, buffer_minutes=15):
    """
    Belirlenen tampon süreyi (buffer_time) dikkate alarak zaman çakışmalarını kontrol eder.
    """
    if gate_id == "APRON": return False
    
    try:
        # ISO formatındaki tarihleri oku
        start_a = datetime.fromisoformat(flight['start'].replace('Z', '+00:00'))
        # Bitiş süresine tampon süreyi ekle
        end_a = datetime.fromisoformat(flight['end'].replace('Z', '+00:00')) + timedelta(minutes=buffer_minutes)

        for other in allocated_flights:
            if other.get('resourceId') == gate_id:
                start_b = datetime.fromisoformat(other['start'].replace('Z', '+00:00'))
                end_b = datetime.fromisoformat(other['end'].replace('Z', '+00:00')) + timedelta(minutes=buffer_minutes)
                
                # Çakışma kontrolü
                if start_a < end_b and end_a > start_b:
                    return True
    except Exception as e:
        print(f"Zaman hatası: {e}")
        return True
    return False

def optimize_gate_allocation(flights, gates):
    """
    Gerçek mesafe verilerini kullanarak toplam yürüme maliyetini minimize eden algoritma.
    """
    # Uçuşları başlangıç saatine göre sırala
    sorted_flights = sorted(flights, key=lambda x: x['start'])
    allocated = []
    
    # 15 dakikalık operasyonel tampon süre
    BUFFER_TIME = 15 

    for flight in sorted_flights:
        best_gate = "APRON"
        min_walking_cost = float('inf')
        
        aircraft_type = flight['extendedProps'].get('aircraftType', 'Narrow')
        pax_count = flight['extendedProps'].get('occupancy', 0)

        for gate in gates:
            # Kapı kapalıysa veya Apron ise atama yapma
            if gate.get('isClosed', False) or gate['id'] == "APRON": 
                continue
            
            # Teknik Uyumluluk: Wide-body uçaklar sadece Wide kapılara girebilir
            if aircraft_type == 'Wide' and gate.get('type') == 'Narrow': 
                continue
            
            # Zaman Çakışması ve Buffer kontrolü
            if check_conflict(flight, gate['id'], allocated, BUFFER_TIME): 
                continue

            # --- GÜNCELLENMİŞ GERÇEK MESAFE HESABI ---
            # data.js'den gelen 'distance' değerini alıyoruz
            actual_distance = gate.get('distance', 500) # Veri yoksa varsayılan 500m
                
            # MİLLİ MALİYET HESABI: Yolcu Sayısı x Gerçek Mesafe
            current_walking_cost = pax_count * actual_distance
            # ----------------------------------------
            
            # En düşük yürüme maliyetli kapıyı seç
            if current_walking_cost < min_walking_cost:
                min_walking_cost = current_walking_cost
                best_gate = gate['id']

        flight['resourceId'] = best_gate
        allocated.append(flight)
    
    return allocated