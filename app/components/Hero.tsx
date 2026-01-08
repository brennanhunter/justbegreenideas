'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/rain-forest-ground-view-hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Just Be Green Ideas
        </motion.h1>
        <motion.h2 
          className="text-3xl md:text-4xl font-semibold text-white/95 mb-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Ideas for a Sustainable Future
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl text-white/90 mb-2 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Innovative solutions for environmental challenges, one idea at a time.
        </motion.p>
        <motion.p 
          className="text-lg md:text-xl text-white/80 mb-8 max-w-xl italic"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          More coming soon...
        </motion.p>
        <motion.a
          href="https://justbegreenmedia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Visit Just Be Green Media
        </motion.a>
      </div>
    </section>
  );
}
