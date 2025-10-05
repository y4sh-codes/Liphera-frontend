'use client';

'use client';

import { AnimatedBackground } from '@/components/animations/AnimatedBackground';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/features/HeroSection';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Languages, Settings, Download, Cpu, Eye, Shield, Zap, Play, Circle, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      <div className="relative z-10 pt-20">
        <HeroSection />
        
        {/* Quick Actions Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight"
            >
              Get Started
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Live Reading Card */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group md:col-span-2"
              >
                <Link href="/live">
                  <div className="glass-card hover:glow-blue p-8 text-center transition-all duration-500 hover:scale-105 cursor-pointer h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-green-600 mb-6 group-hover:animate-pulse-glow">
                        <Play className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Start Live Reading</h3>
                      <p className="text-gray-200 mb-6 text-lg font-light">
                        Begin real-time lip reading session. See your words appear instantly as you speak with advanced AI processing.
                      </p>
                      <div className="flex items-center justify-center space-x-4 text-sm text-gray-300 mb-6">
                        <div className="flex items-center space-x-1">
                          <Circle className="h-3 w-3 text-red-400 fill-current animate-pulse" />
                          <span>Live</span>
                        </div>
                        <span>•</span>
                        <span>Real-time Processing</span>
                        <span>•</span>
                        <span>95%+ Accuracy</span>
                      </div>
                      <Button className="mt-4 btn-gradient text-xl px-8 py-4 group-hover:scale-105 transition-all duration-300">
                        <Play className="mr-3 h-6 w-6" />
                        Start Now
                        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Languages Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group"
              >
                <Link href="/languages">
                  <div className="glass-card hover:glow-blue p-8 text-center transition-all duration-500 hover:scale-105 cursor-pointer h-full">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6 group-hover:animate-pulse-glow">
                      <Languages className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Language Models</h3>
                    <p className="text-gray-200 mb-6 font-light">
                      Browse, download, and manage lip-reading models for different languages. Support for 50+ languages with high accuracy AI models.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                      <Download className="h-4 w-4" />
                      <span>Download & Install</span>
                    </div>
                    <Button className="mt-6 btn-gradient w-full group-hover:scale-105 transition-all duration-300">
                      Explore Languages
                    </Button>
                  </div>
                </Link>
              </motion.div>

              {/* Settings Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="group"
              >
                <Link href="/settings">
                  <div className="glass-card hover:glow-blue p-8 text-center transition-all duration-500 hover:scale-105 cursor-pointer h-full">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 mb-6 group-hover:animate-pulse-glow">
                      <Settings className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Device Settings</h3>
                    <p className="text-gray-200 mb-6 font-light">
                      Configure your Raspberry Pi device, camera settings, processing options, and optimize performance for your environment.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                      <Cpu className="h-4 w-4" />
                      <span>Optimize Performance</span>
                    </div>
                    <Button className="mt-6 btn-gradient w-full group-hover:scale-105 transition-all duration-300">
                      Configure Device
                    </Button>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight"
            >
              Key Features
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-6 text-center hover:glow-blue transition-all duration-300"
              >
                <Eye className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Processing</h3>
                <p className="text-slate-300">
                  Advanced AI models process lip movements in real-time with minimal latency for instant communication.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6 text-center hover:glow-blue transition-all duration-300"
              >
                <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Privacy First</h3>
                <p className="text-slate-300">
                  All processing happens locally on your device. No data is sent to external servers, ensuring complete privacy.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6 text-center hover:glow-blue transition-all duration-300"
              >
                <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">High Accuracy</h3>
                <p className="text-slate-300">
                  State-of-the-art neural networks trained on diverse datasets achieve 95%+ accuracy across multiple languages.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
