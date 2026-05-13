import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import profile from '../data/profile.json';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-5xl md:text-8xl font-display font-black mb-8 tracking-tighter">
            Let's <span className="text-metallic-blue">Connect</span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 font-light">
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and high-end digital experiences.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 clay-card flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-[0.2em]">Email Me</p>
                <p className="text-xl font-display font-black">hello@alexrivera.dev</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {[
                { icon: <GithubIcon size={20} />, link: profile.socials.github },
                { icon: <LinkedinIcon size={20} />, link: profile.socials.linkedin },
                { icon: <TwitterIcon size={20} />, link: profile.socials.twitter }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link}
                  className="w-12 h-12 clay-card flex items-center justify-center hover:text-primary transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="clay-card p-12 relative"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-sm font-bold mb-3 ml-2 opacity-60 uppercase tracking-widest">Name</label>
              <input type="text" className="clay-input" placeholder="Your Name" required />
            </div>
            <div>
              <label className="block text-sm font-bold mb-3 ml-2 opacity-60 uppercase tracking-widest">Email</label>
              <input type="email" className="clay-input" placeholder="your@email.com" required />
            </div>
            <div>
              <label className="block text-sm font-bold mb-3 ml-2 opacity-60 uppercase tracking-widest">Message</label>
              <textarea className="clay-input h-40 pt-6" placeholder="How can I help?" required></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className={`w-full clay-btn flex items-center justify-center gap-3 font-black text-lg py-5 ${
                status === 'success' ? 'bg-green-500 text-white' : 'clay-btn-primary'
              }`}
            >
              {status === 'sending' ? (
                <span className="animate-pulse">Sending...</span>
              ) : status === 'success' ? (
                "Message Sent! ✨"
              ) : (
                <>Send Message <Send size={20} /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
