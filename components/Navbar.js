'use client';

import { useState, useEffect } from 'react';
import { useScroll } from '@/hooks/useScroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className={`font-bold text-2xl transition-colors duration-300 ${
          isScrolled ? 'text-gray-800' : 'text-white'
        }`}>
          Rahul Koranga
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className={`transition-colors duration-300 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white hover:text-blue-300'
                }`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className={`transition-colors duration-300 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white hover:text-blue-300'
                }`}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className={`transition-colors duration-300 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white hover:text-blue-300'
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        
        <button className={`md:hidden transition-colors duration-300 ${
          isScrolled ? 'text-gray-800' : 'text-white'
        }`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;