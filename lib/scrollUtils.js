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
  // 1 when the section just enters, 0 when it's centered, -1 when it just exits
  const sectionProgress = sectionTop / (windowHeight - sectionHeight);
  
  // Map to a 0-1 range for the portion visible
  return Math.max(0, Math.min(1, 1 - sectionProgress));
}