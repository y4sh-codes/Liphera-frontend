'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Download, Settings, Home } from 'lucide-react';
import Link from 'next/link';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gradient-purple"
          >
            Liphera
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" icon={Home}>Home</NavLink>
            <NavLink href="/languages" icon={Download}>Languages</NavLink>
            <NavLink href="/settings" icon={Settings}>Settings</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-white/10"
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/" icon={Home}>Home</MobileNavLink>
              <MobileNavLink href="/languages" icon={Download}>Languages</MobileNavLink>
              <MobileNavLink href="/settings" icon={Settings}>Settings</MobileNavLink>
            </div>
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
        whileHover={{ y: -2 }}
        className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors cursor-pointer"
      >
        <Icon size={16} />
        <span>{children}</span>
      </motion.div>
    </Link>
  );
}

function MobileNavLink({ href, children, icon: Icon }: NavLinkProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ x: 5 }}
        className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors cursor-pointer"
      >
        <Icon size={20} />
        <span>{children}</span>
      </motion.div>
    </Link>
  );
}