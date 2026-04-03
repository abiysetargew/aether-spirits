'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function AgeVerification() {
  const [isVerified, setIsVerified] = useState(false);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const verified = sessionStorage.getItem('age-verified');
    if (verified === 'true') {
      setIsVerified(true);
      setShowModal(false);
    }
  }, []);

  const handleVerify = (isOfAge: boolean) => {
    if (isOfAge) {
      sessionStorage.setItem('age-verified', 'true');
      setIsVerified(true);
      setShowModal(false);
    } else {
      window.location.href = 'https://www.google.com';
    }
  };

  return (
    <AnimatePresence>
      {showModal && !isVerified && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] bg-black flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative z-10 max-w-lg w-full"
          >
            <div className="glass-strong rounded-2xl p-12 text-center border border-[rgba(201,169,98,0.2)]">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl gold-gradient mb-2">
                  AETHER
                </h1>
                <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-8">
                  Luxury Spirits
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="w-20 h-20 mx-auto mb-8 rounded-full border-2 border-[#c9a962] flex items-center justify-center">
                  <span className="text-4xl">🔞</span>
                </div>
                
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl text-white mb-4">
                  Age Verification Required
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  You must be 21 years of age or older to enter this website. 
                  By entering, you agree to our Terms of Service and Privacy Policy.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => handleVerify(true)}
                    className="px-10 py-4 bg-gradient-to-r from-[#c9a962] via-[#e8d5a3] to-[#c9a962] text-black font-semibold tracking-wider uppercase rounded hover:shadow-[0_0_30px_rgba(201,169,98,0.5)] transition-all duration-300"
                  >
                    I am 21+
                  </button>
                  <button
                    onClick={() => handleVerify(false)}
                    className="px-10 py-4 border border-gray-600 text-gray-400 font-medium tracking-wider uppercase rounded hover:border-gray-400 hover:text-white transition-all duration-300"
                  >
                    Under 21
                  </button>
                </div>

                <p className="text-gray-600 text-xs mt-8">
                  Please drink responsibly. Do not share with minors.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
