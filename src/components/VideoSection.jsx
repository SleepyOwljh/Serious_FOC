import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-24 bg-slate-900/90 flex justify-center px-4">
      <div className="w-full max-w-5xl aspect-video bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative group shadow-[0_0_50px_rgba(125,91,166,0.2)]">
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-neonPink/80 rounded-full flex items-center justify-center pl-2 group-hover:scale-110 transition-transform cursor-pointer shadow-[0_0_30px_rgba(255,0,255,0.4)]">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent"></div>
            </div>
        </div>
        <div className="absolute bottom-6 left-6">
            <h3 className="text-xl font-bold">Watch the Official Trailer</h3>
            <p className="text-gray-400">Relive the hype from last year</p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
