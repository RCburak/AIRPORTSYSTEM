// Kapı Tanımlamaları (Mesafe matrisi eklenmiş hali)
export const resources = [
  { id: 'Gate_1', title: 'Gate 1', type: 'Wide', block: 'Pier A', isClosed: false, distance: 120 },
  { id: 'Gate_2', title: 'Gate 2', type: 'Narrow', block: 'Pier A', isClosed: false, distance: 150 },
  { id: 'Gate_3', title: 'Gate 3', type: 'Wide', block: 'Pier A', isClosed: false, distance: 210 },
  { id: 'Gate_4', title: 'Gate 4', type: 'Narrow', block: 'Pier A', isClosed: false, distance: 280 },
  { id: 'Gate_5', title: 'Gate 5', type: 'Wide', block: 'Pier A', isClosed: false, distance: 350 },
  { id: 'Gate_6', title: 'Gate 6', type: 'Wide', block: 'Pier B', isClosed: false, distance: 420 },
  { id: 'Gate_7', title: 'Gate 7', type: 'Narrow', block: 'Pier B', isClosed: false, distance: 480 },
  { id: 'Gate_8', title: 'Gate 8', type: 'Wide', block: 'Pier B', isClosed: false, distance: 550 },
  { id: 'Gate_9', title: 'Gate 9', type: 'Narrow', block: 'Pier B', isClosed: false, distance: 620 },
  { id: 'Gate_10', title: 'Gate 10', type: 'Wide', block: 'Pier B', isClosed: false, distance: 700 },
  { id: 'APRON', title: 'Apron Area', type: 'Flexible', block: 'Apron', isClosed: false, distance: 1500 }
];

// Başlangıç uçuş verileri
export const initialEvents = [
  { id: 'AF001', resourceId: '', title: 'AF001 (Arr)', start: '2026-01-19T06:00:00Z', end: '2026-01-19T06:45:00Z', extendedProps: { airline: 'Air France', aircraftType: 'Wide', occupancy: 153 } },
  { id: 'AF002', resourceId: '', title: 'AF002 (Arr)', start: '2026-01-19T07:30:00Z', end: '2026-01-19T08:15:00Z', extendedProps: { airline: 'Air France', aircraftType: 'Narrow', occupancy: 181 } },
  { id: 'DF001', resourceId: '', title: 'DF001 (Dep)', start: '2026-01-19T08:30:00Z', end: '2026-01-19T09:15:00Z', extendedProps: { airline: 'Delta', aircraftType: 'Wide', occupancy: 244 } },
  { id: 'TK101', resourceId: '', title: 'TK101 (Arr)', start: '2026-01-19T06:15:00Z', end: '2026-01-19T07:00:00Z', extendedProps: { airline: 'Turkish Airlines', aircraftType: 'Wide', occupancy: 280 } },
  { id: 'TK102', resourceId: '', title: 'TK102 (Dep)', start: '2026-01-19T08:45:00Z', end: '2026-01-19T09:30:00Z', extendedProps: { airline: 'Turkish Airlines', aircraftType: 'Narrow', occupancy: 160 } },
  { id: 'LH405', resourceId: '', title: 'LH405 (Arr)', start: '2026-01-19T07:00:00Z', end: '2026-01-19T07:45:00Z', extendedProps: { airline: 'Lufthansa', aircraftType: 'Narrow', occupancy: 145 } },
  { id: 'PC201', resourceId: '', title: 'PC201 (Arr)', start: '2026-01-19T10:00:00Z', end: '2026-01-19T10:45:00Z', extendedProps: { airline: 'Pegasus', aircraftType: 'Narrow', occupancy: 189 } },
  { id: 'PC202', resourceId: '', title: 'PC202 (Dep)', start: '2026-01-19T11:30:00Z', end: '2026-01-19T12:15:00Z', extendedProps: { airline: 'Pegasus', aircraftType: 'Narrow', occupancy: 175 } },
  { id: 'EK007', resourceId: '', title: 'EK007 (Arr)', start: '2026-01-19T12:00:00Z', end: '2026-01-19T13:30:00Z', extendedProps: { airline: 'Emirates', aircraftType: 'Wide', occupancy: 350 } },
  { id: 'TK105', resourceId: '', title: 'TK105 (Arr)', start: '2026-01-19T13:00:00Z', end: '2026-01-19T13:45:00Z', extendedProps: { airline: 'Turkish Airlines', aircraftType: 'Wide', occupancy: 310 } }
];