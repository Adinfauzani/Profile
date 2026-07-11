'use client';

import { motion } from 'framer-motion';
import { FileText, Globe, Laptop, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

import { MobileMenu } from './MobileMenu';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/projects', label: 'Projects' },
];

const largeCards = [
  {
    title: 'Digital Lab',
    subtitle: 'Workspace',
    href: '/labs',
    gradient: 'from-slate-900 via-blue-950 to-slate-900',
    glow: 'rgba(79,163,209,0.25)',
    image: '/images/cards/digilab.jpg',
  },
  {
    title: 'Guest Book',
    subtitle: 'Leave me a message',
    href: '/guestbook',
    gradient: 'from-slate-900 via-purple-950 to-slate-900',
    glow: 'rgba(168,85,247,0.25)',
    image: '/images/Guest.webp',
  },
  {
    title: 'Roadmap',
    subtitle: 'Current vision',
    href: '/roadmap',
    gradient: 'from-slate-900 via-amber-950 to-slate-900',
    glow: 'rgba(245,158,11,0.25)',
    image: '/images/cards/roadmap.jpg',
  },
];

const rightCards = [
  {
    title: 'Statik Web',
    subtitle: 'Quick snippets',
    href: '/shorts',
    icon: Globe,
    gradient: 'from-cyan-950/20 via-slate-900/10 to-slate-900',
    glow: 'rgba(79,163,209,0.15)',
  },
  {
    title: 'Uses',
    subtitle: 'My workspace',
    href: '/uses',
    icon: Laptop,
    gradient: 'from-blue-950/20 via-slate-900/10 to-slate-900',
    glow: 'rgba(79,163,209,0.15)',
  },
  {
    title: 'Short',
    subtitle: 'Quick reads',
    href: '/shorts',
    icon: FileText,
    gradient: 'from-purple-950/15 via-slate-900/10 to-slate-900',
    glow: 'rgba(79,163,209,0.15)',
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const panelRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    setScrolled(currentScrollY > 20);

    // Hide navbar when scrolling down, show when scrolling up
    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const isMoreActive = [...largeCards, ...rightCards].some(
    (l) => 'href' in l && pathname === l.href,
  );

  return (
    <motion.nav
      className='fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4'
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -120 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className='relative w-fit'>
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
            {navItems.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'inline-flex items-center gap-1.5 px-4 py-1 text-sm font-mono font-medium transition-colors',
                    isActive
                      ? 'text-blue-400'
                      : 'text-[#a3a3a3] hover:text-white',
                  )}
                >
                  {label}
                </Link>
              );
            })}

            <div className='relative'>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className={cn(
                  'inline-flex items-center gap-1.5 px-4 py-1 text-sm font-mono font-medium transition-colors',
                  isMoreActive || moreOpen
                    ? 'text-blue-400'
                    : 'text-[#a3a3a3] hover:text-white',
                )}
              >
                More
              </button>
            </div>
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
            className='absolute left-1/2 top-full mt-3 w-[800px] -translate-x-1/2 rounded-2xl border px-4 pb-4 pt-4 shadow-lg'
            style={{
              backgroundColor: 'rgba(10,10,10,.82)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderColor: 'rgba(255,255,255,.08)',
            }}
          >
            <div
              className='grid gap-2'
              style={{ gridTemplateColumns: '2.8fr 1fr' }}
            >
              <div
                className='grid gap-2'
                style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
              >
                {largeCards.map((card) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    onClick={() => setMoreOpen(false)}
                    className='group min-w-0'
                  >
                    <div
                      className={cn(
                        'relative flex aspect-square items-end justify-start overflow-hidden rounded-2xl border border-white/[0.06] pb-4 pl-4',
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
                      {card.image && (
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className='absolute inset-0 object-cover'
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        />
                      )}
                      <div
                        className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent'
                        style={{ backdropFilter: 'blur(1px)' }}
                      />
                      <div className='relative flex flex-col items-start px-0 text-left'>
                        <h3 className='font-mono text-xs font-semibold text-white transition-transform duration-300 group-hover:-translate-y-0.5 drop-shadow-md'>
                          {card.title}
                        </h3>
                        <p className='font-mono text-[9px] text-gray-300 drop-shadow-md'>
                          {card.subtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className='flex flex-col items-start justify-start gap-1.5 pr-0'>
                {rightCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <Link
                      key={card.title}
                      href={card.href}
                      onClick={() => setMoreOpen(false)}
                      className='group w-full'
                      style={{ minWidth: '160px' }}
                    >
                      <div
                        className={cn(
                          'relative flex w-full items-center justify-start overflow-hidden rounded-xl border border-white/[0.06] px-4',
                          'hover:-translate-y-0.5',
                        )}
                        style={{
                          height: '56px',
                          boxShadow: `0 0 0 0 transparent`,
                          transition:
                            'box-shadow 0.3s ease, transform 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `0 0 24px -6px ${card.glow}`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = `0 0 0 0 transparent`;
                        }}
                      >
                        <div
                          className={cn(
                            'absolute inset-0 bg-gradient-to-br transition-opacity duration-300 group-hover:opacity-100',
                            card.gradient,
                          )}
                        />
                        <div className='absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent' />
                        <div
                          className='absolute inset-0 opacity-40'
                          style={{
                            background:
                              'radial-gradient(circle at 30% 50%, rgba(79, 163, 209, 0.08) 0%, transparent 70%)',
                          }}
                        />
                        <div className='relative flex items-center gap-2.5'>
                          <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm'>
                            <Icon size={14} className='text-gray-200' />
                          </div>
                          <div className='min-w-0'>
                            <h4 className='font-mono text-xs font-semibold text-white transition-transform duration-200 group-hover:-translate-y-0.5 drop-shadow'>
                              {card.title}
                            </h4>
                            <p className='font-mono truncate text-[8px] text-gray-300 drop-shadow'>
                              {card.subtitle}
                            </p>
                          </div>
                        </div>
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
    </motion.nav>
  );
}
