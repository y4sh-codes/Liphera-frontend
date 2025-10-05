'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles = containerRef.current.querySelectorAll('.particle');
    
    // Create floating animation for particles
    particles.forEach((particle, index) => {
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.3,
      });

      gsap.to(particle, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: index * 0.1,
      });

      gsap.to(particle, {
        opacity: Math.random() * 0.6 + 0.2,
        duration: Math.random() * 2 + 1,
        repeat: -1,
        yoyo: true,
      });
    });

    // Cleanup function
    return () => {
      gsap.killTweensOf(particles);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Animated Particles */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="particle absolute w-2 h-2 bg-blue-400 rounded-full opacity-40"
          style={{
            filter: 'blur(1px)',
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
          }}
        />
      ))}
      
      {/* Large floating orbs */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full opacity-20 animate-float"
          style={{
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            background: `linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))`,
            left: `${10 + i * 20}%`,
            top: `${20 + i * 15}%`,
            filter: 'blur(20px)',
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/5 to-purple-500/10" />
    </div>
  );
}