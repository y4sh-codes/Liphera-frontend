'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Settings, Home, Play } from 'lucide-react';
import Link from 'next/link';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBorder, setShowBorder] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [navOpacity, setNavOpacity] = useState(1);
  const [navScale, setNavScale] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      setIsScrolled(scrollPosition > 20);
      
      // Only apply collapse behavior on desktop (md and above)
      const isDesktop = window.innerWidth >= 768;
      
      if (isDesktop) {
        // Always show hamburger on desktop
        setIsCollapsed(true);
        setShowBorder(scrollPosition > 20);
      } else {
        // On mobile, keep navbar simple
        setIsCollapsed(false);
        setShowBorder(scrollPosition > 20);
      }
      
      setLastScrollY(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Handle resize events
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [lastScrollY]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mobile-nav-backdrop md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled 
            ? 'glass-nav shadow-2xl shadow-black/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo with enhanced styling */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`text-xl sm:text-2xl font-bold transition-all duration-500 ease-out ${
                isScrolled 
                  ? 'text-white drop-shadow-lg' 
                  : 'text-white'
              }`}
            >
              Liphera
            </motion.div>

            {/* Desktop Navigation - smooth transition between links and hamburger */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <AnimatePresence mode="wait">
                {!isCollapsed ? (
                  <motion.div
                    key="nav-links"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex items-center space-x-6 lg:space-x-8"
                  >
                    <NavLink href="/" icon={Home}>Home</NavLink>
                    <NavLink href="/languages" icon={Download}>Languages</NavLink>
                    <NavLink href="/settings" icon={Settings}>Settings</NavLink>
                    <NavLink href="/live" icon={Play}>Live Reading</NavLink>
                  </motion.div>
                ) : (
                  <motion.div
                    key="hamburger"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex items-center justify-center w-10 h-10 rounded-lg glass-button transition-all duration-300 touch-target cursor-pointer"
                    onClick={() => setIsCollapsed(false)}
                  >
                    <Menu className="h-5 w-5 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button with enhanced styling */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className={`md:hidden text-white p-2 rounded-lg transition-all duration-300 touch-target ${
                isScrolled ? 'bg-white/10 backdrop-blur-sm' : 'hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel (slide from right) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-nav-panel md:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 pt-20">
              <div className="space-responsive-md">
                <MobileNavLink href="/" icon={Home} onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </MobileNavLink>
                <MobileNavLink href="/languages" icon={Download} onClick={() => setIsMobileMenuOpen(false)}>
                  Languages
                </MobileNavLink>
                <MobileNavLink href="/settings" icon={Settings} onClick={() => setIsMobileMenuOpen(false)}>
                  Settings
                </MobileNavLink>
                <MobileNavLink href="/live" icon={Play} onClick={() => setIsMobileMenuOpen(false)}>
                  Live Reading
                </MobileNavLink>
              </div>
              <div className="mt-8 pt-8">
                <p className="text-sm text-gray-400 text-center">
                  Liphera v1.0
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  onClick?: () => void;
}

function NavLink({ href, children, icon: Icon }: NavLinkProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ 
          y: -4, 
          scale: 1.05,
          transition: { type: "spring", stiffness: 400, damping: 25, duration: 0.15 }
        }}
        className="flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-200 px-3 py-2 rounded-lg glass-button-nav group cursor-pointer relative overflow-hidden touch-target"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        <Icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-150 relative z-10" />
        <span className="font-medium relative z-10 text-sm lg:text-base">{children}</span>
      </motion.div>
    </Link>
  );
}

function MobileNavLink({ href, children, icon: Icon, onClick }: NavLinkProps) {
  return (
    <Link href={href} onClick={onClick}>
      <motion.div
        whileHover={{ 
          x: 8, 
          scale: 1.02,
          transition: { type: "spring", stiffness: 400, damping: 25, duration: 0.15 }
        }}
        className="flex items-center space-x-4 text-white/80 hover:text-white transition-all duration-200 cursor-pointer px-4 py-4 rounded-lg glass-button-nav group relative overflow-hidden touch-target"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        <Icon size={24} className="group-hover:scale-110 transition-transform duration-150 relative z-10 flex-shrink-0" />
        <span className="relative z-10 text-lg font-medium">{children}</span>
      </motion.div>
    </Link>
  );
}