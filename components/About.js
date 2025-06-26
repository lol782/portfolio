'use client';

import { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Rahul Koranga</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-light text-gray-700">
            AI/ML & Full-Stack Developer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Passionate about building intelligent systems and creating immersive web experiences. 
          With expertise in AI/ML, web development, and cloud computing, I develop innovative 
          solutions that bridge the gap between cutting-edge technology and real-world applications.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
            <span className="flex items-center justify-center gap-2">
              View Projects
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 rounded-lg transition-all duration-300 transform hover:scale-105">
            Contact Me
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">AI/ML Expertise</h3>
            <p className="text-gray-600 text-sm">TensorFlow, PyTorch, Computer Vision, Deep Learning</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-3">💻</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Full-Stack Development</h3>
            <p className="text-gray-600 text-sm">React, Node.js, Python, Java, Database Design</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-3">☁️</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Cloud Computing</h3>
            <p className="text-gray-600 text-sm">Google Cloud Platform, AWS, Scalable Architecture</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;