'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, ChevronDown, ShoppingBag, Search } from 'lucide-react';

const navLinks = [
  {
    title: 'Our Spirits',
    href: '/spirits',
    submenu: [
      { title: 'Gin Collection', href: '/spirits/gin' },
      { title: 'Cognac Reserve', href: '/spirits/cognac' },
      { title: 'Signature Blends', href: '/spirits/blends' },
      { title: 'Limited Editions', href: '/spirits/limited' },
    ],
  },
  { title: 'Distillery', href: '/distillery' },
  { title: 'Heritage', href: '/heritage' },
  { title: 'Cocktails', href: '/cocktails' },
  { title: 'Shop', href: '/shop' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass-strong py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 border-2 border-[#c9a962] rounded-full flex items-center justify-center"
            >
              <span className="text-[#c9a962] font-bold text-lg">EB</span>
            </motion.div>
            <div>
              <h1 className="font-[family-name:var(--font-playfair)] text-2xl tracking-wider gold-gradient">
                HEISBERG
              </h1>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.title}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.title)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm tracking-wider uppercase text-gray-300 hover:text-[#c9a962] transition-colors duration-300 py-2"
                >
                  {link.title}
                  {link.submenu && <ChevronDown size={14} />}
                </Link>

                <AnimatePresence>
                  {link.submenu && activeSubmenu === link.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 pt-4"
                    >
                      <div className="glass-strong rounded-xl p-6 min-w-[200px] border border-[rgba(201,169,98,0.1)]">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block py-2 text-sm text-gray-300 hover:text-[#c9a962] transition-colors duration-300"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <button className="text-gray-400 hover:text-[#c9a962] transition-colors">
              <Search size={20} />
            </button>
            <button className="relative text-gray-400 hover:text-[#c9a962] transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#c9a962] text-black text-xs rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/95" />
            <div className="relative h-full flex flex-col justify-center items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-[family-name:var(--font-playfair)] text-3xl text-white hover:text-[#c9a962] transition-colors"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
