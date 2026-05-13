import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="logo-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Sharp Minimalist 'AR' Monogram */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        d="M20 80L50 20L80 80 M35 55H65"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="square"
        className="text-white"
        filter="url(#logo-glow)"
      />
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        d="M50 20L85 20C95 20 95 45 85 45L50 45"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="square"
        className="text-blue-500"
      />
    </svg>
  );
};

export default Logo;
