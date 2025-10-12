'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Shield, 
  Zap, 
  Brain,
  Cpu,
  Globe,
  Camera,
  Mic,
  Sparkles
} from 'lucide-react';

interface FeatureBentoItemProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  size: 'sm' | 'md' | 'lg';
  gradient: string;
  accentColor: string;
  delay?: number;
  stats?: {
    value: string;
    label: string;
  };
}

const FeatureBentoItem = ({ 
  title, 
  description, 
  icon: Icon, 
  size, 
  gradient, 
  accentColor,
  delay = 0,
  stats
}: FeatureBentoItemProps) => {
  const sizeClasses = {
    sm: 'col-span-1 row-span-1 h-48',
    md: 'col-span-1 row-span-1 h-56',
    lg: 'col-span-1 row-span-1 h-64'
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
        y: -4, 
        transition: { duration: 0.2 }
      }}
      className={`group ${sizeClasses[size]}`}
    >
      <div className="bento-item h-full p-6 relative overflow-hidden rounded-2xl">
        {/* Background gradient */}
        <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-100 transition-all duration-300`} />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Icon */}
          <div className="mb-4">
            <div className="relative">
              <div className={`bento-icon-glow ${accentColor} opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
              <div className={`bento-icon inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${accentColor.replace('bg-', '').replace('/20', '')} transition-transform duration-200 group-hover:scale-105`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          {/* Title and description */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-opacity-90 transition-all duration-200">
              {title}
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed group-hover:text-slate-100 transition-all duration-200">
              {description}
            </p>
          </div>

          {/* Stats (if provided) */}
          {stats && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="text-2xl font-bold text-white mb-1">{stats.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">{stats.label}</div>
            </div>
          )}

          {/* Bottom gradient bar */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${accentColor.replace('bg-', '').replace('/20', '/0')} ${accentColor.replace('bg-', '').replace('/20', '/50')} opacity-0 group-hover:opacity-100 transition-all duration-300`} />
        </div>
      </div>
    </motion.div>
  );
};

export function FeaturesBentoGrid() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight"
        >
          Powerful Features
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
          {/* Real-time Processing - Featured Item (spans 3 columns) */}
          <div className="md:col-span-3">
            <FeatureBentoItem
              title="Real-time Processing"
              description="Advanced AI models process lip movements in real-time with minimal latency for instant communication."
              icon={Eye}
              size="lg"
              gradient="bento-gradient-blue"
              accentColor="bg-blue-500/20"
              delay={0.1}
              stats={{
                value: "<50ms",
                label: "Latency"
              }}
            />
          </div>

          {/* High Accuracy (spans 3 columns) */}
          <div className="md:col-span-3">
            <FeatureBentoItem
              title="High Accuracy"
              description="State-of-the-art neural networks achieve exceptional accuracy across multiple languages."
              icon={Zap}
              size="lg"
              gradient="bento-gradient-yellow"
              accentColor="bg-yellow-500/20"
              delay={0.2}
              stats={{
                value: "95%+",
                label: "Accuracy"
              }}
            />
          </div>

          {/* Privacy First (spans 2 columns) */}
          <div className="md:col-span-2">
            <FeatureBentoItem
              title="Privacy First"
              description="All processing happens locally on your device. No data is sent to external servers."
              icon={Shield}
              size="md"
              gradient="bento-gradient-green"
              accentColor="bg-green-500/20"
              delay={0.3}
            />
          </div>

          {/* Advanced AI (spans 2 columns) */}
          <div className="md:col-span-2">
            <FeatureBentoItem
              title="Advanced AI"
              description="Powered by cutting-edge neural networks trained on diverse datasets for maximum compatibility."
              icon={Brain}
              size="md"
              gradient="bento-gradient-indigo"
              accentColor="bg-indigo-500/20"
              delay={0.4}
            />
          </div>

          {/* Multi-language Support (spans 2 columns) */}
          <div className="md:col-span-2">
            <FeatureBentoItem
              title="50+ Languages"
              description="Comprehensive language support with downloadable models for global accessibility."
              icon={Globe}
              size="md"
              gradient="bento-gradient-cyan"
              accentColor="bg-cyan-500/20"
              delay={0.5}
              stats={{
                value: "50+",
                label: "Languages"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}