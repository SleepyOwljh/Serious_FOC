import React from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from '../data';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-slate-900/90 relative overflow-hidden">
        {/* Fog Overlay */}
        <div className="absolute inset-0 bg-fogPurple/20 backdrop-blur-sm pointer-events-none"></div>

      <div className="mb-12 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-vintagePurple to-white drop-shadow-[0_0_10px_rgba(188,19,254,0.3)]">
          MEMORIES
        </h2>
      </div>
      
      {/* Marquee Effect */}
      <div className="flex gap-4 w-full overflow-hidden">
        <motion.div 
          className="flex gap-4 min-w-full"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...galleryImages, ...galleryImages, ...galleryImages].map((img, idx) => (
            <div key={`${img.id}-${idx}`} className="relative min-w-[300px] h-[200px] rounded-xl overflow-hidden group">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium">{img.alt}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
