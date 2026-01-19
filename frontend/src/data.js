// Kapı Tanımlamaları (Python modelindeki Gate_1...Gate_10 yapısıyla uyumlu)
export const resources = [
  { id: 'Gate_1', title: 'Gate 1', type: 'Wide', block: 'Pier A', isClosed: false },
  { id: 'Gate_2', title: 'Gate 2', type: 'Narrow', block: 'Pier A', isClosed: false },
  { id: 'Gate_3', title: 'Gate 3', type: 'Wide', block: 'Pier A', isClosed: false },
  { id: 'Gate_4', title: 'Gate 4', type: 'Narrow', block: 'Pier A', isClosed: false },
  { id: 'Gate_5', title: 'Gate 5', type: 'Wide', block: 'Pier A', isClosed: false },
  { id: 'Gate_6', title: 'Gate 6', type: 'Wide', block: 'Pier B', isClosed: false },
  { id: 'Gate_7', title: 'Gate 7', type: 'Narrow', block: 'Pier B', isClosed: false },
  { id: 'Gate_8', title: 'Gate 8', type: 'Wide', block: 'Pier B', isClosed: false },
  { id: 'Gate_9', title: 'Gate 9', type: 'Narrow', block: 'Pier B', isClosed: false },
  { id: 'Gate_10', title: 'Gate 10', type: 'Wide', block: 'Pier B', isClosed: false },
  { id: 'APRON', title: 'Apron Area', type: 'Flexible', block: 'Apron', isClosed: false }
];

// Python modelindeki 51 uçuşluk veri setinin genişletilmiş hali
export const initialEvents = [
  // SABAH DALGASI (06:00 - 09:00)
  { id: 'AF001', resourceId: '', title: 'AF001 (Arr)', start: '2026-01-19T06:00:00Z', end: '2026-01-19T06:45:00Z', extendedProps: { airline: 'Air France', aircraftType: 'Wide', occupancy: 153 } },
  { id: 'AF002', resourceId: '', title: 'AF002 (Arr)', start: '2026-01-19T07:30:00Z', end: '2026-01-19T08:15:00Z', extendedProps: { airline: 'Air France', aircraftType: 'Narrow', occupancy: 181 } },
  { id: 'DF001', resourceId: '', title: 'DF001 (Dep)', start: '2026-01-19T08:30:00Z', end: '2026-01-19T09:15:00Z', extendedProps: { airline: 'Delta', aircraftType: 'Wide', occupancy: 244 } },
  { id: 'TK101', resourceId: '', title: 'TK101 (Arr)', start: '2026-01-19T06:15:00Z', end: '2026-01-19T07:00:00Z', extendedProps: { airline: 'Turkish Airlines', aircraftType: 'Wide', occupancy: 280 } },
  { id: 'TK102', resourceId: '', title: 'TK102 (Dep)', start: '2026-01-19T08:45:00Z', end: '2026-01-19T09:30:00Z', extendedProps: { airline: 'Turkish Airlines', aircraftType: 'Narrow', occupancy: 160 } },
  { id: 'LH405', resourceId: '', title: 'LH405 (Arr)', start: '2026-01-19T07:00:00Z', end: '2026-01-19T07:45:00Z', extendedProps: { airline: 'Lufthansa', aircraftType: 'Narrow', occupancy: 145 } },

  // ÖĞLE DALGASI (10:00 - 14:00)
  { id: 'PC201', resourceId: '', title: 'PC201 (Arr)', start: '2026-01-19T10:00:00Z', end: '2026-01-19T10:45:00Z', extendedProps: { airline: 'Pegasus', aircraftType: 'Narrow', occupancy: 189 } },
  { id: 'PC202', resourceId: '', title: 'PC202 (Dep)', start: '2026-01-19T11:30:00Z', end: '2026-01-19T12:15:00Z', extendedProps: { airline: 'Pegasus', aircraftType: 'Narrow', occupancy: 175 } },
  { id: 'EK007', resourceId: '', title: 'EK007 (Arr)', start: '2026-01-19T12:00:00Z', end: '2026-01-19T13:30:00Z', extendedProps: { airline: 'Emirates', aircraftType: 'Wide', occupancy: 350 } },
  { id: 'TK105', resourceId: '', title: 'TK105 (Arr)', start: '2026-01-19T13:00:00Z', end: '2026-01-19T13:45:00Z', extendedProps: { airline: 'Turkish Airlines', aircraftType: 'Wide', occupancy: 310 } },
  { id: 'AF003', resourceId: '', title: 'AF003 (Arr)', start: '2026-01-19T10:30:00Z', end: '2026-01-19T11:15:00Z', extendedProps: { airline: 'Air France', aircraftType: 'Wide', occupancy: 210 } },
  
  // AKŞAM YOĞUNLUĞU (15:00 - 19:00)
  { id: 'TK200', resourceId: '', title: 'TK200 (Arr)', start: '2026-01-19T15:00:00Z', end: '2026-01-19T15:45:00Z', extendedProps: { airline: 'Turkish Airlines', aircraftType: 'Narrow', occupancy: 155 } },
  { id: 'LH500', resourceId: '', title: 'LH500 (Dep)', start: '2026-01-19T16:00:00Z', end: '2026-01-19T17:00:00Z', extendedProps: { airline: 'Lufthansa', aircraftType: 'Wide', occupancy: 260 } },
  { id: 'QR012', resourceId: '', title: 'QR012 (Arr)', start: '2026-01-19T17:30:00Z', end: '2026-01-19T18:45:00Z', extendedProps: { airline: 'Qatar Airways', aircraftType: 'Wide', occupancy: 295 } },
  { id: 'PC305', resourceId: '', title: 'PC305 (Arr)', start: '2026-01-19T18:00:00Z', end: '2026-01-19T18:45:00Z', extendedProps: { airline: 'Pegasus', aircraftType: 'Narrow', occupancy: 180 } },
  { id: 'AF009', resourceId: '', title: 'AF009 (Dep)', start: '2026-01-19T19:00:00Z', end: '2026-01-19T19:45:00Z', extendedProps: { airline: 'Air France', aircraftType: 'Narrow', occupancy: 140 } },

  // GECE OPERASYONLARI (20:00 - 23:30)
  { id: 'TK500', resourceId: '', title: 'TK500 (Arr)', start: '2026-01-19T20:00:00Z', end: '2026-01-19T21:00:00Z', extendedProps: { airline: 'Turkish Airlines', aircraftType: 'Wide', occupancy: 320 } },
  { id: 'EK008', resourceId: '', title: 'EK008 (Dep)', start: '2026-01-19T22:00:00Z', end: '2026-01-19T23:30:00Z', extendedProps: { airline: 'Emirates', aircraftType: 'Wide', occupancy: 345 } },
  { id: 'LH999', resourceId: '', title: 'LH999 (Arr)', start: '2026-01-19T21:30:00Z', end: '2026-01-19T22:15:00Z', extendedProps: { airline: 'Lufthansa', aircraftType: 'Narrow', occupancy: 120 } },
  { id: 'TK888', resourceId: '', title: 'TK888 (Dep)', start: '2026-01-19T23:00:00Z', end: '2026-01-19T23:55:00Z', extendedProps: { airline: 'Turkish Airlines', aircraftType: 'Narrow', occupancy: 165 } },

  // Python dosyasındaki döngüye benzer şekilde otomatik üretim (Opsiyonel)
  ...Array.from({ length: 30 }, (_, i) => {
    const startHour = 6 + Math.floor(i / 1.5);
    const startMin = (i % 2 === 0) ? '05' : '35';
    return {
      id: `EXT-${i}`,
      resourceId: '',
      title: `FLIGHT-${500 + i}`,
      start: `2026-01-19T${String(startHour).padStart(2, '0')}:${startMin}:00Z`,
      end: `2026-01-19T${String(startHour + 1).padStart(2, '0')}:15:00Z`,
      extendedProps: {
        airline: ['Turkish Airlines', 'Lufthansa', 'Pegasus', 'Delta'][i % 4],
        aircraftType: i % 3 === 0 ? 'Wide' : 'Narrow',
        occupancy: Math.floor(Math.random() * 150) + 100
      }
    };
  })
];