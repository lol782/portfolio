'use client';

import { useRef, useEffect, useState } from 'react';
import { useScroll, useWindowSize } from '@/hooks/useScroll';
import { getSectionScrollProgress } from '@/lib/scrollUtils';

const ScrollSection = ({ 
  id, 
  bgColor = 'bg-white/70', 
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
  
  // Only apply fade effect to the contact section (last section)
  const isContactSection = id === 'contact';
  
  let opacity = 1;
  let yOffset = 0;
  
  if (isContactSection) {
    // Get the about section to check its transition state
    const aboutSection = document.getElementById('about');
    let aboutProgress = 0;
    
    if (aboutSection) {
      const aboutRect = aboutSection.getBoundingClientRect();
      const aboutTop = aboutRect.top;
      const aboutHeight = aboutRect.height;
      
      // Calculate when about section is ending (transitioning out)
      // aboutProgress will be > 0.8 when about section is almost out of view
      aboutProgress = Math.max(0, Math.min(1, (height - aboutTop) / aboutHeight));
    }
    
    // Apply fade only during the brief transition moment when about is ending
    if (aboutProgress > 0.7 && aboutProgress < 0.95) {
      // Short fade duration during transition
      const fadeProgress = (aboutProgress - 0.7) / 0.25; // 0.25 = (0.95 - 0.7)
      opacity = Math.min(fadeProgress * 3, 1); // Quick fade in
      yOffset = Math.max((1 - fadeProgress) * 30, 0);
    } else if (aboutProgress >= 0.95) {
      // Fully visible after transition
      opacity = 1;
      yOffset = 0;
    } else {
      // Hidden before transition
      opacity = 0;
      yOffset = 30;
    }
  }
  
  return (
    <section
      id={id}
      ref={sectionRef}
      className={`min-h-screen ${bgColor} backdrop-blur-sm ${textColor} flex items-center justify-center relative`}
    >
      <div 
        className="container mx-auto px-4 py-16 transition-all duration-300 ease-out"
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