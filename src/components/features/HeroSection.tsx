'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Play, Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Copy ref values at the start of the effect
    const titleElement = titleRef.current;
    const subtitleElement = subtitleRef.current;
    const ctaElement = ctaRef.current;
    
    // Check if refs are available before proceeding
    if (!titleElement || !subtitleElement || !ctaElement) return;

    // Reset elements to visible state first
    gsap.set([titleElement, subtitleElement, ctaElement], {
      opacity: 1,
      y: 0,
      clearProps: "all"
    });

    const tl = gsap.timeline();
    
    tl.fromTo(titleElement, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo(subtitleElement,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo(ctaElement,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    );

    // Cleanup function to ensure elements are visible and prevent errors
    return () => {
      // Kill the timeline first
      tl.kill();
      
      // Only set properties if elements still exist
      const elements = [titleElement, subtitleElement, ctaElement].filter(Boolean);
      if (elements.length > 0) {
        gsap.set(elements, {
          opacity: 1,
          y: 0,
          clearProps: "all"
        });
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-mobile pb-12 sm:pb-16">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-5xl">
        <h1
          ref={titleRef}
          className="text-responsive-hero font-bold mb-4 sm:mb-6 text-white tracking-tight"
          style={{ opacity: 1, transform: 'translateY(0px)' }}
        >
          Liphera
        </h1>
        
        <p
          ref={subtitleRef}
          className="text-responsive-subtitle text-gray-200 mb-6 sm:mb-8 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-light"
          style={{ opacity: 1, transform: 'translateY(0px)' }}
        >
          Revolutionary lip-reading technology powered by AI. Transform silent speech into text 
          with unprecedented accuracy on your Raspberry Pi.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0 mb-16 sm:mb-20"
          style={{ opacity: 1, transform: 'translateY(0px)' }}
        >
          <Link href="/documentation" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              className="btn-mobile glass-button btn-gradient text-white border-0 font-semibold group hover:scale-105 transition-all duration-300 motion-safe-only hover-none"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Link href="/languages" className="w-full sm:w-auto">
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-mobile glass-button border-white/30 text-white hover:bg-white/10 font-medium hover:scale-105 transition-all duration-300 motion-safe-only hover-none"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Languages
            </Button>
          </Link>
        </div>
      </div>

      {/* Floating Elements */}
      <FloatingElements />
    </section>
  );
}

function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
        />
      ))}
    </div>
  );
}