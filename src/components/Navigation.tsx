'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { title: 'Our Beers', href: '/spirits' },
  { title: 'Distillery', href: '/distillery' },
  { title: 'Heritage', href: '/heritage' },
  { title: 'Shop', href: '/shop' },
  { title: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: isScrolled ? '16px 24px' : '24px 24px',
          background: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          transition: 'all 0.5s',
          borderBottom: isScrolled ? '1px solid rgba(201,169,98,0.1)' : 'none'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #c9a962', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#c9a962', fontWeight: 'bold', fontSize: '16px' }}>EB</span>
            </div>
            <span style={{ background: 'linear-gradient(135deg, #e8d5a3, #c9a962, #8b7355)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: '24px', fontWeight: 'bold', letterSpacing: '0.1em' }}>
              HEISBERG
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                style={{
                  color: '#d1d5db',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                  padding: '8px 0'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#c9a962'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '8px', display: 'none' }}
            className="mobile-menu-btn"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          background: 'rgba(0,0,0,0.95)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '32px'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                color: 'white',
                fontSize: '32px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
