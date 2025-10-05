'use client';

import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative py-12 sm:py-16 lg:py-20 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4"
            >
              Liphera
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/70 max-w-md leading-relaxed text-sm sm:text-base"
            >
              Revolutionary AI-powered lip reading technology for Raspberry Pi. 
              Making communication accessible through cutting-edge computer vision and machine learning.
            </motion.p>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg"
            >
              Quick Links
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <li>
                <motion.div
                  whileHover={{ 
                    x: 4, 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400, damping: 25, duration: 0.15 }
                  }}
                  className="motion-safe-only hover-none"
                >
                  <Link href="/" className="text-white/70 hover:text-white transition-all duration-200 px-3 py-2 rounded-lg glass-button-footer block group relative overflow-hidden touch-target text-sm sm:text-base">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <span className="relative z-10">Home</span>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ 
                    x: 4, 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400, damping: 25, duration: 0.15 }
                  }}
                  className="motion-safe-only hover-none"
                >
                  <Link href="/languages" className="text-white/70 hover:text-white transition-all duration-200 px-3 py-2 rounded-lg glass-button-footer block group relative overflow-hidden touch-target text-sm sm:text-base">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <span className="relative z-10">Languages</span>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400/0 via-purple-400/50 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ 
                    x: 4, 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400, damping: 25, duration: 0.15 }
                  }}
                  className="motion-safe-only hover-none"
                >
                  <Link href="/settings" className="text-white/70 hover:text-white transition-all duration-200 px-3 py-2 rounded-lg glass-button-footer block group relative overflow-hidden touch-target text-sm sm:text-base">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <span className="relative z-10">Settings</span>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400/0 via-green-400/50 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ 
                    x: 4, 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400, damping: 25, duration: 0.15 }
                  }}
                  className="motion-safe-only hover-none"
                >
                  <Link href="/live" className="text-white/70 hover:text-white transition-all duration-200 px-3 py-2 rounded-lg glass-button-footer block group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <span className="relative z-10">Live Reading</span>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-400/0 via-red-400/50 to-red-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ 
                    x: 4, 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400, damping: 25, duration: 0.15 }
                  }}
                >
                  <Link href="/documentation" className="text-white/70 hover:text-white transition-all duration-200 px-3 py-2 rounded-lg glass-button-footer block group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <span className="relative z-10">Documentation</span>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-400/50 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </Link>
                </motion.div>
              </li>
            </motion.ul>
          </div>

          {/* Connect */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white font-semibold mb-4"
            >
              Connect
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex space-x-4"
            >
              {[
                { icon: Github, href: 'https://github.com/y4sh-codes/Liphera-frontend.git' },
                { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=yashrajsingh231105@gmail.com' },
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel={href !== '#' ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg glass-button"
                >
                  <Icon className="h-5 w-5 text-white" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="border-t border-white/10 pt-8 flex justify-center items-center"
        >
          <p className="text-white/70">
            © 2025 Liphera. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}