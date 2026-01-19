import React, { useState } from 'react';
import MainLayout from './layout/MainLayout';
import AirportScheduler from './components/AirportScheduler';
import { initialEvents } from './data';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [events, setEvents] = useState(initialEvents);
  const [aiMessage, setAiMessage] = useState("");
  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
    // Uygulama girişi için hafif bir fade-in animasyonu
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="min-h-screen bg-airport-950 text-slate-200"
    >
      <MainLayout 
        aiMessage={aiMessage} 
        selectedFlight={selectedFlight} 
        allEvents={events}
      >
        <AnimatePresence mode="wait">
          <AirportScheduler 
            events={events} 
            setEvents={setEvents} 
            setAiMessage={setAiMessage} 
            setSelectedFlight={setSelectedFlight} 
          />
        </AnimatePresence>
      </MainLayout>
    </motion.div>
  );
}

export default App;