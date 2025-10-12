'use client';

import { AnimatedBackground } from '@/components/animations/AnimatedBackground';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/features/HeroSection';
import { BentoGrid } from '@/components/layout/BentoGrid';
import { FeaturesBentoGrid } from '@/components/features/FeaturesBentoGrid';
import { StatsBentoGrid } from '@/components/stats/StatsBentoGrid';
import { Footer } from '@/components/layout/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Home() {
  useScrollAnimation();
  
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Aurora Background */}
      <div className="aurora-bg performance-critical"></div>
      
      {/* Neural Network Pattern */}
      <div className="neural-network performance-critical"></div>
      
      {/* Floating Particles */}
      <div className="floating-particles performance-critical">
        <div className="particle gpu-accelerated"></div>
        <div className="particle gpu-accelerated"></div>
        <div className="particle gpu-accelerated"></div>
        <div className="particle gpu-accelerated"></div>
        <div className="particle gpu-accelerated"></div>
        <div className="particle gpu-accelerated"></div>
        <div className="particle gpu-accelerated"></div>
        <div className="particle gpu-accelerated"></div>
        <div className="particle gpu-accelerated"></div>
      </div>
      
      <div className="animation-container performance-critical">
        <AnimatedBackground />
      </div>
      <Navigation />
      <div className="relative z-10 pt-20">
        <HeroSection />
        
        {/* Main Navigation Bento Grid */}
        <BentoGrid />

        {/* Features Bento Grid */}
        <FeaturesBentoGrid />

        {/* Performance Stats Bento Grid */}
        <StatsBentoGrid />

        <Footer />
      </div>
    </main>
  );
}
