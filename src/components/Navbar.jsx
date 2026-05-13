import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import Logo from './Logo';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, x: '-50%' }}
        animate={{ y: 0, x: '-50%' }}
        className="fixed top-6 md:top-8 left-1/2 z-50 w-[92%] md:w-auto px-6 md:px-8 py-3 md:py-4 rounded-full bg-surface-container/80 backdrop-blur-[20px] border border-white/10 dark:border-white/5 flex items-center justify-between md:justify-start gap-6 md:gap-12 shadow-xl transition-all duration-300"
      >
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="h-6 md:h-8 flex items-center">
            <Logo className="h-full w-auto group-hover:rotate-[360deg] transition-all duration-700" />
          </div>
          <div className="flex flex-col leading-none font-display">
            <span className="text-sm font-black tracking-tighter text-gray-900 dark:text-white">ALEX</span>
            <span className="text-[9px] font-bold tracking-[0.4em] text-primary">RIVERA</span>
          </div>
        </div>
        
        {/* Desktop Links */}
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

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface-container-high hover:bg-surface-container-highest transition-colors text-primary flex items-center justify-center border border-white/5"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Hamburger for Mobile Visibility */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary border border-white/5"
          >
            <Menu size={18} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-surface/95 backdrop-blur-xl flex flex-col items-center justify-center p-10"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-10 right-10 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col gap-10 text-center">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-display font-black tracking-tighter hover:text-primary transition-colors text-gray-900 dark:text-white"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
