import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-darkBg/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-black mb-2 tracking-tighter"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neonBlue via-neonPurple to-neonPink">
              SOUNDWAVE
            </span>
          </motion.h1>
          
          <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-8 tracking-wider">
            FRESHMAN ORIENTATION CLUB 2026
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex flex-col items-center">
              <span className="text-neonBlue font-bold text-xl">AUG</span>
              <span className="text-4xl font-bold">24-26</span>
            </div>
            <div className="h-12 w-px bg-white/20 hidden md:block"></div>
            <div className="text-lg text-gray-300 max-w-md">
              Experience the rhythm of university life. Join the ultimate orientation adventure.
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-neonPink text-white font-bold rounded-full text-lg shadow-[0_0_20px_rgba(255,0,255,0.5)] hover:shadow-[0_0_30px_rgba(255,0,255,0.7)] transition-shadow"
          >
            REGISTER NOW
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-neonBlue rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
