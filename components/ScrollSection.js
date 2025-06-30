'use client';

import { useRef, useEffect, useState } from 'react';

const ScrollSection = ({ 
  id, 
  bgColor = 'bg-white/80', 
  textColor = 'text-gray-800',
  children 
}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section
      id={id}
      ref={sectionRef}
      className={`min-h-screen ${bgColor} backdrop-blur-sm ${textColor} flex items-center justify-center relative`}
    >
      <div 
        className={`container mx-auto px-4 py-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default ScrollSection;