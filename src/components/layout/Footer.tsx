'use client';

import { motion } from 'framer-motion';
import { Heart, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-white mb-4"
            >
              Liphera
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/70 max-w-md leading-relaxed"
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
              className="text-white font-semibold mb-4"
            >
              Quick Links
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-all duration-300 px-2 py-1 rounded hover:bg-white/5 block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/languages" className="text-white/70 hover:text-white transition-all duration-300 px-2 py-1 rounded hover:bg-white/5 block">
                  Languages
                </Link>
              </li>
              <li>
                <Link href="/settings" className="text-white/70 hover:text-white transition-all duration-300 px-2 py-1 rounded hover:bg-white/5 block">
                  Settings
                </Link>
              </li>
              <li>
                <Link href="/live" className="text-white/70 hover:text-white transition-all duration-300 px-2 py-1 rounded hover:bg-white/5 block">
                  Live Reading
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-white/70 hover:text-white transition-all duration-300 px-2 py-1 rounded hover:bg-white/5 block">
                  Documentation
                </Link>
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
                { icon: Github, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
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
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/70 mb-4 md:mb-0">
            © 2025 Liphera. All rights reserved.
          </p>
          <div className="flex items-center text-white/70">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-400" />
            <span>for accessibility</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}