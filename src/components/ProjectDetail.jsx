import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const ProjectDetail = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 bg-surface z-[100] overflow-y-auto"
        >
          {/* Header/Nav for Detail View */}
          <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
            <button 
              onClick={onClose}
              className="flex items-center gap-2 font-display font-bold text-gray-500 hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 clay-card flex items-center justify-center group-hover:-translate-x-1 transition-transform">
                <ArrowLeft size={20} />
              </div>
              Back to Projects
            </button>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 clay-card flex items-center justify-center hover:text-primary transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 clay-card flex items-center justify-center hover:text-primary transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="mb-8">
                  <h2 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map(t => (
                      <span key={t} className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-10">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">The Challenge</h3>
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                      {project.longDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Core Features</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-4 p-6 clay-card">
                          <CheckCircle2 size={20} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 font-bold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="sticky top-8"
              >
                <div className="clay-card p-4 overflow-hidden shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div className="p-8 clay-card text-center">
                    <p className="text-3xl font-black text-primary mb-1">01</p>
                    <p className="text-sm font-bold text-gray-400 uppercase">Phase</p>
                  </div>
                  <div className="p-8 clay-card text-center">
                    <p className="text-3xl font-black text-primary mb-1">Live</p>
                    <p className="text-sm font-bold text-gray-400 uppercase">Status</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetail;
