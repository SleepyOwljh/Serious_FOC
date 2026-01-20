import React from 'react';
import Hero from '../Hero';
import Gallery from '../Gallery';
import HouseSection from '../HouseSection';
import Timeline from '../Timeline';
import LeaderboardPreview from '../LeaderboardPreview';
import Footer from '../Footer';

const Home = () => {
  return (
    // Changed bg-black/slate to bg-vintageBrown
    <div className="min-h-screen bg-vintageBrown text-textCream overflow-hidden">
      <Hero />
      
      {/* Added a sepia/brown gradient overlay between sections for smoothness */}
      <div className="relative z-10 space-y-20 pb-20 bg-gradient-to-b from-vintageBrown via-deepBrown to-vintageBrown">
        <Gallery />
        <HouseSection />
        <Timeline />
        <LeaderboardPreview />
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
