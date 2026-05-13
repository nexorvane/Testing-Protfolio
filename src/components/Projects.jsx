import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projects from '../data/projects.json';
import { ArrowUpRight } from 'lucide-react';
import ProjectDetail from './ProjectDetail';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-32 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-8xl font-display font-black mb-8 leading-tight tracking-tighter">
            Selected <span className="text-metallic-blue">Works</span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 font-light tracking-wide">
            A curated collection of high-fidelity digital products focused on aesthetic excellence and performance.
          </p>
        </div>
        <div className="hidden md:block w-32 h-[1px] bg-gray-200 dark:bg-gray-800 mb-6" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative"
          >
            <div 
              onClick={() => setSelectedProject(project)}
              className="clay-card overflow-hidden cursor-pointer aspect-[4/5] flex flex-col transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,64,224,0.2)]"
            >
              <div className="relative flex-grow overflow-hidden m-4 rounded-2xl border border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={24} className="text-white" />
                </div>
              </div>

              <div className="p-8 pt-2">
                <div className="flex gap-2 mb-4">
                  {project.tech.slice(0, 2).map(t => (
                    <span key={t} className="text-[10px] font-black uppercase tracking-widest text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-display font-black mb-6 transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all text-gray-500 dark:text-gray-400 group-hover:text-primary"
                >
                  Explore Work <span className="h-[1px] w-8 bg-current" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectDetail 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
