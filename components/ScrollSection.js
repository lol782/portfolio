'use client';

import { useEffect, useState } from 'react';

export default function ScrollSection({ children, className = '' }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const element = document.querySelector(`[data-scroll-section]`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div 
      data-scroll-section
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}