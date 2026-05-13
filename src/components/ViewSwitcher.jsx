import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Tablet, Smartphone } from 'lucide-react';

const ViewSwitcher = ({ currentMode, setMode }) => {
  const modes = [
    { id: 'desktop', label: 'Desktop', icon: <Monitor size={18} /> },
    { id: 'tablet', label: 'Tablet', icon: <Tablet size={18} /> },
    { id: 'mobile', label: 'Mobile', icon: <Smartphone size={18} /> },
  ];

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[70]">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-2 p-2 rounded-full bg-surface-container/60 backdrop-blur-[20px] border border-white/10 shadow-2xl"
      >
        {modes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => setMode(mode.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-widest transition-all duration-300 relative ${
              currentMode === mode.id 
                ? 'text-white' 
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {currentMode === mode.id && (
              <motion.div
                layoutId="active-view"
                className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{mode.icon}</span>
            <span className="relative z-10 hidden md:inline">{mode.label}</span>
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default ViewSwitcher;
