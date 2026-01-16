import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HouseSection from './components/HouseSection';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import VideoSection from './components/VideoSection';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-darkBg text-white min-h-screen font-sans selection:bg-neonPink selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <HouseSection />
        <Timeline />
        <VideoSection />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}

export default App;
