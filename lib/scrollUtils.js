// Utilities for handling scroll effects
export function mapRange(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// Calculate scroll progress as a value between 0 and 1
export function getScrollProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = 
    document.documentElement.scrollHeight - 
    document.documentElement.clientHeight;
  
  return scrollTop / scrollHeight;
}

// Calculate section-specific scroll progress
export function getSectionScrollProgress(sectionElement, windowHeight) {
  if (!sectionElement) return 0;
  
  const rect = sectionElement.getBoundingClientRect();
  const sectionTop = rect.top;
  const sectionHeight = rect.height;
  
  // Calculate how far the section is through the viewport
  const sectionProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / sectionHeight));
  
  return sectionProgress;
}

// Get section transition state for precise timing
export function getSectionTransitionState(sectionElement, windowHeight) {
  if (!sectionElement) return { isEntering: false, isExiting: false, progress: 0 };
  
  const rect = sectionElement.getBoundingClientRect();
  const sectionTop = rect.top;
  const sectionHeight = rect.height;
  
  const isEntering = sectionTop < windowHeight && sectionTop > windowHeight - sectionHeight * 0.3;
  const isExiting = sectionTop < -sectionHeight * 0.7 && sectionTop > -sectionHeight;
  const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / sectionHeight));
  
  return { isEntering, isExiting, progress };
}