import React from 'react';
import { OccupancyChart } from '../components/dashboard/OccupancyChart';
import { LayoutDashboard, Plane, Activity, Calendar } from 'lucide-react';

export default function MainLayout({ children, aiMessage, selectedFlight, allEvents }) {
  return (
    <div className="flex h-screen w-full bg-airport-950 text-slate-200 overflow-hidden font-sans selection:bg-airport-blue/30">
      {/* Sol Sidebar */}
      <nav className="w-16 border-r border-slate-800 flex flex-col items-center py-6 space-y-8 bg-airport-900/50 backdrop-blur-xl shrink-0">
        <div className="w-10 h-10 bg-airport-accent rounded-xl flex items-center justify-center shadow-lg shadow-airport-accent/20">
          <Plane size={20} className="text-white" />
        </div>
        <div className="flex flex-col space-y-6 text-slate-500">
          <LayoutDashboard size={20} className="hover:text-airport-blue cursor-pointer transition-colors" />
          <Calendar size={20} className="text-airport-blue" />
          <Activity size={20} className="hover:text-airport-blue cursor-pointer transition-colors" />
        </div>
      </nav>

      {/* Ana İçerik Alanı */}
      <div className="flex-1 flex flex-col min-w-0 p-6 relative h-full">
        <header className="h-14 flex justify-between items-center mb-6 px-2 shrink-0">
          <div className="flex flex-col">
            <h1 className="text-transparent bg-clip-text bg-linear-to-r from-white to-slate-400 font-black tracking-tight text-xl uppercase">
              Smart Gate <span className="text-airport-blue">Allocation</span>
            </h1>
            <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">System Active | v2.0.4</span>
          </div>
          
          <div className="flex items-center space-x-4">
             <div className="flex flex-col items-end mr-4 border-r border-slate-800 pr-4">
                <span className="text-[10px] text-slate-500 uppercase">Current Date</span>
                <span className="text-xs font-mono font-bold text-airport-blue">19.01.2026</span>
             </div>
             <div className="w-8 h-8 rounded-full bg-linear-to-tr from-airport-800 to-slate-700 border border-slate-700" />
          </div>
        </header>

        {/* Tabloların kesilmesini önleyen bağımsız kaydırma alanı */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden relative rounded-2xl bg-airport-900/30 border border-slate-800/50 p-4 custom-scrollbar">
          {children}
        </main>
      </div>

      {/* Sağ Panel - AI & Detaylar */}
      <aside className="w-96 border-l border-slate-800 bg-airport-900/40 backdrop-blur-2xl p-6 flex flex-col space-y-6 shrink-0 h-full">
        {/* AI Insight Card */}
        <div className="relative overflow-hidden bg-linear-to-br from-airport-800/80 to-airport-900/80 p-5 rounded-2xl border border-airport-accent/20 shadow-glass shrink-0">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-airport-accent/10 rounded-full blur-3xl"></div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-airport-blue rounded-full animate-pulse"></div>
            <h3 className="text-xs text-airport-blue font-bold uppercase tracking-widest">AI Optimization</h3>
          </div>
          <p className="text-[13px] leading-relaxed text-slate-300 relative z-10 antialiased italic">
            {aiMessage ? aiMessage : "Havalimanı doluluk oranları ve uçuş rotaları analiz ediliyor. Gecikmeler minimize edildi."}
          </p>
        </div>

        {/* Grafik Alanı */}
        <div className="bg-airport-800/30 rounded-2xl p-2 border border-slate-800/50 shrink-0">
          <OccupancyChart allEvents={allEvents} />
        </div>

        {/* Flight Details Area */}
        <div className="flex-1 bg-airport-950/50 border border-dashed border-slate-700/50 rounded-2xl flex flex-col overflow-hidden shadow-inner min-h-0">
           <div className="p-3 border-b border-slate-800 text-[10px] uppercase font-bold text-slate-500 bg-slate-900/20">
              Selected Flight Details
           </div>
           <div className="flex-1 p-6 flex items-center justify-center text-center overflow-y-auto">
             {selectedFlight ? (
               <div className="space-y-4 animate-in fade-in zoom-in duration-300">
                 <div className="text-3xl font-black text-white tracking-tighter uppercase leading-none">{selectedFlight.title}</div>
                 <div className="text-xs px-3 py-1 bg-airport-blue/10 text-airport-blue rounded-full border border-airport-blue/20 inline-block">
                   Active Operation
                 </div>
               </div>
             ) : (
               <div className="text-slate-600 text-[11px] flex flex-col items-center space-y-2 uppercase tracking-widest">
                 <Plane size={32} className="opacity-20 mb-2" />
                 Detaylar için uçuş seçin
               </div>
             )}
           </div>
        </div>
      </aside>
    </div>
  );
}