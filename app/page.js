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
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            <p className="mt-4 text-white text-xl">Loading experience...</p>
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
        <ScrollSection id="about" bgColor="bg-black/60 backdrop-blur-sm">
          <About />
        </ScrollSection>
        
        <ScrollSection id="projects" bgColor="bg-blue-900/60 backdrop-blur-sm">
          <Projects />
        </ScrollSection>
        
        <ScrollSection id="contact" bgColor="bg-black/60 backdrop-blur-sm">
          <Contact />
        </ScrollSection>
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 bg-black py-6 text-center text-white">
        <div className="container mx-auto px-4">
          <p>© 2025 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}