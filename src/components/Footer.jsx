import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">CLUB FOC 2026</h2>
          <p className="text-gray-500">© 2026 University Orientation Club. All rights reserved.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-neonPink transition-colors"><Instagram /></a>
          <a href="#" className="text-gray-400 hover:text-neonBlue transition-colors"><Facebook /></a>
          <a href="#" className="text-gray-400 hover:text-neonPurple transition-colors"><Twitter /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
