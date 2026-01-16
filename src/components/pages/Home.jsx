import React from 'react';
import Hero from '../Hero';
import HouseSection from '../HouseSection';
import Gallery from '../Gallery';
import Timeline from '../Timeline';
import VideoSection from '../VideoSection';
import Sponsors from '../Sponsors';

const Home = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <HouseSection />
      <Timeline />
      <VideoSection />
      <Sponsors />
    </>
  );
};

export default Home;
