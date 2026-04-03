'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { title: 'Our Spirits', href: '/spirits' },
      { title: 'Distillery', href: '/distillery' },
      { title: 'Heritage', href: '/heritage' },
      { title: 'Cocktails', href: '/cocktails' },
    ],
    shop: [
      { title: 'Gin Collection', href: '/shop/gin' },
      { title: 'Cognac Reserve', href: '/shop/cognac' },
      { title: 'Gift Sets', href: '/shop/gifts' },
      { title: 'Limited Editions', href: '/shop/limited' },
    ],
    company: [
      { title: 'About Us', href: '/about' },
      { title: 'Careers', href: '/careers' },
      { title: 'Press', href: '/press' },
      { title: 'Contact', href: '/contact' },
    ],
    legal: [
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
      { title: 'Cookie Policy', href: '/cookies' },
      { title: 'Age Policy', href: '/age-policy' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-[rgba(201,169,98,0.1)]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(201,169,98,0.02)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border-2 border-[#c9a962] rounded-full flex items-center justify-center">
                <span className="text-[#c9a962] font-bold text-lg">A</span>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl tracking-wider gold-gradient">
                AETHER
              </h2>
            </Link>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Crafting luxury spirits since 1892. The essence of excellence in every drop.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#c9a962] hover:text-[#c9a962] transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-[#c9a962] text-sm uppercase tracking-wider mb-6 font-semibold">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-[#c9a962] text-sm uppercase tracking-wider mb-6 font-semibold">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-[#c9a962] mt-0.5" />
                <span>123 Distillery Lane<br />Napa Valley, CA 94558</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-[#c9a962]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-[#c9a962]" />
                <span>hello@aetherspirits.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} AETHER Spirits. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Please drink responsibly. Must be 21+ to purchase.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
