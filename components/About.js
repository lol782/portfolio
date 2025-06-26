'use client';

import { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm <span className="text-white">John Doe</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-300">
            Creative Developer & Designer
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
        
        <p className="text-lg text-gray-300 max-w-md leading-relaxed">
          I specialize in creating immersive web experiences using cutting-edge technologies.
          With expertise in 3D graphics, animation, and interactive design, I build memorable
          digital journeys that engage and inspire.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            <span className="flex items-center justify-center gap-2">
              View Projects
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <button className="px-8 py-4 border-2 border-white/30 text-white hover:bg-white hover:text-black rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            Contact Me
          </button>
        </div>
      </div>
      
      <div className="relative p-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl animate-pulse"></div>
        <div className="relative z-10 backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl">
          <h3 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h3>
          <div className="space-y-4">
            <SkillBar skill="Three.js" percentage={90} color="from-blue-500 to-cyan-500" />
            <SkillBar skill="React" percentage={85} color="from-purple-500 to-pink-500" />
            <SkillBar skill="WebGL" percentage={75} color="from-green-500 to-teal-500" />
            <SkillBar skill="GSAP" percentage={80} color="from-orange-500 to-red-500" />
            <SkillBar skill="UI/UX" percentage={85} color="from-indigo-500 to-purple-500" />
            <SkillBar skill="3D Modeling" percentage={70} color="from-yellow-500 to-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillBar = ({ skill, percentage, color }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-white font-medium">{skill}</span>
        <span className="text-gray-300 text-sm">{percentage}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out relative`}
          style={{ width: `${animatedPercentage}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default About;