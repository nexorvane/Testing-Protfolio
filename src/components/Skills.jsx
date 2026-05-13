import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'JavaScript / TypeScript', level: 90 },
  { name: 'Tailwind CSS / UI', level: 98 },
  { name: 'Framer Motion', level: 85 },
  { name: 'Node.js / Backend', level: 75 }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-8xl font-display font-black mb-6 tracking-tighter">
          Core <span className="text-metallic-blue">Skills</span>
        </h2>
        <p className="text-xl text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto">
          High-performance tools for building premium digital experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={skill.name} className="clay-card p-8 group hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <span className="font-display font-black text-xl tracking-tight">{skill.name}</span>
              <span className="text-primary font-black px-3 py-1 rounded-full bg-primary/10 text-sm">{skill.level}%</span>
            </div>
            <div className="skill-bar-bg">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                className="skill-bar-fill"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
