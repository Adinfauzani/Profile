'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri';

import { cn } from '@/lib/utils';

import { socialLinks } from '@/data/socials';

import { ThemeToggle } from './ThemeToggle';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: RiGithubFill,
  linkedin: RiLinkedinFill,
  twitter: RiTwitterXFill,
};

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#stack', label: 'Stack' },
  { href: '#blog', label: 'Blog' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-gray-800/50'
          : 'bg-transparent',
      )}
    >
      <div className='mx-auto w-11/12 max-w-6xl'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <a href='#' className='text-xl font-bold text-white'>
            AF
          </a>

          {/* Desktop Nav */}
          <div className='hidden items-center gap-8 md:flex'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='text-sm text-gray-400 transition-colors hover:text-white'
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className='flex items-center gap-4'>
            <ThemeToggle />
            {/* Social Icons - Desktop */}
            <div className='hidden gap-4 md:flex'>
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 transition-colors hover:text-indigo-400'
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              className='md:hidden text-gray-400'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label='Toggle menu'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className='border-t border-gray-800 bg-black/95 md:hidden'
        >
          <div className='flex flex-col p-4 gap-4'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='text-gray-400 hover:text-white'
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className='flex gap-4 pt-2'>
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-indigo-400'
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
