'use client';

import React, { useRef, useEffect, useState } from 'react';

const SmoothVideoBackground = ({ src, className = "", style = {}, opacity = 0.6 }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
      setShowFallback(false);
      // Start from a safe position to avoid loop stutters
      video.currentTime = 0.1;
    };

    const handleTimeUpdate = () => {
      // Seamless loop by restarting before the actual end
      if (video.currentTime >= video.duration - 0.05) {
        video.currentTime = 0.1;
      }
    };

    const handleCanPlayThrough = () => {
      // Additional safety for smooth playback
      video.playbackRate = 1.0;
      video.play().catch(console.log);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('canplaythrough', handleCanPlayThrough);

    // Preload and setup
    video.load();

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, []);

  return (
    <div className="absolute inset-0" style={style}>
      {/* Fallback gradient animation */}
      {showFallback && (
        <div 
          className="absolute inset-0 animate-pulse"
          style={{
            background: 'linear-gradient(45deg, rgba(139, 69, 19, 0.3), rgba(255, 140, 0, 0.3), rgba(255, 69, 0, 0.3))',
            backgroundSize: '400% 400%',
            animation: 'gradientFlow 4s ease-in-out infinite',
            opacity: opacity,
            ...style
          }}
        />
      )}
      
      {/* Main video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        style={{
          opacity: isLoaded ? opacity : 0,
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          WebkitTransform: 'translateZ(0)',
          ...style
        }}
      >
        <source src={src} type="video/mp4" />
      </video>

      <style jsx>{`
        @keyframes gradientFlow {
          0%, 100% { 
            background-position: 0% 50%; 
            transform: scale(1);
          }
          50% { 
            background-position: 100% 50%; 
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default SmoothVideoBackground;
