import React, { useMemo, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';
import { useScheduler } from '../hooks/useScheduler';
import { GateLabel } from './scheduler/GateLabel';

export default function AirportScheduler({ events, setEvents, setAiMessage, setSelectedFlight }) {
  // useScheduler hook'undan optimizasyon fonksiyonunu alıyoruz
  const { gateStatus, toggleGateStatus, globalOptimize } = useScheduler(setAiMessage, events, setEvents);

  // KRİTİK: Sayfa açıldığında Python Backend'e bağlanıp uçuşları kapılara dağıtıyoruz
  useEffect(() => {
    if (events.length > 0 && events.every(e => e.resourceId === '')) {
      globalOptimize(events, gateStatus);
    }
  }, []); // Sadece ilk yüklemede çalışır

  const PierSection = ({ title, blockName }) => {
    // Sadece bu bölüme (Pier A, Pier B veya Apron) ait kapıları filtrele
    const resources = useMemo(() => 
      gateStatus.filter(r => r.block === blockName), 
      [gateStatus, blockName]
    );

    // Sadece bu kapılara atanmış uçuşları filtrele
    const filteredEvents = useMemo(() => 
      events.filter(e => resources.some(r => r.id === e.resourceId)),
      [events, resources]
    );

    return (
      <div className="flex-1 flex flex-col bg-[#0b0f1a] rounded-xl border border-slate-800 overflow-hidden mb-6 shadow-2xl">
        {/* Bölüm Başlığı */}
        <div className="p-3 bg-[#161b2b] border-b border-slate-800 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-4 bg-blue-500 rounded-full"></div>
            <h2 className="text-blue-400 font-black text-[11px] uppercase tracking-[0.2em]">{title}</h2>
          </div>
          <span className="text-[9px] text-slate-500 font-mono">
            Active Gates: {resources.filter(r => !r.isClosed).length}
          </span>
        </div>

        {/* FullCalendar Zaman Çizelgesi */}
        <FullCalendar
          plugins={[resourceTimelinePlugin, interactionPlugin]}
          initialView="resourceTimelineDay"
          initialDate="2026-01-19"
          headerToolbar={false}
          resources={resources}
          // Kapı isimleri ve Bakım butonları için özel bileşen
          resourceLabelContent={(info) => (
            <GateLabel info={info} onToggle={toggleGateStatus} />
          )}
          events={filteredEvents}
          height="auto"
          resourceAreaWidth="220px"
          slotDuration="00:30:00"
          snapDuration="00:05:00" // Sürüklerken 5 dakikalık hassasiyet
          eventOverlap={false}    // Görsel çakışmayı engelle
          nowIndicator={true}     // Şu anki zaman çizgisini göster
          
          // Etkinlik Etkileşimleri
          eventClick={(info) => {
            setSelectedFlight({
              title: info.event.title,
              extendedProps: info.event.extendedProps
            });
          }}
          
          // Tasarım ve Lisans Ayarları
          schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
          resourceAreaHeaderContent="Resources / Gates"
          stickyHeaderDates={true}
          eventBorderColor="transparent"
          eventClassNames="rounded-lg shadow-sm border-none"
        />
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col space-y-2 overflow-y-auto pr-2 custom-scrollbar pb-10">
      <PierSection title="Pier A Allocation & Optimization" blockName="Pier A" />
      <PierSection title="Pier B Allocation & Optimization" blockName="Pier B" />
      <PierSection title="Apron Waiting & Overflow Area" blockName="Apron" />
    </div>
  );
}