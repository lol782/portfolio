'use client';

import { useRef, useEffect, useState } from 'react';
import { useScroll, useWindowSize } from '@/hooks/useScroll';
import { getSectionScrollProgress } from '@/lib/scrollUtils';

const ScrollSection = ({ 
  id, 
  bgColor = 'bg-white/90', 
  textColor = 'text-gray-800',
  children 
}) => {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const { height } = useWindowSize();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const updateProgress = () => {
      const sectionProgress = getSectionScrollProgress(sectionRef.current, height);
      setProgress(sectionProgress);
    };
    
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, [scrollY, height]);
  
  // Calculate opacity based on scroll progress
  const opacity = Math.min(progress * 2, 1);
  
  // Calculate transform based on scroll progress
  const yOffset = (1 - progress) * 30;
  
  return (
    <section
      id={id}
      ref={sectionRef}
      className={`min-h-screen ${bgColor} backdrop-blur-sm ${textColor} flex items-center justify-center relative`}
    >
      <div 
        className="container mx-auto px-4 py-16 transition-all duration-700 ease-out"
        style={{ 
          opacity: opacity, 
          transform: `translateY(${yOffset}px)`,
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default ScrollSection;