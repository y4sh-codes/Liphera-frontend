'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
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
      const scrollDirection = scrollPosition > lastScrollY ? 'down' : 'up';
      
      setIsScrolled(scrollPosition > 20);
      
      // Collapse navbar when scrolling down past 100px
      if (scrollPosition > 100 && scrollDirection === 'down') {
        setIsCollapsed(true);
        setNavOpacity(0);
        setNavScale(0.8);
        setIsMobileMenuOpen(false);
        setShowBorder(false); // Hide border when collapsing
      } 
      // Start expanding immediately when scrolling up
      else if (scrollDirection === 'up' && scrollPosition > 20) {
        // Calculate how much we've scrolled up from when we started scrolling up
        const maxScroll = 100; // Maximum scroll where we're fully collapsed
        const currentProgress = Math.max(0, Math.min(1, (maxScroll - scrollPosition) / maxScroll));
        
        // Progressive expansion based on scroll position
        setNavOpacity(currentProgress);
        setNavScale(0.8 + (0.2 * currentProgress));
        
        // Fully expand when close to top or when we've made significant progress
        if (scrollPosition < 50 || currentProgress > 0.8) {
          setIsCollapsed(false);
          setNavOpacity(1);
          setNavScale(1);
          setShowBorder(scrollPosition > 50); // Only show border when fully expanded and scrolled
        }
      }
      // Ensure fully expanded when at top
      else if (scrollPosition < 20) {
        setIsCollapsed(false);
        setNavOpacity(1);
        setNavScale(1);
        setShowBorder(false); // No border at top
      }
      
      setLastScrollY(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled 
          ? 'glass-nav shadow-2xl shadow-black/50' 
          : 'bg-transparent'
      }`}
      style={{
        borderBottom: showBorder ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced styling */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold transition-all duration-500 ease-out ${
              isScrolled 
                ? 'text-white drop-shadow-lg' 
                : 'text-white'
            }`}
          >
            Liphera
          </motion.div>

          {/* Desktop Navigation with progressive expansion */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            animate={{ 
              opacity: isCollapsed ? navOpacity : 1,
              x: isCollapsed ? (navOpacity === 0 ? 50 : 50 * (1 - navOpacity)) : 0,
              scale: isCollapsed ? navScale : (isScrolled ? 1.02 : 1)
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ pointerEvents: (isCollapsed && navOpacity < 0.5) ? 'none' : 'auto' }}
          >
            <NavLink href="/" icon={Home}>Home</NavLink>
            <NavLink href="/languages" icon={Download}>Languages</NavLink>
            <NavLink href="/settings" icon={Settings}>Settings</NavLink>
            <NavLink href="/live" icon={Play}>Live Reading</NavLink>
          </motion.div>

          {/* Collapsed Menu Button with progressive fade */}
          <motion.div
            className={`hidden md:flex items-center justify-center w-10 h-10 rounded-lg glass-button transition-all duration-300`}
            animate={{ 
              opacity: isCollapsed ? (1 - navOpacity) : 0,
              scale: isCollapsed ? (0.8 + 0.2 * (1 - navOpacity)) : 0
            }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: isCollapsed && navOpacity < 0.5 ? 'auto' : 'none' }}
          >
            <Menu className="h-5 w-5 text-white" />
          </motion.div>

          {/* Mobile Menu Button with enhanced styling */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden text-white p-2 rounded-lg transition-all duration-300 ${
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

        {/* Mobile Menu (for actual mobile devices only) */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden mt-4 py-6 border-t border-white/10 glass-card rounded-lg mx-4 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-60"></div>
            <div className="flex flex-col space-y-2 relative z-10">
              <MobileNavLink href="/" icon={Home}>Home</MobileNavLink>
              <MobileNavLink href="/languages" icon={Download}>Languages</MobileNavLink>
              <MobileNavLink href="/settings" icon={Settings}>Settings</MobileNavLink>
              <MobileNavLink href="/live" icon={Play}>Live Reading</MobileNavLink>
            </div>
            <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-400/0 via-blue-400/40 to-purple-400/0"></div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon: React.ComponentType<{ size?: number; className?: string }>;
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
        className="flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-200 px-3 py-2 rounded-lg glass-button-nav group cursor-pointer relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        <Icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-150 relative z-10" />
        <span className="font-medium relative z-10">{children}</span>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/0 via-blue-400/60 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </motion.div>
    </Link>
  );
}

function MobileNavLink({ href, children, icon: Icon }: NavLinkProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ 
          x: 8, 
          scale: 1.02,
          transition: { type: "spring", stiffness: 400, damping: 25, duration: 0.15 }
        }}
        className="flex items-center space-x-3 text-white/80 hover:text-white transition-all duration-200 cursor-pointer px-4 py-3 rounded-lg glass-button-nav group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        <Icon size={20} className="group-hover:scale-110 transition-transform duration-150 relative z-10" />
        <span className="relative z-10">{children}</span>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400/0 via-blue-400/60 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </motion.div>
    </Link>
  );
}