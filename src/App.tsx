import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import GreenFarm from './components/GreenFarm';
import Industry from './components/Industry';
import Marketplace from './components/Marketplace';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/green-farm" element={<GreenFarm />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
        <Chatbot />
      </div>
    </BrowserRouter>
  );
}

export default App;