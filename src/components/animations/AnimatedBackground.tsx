'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
// Unused components available for future use:
// import { CircuitPattern, DataFlowPattern, HexagonalPattern } from '@/components/visuals/TechPatterns';
// import { AIVisualization, DigitalRain } from '@/components/visuals/TechPatterns';

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // All hooks must be called before any conditional returns
  useEffect(() => {
    setIsMounted(true);
    
    // Industry-standard GSAP configuration for 120+ FPS
    gsap.config({
      force3D: true,
      autoSleep: 30,
      nullTargetWarn: false,
      units: { rotation: 'rad' }
    });
    
    // Ultra-high performance ticker configuration
    gsap.ticker.fps(120);
    gsap.ticker.lagSmoothing(0);
    
    // Simple GPU acceleration setup
    if (document.documentElement) {
      gsap.set(document.documentElement, { transform: 'translateZ(0)' });
    }
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current) return;

    const container = containerRef.current;
    
    // Create ultra-high performance particles
    const particleCount = 60;
    const particles: HTMLDivElement[] = [];
    const animations: (gsap.core.Tween | gsap.core.Timeline)[] = [];
    
    // Ultra-efficient DocumentFragment approach
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-white/10 particle-system';
      
      const size = Math.random() * 4 + 1;
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        transform: translate3d(0, 0, 0);
        will-change: transform;
      `;
      
      fragment.appendChild(particle);
      particles.push(particle);
    }
    
    // Batch DOM insertion for maximum performance
    container.appendChild(fragment);
    
    // Industry-standard batch animation setup
    particles.forEach((particle, i) => {
      const tl = gsap.timeline({ 
        repeat: -1, 
        yoyo: true,
        ease: 'none',
        force3D: true
      });
      
      tl.to(particle, {
        y: `+=${Math.random() * 100 + 50}`,
        x: `+=${Math.random() * 50 - 25}`,
        duration: Math.random() * 10 + 15,
        ease: 'none',
        force3D: true,
        transformOrigin: 'center center'
      });
      
      animations.push(tl);
    });

    // Create ultra-high performance orbs
    const orbCount = 8;
    const orbFragment = document.createDocumentFragment();
    const orbs: HTMLDivElement[] = [];
    
    for (let i = 0; i < orbCount; i++) {
      const orb = document.createElement('div');
      orb.className = 'absolute rounded-full gpu-layer';
      
      const size = Math.random() * 200 + 100;
      const hue = Math.random() * 360;
      
      orb.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, hsla(${hue}, 70%, 60%, 0.1) 0%, transparent 70%);
        left: ${Math.random() * 120 - 10}%;
        top: ${Math.random() * 120 - 10}%;
        filter: blur(1px);
        transform: translate3d(0, 0, 0);
        will-change: transform;
      `;
      
      orbFragment.appendChild(orb);
      orbs.push(orb);
    }
    
    // Batch orb insertion
    container.appendChild(orbFragment);
    
    // Industry-standard batch animations for orbs
    orbs.forEach((orb, i) => {
      const masterTL = gsap.timeline();
      
      // Rotation animation
      masterTL.to(orb, {
        rotation: 360,
        duration: Math.random() * 20 + 30,
        repeat: -1,
        ease: 'none',
        force3D: true,
        transformOrigin: 'center center'
      }, 0);
      
      // Movement animation
      masterTL.to(orb, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        duration: Math.random() * 15 + 20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        force3D: true
      }, 0);
      
      animations.push(masterTL);
    });

    // Comprehensive cleanup function
    return () => {
      // Kill all animations to prevent memory leaks
      animations.forEach(anim => {
        if (anim && anim.kill) {
          anim.kill();
        }
      });
      
      // Clean up DOM elements
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.style.willChange = 'auto'; // Reset will-change
          particle.remove();
        }
      });
      
      // Clear arrays
      particles.length = 0;
      animations.length = 0;
      
      // Force garbage collection hint
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [isMounted]);

  // Conditional rendering after all hooks are called
  if (!isMounted) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base gradient background only during SSR */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/50 to-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/30 via-transparent to-blue-950/30" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-slate-900/50 to-indigo-950/40" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Solid black background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Noise texture overlay for realism */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Minimal tech grid only */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Tech grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Animated particles container */}
      <div ref={containerRef} className="absolute inset-0" />
      
      {/* Neural network inspired connections */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Connection lines */}
        <g stroke="url(#connectionGrad)" strokeWidth="1" fill="none">
          <path d="M100,100 Q300,200 500,150" opacity="0.3">
            <animate attributeName="d" 
              values="M100,100 Q300,200 500,150;M100,100 Q350,250 500,150;M100,100 Q300,200 500,150" 
              dur="8s" repeatCount="indefinite" />
          </path>
          <path d="M200,300 Q400,100 600,250" opacity="0.2">
            <animate attributeName="d" 
              values="M200,300 Q400,100 600,250;M200,300 Q450,150 600,250;M200,300 Q400,100 600,250" 
              dur="12s" repeatCount="indefinite" />
          </path>
          <path d="M50,400 Q250,100 450,350" opacity="0.25">
            <animate attributeName="d" 
              values="M50,400 Q250,100 450,350;M50,400 Q300,150 450,350;M50,400 Q250,100 450,350" 
              dur="10s" repeatCount="indefinite" />
          </path>
        </g>
        
        {/* Network nodes */}
        <g fill="url(#connectionGrad)">
          <circle cx="100" cy="100" r="3" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="150" r="3" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="300" r="3" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="250" r="3" opacity="0.35">
            <animate attributeName="opacity" values="0.35;0.75;0.35" dur="3.5s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
      
      {/* AI/Tech inspired visual elements */}
      <div className="absolute top-20 left-20 opacity-5">
        <svg width="200" height="200" viewBox="0 0 200 200" className="animate-spin-slow">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="text-blue-400" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" className="text-purple-400" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2,2" className="text-indigo-400" />
        </svg>
      </div>
      
      <div className="absolute bottom-20 right-20 opacity-5">
        <svg width="150" height="150" viewBox="0 0 150 150" className="animate-pulse">
          <rect x="20" y="20" width="110" height="110" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400" />
          <rect x="40" y="40" width="70" height="70" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400" />
          <circle cx="75" cy="75" r="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400" />
        </svg>
      </div>
      
      {/* Data flow lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse"
            style={{
              top: `${20 + i * 15}%`,
              left: '-100%',
              width: '200%',
              animationDelay: `${i * 0.5}s`,
              animationDuration: '8s'
            }}
          />
        ))}
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 opacity-10 animate-float">
        <div className="w-16 h-16 border-2 border-blue-400 rotate-45 animate-spin-slow" />
      </div>
      
      <div className="absolute top-3/4 right-1/4 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full animate-pulse" />
      </div>
      
      <div className="absolute top-1/2 left-1/6 opacity-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-20 h-20 border-2 border-indigo-400 rounded-full animate-spin-slow" />
      </div>
    </div>
  );
}