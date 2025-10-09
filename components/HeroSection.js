'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-medium text-purple-400 mb-2 tracking-wide uppercase"
              >
                Introduction
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6"
              >
                Rahul Koranga
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
              >
                Aspiring Backend Engineer with a strong foundation in Python 
                and experience in integrating APIs and deploying solutions.
              </motion.p>
            </div>
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>rahulkoranga30@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+91 7088672163</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Github className="w-5 h-5 text-purple-400" />
                <a 
                  href="https://github.com/lol782" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  github.com/lol782
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Side - Project Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Projects Card */}
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                const element = document.getElementById('project-1');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative overflow-hidden rounded-3xl p-8 h-48 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">Projects</h3>
                <p className="text-blue-100">Full-stack applications with modern UI/UX</p>
                <div className="absolute bottom-4 right-4 text-white/60 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
            
            {/* ML Projects Card */}
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: -5 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                const element = document.getElementById('project-4');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative overflow-hidden rounded-3xl p-8 h-48 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">ML Projects</h3>
                <p className="text-purple-100">AI and machine learning experiments</p>
                <div className="absolute bottom-4 right-4 text-white/60 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Bottom Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-400 leading-relaxed">
            Passionate about creating robust backend systems and exploring the intersection of 
            artificial intelligence with real-world applications. Currently pursuing B.Tech in 
            Computer Science & Engineering with hands-on experience in Python, Django, and cloud platforms.
          </p>
        </motion.div>
        

      </div>
    </section>
  );
};

export default HeroSection;
