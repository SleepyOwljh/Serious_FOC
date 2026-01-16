import React from 'react';
import { motion } from 'framer-motion';
import { timeline } from '../data';

const Timeline = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-white drop-shadow-lg">How It All Went Down</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-vintagePurple to-neonPink rounded-full opacity-50"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-5/12"></div>
                
                <div className="z-10 bg-deepVintage border-2 border-vintagePurple w-4 h-4 rounded-full shadow-[0_0_10px_rgba(125,91,166,0.5)]"></div>
                
                <div className="w-5/12 bg-white/5 p-6 rounded-xl border border-white/10 hover:border-vintagePurple/50 transition-colors backdrop-blur-sm">
                  <span className="text-neonPink font-bold text-xl block mb-2">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
