import React from 'react';
import { motion } from 'framer-motion';

const Committee = () => {
    return (
        <section className="pt-24 pb-20 min-h-screen bg-darkBg text-white px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neonBlue to-neonGreen">
                        THE SQUAD
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Meet the team behind the madness.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Placeholder for Committee Members */}
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <motion.div
                            key={item}
                            className="flex flex-col items-center bg-cardBg p-6 rounded-2xl border border-white/10 hover:border-neonPurple transition-all"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: item * 0.05 }}
                        >
                            <div className="w-32 h-32 rounded-full bg-white/5 mb-4 animate-pulse"></div>
                            <div className="h-6 w-1/2 bg-white/10 rounded mb-2"></div>
                            <div className="h-4 w-1/3 bg-white/5 rounded"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Committee;
