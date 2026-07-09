'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  FileText,
  FolderGit2,
  Home,
  Menu,
  MessageCircle,
  MoreHorizontal,
  User,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

import { MobileMenu } from './MobileMenu';

function GithubIcon() {
  return (
    <svg width='15' height='15' viewBox='0 0 24 24' fill='currentColor'>
      <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width='15' height='15' viewBox='0 0 24 24' fill='currentColor'>
      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width='15'
      height='15'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='20' height='16' x='2' y='4' rx='2' />
      <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
    </svg>
  );
}

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/blogs', label: 'Blogs', icon: FileText },
  { href: '/projects', label: 'Projects', icon: FolderGit2 },
];

const largeCards = [
  {
    title: 'Digital Lab',
    subtitle: 'Workspace',
    href: '/uses',
    gradient: 'from-slate-900 via-blue-950 to-slate-900',
    glow: 'rgba(79,163,209,0.25)',
  },
  {
    title: 'Soraku',
    subtitle: "Projects I'm building",
    href: '/projects',
    gradient: 'from-slate-900 via-purple-950 to-slate-900',
    glow: 'rgba(168,85,247,0.25)',
  },
  {
    title: 'Roadmap',
    subtitle: 'Current vision',
    href: '/about',
    gradient: 'from-slate-900 via-amber-950 to-slate-900',
    glow: 'rgba(245,158,11,0.25)',
  },
];

const compactCards = [
  {
    title: 'Blog',
    subtitle: 'Latest Posts',
    icon: BookOpen,
    href: '/blogs',
    accent: 'text-blue-400',
  },
  {
    title: 'Guestbook',
    subtitle: 'Leave message',
    icon: MessageCircle,
    href: '/guestbook',
    accent: 'text-purple-400',
  },
  {
    title: 'Contact',
    subtitle: "Let's build",
    icon: MailIcon,
    href: 'mailto:hello@adinfauzan.dev',
    accent: 'text-green-400',
  },
];

const rightButtons = [
  { href: 'mailto:hello@adinfauzan.dev', icon: MailIcon, label: 'Email' },
  { href: 'https://github.com/adinfauzan', icon: GithubIcon, label: 'GitHub' },
  {
    href: 'https://linkedin.com/in/adinfauzan',
    icon: LinkedinIcon,
    label: 'LinkedIn',
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const moreTimeoutRef = useRef<number | undefined>(undefined);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const isMoreActive = [...largeCards, ...compactCards].some(
    (l) => 'href' in l && pathname === l.href,
  );

  const handleMouseEnter = () => {
    if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
    setMoreOpen(true);
  };

  const handleMouseLeave = () => {
    moreTimeoutRef.current = window.setTimeout(() => setMoreOpen(false), 150);
  };

  return (
    <nav className='fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4'>
      <div
        className='relative w-fit'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className={cn(
            'mx-auto flex w-auto items-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl transition-all duration-500',
            scrolled ? 'py-1.5' : 'py-2',
          )}
          animate={{
            backdropFilter: scrolled ? 'blur(24px)' : 'blur(16px)',
          }}
        >
          <div className='hidden items-center md:flex'>
            {navItems.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'inline-flex items-center gap-1.5 px-4 py-1 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-blue-400'
                      : 'text-[#a3a3a3] hover:text-white',
                  )}
                >
                  <Icon size={14} />
                  {label}
                </Link>
              );
            })}

            <div className='relative'>
              <button
                className={cn(
                  'inline-flex items-center gap-1.5 px-4 py-1 text-sm font-medium transition-colors',
                  isMoreActive || moreOpen
                    ? 'text-blue-400'
                    : 'text-[#a3a3a3] hover:text-white',
                )}
              >
                <MoreHorizontal size={14} />
                More
              </button>
            </div>
          </div>

          <div className='mx-3 h-4 w-px bg-[#525252] hidden md:block' />

          <div className='hidden items-center gap-3 pr-4 md:flex'>
            {rightButtons.map((btn) => {
              const Icon = btn.icon;
              return (
                <a
                  key={btn.label}
                  href={btn.href}
                  target={btn.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    btn.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className='text-gray-500 transition-colors hover:text-white'
                  aria-label={btn.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className='flex items-center gap-2 px-4 py-1 text-gray-400 md:hidden'
            aria-label='Toggle menu'
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            <span className='text-xs font-medium'>Menu</span>
          </button>
        </motion.div>

        {moreOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className='absolute left-0 right-0 top-full mt-3 rounded-2xl border p-6 shadow-lg'
            style={{
              backgroundColor: 'rgba(10,10,10,.82)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderColor: 'rgba(255,255,255,.08)',
            }}
          >
            <div
              className='grid gap-6'
              style={{ gridTemplateColumns: '2.8fr 1fr' }}
            >
              <div
                className='grid gap-4'
                style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
              >
                {largeCards.map((card) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    onClick={() => setMoreOpen(false)}
                    className='group'
                  >
                    <div
                      className={cn(
                        'relative flex h-[200px] items-end justify-start overflow-hidden rounded-2xl border border-white/[0.06] pb-4 pl-4',
                        'hover:-translate-y-0.5',
                      )}
                      style={{
                        boxShadow: `0 0 0 0 transparent`,
                        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 40px -8px ${card.glow}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 0 0 transparent`;
                      }}
                    >
                      <div
                        className={cn(
                          'absolute inset-0 bg-gradient-to-br transition-opacity duration-300 group-hover:opacity-80',
                          card.gradient,
                        )}
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent' />
                      <div className='relative flex flex-col items-start px-0 text-left'>
                        <h3 className='text-xs font-semibold text-white transition-transform duration-300 group-hover:-translate-y-0.5'>
                          {card.title}
                        </h3>
                        <p className='text-[9px] text-gray-400'>
                          {card.subtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className='flex flex-col gap-2'>
                {compactCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <Link
                      key={card.title}
                      href={card.href}
                      onClick={() => setMoreOpen(false)}
                      target={
                        card.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        card.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className='group flex items-center gap-3 rounded-xl border border-transparent px-3 transition-all duration-200 hover:border-white/[0.06] hover:bg-white/[0.03]'
                      style={{ height: '60px' }}
                    >
                      <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]'>
                        <Icon size={16} className={card.accent} />
                      </div>
                      <div className='min-w-0'>
                        <h4 className='text-sm font-medium text-white transition-transform duration-200 group-hover:-translate-y-0.5'>
                          {card.title}
                        </h4>
                        <p className='truncate text-xs text-gray-500'>
                          {card.subtitle}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </nav>
  );
}
