import React from 'react';
import { sponsors } from '../data';

const Sponsors = () => {
  return (
    <section className="py-20 bg-darkBg border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-xl text-gray-500 uppercase tracking-widest mb-10">Powered By</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {sponsors.map((sponsor, idx) => (
            <div key={idx} className="opacity-50 hover:opacity-100 transition-opacity duration-300">
               <div className="h-12 w-32 bg-white/10 rounded flex items-center justify-center text-gray-400 font-bold">
                 {sponsor.name}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
