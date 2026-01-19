import React from 'react';
import { motion } from 'framer-motion';
import { X, Users, Plane, Clock, ShieldCheck, MapPin } from 'lucide-react';

export default function FlightDetailModal({ flight, onClose }) {
  const { title, extendedProps } = flight;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-md overflow-hidden bg-airport-900 border border-slate-700 rounded-3xl shadow-2xl"
      >
        {/* Üst Dekoratif Header */}
        <div className="h-2 bg-linear-to-r from-airport-blue via-airport-accent to-airport-blue" />
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-4 bg-airport-blue/10 rounded-2xl border border-airport-blue/20">
              <Plane size={32} className="text-airport-blue" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">{title}</h2>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-widest mt-1">{extendedProps.airline}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800">
              <div className="flex items-center space-x-2 text-slate-500 mb-1">
                <Users size={14} />
                <span className="text-[10px] font-bold uppercase">Occupancy</span>
              </div>
              <div className="text-xl font-mono font-bold text-white">{extendedProps.occupancy} <span className="text-xs text-slate-600 italic">PAX</span></div>
            </div>

            <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800">
              <div className="flex items-center space-x-2 text-slate-500 mb-1">
                <ShieldCheck size={14} />
                <span className="text-[10px] font-bold uppercase">Aircraft</span>
              </div>
              <div className="text-lg font-bold text-airport-blue">{extendedProps.aircraftType} Body</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs py-2 border-b border-slate-800">
              <span className="text-slate-500 flex items-center gap-2"><Clock size={14}/> Operation Time</span>
              <span className="text-slate-300 font-mono">45 Minutes</span>
            </div>
            <div className="flex items-center justify-between text-xs py-2 border-b border-slate-800">
              <span className="text-slate-500 flex items-center gap-2"><MapPin size={14}/> Status</span>
              <span className="text-green-400 font-bold px-2 py-0.5 bg-green-400/10 rounded border border-green-400/20">SCHEDULED</span>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-full mt-8 py-4 bg-linear-to-r from-airport-blue to-blue-600 text-white font-bold rounded-2xl hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all uppercase tracking-widest text-xs"
          >
            Close Details
          </button>
        </div>
      </motion.div>
    </div>
  );
}