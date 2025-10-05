'use client';

import React from 'react';

export const CircuitPattern = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 400 400"
    className="absolute inset-0 opacity-10"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path
          d="M10 10h20v20h-20zM70 10h20v20h-20zM10 70h20v20h-20zM70 70h20v20h-20z"
          fill="none"
          stroke="url(#circuit-gradient)"
          strokeWidth="0.5"
        />
        <path
          d="M30 20h40M20 30v40M80 30v40M30 80h40"
          stroke="url(#circuit-gradient)"
          strokeWidth="0.5"
        />
        <circle cx="30" cy="20" r="2" fill="url(#circuit-gradient)" />
        <circle cx="70" cy="20" r="2" fill="url(#circuit-gradient)" />
        <circle cx="20" cy="70" r="2" fill="url(#circuit-gradient)" />
        <circle cx="80" cy="70" r="2" fill="url(#circuit-gradient)" />
      </pattern>
      
      <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    
    <rect width="100%" height="100%" fill="url(#circuit)" />
  </svg>
);

export const DataFlowPattern = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20">
    {/* Horizontal Data Streams */}
    {[...Array(8)].map((_, i) => (
      <div
        key={`h-${i}`}
        className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        style={{
          top: `${12.5 * (i + 1)}%`,
          animationDelay: `${i * 0.5}s`,
          animation: 'data-flow 4s linear infinite',
        }}
      />
    ))}
    
    {/* Vertical Data Streams */}
    {[...Array(6)].map((_, i) => (
      <div
        key={`v-${i}`}
        className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent"
        style={{
          left: `${16.6 * (i + 1)}%`,
          animationDelay: `${i * 0.7}s`,
          animation: 'data-flow 5s linear infinite',
        }}
      />
    ))}
  </div>
);

export const HexagonalPattern = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 500 500"
    className="absolute inset-0 opacity-5"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="hexagons" x="0" y="0" width="86.6" height="100" patternUnits="userSpaceOnUse">
        <polygon
          points="43.3,0 86.6,25 86.6,75 43.3,100 0,75 0,25"
          fill="none"
          stroke="url(#hex-gradient)"
          strokeWidth="0.5"
        />
        <polygon
          points="43.3,0 86.6,25 86.6,75 43.3,100 0,75 0,25"
          fill="url(#hex-fill)"
          opacity="0.1"
        />
      </pattern>
      
      <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="50%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
      
      <radialGradient id="hex-fill" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
      </radialGradient>
    </defs>
    
    <rect width="100%" height="100%" fill="url(#hexagons)" />
  </svg>
);

export const AIVisualization = () => (
  <div className="absolute inset-0 overflow-hidden opacity-30">
    {/* Neural Network Nodes */}
    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
    <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
    <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="absolute top-2/3 left-2/3 w-3 h-3 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
    <div className="absolute top-3/4 left-1/5 w-2 h-2 bg-violet-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    
    {/* Connection Lines */}
    <svg className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      
      <path
        d="M25,25 Q50,50 75,75"
        stroke="url(#connection-gradient)"
        strokeWidth="1"
        fill="none"
        className="animate-pulse"
      />
      <path
        d="M50,33 Q66,50 66,66"
        stroke="url(#connection-gradient)"
        strokeWidth="1"
        fill="none"
        className="animate-pulse"
        style={{ animationDelay: '0.5s' }}
      />
      <path
        d="M33,50 Q50,66 75,20"
        stroke="url(#connection-gradient)"
        strokeWidth="1"
        fill="none"
        className="animate-pulse"
        style={{ animationDelay: '1s' }}
      />
    </svg>
  </div>
);

export const DigitalRain = () => {
  // Fixed values to prevent hydration mismatch
  const rainDrops = [
    { height: 150, delay: 0.2 },
    { height: 180, delay: 0.8 },
    { height: 120, delay: 1.2 },
    { height: 200, delay: 0.4 },
    { height: 160, delay: 1.6 },
    { height: 140, delay: 0.6 },
    { height: 190, delay: 1.0 },
    { height: 130, delay: 1.4 },
    { height: 170, delay: 0.3 },
    { height: 155, delay: 0.9 },
    { height: 145, delay: 1.1 },
    { height: 185, delay: 0.5 },
    { height: 125, delay: 1.3 },
    { height: 175, delay: 0.7 },
    { height: 195, delay: 1.5 },
    { height: 135, delay: 0.1 },
    { height: 165, delay: 0.8 },
    { height: 155, delay: 1.7 },
    { height: 145, delay: 0.4 },
    { height: 175, delay: 1.2 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {rainDrops.map((drop, i) => (
        <div
          key={i}
          className="absolute w-0.5 bg-gradient-to-b from-green-400 via-blue-400 to-transparent"
          style={{
            left: `${i * 5}%`,
            height: `${drop.height}px`,
            animationDelay: `${drop.delay}s`,
            animation: 'data-flow 3s linear infinite',
          }}
        />
      ))}
    </div>
  );
};