'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Play, 
  Languages, 
  Settings, 
  Download, 
  Cpu, 
  Eye, 
  Shield, 
  Zap, 
  Circle, 
  ArrowRight,
  Sparkles,
  Brain,
  Mic,
  Camera,
  Globe,
  Cog
} from 'lucide-react';

interface BentoItemProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
  gradient: string;
  accentColor: string;
  children?: React.ReactNode;
  delay?: number;
}

const BentoItem = ({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  size, 
  gradient, 
  accentColor,
  children,
  delay = 0
}: BentoItemProps) => {
  const sizeClasses = {
    sm: 'col-span-1 row-span-1 h-52',
    md: 'col-span-1 row-span-1 h-60',
    lg: 'col-span-1 row-span-2 h-64',
    xl: 'col-span-1 row-span-1 h-64'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay, 
        duration: 0.4,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -6, 
        scale: 1.02,
        transition: { 
          duration: 0.2,
          ease: "easeOut"
        }
      }}
      className={`group ${sizeClasses[size]}`}
    >
      <Link href={href} className="block h-full">
        <div className="crystal-card magic-card p-4 md:p-6 h-full cursor-pointer relative overflow-hidden rounded-2xl">
          {/* Background gradient */}
          <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-100 transition-all duration-300`} />
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Icon and title section */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className={`relative z-10 inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${accentColor.replace('bg-', '').replace('/20', '')} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <motion.div
                      animate={{ rotate: [0, -5, 5, 0] }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </motion.div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight group-hover:translate-x-1 transition-all duration-300 line-clamp-2">
                    {title}
                  </h3>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-white/60 group-hover:text-white group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 flex-shrink-0" />
            </div>

          {/* Description */}
          <p className="text-sm text-gray-200 mb-4 leading-relaxed group-hover:text-slate-100 group-hover:translate-x-1 transition-all duration-300 flex-1 line-clamp-3">
            {description}
          </p>

          {/* Custom content */}
          {children && (
            <div className="mt-auto pt-2">
              {children}
            </div>
          )}            {/* Bottom gradient bar */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${accentColor.replace('bg-', '').replace('/20', '/0')} ${accentColor.replace('bg-', '').replace('/20', '/50')} opacity-0 group-hover:opacity-100 transition-all duration-300`} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export function BentoGrid() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight"
        >
          Explore Liphera
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 max-w-7xl mx-auto">
          {/* Live Reading - Hero Item (spans 4 columns) */}
          <div className="md:col-span-4">
            <BentoItem
              title="Start Live Reading"
              description="Begin real-time lip reading session with advanced AI processing. See your words appear instantly as you speak."
              icon={Play}
              href="/live"
              size="xl"
              gradient="bg-gradient-to-r from-red-500/5 to-green-500/10"
              accentColor="bg-red-500/20"
              delay={0.1}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <div className="flex items-center space-x-1">
                    <Circle className="h-3 w-3 text-red-400 fill-current animate-pulse" />
                    <span>Live</span>
                  </div>
                  <span>•</span>
                  <span>95%+ Accuracy</span>
                  <span>•</span>
                  <span>Real-time</span>
                </div>
                <Button className="w-full glass-button btn-gradient text-lg px-6 py-3 group-hover:scale-105 transition-all duration-200">
                  <Play className="mr-3 h-5 w-5" />
                  Start Now
                </Button>
              </div>
            </BentoItem>
          </div>

          {/* Language Models (spans 2 columns) */}
          <div className="md:col-span-2">
            <BentoItem
              title="Language Models"
              description="Browse and download lip-reading models for 50+ languages with high accuracy."
              icon={Languages}
              href="/languages"
              size="md"
              gradient="bg-gradient-to-br from-blue-500/5 to-purple-600/10"
              accentColor="bg-blue-500/20"
              delay={0.2}
            >
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Download className="h-4 w-4" />
                <span>50+ Languages</span>
              </div>
            </BentoItem>
          </div>

          {/* Device Settings (spans 2 columns) */}
          <div className="md:col-span-2">
            <BentoItem
              title="Device Settings"
              description="Configure your Raspberry Pi device and optimize performance."
              icon={Settings}
              href="/settings"
              size="md"
              gradient="bg-gradient-to-br from-purple-500/5 to-pink-600/10"
              accentColor="bg-purple-500/20"
              delay={0.3}
            >
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Cpu className="h-4 w-4" />
                <span>Optimize Performance</span>
              </div>
            </BentoItem>
          </div>

          {/* Documentation (spans 2 columns) */}
          <div className="md:col-span-2">
            <BentoItem
              title="Documentation"
              description="Complete guides, API reference, and tutorials to get you started."
              icon={Sparkles}
              href="/documentation"
              size="md"
              gradient="bg-gradient-to-br from-cyan-500/5 to-teal-600/10"
              accentColor="bg-cyan-500/20"
              delay={0.4}
            >
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                <span>• Quick Start</span>
                <span>• API Reference</span>
                <span>• Tutorials</span>
                <span>• Examples</span>
              </div>
            </BentoItem>
          </div>

          {/* Privacy First Feature (spans 2 columns) */}
          <div className="md:col-span-2">
            <BentoItem
              title="Privacy First"
              description="All processing happens locally on your device. No data sent externally."
              icon={Shield}
              href="/documentation#privacy"
              size="sm"
              gradient="bg-gradient-to-br from-green-500/5 to-green-600/10"
              accentColor="bg-green-500/20"
              delay={0.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
}