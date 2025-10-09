'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectSection from '@/components/ProjectSection';
import DigitRecognitionSection from '@/components/DigitRecognitionSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen text-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Museum Explorer Project */}
      <ProjectSection 
        id="project-1"
        title="Museum Explorer"
        subtitle="Full-Stack Museum Booking Platform"
        description="Seamless bookings powered by AI"
        gradientFrom="#1e3a8a"
        gradientTo="#3b82f6"
        projectLink="https://github.com/lol782/booking-system"
        techStack={["Django", "React", "FastAPI", "Gemini AI", "JWT", "TypeScript"]}
        features={[
          "Full-stack development with React + Django REST Framework",
          "JWT-based authentication system for secure access", 
          "AI-powered FastAPI chatbot using Google Gemini 2.0 Flash",
          "Glassmorphism UI with TypeScript",
          "Conversational bookings and fuzzy search matching"
        ]}
        highlights={[
          "Designed API with focus on clean developer experience",
          "Robust and scalable access control layer", 
          "Increased user engagement through AI integration",
          "Optimized UX with responsive design and intuitive navigation"
        ]}
        impact="Boosted accessibility while contributing to better waste management by reducing manual query handling"
      />
      
      {/* Kumaoni Chatbot Project */}
      <ProjectSection 
        id="project-2"
        title="Kumaoni Regional Chatbot"
        subtitle="AI-Powered Regional Language Assistant"
        description="Bridging language barriers with RAG technology"
        gradientFrom="#0066ff"
        gradientTo="#2563eb"
        projectLink="https://github.com/lol782/RAG-powered-chatbot-for-Kumaoni-language-preservation"
        techStack={["FastAPI", "React", "FAISS", "Gemini API", "RAG", "ngrok"]}
        features={[
          "RAG implementation with ~1860 custom Kumaoni examples",
          "Custom data pipeline from Google to JSON storage",
          "Gemini API embeddings with FAISS vector store",
          "React frontend with FastAPI backend",
          "Real-time queries through ngrok-exposed API"
        ]}
        highlights={[
          "Robust data pipeline for regional language processing",
          "Cost-optimized by minimizing prompt length",
          "Efficient natural dialogue retrieval",
          "Avoided expensive LLM fine-tuning through smart prompting"
        ]}
        impact="Preserved regional language heritage while providing accessible communication tools"
      />
      
      {/* Eco-Connect Project */}
      <ProjectSection 
        id="project-3"
        title="Eco-Connect"
        subtitle="Smart Waste Management Platform"
        description="AI-powered sustainability for smarter communities"
        gradientFrom="#7c3aed"
        gradientTo="#a855f7"
        projectLink="https://drive.google.com/drive/folders/1HKQlv5i_yytEvHeeO1Iujf7oOLsZ2O16"
        techStack={["Flutter", "FastAPI", "LangChain", "SQLite", "Gemini AI", "Railway"]}
        features={[
          "Led cross-functional team in comprehensive platform development",
          "AI-powered waste classification with custom ML models",
          "LangChain integration with prompt templates",
          "Gemini AI-powered Eco-AI chatbot for guidance",
          "Flutter frontend with SQLite backend",
          "Reward system for sustainable behavior"
        ]}
        highlights={[
          "Deployed via FastAPI on Railway platform",
          "Real-time tracking and community engagement",
          "Secure payment integration",
          "Effective communication to cross-functional stakeholders"
        ]}
        impact="Enhanced community sustainability engagement with measurable environmental impact"
      />
      
      {/* Digit Recognition Project */}
      <DigitRecognitionSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}