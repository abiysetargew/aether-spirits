'use client';

import { motion } from 'framer-motion';

interface BottleProps {
  type: 'ouzo' | 'gin' | 'lemon' | 'mint';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  animate?: boolean;
}

export default function BottleSVG({ type, size = 'medium', className = '', animate = false }: BottleProps) {
  const dimensions = {
    small: { width: 60, height: 120 },
    medium: { width: 100, height: 200 },
    large: { width: 140, height: 280 },
  };

  const { width, height } = dimensions[size];

  const colors = {
    ouzo: {
      primary: '#1a1a2e',
      secondary: '#c9a962',
      accent: '#e8d5a3',
      liquid: 'rgba(201, 169, 98, 0.3)',
      label: 'OUZO',
    },
    gin: {
      primary: '#0d1b2a',
      secondary: '#415a77',
      accent: '#778da9',
      liquid: 'rgba(65, 90, 119, 0.4)',
      label: 'GIN',
    },
    lemon: {
      primary: '#1a1a1a',
      secondary: '#d4af37',
      accent: '#f4d03f',
      liquid: 'rgba(244, 208, 63, 0.4)',
      label: 'LEMON',
    },
    mint: {
      primary: '#0a1628',
      secondary: '#2d5a4a',
      accent: '#4ecdc4',
      liquid: 'rgba(78, 205, 196, 0.4)',
      label: 'MINT',
    },
  };

  const color = colors[type];

  const bottleContent = (
    <svg
      viewBox="0 0 100 220"
      width={width}
      height={height}
      className={className}
      style={{ filter: `drop-shadow(0 10px 30px rgba(0,0,0,0.3))` }}
    >
      <defs>
        <linearGradient id={`bottleGrad-${type}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color.primary} />
          <stop offset="30%" stopColor="#2a2a2a" />
          <stop offset="70%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor={color.primary} />
        </linearGradient>
        <linearGradient id={`liquidGrad-${type}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color.accent} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color.secondary} stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id={`capGrad-${type}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color.accent} />
          <stop offset="100%" stopColor={color.secondary} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Cap */}
      <rect
        x="38"
        y="5"
        width="24"
        height="20"
        rx="3"
        fill={`url(#capGrad-${type})`}
      />
      <rect
        x="40"
        y="8"
        width="20"
        height="14"
        rx="2"
        fill={color.primary}
        opacity="0.3"
      />

      {/* Neck */}
      <path
        d="M40 25 L40 55 Q40 65 35 70 L30 75 L30 85 L35 85 L35 75 Q38 70 40 65 L40 55 L60 55 L60 65 Q62 70 65 75 L65 85 L70 85 L70 75 Q65 70 65 65 L65 55 L60 55 L60 25 Q60 22 50 22 Q40 22 40 25 Z"
        fill={`url(#bottleGrad-${type})`}
      />

      {/* Body */}
      <path
        d="M30 85 Q25 90 22 100 L22 190 Q22 205 35 205 L65 205 Q78 205 78 190 L78 100 Q75 90 70 85 Z"
        fill={`url(#bottleGrad-${type})`}
      />

      {/* Liquid */}
      <path
        d="M32 100 L32 185 Q32 198 38 200 L62 200 Q68 198 68 185 L68 100 Q66 92 60 88 L60 88 L40 88 Q34 92 32 100 Z"
        fill={`url(#liquidGrad-${type})`}
      />

      {/* Glass Reflection */}
      <path
        d="M35 95 L35 180"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M38 95 L38 175"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="1"
        fill="none"
      />

      {/* Label Background */}
      <rect
        x="32"
        y="120"
        width="36"
        height="50"
        rx="2"
        fill={color.primary}
        opacity="0.9"
      />

      {/* Label Border */}
      <rect
        x="33"
        y="121"
        width="34"
        height="48"
        rx="1"
        fill="none"
        stroke={color.secondary}
        strokeWidth="0.5"
      />

      {/* Label Text - Brand */}
      <text
        x="50"
        y="140"
        textAnchor="middle"
        fill={color.accent}
        fontSize="8"
        fontWeight="bold"
        fontFamily="system-ui"
        letterSpacing="1"
      >
        ADEY
      </text>

      {/* Label Text - Type */}
      <text
        x="50"
        y="152"
        textAnchor="middle"
        fill={color.secondary}
        fontSize="5"
        fontFamily="system-ui"
        letterSpacing="0.5"
      >
        {color.label}
      </text>

      {/* Decorative Line */}
      <line
        x1="38"
        y1="158"
        x2="62"
        y2="158"
        stroke={color.secondary}
        strokeWidth="0.3"
        opacity="0.5"
      />

      {/* Label Text - ABV */}
      <text
        x="50"
        y="166"
        textAnchor="middle"
        fill={color.accent}
        fontSize="4"
        fontFamily="system-ui"
      >
        6.X%
      </text>

      {/* Bottle Bottom */}
      <ellipse
        cx="50"
        cy="200"
        rx="18"
        ry="4"
        fill={color.primary}
        opacity="0.5"
      />
    </svg>
  );

  if (animate) {
    return (
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {bottleContent}
      </motion.div>
    );
  }

  return bottleContent;
}
