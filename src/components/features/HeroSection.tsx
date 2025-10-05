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
    // Check if refs are available before proceeding
    if (!titleRef.current || !subtitleRef.current || !ctaRef.current) return;

    // Reset elements to visible state first
    gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 1,
      y: 0,
      clearProps: "all"
    });

    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    );

    // Cleanup function to ensure elements are visible and prevent errors
    return () => {
      // Kill the timeline first
      tl.kill();
      
      // Only set properties if elements still exist
      const elements = [titleRef.current, subtitleRef.current, ctaRef.current].filter(Boolean);
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tight"
          style={{ opacity: 1, transform: 'translateY(0px)' }}
        >
          Liphera
        </h1>
        
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light"
          style={{ opacity: 1, transform: 'translateY(0px)' }}
        >
          Revolutionary lip-reading technology powered by AI. Transform silent speech into text 
          with unprecedented accuracy on your Raspberry Pi.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ opacity: 1, transform: 'translateY(0px)' }}
        >
          <Link href="/documentation">
            <Button 
              size="lg" 
              className="btn-gradient text-white px-8 py-4 text-lg font-semibold group hover:scale-105 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Link href="/languages">
            <Button 
              variant="outline" 
              size="lg"
              className="glass-effect text-white hover:bg-white/20 px-8 py-4 text-lg border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Languages
            </Button>
          </Link>
        </div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <FeatureCard
            title="Real-time Processing"
            description="Process lip movements in real-time with minimal latency"
          />
          <FeatureCard
            title="Multi-language Support"
            description="Support for multiple languages with downloadable models"
          />
          <FeatureCard
            title="Raspberry Pi Optimized"
            description="Specifically optimized for Raspberry Pi hardware"
          />
        </motion.div>
      </div>

      {/* Floating Elements */}
      <FloatingElements />
    </section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="p-6 rounded-xl glass-card text-center hover:glow-blue transition-all duration-300"
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"
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