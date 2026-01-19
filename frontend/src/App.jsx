import React, { useState } from 'react';
import MainLayout from './layout/MainLayout';
import AirportScheduler from './components/AirportScheduler';
import { initialEvents } from './data';
import { motion, AnimatePresence } from 'framer-motion';
import FlightDetailModal from './components/scheduler/FlightDetailModal'; // Yeni oluşturacağız

function App() {
  const [events, setEvents] = useState(initialEvents);
  const [aiMessage, setAiMessage] = useState("");
  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
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

        {/* Modal Bileşeni */}
        <AnimatePresence>
          {selectedFlight && (
            <FlightDetailModal 
              flight={selectedFlight} 
              onClose={() => setSelectedFlight(null)} 
            />
          )}
        </AnimatePresence>
      </MainLayout>
    </motion.div>
  );
}

export default App;