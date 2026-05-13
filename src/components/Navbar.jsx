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
        className="fixed top-6 md:top-8 left-1/2 z-50 w-[92%] md:w-auto px-[10px] md:px-8 py-[10px] md:py-4 rounded-full bg-surface-container/80 backdrop-blur-[20px] border border-white/10 dark:border-white/5 flex items-center justify-between md:justify-start gap-4 md:gap-12 shadow-xl transition-all duration-300 nav-mobile-fix"
      >
        <div className="flex items-center gap-2 md:gap-4 group cursor-pointer">
          <div className="h-6 md:h-8 flex items-center">
            <Logo className="h-full w-auto group-hover:rotate-[360deg] transition-all duration-700" />
          </div>
          <div className="flex flex-col leading-none font-display">
            <span className="text-[10px] md:text-sm font-black tracking-tighter text-gray-900 dark:text-white">ALEX</span>
            <span className="text-[7px] md:text-[9px] font-bold tracking-[0.4em] text-primary">RIVERA</span>
          </div>
        </div>
        
        {/* Desktop Links & Mobile 'About' */}
        <div className="flex items-center gap-4 md:gap-8 font-display font-medium text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-600 dark:text-white/70">
          <a href="#about" className="group relative py-2 hover:scale-105 transition-all duration-300">
            <span className="group-hover:drop-shadow-[0_0_8px_rgba(46,91,255,0.8)]">About</span>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {links.slice(1).map((item) => (
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
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button 
            onClick={toggleTheme}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface-container-high hover:bg-surface-container-highest transition-colors text-primary flex items-center justify-center border border-white/5"
          >
            {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
          </button>

          {/* Hamburger Menu Icon */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary border border-white/5"
          >
            <Menu size={16} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Slide-out Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[100] w-full max-w-[300px] bg-surface/98 backdrop-blur-2xl border-l border-white/10 flex flex-col p-12 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="self-end w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary mb-16"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col gap-10">
              <span className="text-[10px] font-black tracking-widest text-primary uppercase opacity-50 mb-4">Navigation</span>
              {links.slice(1).map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-display font-black tracking-tighter hover:text-primary transition-colors text-gray-900 dark:text-white"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <div className="mt-auto pt-10 border-t border-white/5">
                <p className="text-xs text-zinc-500 font-medium uppercase tracking-[0.2em] mb-4">Say Hello</p>
                <a href="mailto:hello@alexrivera.dev" className="text-lg font-display font-bold text-gray-900 dark:text-white hover:text-primary transition-colors">
                  hello@alexrivera.dev
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
