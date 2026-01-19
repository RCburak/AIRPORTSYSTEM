import React, { useMemo, useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const OccupancyChart = ({ allEvents }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const data = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      hour: `${String(i).padStart(2, '0')}:00`,
      total: allEvents.filter(e => new Date(e.start).getHours() === i).reduce((sum, e) => sum + e.extendedProps.occupancy, 0)
    }));
  }, [allEvents]);

  return (
    <div className="bg-[#0f172a] border border-slate-800 p-4 rounded-xl shadow-lg">
      <p className="text-[9px] text-blue-400 uppercase font-bold mb-4 tracking-widest text-center">Yolcu Yoğunluğu (24s)</p>
      <div className="w-full h-37.5 aspect-2/1 relative overflow-hidden">
        {mounted && (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs><linearGradient id="colorPax" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/><stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/></linearGradient></defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
              <XAxis dataKey="hour" hide tick={{fontSize: 8}} />
              <YAxis hide />
              <Tooltip contentStyle={{backgroundColor: '#1e293b', border: 'none', fontSize: '10px'}} />
              <Area type="monotone" dataKey="total" stroke="#3b82f6" fill="url(#colorPax)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};