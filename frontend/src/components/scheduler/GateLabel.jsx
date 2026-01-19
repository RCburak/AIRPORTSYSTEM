import React from 'react';

export const GateLabel = ({ info, onToggle }) => {
  const { id, title, extendedProps } = info.resource;
  return (
    <div className="flex items-center justify-between p-2 w-full h-full bg-slate-900/30 border-l-4 border-blue-600">
      <div className="flex flex-col">
        <span className="text-[11px] font-black text-white uppercase">{title}</span>
        <span className="text-[8px] text-slate-500 font-bold uppercase">{extendedProps?.type}</span>
      </div>
      <button onClick={() => onToggle(id)} className="p-1 bg-slate-800 rounded text-slate-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
      </button>
    </div>
  );
};