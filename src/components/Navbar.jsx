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
        className="fixed top-4 md:top-8 left-1/2 z-[100] w-[95%] md:w-auto px-4 md:px-8 py-3 md:py-4 rounded-full bg-surface-container/95 backdrop-blur-[20px] border border-white/10 dark:border-white/5 flex items-center justify-between md:justify-start gap-4 md:gap-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300"
      >
        {/* Logo Section */}
        <div className="flex items-center gap-2 md:gap-4 group cursor-pointer shrink-0">
          <div className="h-6 md:h-8 flex items-center">
            <Logo className="h-full w-auto group-hover:rotate-[360deg] transition-all duration-700" />
          </div>
          <div className="flex flex-col leading-none font-display">
            <span className="text-[10px] md:text-sm font-black tracking-tighter text-gray-900 dark:text-white">ALEX</span>
            <span className="text-[7px] md:text-[9px] font-bold tracking-[0.4em] text-primary">RIVERA</span>
          </div>
        </div>
        
        {/* Navigation Links - Always visible on desktop/tablet, clear menu on mobile */}
        <div className="hidden sm:flex items-center gap-4 md:gap-8 font-display font-medium text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-600 dark:text-white/80">
          {links.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="group relative py-2 hover:scale-105 transition-all duration-300"
            >
              <span className="group-hover:text-primary transition-colors">{item.name}</span>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all" />
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-3">
          <button 
            onClick={toggleTheme}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface-container-high hover:bg-surface-container-highest transition-colors text-primary flex items-center justify-center border border-white/5 shadow-inner"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Hamburger - Very clear for small mobile */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="sm:hidden w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20"
          >
            <Menu size={18} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - High visibility */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[110] bg-surface/98 backdrop-blur-3xl flex flex-col items-center justify-center p-10"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-10 right-10 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col gap-10 text-center">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-display font-black tracking-tighter text-gray-900 dark:text-white hover:text-primary transition-colors"
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
