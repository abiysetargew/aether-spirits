'use client';

import { motion } from 'framer-motion';

export default function Scene3D() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0a0a0a, #111, #0a0a0a)', position: 'relative', overflow: 'hidden' }}>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'relative', zIndex: 10 }}
      >
        <img 
          src="https://ethiobeverages.com/wp-content/uploads/2025/09/ber-brown.png"
          alt="Heisberg Beer"
          style={{ height: '400px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 0 40px rgba(201,169,98,0.3))' }}
        />
      </motion.div>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(201,169,98,0.15), transparent 60%)' }} />
      <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '256px', height: '256px', background: 'rgba(201,169,98,0.1)', borderRadius: '50%', filter: 'blur(60px)' }} />
    </div>
  );
}
