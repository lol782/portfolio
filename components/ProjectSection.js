'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SmoothVideoBackground from './SmoothVideoBackground';

const ProjectSection = ({ 
  id, 
  title, 
  subtitle, 
  description, 
  gradientFrom, 
  gradientTo, 
  techStack, 
  features, 
  highlights, 
  impact,
  projectLink
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section 
      id={id}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="min-h-screen py-20 px-6 relative"
    >
      {/* Fade overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Project Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="text-sm font-medium text-purple-400 mb-2 tracking-wide uppercase">
            {subtitle}
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
          {techStack.map((tech, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-gray-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Project Hero Card */}
          <motion.div variants={itemVariants}>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl h-96 flex items-center justify-center text-white shadow-2xl cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`
              }}
              onClick={() => {
                if (projectLink) {
                  window.open(projectLink, '_blank');
                }
              }}
            >
              {/* Smooth Video Background */}
              <SmoothVideoBackground 
                src="/assets/Gradient Loop Background.mp4"
                opacity={0.6}
                style={{ borderRadius: '1.5rem' }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <div className="relative z-20 text-center p-8">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 drop-shadow-lg">{title}</h3>
                <div className="w-16 h-1 bg-white/50 mx-auto rounded-full" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full z-10" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/20 rounded-full z-10" />
            </motion.div>
          </motion.div>

          {/* Project Description */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Key Features */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Key Features:</h4>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-3 text-gray-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technical Highlights */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Technical Highlights:</h4>
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="text-gray-400 italic"
                  >
                    "{highlight}"
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Impact Statement */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl"
            >
              <h4 className="text-lg font-bold text-purple-400 mb-2">Impact:</h4>
              <p className="text-gray-300">{impact}</p>
            </motion.div>
          </motion.div>
        </div>


      </div>
    </motion.section>
  );
};

export default ProjectSection;
