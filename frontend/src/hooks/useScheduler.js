import { useState, useCallback, useEffect } from 'react';
import { resources as initialResources } from '../data';

export const useScheduler = (setAiMessage, events, setEvents) => {
  const [gateStatus, setGateStatus] = useState(initialResources);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const globalOptimize = useCallback(async (currentEvents, currentGates) => {
    setIsOptimizing(true);
    setAiMessage("AI: Optimizasyon motoru çalışıyor...");

    try {
      const response = await fetch('http://localhost:8000/allocate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          flights: currentEvents, 
          gates: currentGates 
        })
      });

      if (!response.ok) throw new Error("Backend response error");

      const result = await response.json();
      
      if (result.status === "success") {
        setEvents(result.data);
        setAiMessage("AI: Yoğunluk dengelemesi başarıyla tamamlandı. ✈️");
      }
    } catch (e) {
      setAiMessage("KRİTİK HATA: Python API çevrimdışı. Manuel mod aktif.");
      console.error("Optimization Error:", e);
    } finally {
      setIsOptimizing(false);
    }
  }, [setAiMessage, setEvents]);

  // OTOMATİK OPTİMİZASYON: 
  // Herhangi bir kapı kapandığında veya açıldığında Python backend'i otomatik tetikle
  useEffect(() => {
    const hasUnassignedFlights = events.some(e => e.resourceId === '');
    const activeGatesChanged = gateStatus.some(g => g.isClosed);

    if (hasUnassignedFlights || activeGatesChanged) {
      const timeoutId = setTimeout(() => {
        globalOptimize(events, gateStatus);
      }, 500); // Debounce: Ardışık tıklamalarda backend'i yormamak için
      return () => clearTimeout(timeoutId);
    }
  }, [gateStatus, globalOptimize]);

  const toggleGateStatus = (gateId) => {
    setGateStatus(prev => prev.map(g => 
      g.id === gateId 
        ? { ...g, isClosed: !g.isClosed, extendedProps: { ...g.extendedProps, isClosed: !g.isClosed } } 
        : g
    ));
  };

  return { gateStatus, toggleGateStatus, globalOptimize, isOptimizing };
};