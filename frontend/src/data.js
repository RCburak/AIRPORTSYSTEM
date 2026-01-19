// 1. Kapıların (Resources) Tanımlanması
export const resources = [
  { id: 'A1', title: 'Gate A1', type: 'Wide', block: 'Pier A', isClosed: false },
  { id: 'A2', title: 'Gate A2', type: 'Narrow', block: 'Pier A', isClosed: false },
  { id: 'A3', title: 'Gate A3', type: 'Wide', block: 'Pier A', isClosed: false },
  { id: 'B1', title: 'Gate B1', type: 'Wide', block: 'Pier B', isClosed: false },
  { id: 'B2', title: 'Gate B2', type: 'Narrow', block: 'Pier B', isClosed: false },
  // APRON mutlaka burada tanımlı olmalı ki Python atama yapabilsin
  { id: 'APRON', title: 'Apron Area', type: 'Flexible', block: 'Apron', isClosed: false }
];

// 2. Başlangıç Uçuşlarının (Events) Tanımlanması
export const initialEvents = Array.from({ length: 40 }, (_, i) => {
  // Python 'hour must be in 0..23' hatasını engellemek için modül (%) kullanıyoruz
  const startHourRaw = 4 + Math.floor(i / 1.5);
  const startHour = startHourRaw % 24;
  
  // Gece yarısını geçen uçuşlar için günü 19'dan 20'ye kaydırıyoruz
  const startDateDay = startHourRaw >= 24 ? '20' : '19';
  
  // Bitiş saati (Başlangıçtan 1 saat sonrası)
  const endHour = (startHour + 1) % 24;
  const endDateDay = (endHour === 0 && startHour === 23) ? '20' : startDateDay;

  const airlineNames = ['Turkish Airlines', 'Lufthansa', 'Emirates', 'Qatar Airways', 'Pegasus'];
  const aircraftTypes = ['Wide', 'Narrow', 'Narrow']; 
  
  return {
    id: `u${i}`,
    resourceId: '', // Başlangıçta boş, Python tarafında doldurulacak
    title: `FLIGHT-${1000 + i}`,
    start: `2026-01-${startDateDay}T${String(startHour).padStart(2, '0')}:00:00`,
    end: `2026-01-${endDateDay}T${String(endHour).padStart(2, '0')}:45:00`,
    backgroundColor: i % 2 === 0 ? '#3b82f6' : '#1d4ed8',
    extendedProps: { 
      airline: airlineNames[i % airlineNames.length],
      aircraftType: aircraftTypes[i % aircraftTypes.length],
      aircraft: i % 3 === 0 ? 'A350' : 'B737-MAX',
      occupancy: Math.floor(Math.random() * 150) + 150 
    }
  };
});