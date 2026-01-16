import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Vintage Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-deepVintage/80 backdrop-blur-[3px] mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deepVintage/50 to-deepVintage"></div>
      </div>

      {/* Fog Animation Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
           className="absolute -bottom-[20%] -left-[10%] w-[120%] h-[60%] bg-fogPurple/30 blur-[100px] rounded-full mix-blend-screen"
           animate={{ x: [-50, 50, -50], opacity: [0.3, 0.5, 0.3] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
         <motion.div
           className="absolute top-[20%] -right-[20%] w-[80%] h-[80%] bg-vintagePurple/20 blur-[120px] rounded-full mix-blend-screen"
           animate={{ x: [50, -50, 50], opacity: [0.2, 0.4, 0.2] }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-vintagePurple via-white to-neonPink drop-shadow-[0_0_15px_rgba(188,19,254,0.5)]">
              Malaysian Student Association
            </span>
          </motion.h1>
          
          <h2 className="text-2xl md:text-3xl font-light text-purple-200 mb-8 tracking-wider uppercase">
            Freshmen Orientation Camp 2026
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex flex-col items-center">
              <span className="text-neonPink font-bold text-xl drop-shadow-[0_0_5px_rgba(255,0,255,0.8)]">AUG</span>
              <span className="text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">24-26</span>
            </div>
            <div className="h-12 w-px bg-purple-500/50 hidden md:block"></div>
            <div className="text-lg text-purple-100/80 max-w-md">
              Experience the rhythm. Embrace the haze. Join the legacy.
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-vintagePurple text-white font-bold rounded-full text-lg shadow-[0_0_20px_rgba(125,91,166,0.5)] hover:shadow-[0_0_30px_rgba(125,91,166,0.8)] border border-white/20 transition-all backdrop-blur-sm"
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
