'use client';

import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import ScrollSection from '@/components/ScrollSection';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

// Dynamically import ThreeScene with no SSR
const ThreeScene = dynamic(() => import('@/components/ThreeScene'), {
  ssr: false
});

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <main className="relative">
      {/* Loading Screen */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-700 text-xl">Loading experience...</p>
          </div>
        </div>
      )}
      
      {/* Three.js Background */}
      <Suspense fallback={null}>
        <ThreeScene />
      </Suspense>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Content Sections */}
      <div className="relative z-10">
        <ScrollSection id="about" bgColor="bg-white/80">
          <About />
        </ScrollSection>
        
        <ScrollSection id="projects" bgColor="bg-gray-50/80">
          <Projects />
        </ScrollSection>
        
        <ScrollSection id="contact" bgColor="bg-white/80">
          <Contact />
        </ScrollSection>
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 bg-gray-800 py-8 text-center text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>© 2025 Rahul Koranga. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/rahul-koranga-656785258" className="hover:text-blue-400 transition-colors duration-300">LinkedIn</a>
              <a href="https://github.com/lol782" className="hover:text-blue-400 transition-colors duration-300">GitHub</a>
              <a href="mailto:rahulkoranga30@gmail.com" className="hover:text-blue-400 transition-colors duration-300">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}