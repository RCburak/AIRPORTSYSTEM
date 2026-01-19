import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export const OccupancyChart = ({ allEvents }) => {
  // Takvimdeki (allEvents) verileri analiz ederek Pier bazlı doluluk oranlarını hesapla
  const chartData = useMemo(() => {
    // Sadece ataması yapılmış (resourceId boş olmayan) uçuşları say
    const assignedEvents = allEvents.filter(e => e.resourceId && e.resourceId !== "");

    return [
      { 
        name: 'Pier A', 
        value: assignedEvents.filter(e => e.resourceId.startsWith('Gate_1') || 
                                         e.resourceId.startsWith('Gate_2') || 
                                         e.resourceId.startsWith('Gate_3') || 
                                         e.resourceId.startsWith('Gate_4') || 
                                         e.resourceId.startsWith('Gate_5')).length 
      },
      { 
        name: 'Pier B', 
        value: assignedEvents.filter(e => e.resourceId.startsWith('Gate_6') || 
                                         e.resourceId.startsWith('Gate_7') || 
                                         e.resourceId.startsWith('Gate_8') || 
                                         e.resourceId.startsWith('Gate_9') || 
                                         e.resourceId.startsWith('Gate_10')).length 
      },
      { 
        name: 'Apron', 
        value: assignedEvents.filter(e => e.resourceId === 'APRON').length 
      },
    ];
  }, [allEvents]); // allEvents her değiştiğinde grafik kendini günceller

  return (
    <div className="w-full h-48 min-h-48 mt-2 overflow-hidden flex flex-col">
      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-4 tracking-widest px-2 shrink-0">
        Live Occupancy Analysis
      </h3>
      
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 0, right: 10, left: -30, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 10 }} 
            />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} />
            <Tooltip 
              cursor={{ fill: 'rgba(56, 189, 248, 0.05)' }}
              contentStyle={{ 
                backgroundColor: '#0f172a', 
                border: '1px solid #1e293b', 
                borderRadius: '8px', 
                fontSize: '10px',
                color: '#fff'
              }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={20} animationDuration={1000}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#38bdf8' : index === 1 ? '#6366f1' : '#94a3b8'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};