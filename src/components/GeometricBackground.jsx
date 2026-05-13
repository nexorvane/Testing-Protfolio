import React from 'react';
import { motion } from 'framer-motion';

const FloatingObject = ({ className, delay = 0, duration = 6, children }) => (
  <motion.div
    initial={{ y: 0, rotate: 0 }}
    animate={{ 
      y: [-30, 30, -30],
      rotate: [0, 20, -20, 0],
      scale: [1, 1.1, 1]
    }}
    transition={{ 
      duration, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay 
    }}
    className={`absolute pointer-events-none flex items-center justify-center ${className}`}
  >
    {children}
  </motion.div>
);

const GeometricBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-surface transition-colors duration-500">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:via-primary/10" />
      
      {/* Large Glowing Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] rounded-full bg-primary/20 blur-[150px] dark:bg-primary/10"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[20%] -right-[10%] w-[1000px] h-[1000px] rounded-full bg-secondary/20 blur-[200px] dark:bg-secondary/10"
      />

      {/* Floating Geometric Objects - Enhanced Visibility & Speed */}
      <FloatingObject className="top-[10%] left-[5%] w-32 h-32 border border-primary/40 rounded-3xl" duration={4}>
        <div className="w-4 h-4 bg-primary/30 rounded-full" />
      </FloatingObject>
      
      <FloatingObject className="top-[25%] right-[10%] w-20 h-20 border border-secondary/40 rounded-full" delay={1} duration={5}>
        <div className="w-2 h-10 bg-secondary/20 rotate-45" />
      </FloatingObject>

      <FloatingObject className="bottom-[30%] left-[8%] w-40 h-40 border border-primary/25 rounded-full" delay={2} duration={7}>
        <div className="w-12 h-12 border border-primary/30 rotate-12 rounded-lg" />
      </FloatingObject>

      <FloatingObject className="bottom-[10%] right-[5%] w-24 h-24 border border-secondary/30 rounded-[2rem]" delay={0.5} duration={4.5}>
        <div className="w-6 h-6 bg-secondary/30 rounded-full blur-sm" />
      </FloatingObject>

      <FloatingObject className="top-[50%] left-[45%] w-16 h-16 border border-primary/15 dark:border-white/10 rounded-full" delay={3} duration={8}>
        <div className="w-2 h-2 bg-primary/50 rounded-full" />
      </FloatingObject>

      {/* Floating Shard Elements (Subtle but more defined) */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-[30%] right-[15%] w-64 h-64 border border-primary/20 dark:border-white/10 rotate-45 backdrop-blur-[2px]"
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }}
        />
        <div 
          className="absolute bottom-[20%] left-[10%] w-48 h-48 border border-secondary/20 dark:border-white/10 -rotate-12 backdrop-blur-[1px]"
          style={{ clipPath: 'polygon(20% 0%, 100% 20%, 80% 100%, 0% 80%)' }}
        />
      </div>
    </div>
  );
};

export default GeometricBackground;
