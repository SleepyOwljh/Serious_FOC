import React from 'react';
import { motion } from 'framer-motion';
import { houses } from '../data';

const HouseCard = ({ house, index }) => {
  const Icon = house.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative group overflow-hidden rounded-2xl ${house.bgColor} border border-white/10 ${house.hoverBorder} transition-all duration-300`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${house.bgGradient} opacity-20 group-hover:opacity-40 transition-opacity`} />
      
      <div className="relative p-6 h-full flex flex-col">
        <div className={`w-12 h-12 mb-4 rounded-full bg-white/5 flex items-center justify-center ${house.color}`}>
          <Icon size={24} />
        </div>
        
        <h3 className={`text-2xl font-bold mb-2 ${house.color}`}>{house.name}</h3>
        <p className="text-gray-400 mb-6 flex-grow">{house.description}</p>
        
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider">Orientation Groups</h4>
          <div className="grid grid-cols-1 gap-2">
            {house.groups.map((group, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm bg-white/5 p-2 rounded hover:bg-white/10 transition-colors">
                <span className="text-white font-medium">{group.name}</span>
                <span className="text-xs text-gray-500">Ldr: {group.leader}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HouseSection = () => {
  return (
    <section id="houses" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Fog Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-vintagePurple to-neonPink drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              MEET OUR FAMILY
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Four distinct vibes, one united club. Find your rhythm and join your tribe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {houses.map((house, index) => (
            <HouseCard key={house.id} house={house} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseSection;
