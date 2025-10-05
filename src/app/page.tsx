'use client';

import { AnimatedBackground } from '@/components/animations/AnimatedBackground';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/features/HeroSection';
import { Footer } from '@/components/layout/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Languages, Settings, Download, Cpu, Eye, Shield, Zap, Play, Circle, ArrowRight } from 'lucide-react';

export default function Home() {
  useScrollAnimation();
  
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
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 800, damping: 30, duration: 0.1 }
                }}
                className="group md:col-span-2"
              >
                <Link href="/live">
                  <div className="glass-card p-8 text-center cursor-pointer h-full relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-green-500/10 opacity-0 group-hover:opacity-100 transition-all duration-150" />
                    <div className="relative z-10">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl group-hover:bg-red-500/40 group-hover:scale-110 transition-all duration-150"></div>
                        <motion.div
                          whileHover={{ 
                            rotate: [0, -5, 5, 0],
                            scale: 1.15,
                            transition: { duration: 0.15 }
                          }}
                          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-green-600 group-hover:animate-pulse-glow relative z-10"
                        >
                          <Play className="h-10 w-10 text-white" />
                        </motion.div>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-red-100 transition-all duration-100">Start Live Reading</h3>
                      <p className="text-gray-200 mb-6 text-lg font-light group-hover:text-slate-100 transition-all duration-100">
                        Begin real-time lip reading session. See your words appear instantly as you speak with advanced AI processing.
                      </p>
                      <div className="flex items-center justify-center space-x-4 text-sm text-gray-300 mb-6 group-hover:text-slate-200 transition-all duration-100">
                        <div className="flex items-center space-x-1">
                          <Circle className="h-3 w-3 text-red-400 fill-current animate-pulse" />
                          <span>Live</span>
                        </div>
                        <span>•</span>
                        <span>Real-time Processing</span>
                        <span>•</span>
                        <span>95%+ Accuracy</span>
                      </div>
                      <Button className="mt-4 glass-button btn-gradient text-xl px-8 py-4 group-hover:scale-105 transition-all duration-100">
                        <Play className="mr-3 h-6 w-6" />
                        Start Now
                        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-100" />
                      </Button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/0 via-red-500/50 to-green-500/50 opacity-0 group-hover:opacity-100 transition-all duration-150"></div>
                  </div>
                </Link>
              </motion.div>

              {/* Languages Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 800, damping: 30, duration: 0.1 }
                }}
                className="group"
              >
                <Link href="/languages">
                  <div className="glass-card p-8 text-center cursor-pointer h-full relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-all duration-150"></div>
                    <div className="relative z-10">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/40 group-hover:scale-110 transition-all duration-150"></div>
                        <motion.div
                          whileHover={{ 
                            rotate: [0, -10, 10, 0],
                            scale: 1.15,
                            transition: { duration: 0.15 }
                          }}
                          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 group-hover:animate-pulse-glow relative z-10"
                        >
                          <Languages className="h-8 w-8 text-white" />
                        </motion.div>
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight group-hover:text-blue-100 transition-all duration-100">Language Models</h3>
                      <p className="text-gray-200 mb-6 font-light group-hover:text-slate-100 transition-all duration-100">
                        Browse, download, and manage lip-reading models for different languages. Support for 50+ languages with high accuracy AI models.
                      </p>
                      <div className="flex items-center justify-center space-x-2 text-sm text-gray-300 group-hover:text-slate-200 transition-all duration-100">
                        <Download className="h-4 w-4" />
                        <span>Download & Install</span>
                      </div>
                      <Button className="mt-6 glass-button btn-gradient w-full group-hover:scale-105 transition-all duration-100">
                        Explore Languages
                      </Button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-all duration-150"></div>
                  </div>
                </Link>
              </motion.div>

              {/* Settings Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 800, damping: 30, duration: 0.1 }
                }}
                className="group"
              >
                <Link href="/settings">
                  <div className="glass-card p-8 text-center cursor-pointer h-full relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-all duration-150"></div>
                    <div className="relative z-10">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/40 group-hover:scale-110 transition-all duration-150"></div>
                        <motion.div
                          whileHover={{ 
                            rotate: [0, -10, 10, 0],
                            scale: 1.15,
                            transition: { duration: 0.15 }
                          }}
                          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 group-hover:animate-pulse-glow relative z-10"
                        >
                          <Settings className="h-8 w-8 text-white" />
                        </motion.div>
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight group-hover:text-purple-100 transition-all duration-100">Device Settings</h3>
                      <p className="text-gray-200 mb-6 font-light group-hover:text-slate-100 transition-all duration-100">
                        Configure your Raspberry Pi device, camera settings, processing options, and optimize performance for your environment.
                      </p>
                      <div className="flex items-center justify-center space-x-2 text-sm text-gray-300 group-hover:text-slate-200 transition-all duration-100">
                        <Cpu className="h-4 w-4" />
                        <span>Optimize Performance</span>
                      </div>
                      <Button className="mt-6 glass-button btn-gradient w-full group-hover:scale-105 transition-all duration-100">
                        Configure Device
                      </Button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-100 transition-all duration-150"></div>
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
                whileHover={{ 
                  y: -12, 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 25, duration: 0.2 }
                }}
                className="glass-card p-8 text-center group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/40 group-hover:scale-110 transition-all duration-300"></div>
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.15,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Eye className="h-12 w-12 text-blue-400 mx-auto relative z-10 group-hover:text-blue-300 transition-all duration-200" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-all duration-200">Real-time Processing</h3>
                  <p className="text-slate-300 group-hover:text-slate-100 transition-all duration-200 leading-relaxed">
                    Advanced AI models process lip movements in real-time with minimal latency for instant communication.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 25, duration: 0.2 }
                }}
                className="glass-card p-8 text-center group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl group-hover:bg-green-500/40 group-hover:scale-110 transition-all duration-300"></div>
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.15,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Shield className="h-12 w-12 text-green-400 mx-auto relative z-10 group-hover:text-green-300 transition-all duration-200" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-100 transition-all duration-200">Privacy First</h3>
                  <p className="text-slate-300 group-hover:text-slate-100 transition-all duration-200 leading-relaxed">
                    All processing happens locally on your device. No data is sent to external servers, ensuring complete privacy.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 25, duration: 0.2 }
                }}
                className="glass-card p-8 text-center group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl group-hover:bg-yellow-500/40 group-hover:scale-110 transition-all duration-300"></div>
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.15,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Zap className="h-12 w-12 text-yellow-400 mx-auto relative z-10 group-hover:text-yellow-300 transition-all duration-200" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-100 transition-all duration-200">High Accuracy</h3>
                  <p className="text-slate-300 group-hover:text-slate-100 transition-all duration-200 leading-relaxed">
                    State-of-the-art neural networks trained on diverse datasets achieve 95%+ accuracy across multiple languages.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500/0 via-yellow-500/50 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
