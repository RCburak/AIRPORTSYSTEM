// Havayolu renk paleti - Modern ve Soft tonlar
const airlineColors = {
  'Turkish Airlines': { bg: '#dc2626', border: '#991b1b', text: '#ffffff' }, // Kırmızı
  'Air France': { bg: '#1e3a8a', border: '#172554', text: '#ffffff' },      // Lacivert
  'Lufthansa': { bg: '#facc15', border: '#a16207', text: '#1e293b' },       // Sarı
  'Emirates': { bg: '#059669', border: '#064e3b', text: '#ffffff' },        // Yeşil
  'Pegasus': { bg: '#ea580c', border: '#9a3412', text: '#ffffff' },         // Turuncu
  'Delta': { bg: '#7c3aed', border: '#4c1d95', text: '#ffffff' },           // Mor
  'Default': { bg: '#38bdf8', border: '#0284c7', text: '#ffffff' }          // Standart Mavi
};

// Kapı Tanımlamaları
export const resources = [
  { id: 'Gate_1', title: 'Gate 1', block: 'Pier A', extendedProps: { type: 'Wide Body', isClosed: false, distance: 120 } },
  { id: 'Gate_2', title: 'Gate 2', block: 'Pier A', extendedProps: { type: 'Narrow Body', isClosed: false, distance: 150 } },
  { id: 'Gate_3', title: 'Gate 3', block: 'Pier A', extendedProps: { type: 'Wide Body', isClosed: false, distance: 210 } },
  { id: 'Gate_4', title: 'Gate 4', block: 'Pier A', extendedProps: { type: 'Narrow Body', isClosed: false, distance: 280 } },
  { id: 'Gate_5', title: 'Gate 5', block: 'Pier A', extendedProps: { type: 'Wide Body', isClosed: false, distance: 350 } },
  { id: 'Gate_6', title: 'Gate 6', block: 'Pier B', extendedProps: { type: 'Wide Body', isClosed: false, distance: 420 } },
  { id: 'Gate_7', title: 'Gate 7', block: 'Pier B', extendedProps: { type: 'Narrow Body', isClosed: false, distance: 480 } },
  { id: 'Gate_8', title: 'Gate 8', block: 'Pier B', extendedProps: { type: 'Wide Body', isClosed: false, distance: 550 } },
  { id: 'Gate_9', title: 'Gate 9', block: 'Pier B', extendedProps: { type: 'Narrow Body', isClosed: false, distance: 620 } },
  { id: 'Gate_10', title: 'Gate 10', block: 'Pier B', extendedProps: { type: 'Wide Body', isClosed: false, distance: 700 } },
  { id: 'APRON', title: 'Apron Area', block: 'Apron', extendedProps: { type: 'Flexible / Remote', isClosed: false, distance: 1500 } }
];

// Başlangıç uçuş verileri - Renkler otomatik atanmış hali
export const initialEvents = [
  { id: 'AF001', resourceId: '', title: 'AF001 (Arr)', start: '2026-01-19T06:00:00Z', end: '2026-01-19T06:45:00Z', 
    backgroundColor: airlineColors['Air France'].bg, borderColor: airlineColors['Air France'].border, textColor: airlineColors['Air France'].text,
    extendedProps: { airline: 'Air France', aircraftType: 'Wide', occupancy: 153 } },
    
  { id: 'AF002', resourceId: '', title: 'AF002 (Arr)', start: '2026-01-19T07:30:00Z', end: '2026-01-19T08:15:00Z', 
    backgroundColor: airlineColors['Air France'].bg, borderColor: airlineColors['Air France'].border, textColor: airlineColors['Air France'].text,
    extendedProps: { airline: 'Air France', aircraftType: 'Narrow', occupancy: 181 } },

  { id: 'DF001', resourceId: '', title: 'DF001 (Dep)', start: '2026-01-19T08:30:00Z', end: '2026-01-19T09:15:00Z', 
    backgroundColor: airlineColors['Delta'].bg, borderColor: airlineColors['Delta'].border, textColor: airlineColors['Delta'].text,
    extendedProps: { airline: 'Delta', aircraftType: 'Wide', occupancy: 244 } },

  { id: 'TK101', resourceId: '', title: 'TK101 (Arr)', start: '2026-01-19T06:15:00Z', end: '2026-01-19T07:00:00Z', 
    backgroundColor: airlineColors['Turkish Airlines'].bg, borderColor: airlineColors['Turkish Airlines'].border, textColor: airlineColors['Turkish Airlines'].text,
    extendedProps: { airline: 'Turkish Airlines', aircraftType: 'Wide', occupancy: 280 } },

  { id: 'TK102', resourceId: '', title: 'TK102 (Dep)', start: '2026-01-19T08:45:00Z', end: '2026-01-19T09:30:00Z', 
    backgroundColor: airlineColors['Turkish Airlines'].bg, borderColor: airlineColors['Turkish Airlines'].border, textColor: airlineColors['Turkish Airlines'].text,
    extendedProps: { airline: 'Turkish Airlines', aircraftType: 'Narrow', occupancy: 160 } },

  { id: 'LH405', resourceId: '', title: 'LH405 (Arr)', start: '2026-01-19T07:00:00Z', end: '2026-01-19T07:45:00Z', 
    backgroundColor: airlineColors['Lufthansa'].bg, borderColor: airlineColors['Lufthansa'].border, textColor: airlineColors['Lufthansa'].text,
    extendedProps: { airline: 'Lufthansa', aircraftType: 'Narrow', occupancy: 145 } },

  { id: 'PC201', resourceId: '', title: 'PC201 (Arr)', start: '2026-01-19T10:00:00Z', end: '2026-01-19T10:45:00Z', 
    backgroundColor: airlineColors['Pegasus'].bg, borderColor: airlineColors['Pegasus'].border, textColor: airlineColors['Pegasus'].text,
    extendedProps: { airline: 'Pegasus', aircraftType: 'Narrow', occupancy: 189 } },

  { id: 'PC202', resourceId: '', title: 'PC202 (Dep)', start: '2026-01-19T11:30:00Z', end: '2026-01-19T12:15:00Z', 
    backgroundColor: airlineColors['Pegasus'].bg, borderColor: airlineColors['Pegasus'].border, textColor: airlineColors['Pegasus'].text,
    extendedProps: { airline: 'Pegasus', aircraftType: 'Narrow', occupancy: 175 } },

  { id: 'EK007', resourceId: '', title: 'EK007 (Arr)', start: '2026-01-19T12:00:00Z', end: '2026-01-19T13:30:00Z', 
    backgroundColor: airlineColors['Emirates'].bg, borderColor: airlineColors['Emirates'].border, textColor: airlineColors['Emirates'].text,
    extendedProps: { airline: 'Emirates', aircraftType: 'Wide', occupancy: 350 } },

  { id: 'TK105', resourceId: '', title: 'TK105 (Arr)', start: '2026-01-19T13:00:00Z', end: '2026-01-19T13:45:00Z', 
    backgroundColor: airlineColors['Turkish Airlines'].bg, borderColor: airlineColors['Turkish Airlines'].border, textColor: airlineColors['Turkish Airlines'].text,
    extendedProps: { airline: 'Turkish Airlines', aircraftType: 'Wide', occupancy: 310 } }
];