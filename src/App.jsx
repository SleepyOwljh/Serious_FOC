import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import Committee from './components/pages/Committee';

function App() {
  return (
    <Router>
      <div className="bg-darkBg text-white min-h-screen font-sans selection:bg-neonPink selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/committee" element={<Committee />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
