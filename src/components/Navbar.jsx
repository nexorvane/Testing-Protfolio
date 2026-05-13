import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import Logo from './Logo';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, x: '-50%' }}
      animate={{ y: 0, x: '-50%' }}
      className="fixed top-8 left-1/2 z-50 px-8 py-4 rounded-full bg-surface-container/80 backdrop-blur-[20px] border border-white/10 dark:border-white/5 flex items-center gap-12 shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="h-8 flex items-center">
          <Logo className="h-full w-auto group-hover:rotate-[360deg] transition-all duration-700" />
        </div>
        <div className="flex flex-col leading-none font-display">
          <span className="text-sm font-black tracking-tighter text-gray-900 dark:text-white">ALEX</span>
          <span className="text-[9px] font-bold tracking-[0.4em] text-primary">RIVERA</span>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-display font-medium text-xs uppercase tracking-[0.2em] text-gray-600 dark:text-white/70">
        {links.map((item) => (
          <a 
            key={item.name}
            href={item.href} 
            className="group relative py-2 hover:scale-105 transition-all duration-300"
          >
            <span className="group-hover:drop-shadow-[0_0_8px_rgba(46,91,255,0.8)]">{item.name}</span>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
          </a>
        ))}
      </div>

      <button 
        onClick={toggleTheme}
        className="w-10 h-10 rounded-full bg-surface-container-high hover:bg-surface-container-highest transition-colors text-primary flex items-center justify-center border border-white/5"
      >
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      </button>
    </motion.nav>
  );
};

export default Navbar;
