// Client-side hook for tracking scroll position
'use client';

import { useState, useEffect } from 'react';

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollY(scrollY);
      
      // Calculate scroll progress (0 to 1)
      const maxScroll = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
      
      setScrollProgress(Math.min(scrollY / maxScroll, 1));
    };

    // Set initial values
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollY, scrollProgress };
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}