import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal } from 'lucide-react';
import { houses } from '../data';

const LeaderboardPreview = () => {
  // Sort houses by points (mock data simulation since points aren't in data.js explicitly yet, or maybe they are?)
  // Let's assume some mock points or just display them.
  // Actually, looking at data.js from previous turns, houses didn't have points.
  // I'll add some mock points here for display.
  
  const housePoints = houses.map((house, index) => ({
    ...house,
    points: [1250, 980, 1100, 850][index] || 1000 // Mock points
  })).sort((a, b) => b.points - a.points);

  return (
    <section className="py-20 relative overflow-hidden bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600 flex items-center gap-4">
              <Trophy className="w-12 h-12 text-yellow-400" />
              LEADERBOARD
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              The competition is fierce. Houses battle for glory, points, and the ultimate championship title. check the live standings.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full font-bold text-black hover:scale-105 transition-transform">
              View Full Standings
            </button>
          </div>

          <div className="flex-1 w-full max-w-md bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            {housePoints.map((house, index) => (
              <motion.div 
                key={house.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 mb-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${
                    index === 0 ? 'bg-yellow-400 text-black' : 
                    index === 1 ? 'bg-gray-300 text-black' :
                    index === 2 ? 'bg-amber-700 text-white' : 'bg-gray-700 text-gray-300'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`font-bold text-lg ${house.color.replace('text-', 'text-')}`}>{house.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-xl">{house.points}</span>
                  <span className="text-xs text-gray-500 uppercase">pts</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeaderboardPreview;
