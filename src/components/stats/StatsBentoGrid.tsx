'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Download, 
  Star,
  Clock,
  Cpu
} from 'lucide-react';

interface StatsBentoItemProps {
  title: string;
  value: string;
  description: string;
  icon: React.ComponentType<any>;
  size: 'sm' | 'md' | 'lg';
  gradient: string;
  accentColor: string;
  delay?: number;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

const StatsBentoItem = ({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  size, 
  gradient, 
  accentColor,
  delay = 0,
  trend
}: StatsBentoItemProps) => {
  const sizeClasses = {
    sm: 'col-span-1 row-span-1',
    md: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1',
    lg: 'col-span-1 row-span-2 md:col-span-2 md:row-span-1'
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
          {/* Header with icon and trend */}
          <div className="flex items-start justify-between mb-4">
            <div className="relative">
              <div className={`bento-icon-glow ${accentColor} opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
              <div className={`bento-icon inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${accentColor.replace('bg-', '').replace('/20', '')} transition-transform duration-200 group-hover:scale-105`}>
                <Icon className="h-5 w-5 text-white" />
              </div>
            </div>
            {trend && (
              <div className={`flex items-center text-xs ${trend.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                <TrendingUp className={`h-3 w-3 mr-1 ${trend.isPositive ? '' : 'rotate-180'}`} />
                {trend.value}
              </div>
            )}
          </div>

          {/* Main stat */}
          <div className="mb-2">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
              {value}
            </div>
            <h3 className="text-sm md:text-base font-semibold text-gray-300 uppercase tracking-wide">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-all duration-200 flex-1">
            {description}
          </p>

          {/* Bottom gradient bar */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${accentColor.replace('bg-', '').replace('/20', '/0')} ${accentColor.replace('bg-', '').replace('/20', '/50')} opacity-0 group-hover:opacity-100 transition-all duration-300`} />
        </div>
      </div>
    </motion.div>
  );
};

export function StatsBentoGrid() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight"
        >
          Performance Stats
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {/* Accuracy */}
          <StatsBentoItem
            title="Accuracy Rate"
            value="95%+"
            description="Exceptional lip-reading accuracy across multiple languages and environments"
            icon={Star}
            size="sm"
            gradient="bento-gradient-yellow"
            accentColor="bg-yellow-500/20"
            delay={0.1}
            trend={{
              value: "+5%",
              isPositive: true
            }}
          />

          {/* Response Time */}
          <StatsBentoItem
            title="Response Time"
            value="<50ms"
            description="Ultra-low latency processing for real-time communication needs"
            icon={Clock}
            size="sm"
            gradient="bento-gradient-blue"
            accentColor="bg-blue-500/20"
            delay={0.2}
          />

          {/* Language Support */}
          <StatsBentoItem
            title="Languages"
            value="50+"
            description="Comprehensive support for global languages with downloadable models"
            icon={Download}
            size="sm"
            gradient="bento-gradient-green"
            accentColor="bg-green-500/20"
            delay={0.3}
            trend={{
              value: "+12",
              isPositive: true
            }}
          />

          {/* CPU Efficiency */}
          <StatsBentoItem
            title="CPU Usage"
            value="<15%"
            description="Optimized for Raspberry Pi with minimal resource consumption"
            icon={Cpu}
            size="sm"
            gradient="bento-gradient-purple"
            accentColor="bg-purple-500/20"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}