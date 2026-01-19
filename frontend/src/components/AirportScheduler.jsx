import React, { useMemo, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';
import { useScheduler } from '../hooks/useScheduler';
import { GateLabel } from './scheduler/GateLabel';
import { Plane } from 'lucide-react';
import './scheduler-custom.css';

export default function AirportScheduler({ events, setEvents, setAiMessage, setSelectedFlight }) {
  const { gateStatus, toggleGateStatus, globalOptimize } = useScheduler(setAiMessage, events, setEvents);

  useEffect(() => {
    if (events.length > 0 && events.every(e => e.resourceId === '')) {
      globalOptimize(events, gateStatus);
    }
  }, []);

  const PierSection = ({ title, blockName }) => {
    const resources = useMemo(() => gateStatus.filter(r => r.block === blockName), [gateStatus, blockName]);
    const filteredEvents = useMemo(() => events.filter(e => resources.some(r => r.id === e.resourceId)), [events, resources]);

    return (
      /* min-h-112.5 kullanımı ile v4 standart uyarısı giderildi */
      <div className="group flex flex-col bg-airport-900/40 rounded-2xl border border-slate-800/60 overflow-hidden mb-8 transition-all hover:border-slate-700/80 shadow-lg min-h-112.5">
        
        {/* Bölüm Başlığı */}
        <div className="p-4 bg-linear-to-r from-slate-900 to-transparent border-b border-slate-800 flex justify-between items-center shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-5 bg-airport-accent rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
            <h2 className="text-slate-100 font-bold text-xs uppercase tracking-[0.15em]">{title}</h2>
          </div>
          <div className="flex items-center space-x-4">
             <span className="text-[10px] px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20 font-mono">
               Active Gates: {resources.filter(r => !r.isClosed).length}
             </span>
          </div>
        </div>

        {/* Takvim Alanı */}
        <div className="flex-1 p-1 scheduler-container relative overflow-hidden">
          <FullCalendar
            plugins={[resourceTimelinePlugin, interactionPlugin]}
            initialView="resourceTimelineDay"
            initialDate="2026-01-19"
            headerToolbar={false}
            resources={resources}
            resourceLabelContent={(info) => <GateLabel info={info} onToggle={toggleGateStatus} />}
            events={filteredEvents}
            height="auto"
            resourceAreaWidth="220px"
            slotDuration="00:30:00"
            snapDuration="00:05:00"
            eventOverlap={false}
            nowIndicator={true}
            eventClick={(info) => {
              setSelectedFlight({
                title: info.event.title,
                extendedProps: info.event.extendedProps
              });
            }}
            schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
            resourceAreaHeaderContent="GATES"
            stickyHeaderDates={true}
            eventBorderColor="transparent"
            eventContent={(eventInfo) => (
              <div className="flex items-center h-full px-2 space-x-2 bg-linear-to-r from-airport-blue/80 to-blue-600/80 backdrop-blur-md rounded-md overflow-hidden border border-white/10">
                <Plane size={10} className="text-white shrink-0" />
                <span className="text-[10px] font-bold truncate text-white uppercase">{eventInfo.event.title}</span>
              </div>
            )}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col space-y-2 pr-2">
      <PierSection title="Main Pier A - Int. Flights" blockName="Pier A" />
      <PierSection title="Pier B - Domestic Support" blockName="Pier B" />
      <PierSection title="Remote Apron Area" blockName="Apron" />
    </div>
  );
}