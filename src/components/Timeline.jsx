import React from 'react';
import { motion } from 'framer-motion';
import { timeline } from '../data';

const Timeline = () => {
  return (
    <section id="about" className="py-24 bg-cardBg">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">How It All Went Down</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neonBlue to-neonPink rounded-full"></div>
          
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
                
                <div className="z-10 bg-darkBg border-2 border-neonBlue w-4 h-4 rounded-full shadow-[0_0_10px_rgba(0,243,255,0.5)]"></div>
                
                <div className="w-5/12 bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/30 transition-colors">
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
