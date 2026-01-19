from datetime import datetime

def check_conflict(flight, gate_id, allocated_flights):
    """Bir kapıda zaman çakışması olup olmadığını kontrol eder."""
    # APRON bir bekleme alanıdır, burada çakışma kontrolü yapılmaz
    if gate_id == "APRON":
        return False

    try:
        # ISO formatındaki 'Z' harfini Python'ın tanıyacağı formata çevirerek oku
        start_a = datetime.fromisoformat(flight['start'].replace('Z', '+00:00'))
        end_a = datetime.fromisoformat(flight['end'].replace('Z', '+00:00'))

        for other in allocated_flights:
            if other['resourceId'] == gate_id:
                start_b = datetime.fromisoformat(other['start'].replace('Z', '+00:00'))
                end_b = datetime.fromisoformat(other['end'].replace('Z', '+00:00'))
                
                # Kesin Çakışma Formülü: (StartA < EndB) ve (EndA > StartB)
                if start_a < end_b and end_a > start_b:
                    return True
    except Exception as e:
        print(f"Zaman okuma hatası: {e}")
        return True # Hatalı tarihleri çakışma varmış gibi sayarak yanlış atamayı önler
    return False

def optimize_gate_allocation(flights, gates):
    """Uçakları yoğunluğu azaltacak şekilde kapılara dağıtır."""
    # Uçuşları başlangıç saatine göre sırala (FIFO)
    sorted_flights = sorted(flights, key=lambda x: x['start'])
    allocated = []

    for flight in sorted_flights:
        best_gate = "APRON" # Varsayılan bekleme alanı
        min_density_score = float('inf')
        
        aircraft_type = flight['extendedProps'].get('aircraftType', 'Narrow')

        for gate in gates:
            # Kapı kapalıysa (bakım) veya uçak tipi uymuyorsa atla
            if gate.get('isClosed', False): continue
            if aircraft_type == 'Wide' and gate.get('type') == 'Narrow': continue
            
            # 1 Gate 1 Uçak kuralı: Çakışma varsa bu kapıyı kullanma
            if check_conflict(flight, gate['id'], sorted_flights if not allocated else allocated): 
                continue

            # Yoğunluk Skoru: Kapıdaki mevcut uçuşların toplam yolcu yükü
            gate_pax = sum(f['extendedProps'].get('occupancy', 0) for f in allocated if f['resourceId'] == gate['id'])
            
            if gate_pax < min_density_score:
                min_density_score = gate_pax
                best_gate = gate['id']

        flight['resourceId'] = best_gate
        allocated.append(flight)
    
    return allocated