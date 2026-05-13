import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-[1400px] mx-auto">
      <div className="grid md:grid-cols-12 gap-6">
        {/* Main About Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="md:col-span-8 bento-card p-12"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8 text-white tracking-tighter">
            Elevating <span className="text-blue-500">Digital</span> Standards
          </h2>
          <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8">
            I'm a creative developer who believes that the best digital products are born from 
            the perfect balance between high-end design and technical precision. My work is 
            defined by a deep commitment to quality and a constant drive for innovation.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-3 rounded-full bg-white/5 border border-white/5 text-sm font-bold text-white">
              Creative Development
            </div>
            <div className="px-6 py-3 rounded-full bg-white/5 border border-white/5 text-sm font-bold text-white">
              UI/UX Strategy
            </div>
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="md:col-span-4 bento-card p-12 flex flex-col justify-center items-center text-center"
        >
          <div className="text-7xl font-display font-black text-blue-500 mb-2">05+</div>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-sm">Years Excellence</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
