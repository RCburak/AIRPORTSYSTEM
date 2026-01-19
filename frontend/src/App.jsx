import React, { useState } from 'react';
import MainLayout from './layout/MainLayout';
import AirportScheduler from './components/AirportScheduler';
import { initialEvents } from './data';

function App() {
  const [events, setEvents] = useState(initialEvents);
  const [aiMessage, setAiMessage] = useState("");
  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
    <MainLayout 
      aiMessage={aiMessage} 
      selectedFlight={selectedFlight} 
      allEvents={events}
    >
      <AirportScheduler 
        events={events} 
        setEvents={setEvents} 
        setAiMessage={setAiMessage} 
        setSelectedFlight={setSelectedFlight} 
      />
    </MainLayout>
  );
}
export default App;