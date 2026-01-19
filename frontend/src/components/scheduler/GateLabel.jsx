import React from 'react';
import { Settings, ShieldAlert, ShieldCheck, PlaneTakeoff } from 'lucide-react';

export const GateLabel = ({ info, onToggle }) => {
  const { id, title, extendedProps } = info.resource;
  const isClosed = extendedProps?.isClosed; // useScheduler'dan gelen durum

  return (
    <div className={`
      flex items-center justify-between px-3 py-2 w-full h-full transition-all duration-300
      ${isClosed 
        ? 'bg-red-500/10 border-l-4 border-red-500 shadow-[inset_10px_0_20px_rgba(239,68,68,0.05)]' 
        : 'bg-airport-900/40 border-l-4 border-airport-blue shadow-[inset_10px_0_20px_rgba(56,189,248,0.02)]'}
    `}>
      <div className="flex items-center space-x-3">
        {/* İkon: Kapı tipine göre uçak ikonu */}
        <div className={`
          p-1.5 rounded-lg border transition-colors
          ${isClosed ? 'bg-red-500/20 border-red-500/30 text-red-400' : 'bg-airport-800 border-slate-700 text-airport-blue'}
        `}>
          <PlaneTakeoff size={14} />
        </div>

        <div className="flex flex-col leading-tight">
          <span className={`text-xs font-black tracking-wider uppercase ${isClosed ? 'text-red-400' : 'text-white'}`}>
            {title}
          </span>
          <div className="flex items-center space-x-1">
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter">
              {extendedProps?.type || 'Standard Gate'}
            </span>
            {isClosed && (
              <span className="text-[8px] bg-red-500 text-white px-1 rounded animate-pulse">
                MAINTENANCE
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Kontrol Butonu */}
      <button 
        onClick={() => onToggle(id)} 
        className={`
          group relative p-2 rounded-xl border transition-all duration-500 active:scale-90
          ${isClosed 
            ? 'bg-red-500 text-white border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.4)]' 
            : 'bg-airport-800 text-slate-400 border-slate-700 hover:border-airport-blue hover:text-airport-blue'}
        `}
        title={isClosed ? "Open Gate" : "Close for Maintenance"}
      >
        {isClosed ? (
          <ShieldAlert size={14} className="animate-bounce" />
        ) : (
          <Settings size={14} className="group-hover:rotate-90 transition-transform duration-500" />
        )}
      </button>
    </div>
  );
};