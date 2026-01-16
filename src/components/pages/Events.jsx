import React from 'react';
import { motion } from 'framer-motion';

const Events = () => {
  return (
    <section className="pt-24 pb-20 min-h-screen bg-darkBg text-white px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neonPink to-neonPurple">
            UPCOMING EVENTS
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get ready for the wildest experiences of your freshman year.
          </p>
        </motion.div>

        {/* Skeleton for Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              className="bg-cardBg rounded-2xl overflow-hidden border border-white/10 hover:border-neonBlue transition-all duration-300 group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: item * 0.1 }}
            >
              <div className="h-64 bg-white/5 animate-pulse group-hover:bg-white/10 transition-colors"></div>
              <div className="p-6">
                <div className="h-6 w-1/3 bg-neonPink/20 rounded mb-4"></div>
                <div className="h-8 w-3/4 bg-white/10 rounded mb-4"></div>
                <div className="h-4 w-full bg-white/5 rounded mb-2"></div>
                <div className="h-4 w-2/3 bg-white/5 rounded"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
