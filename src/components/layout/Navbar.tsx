'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { navLinks } from '@/constants/navigation';
import { socialLinks } from '@/constants/socials';

import { cn } from '@/lib/utils';

import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav className='fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4'>
      <motion.div
        className={cn(
          'mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-6 backdrop-blur-xl transition-all duration-500',
          scrolled ? 'py-2' : 'py-3',
        )}
        animate={{
          backdropFilter: scrolled ? 'blur(24px)' : 'blur(16px)',
        }}
      >
        <Link href='/' className='text-lg font-bold text-white'>
          AF
        </Link>

        <div className='hidden items-center gap-1 md:flex'>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:text-white',
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className='hidden items-center gap-3 md:flex'>
          {socialLinks.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 transition-colors hover:text-white'
                aria-label={s.label}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className='text-gray-400 md:hidden'
          aria-label='Toggle menu'
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </nav>
  );
}
