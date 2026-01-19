import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export const OccupancyChart = ({ allEvents }) => {
  // Veriyi güvenli bir şekilde filtreleyelim (resourceId kontrolü ile)
  const data = [
    { name: 'Pier A', value: allEvents?.filter(e => e.resourceId?.includes('A')).length || 0 },
    { name: 'Pier B', value: allEvents?.filter(e => e.resourceId?.includes('B')).length || 0 },
    { name: 'Apron', value: allEvents?.filter(e => e.resourceId?.includes('Apron')).length || 0 },
  ];

  return (
    /* VS Code uyarısını gidermek için min-h-112.5 önerisi yerine, 
       grafik hatasını çözen sabit ve kararlı bir yükseklik kullanıyoruz */
    <div className="w-full h-48 min-h-48 mt-2 overflow-hidden flex flex-col">
      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-4 tracking-widest px-2 shrink-0">
        Live Occupancy
      </h3>
      
      {/* ResponsiveContainer'ın boyut hatası vermemesi için flex-1 ile alanı kaplıyoruz */}
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 10, left: -30, bottom: 0 }}>
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
                fontSize: '10px' 
              }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={20}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#38bdf8' : '#6366f1'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};