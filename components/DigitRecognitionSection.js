'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DigitRecognitionSection = () => {
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

  const techStack = ["TensorFlow", "Keras", "Python", "CNN", "Adam Optimizer"];
  const features = [
    "TensorFlow & Keras implementation",
    "Adam optimizer for efficient training",
    "Convergence in under 10 epochs",
    "Lightweight web interface deployment",
    "Real-time prediction capability"
  ];

  return (
    <motion.section 
      id="project-4"
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
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="text-sm font-medium text-purple-400 mb-2 tracking-wide uppercase">
            Machine Learning Project
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
            Digit Recognition
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            98% accuracy in handwritten digit recognition
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
              className="relative overflow-hidden rounded-3xl h-96 flex items-center justify-center text-white shadow-2xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 cursor-pointer"
              onClick={() => {
                window.open('https://colab.research.google.com/drive/1DrEjuJAxVenHj56fWBAyUUCacGng5Cn8?usp=sharing', '_blank');
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="relative z-10 text-center p-8">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">CNN Classifier</h3>
                <div className="w-16 h-1 bg-white/50 mx-auto rounded-full mb-6" />
                <div className="text-6xl font-mono bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  0-9
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border border-white/10 rounded-full" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/10 rounded-full" />
              
              {/* Neural Network Visualization */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  {/* Input Layer */}
                  {[...Array(4)].map((_, i) => (
                    <circle key={`input-${i}`} cx="50" cy={100 + i * 50} r="8" fill="#8b5cf6" />
                  ))}
                  {/* Hidden Layer */}
                  {[...Array(6)].map((_, i) => (
                    <circle key={`hidden-${i}`} cx="200" cy={75 + i * 40} r="6" fill="#3b82f6" />
                  ))}
                  {/* Output Layer */}
                  {[...Array(3)].map((_, i) => (
                    <circle key={`output-${i}`} cx="350" cy={125 + i * 50} r="8" fill="#10b981" />
                  ))}
                  
                  {/* Connections */}
                  {[...Array(4)].map((_, i) => 
                    [...Array(6)].map((_, j) => (
                      <line 
                        key={`conn1-${i}-${j}`}
                        x1="50" y1={100 + i * 50} 
                        x2="200" y2={75 + j * 40} 
                        stroke="#6366f1" 
                        strokeWidth="0.5" 
                        opacity="0.3"
                      />
                    ))
                  )}
                  {[...Array(6)].map((_, i) => 
                    [...Array(3)].map((_, j) => (
                      <line 
                        key={`conn2-${i}-${j}`}
                        x1="200" y1={75 + i * 40} 
                        x2="350" y2={125 + j * 50} 
                        stroke="#6366f1" 
                        strokeWidth="0.5" 
                        opacity="0.3"
                      />
                    ))
                  )}
                </svg>
              </div>
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

            {/* Model Performance */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Model Performance:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl text-center">
                  <div className="text-2xl font-bold text-green-400">98%</div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl text-center">
                  <div className="text-2xl font-bold text-blue-400">&lt;10</div>
                  <div className="text-sm text-gray-400">Epochs</div>
                </div>
              </div>
            </div>

            {/* Architecture Details */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl"
            >
              <h4 className="text-lg font-bold text-purple-400 mb-2">CNN Architecture:</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Convolutional Neural Network with multiple layers for feature extraction, 
                pooling layers for dimensionality reduction, and dense layers for classification. 
                Optimized using Adam optimizer for fast convergence and high accuracy on the MNIST dataset.
              </p>
            </motion.div>
          </motion.div>
        </div>


      </div>
    </motion.section>
  );
};

export default DigitRecognitionSection;
