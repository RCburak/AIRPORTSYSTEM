import React from 'react';
import { OccupancyChart } from '../components/dashboard/OccupancyChart';

export default function MainLayout({ children, aiMessage, selectedFlight, allEvents }) {
  return (
    <div className="flex h-screen w-full bg-[#0b0f1a] text-white overflow-hidden font-sans">
      <div className="flex-1 flex flex-col min-w-0 p-6">
        <header className="h-12 flex justify-between items-center mb-4 border-b border-gray-800">
          <h1 className="text-blue-400 font-black tracking-widest text-lg uppercase">Smart Gate Allocation</h1>
          <div className="text-[10px] font-mono text-gray-500 uppercase">19.01.2026 | Control Active</div>
        </header>
        <main className="flex-1 overflow-hidden relative">{children}</main>
      </div>
      <aside className="w-85 border-l border-gray-800 bg-[#0b0f1a] p-5 flex flex-col space-y-6">
        <div className="bg-[#161b2b] p-4 rounded-xl border border-blue-900/30">
          <h3 className="text-[10px] text-blue-400 font-bold uppercase mb-2">AI Status</h3>
          <p className="text-xs italic text-gray-300 leading-relaxed">"{aiMessage || "Sistem verileri Python üzerinden optimize ediliyor..."}"</p>
        </div>
        <OccupancyChart allEvents={allEvents} />
        <div className="flex-1 border border-dashed border-slate-800 rounded-xl flex items-center justify-center p-6 text-center text-gray-600 text-[11px] italic">
          {selectedFlight ? selectedFlight.title : "Detaylar için takvimden uçuş seçin."}
        </div>
      </aside>
    </div>
  );
}