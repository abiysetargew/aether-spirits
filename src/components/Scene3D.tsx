'use client';

import { motion } from 'framer-motion';

export default function Scene3D() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a] relative overflow-hidden">
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <img 
          src="https://ethiobeverages.com/wp-content/uploads/2025/09/ber-brown.png"
          alt="Heisberg Beer"
          className="h-[400px] w-auto object-contain drop-shadow-2xl"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,98,0.15),transparent_60%)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[rgba(201,169,98,0.1)] rounded-full blur-3xl" />
    </div>
  );
}
