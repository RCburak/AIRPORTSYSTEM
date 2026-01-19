import { useState, useCallback } from 'react';
import { resources as initialResources } from '../data';

export const useScheduler = (setAiMessage, events, setEvents) => {
  const [gateStatus, setGateStatus] = useState(initialResources);

  const globalOptimize = useCallback(async (currentEvents, currentGates) => {
    try {
      const response = await fetch('http://localhost:8000/allocate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ flights: currentEvents, gates: currentGates })
      });
      const result = await response.json();
      if (result.status === "success") {
        setEvents(result.data);
        setAiMessage("AI: Python üzerinden yoğunluk dengelemesi tamamlandı.");
      }
    } catch (e) { setAiMessage("HATA: Python sunucusuna bağlanılamadı."); }
  }, [setAiMessage, setEvents]);

  const toggleGateStatus = (gateId) => {
    setGateStatus(prev => prev.map(g => g.id === gateId ? { ...g, isClosed: !g.isClosed } : g));
  };

  return { gateStatus, toggleGateStatus, globalOptimize };
};