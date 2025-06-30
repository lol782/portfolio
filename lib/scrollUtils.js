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

// Calculate section-specific scroll progress with better timing
export function getSectionScrollProgress(sectionElement, windowHeight) {
  if (!sectionElement) return 0;
  
  const rect = sectionElement.getBoundingClientRect();
  const sectionTop = rect.top;
  const sectionHeight = rect.height;
  
  // Calculate when section enters viewport (from bottom)
  const enterPoint = windowHeight;
  const exitPoint = -sectionHeight;
  
  // Progress from 0 (just entering) to 1 (fully visible/centered)
  if (sectionTop <= enterPoint && sectionTop >= exitPoint) {
    return Math.max(0, Math.min(1, (enterPoint - sectionTop) / (enterPoint - exitPoint)));
  }
  
  return sectionTop > enterPoint ? 0 : 1;
}