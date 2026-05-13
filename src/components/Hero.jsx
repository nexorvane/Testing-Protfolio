import React from 'react';
import { motion } from 'framer-motion';
import profile from '../data/profile.json';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center pt-32 px-4 text-center relative overflow-hidden max-w-full">
      {/* 3D-perspective AR Watermark Background */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, rotateX: 45, rotateY: -10, scale: 1.2 }}
          animate={{ opacity: 0.05, rotateX: 45, rotateY: -10, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="text-[40vw] font-display font-black tracking-tighter text-gray-900 dark:text-white leading-none whitespace-nowrap opacity-[0.02] dark:opacity-[0.03]"
          style={{ perspective: "1000px" }}
        >
          AR
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-full md:max-w-6xl mx-auto px-4"
      >
        <h1 className="text-[2.2rem] md:text-7xl lg:text-[10rem] font-display font-black tracking-tight mb-8 md:mb-10 leading-[1.1] md:leading-[0.8] text-gray-900 dark:text-white transition-colors">
          Designing<br />
          The <span className="text-metallic-blue">Future</span>
        </h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-[1rem] md:text-2xl text-gray-500 dark:text-zinc-400 max-w-3xl mx-auto mb-12 md:mb-16 font-light leading-relaxed tracking-wide transition-colors px-5 md:px-0"
        >
          Building high-fidelity digital products with a focus on futuristic 
          aesthetics and technical excellence.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="flex flex-col sm:flex-row gap-6 md:gap-10 justify-center items-center w-full"
        >
          <a href="#projects" className="w-auto px-[20px] md:px-12 py-[10px] md:py-5 rounded-full font-display font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all group flex items-center justify-center gap-3 text-base md:text-lg">
            View Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="w-auto px-[20px] md:px-12 py-[10px] md:py-5 rounded-full font-display font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all text-base md:text-lg">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
