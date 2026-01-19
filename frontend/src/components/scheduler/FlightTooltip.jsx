import React from 'react';

export const FlightTooltip = ({ event, position }) => {
  if (!event) return null;
  const { title, extendedProps } = event;

  return (
    <div 
      className="fixed z-50 bg-[#1e293b]/95 border border-blue-500/40 p-3 rounded-lg shadow-2xl min-w-45 backdrop-blur-md pointer-events-none animate-in fade-in zoom-in-95 duration-100"
      style={{ top: position.y + 15, left: position.x + 15 }}
    >
      <div className="flex justify-between items-start mb-2 border-b border-slate-700 pb-1.5">
        <span className="text-blue-400 font-black text-[11px] uppercase tracking-wider">{title}</span>
        <span className="text-[8px] bg-blue-600 px-1.5 py-0.5 rounded-sm font-bold">{extendedProps.aircraftType}</span>
      </div>
      <div className="space-y-1.5 text-[10px]">
        <div className="flex justify-between text-slate-400">
          <span>Aircraft</span>
          <span className="text-white font-mono">{extendedProps.aircraft}</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>Occupancy</span>
          <span className="text-blue-300 font-bold">{extendedProps.occupancy} Pax</span>
        </div>
      </div>
    </div>
  );
};