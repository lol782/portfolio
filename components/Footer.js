'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Award, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="photography" className="py-20 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-4 text-center">Certifications</h3>
            <div className="space-y-4">
              {/* Django Certification */}
              <div 
                className="flex items-start space-x-4 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                onClick={() => window.open('/assets/Coursera.pdf', '_blank')}
              >
                <div 
                  className="w-20 h-20 mt-0.5 flex-shrink-0 bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url('/assets/uni-svg.svg')"
                  }}
                ></div>
                <div>
                  <div className="text-white font-medium text-sm hover:text-purple-400 transition-colors">Django Certified</div>
                  <div className="text-gray-500 text-xs">Web Development Framework</div>
                </div>
              </div>

              {/* PwC Cybersecurity Certification */}
              <div 
                className="flex items-start space-x-4 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                onClick={() => window.open('/assets/pwc.pdf', '_blank')}
              >
                <div 
                  className="w-20 h-20 mt-0.5 flex-shrink-0 bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url('/assets/pwc-svg.svg')"
                  }}
                ></div>
                <div>
                  <div className="text-white font-medium text-sm hover:text-purple-400 transition-colors">PwC Launchpad Cybersecurity</div>
                  <div className="text-gray-500 text-xs">Cybersecurity Fundamentals</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-4 text-center">Quick Links</h3>
            <ul className="space-y-3 text-center">
              {[
                { label: 'Museum Explorer', id: 'project-1' },
                { label: 'Kumaoni Chatbot', id: 'project-2' },
                { label: 'Eco-Connect', id: 'project-3' },
                { label: 'Digit Recognition', id: 'project-4' }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Achievements Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-white mb-4 text-center">Achievements</h3>
            <div className="space-y-4">
              {/* Google Cloud Facilitator - longer text, needs more space */}
              <div className="flex items-start space-x-2 justify-center">
                <Award className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                <div className="text-center">
                  <div className="text-white font-medium text-sm">Google Cloud Facilitator 2025</div>
                  <div className="text-gray-500 text-xs">Cloud Technology Leadership</div>
                </div>
              </div>
              {/* Smart India Hackathon - medium text */}
              <div className="flex items-start space-x-2 justify-center">
                <Award className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                <div className="text-center">
                  <div className="text-white font-medium text-sm">Smart India Hackathon 2024</div>
                  <div className="text-gray-500 text-xs">National Level Participant</div>
                </div>
              </div>
              {/* NPTEL - longest text, needs most space */}
              <div className="flex items-start space-x-2 justify-center">
                <Award className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                <div className="text-center">
                  <div className="text-white font-medium text-sm">NPTEL ELITE GCP Certification</div>
                  <div className="text-gray-500 text-xs">Cloud Platform Expertise</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>



        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Technical Skills</h3>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {/* Programming Languages */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                <i className="devicon-cplusplus-plain colored text-3xl"></i>
              </div>
              <span className="text-xs text-gray-300 text-center font-medium">C++</span>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                <i className="devicon-python-plain colored text-3xl"></i>
              </div>
              <span className="text-xs text-gray-300 text-center font-medium">Python</span>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                <i className="devicon-django-plain colored text-3xl"></i>
              </div>
              <span className="text-xs text-gray-300 text-center font-medium">Django</span>
            </motion.div>

            {/* AI/ML */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                <i className="devicon-tensorflow-original colored text-3xl"></i>
              </div>
              <span className="text-xs text-gray-300 text-center font-medium">TensorFlow</span>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                <div 
                  className="w-10 h-10 bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url('/assets/langchain-color.svg')"
                  }}
                ></div>
              </div>
              <span className="text-xs text-gray-300 text-center font-medium">LangChain</span>
            </motion.div>

            {/* Cloud & Systems */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                <i className="devicon-googlecloud-plain colored text-3xl"></i>
              </div>
              <span className="text-xs text-gray-300 text-center font-medium">Google Cloud</span>
            </motion.div>

            {/* Databases */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                <i className="devicon-mysql-plain colored text-3xl"></i>
              </div>
              <span className="text-xs text-gray-300 text-center font-medium">MySQL</span>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                <i className="devicon-mongodb-plain colored text-3xl"></i>
              </div>
              <span className="text-xs text-gray-300 text-center font-medium">MongoDB</span>
            </motion.div>

          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Rahul Koranga. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://github.com/lol782" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/rahul-koranga-656785258" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:rahulkoranga30@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-gray-400 text-sm">
              Built with React + Next.js
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
