'use client';

import {
  BookOpen,
  FileText,
  FolderGit2,
  Home,
  ListChecks,
  Monitor,
  PlaySquare,
  User,
} from 'lucide-react';
import Link from 'next/link';

import { socialLinks } from '@/constants/socials';

function GithubIcon() {
  return (
    <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
      <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width='18'
      height='18'
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

const mainNav = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/blogs', label: 'Blogs', icon: FileText },
  { href: '/projects', label: 'Projects', icon: FolderGit2 },
];

const exploreLinks = [
  { href: '/shorts', label: 'Shorts', icon: PlaySquare },
  { href: '/guestbook', label: 'Guestbook', icon: BookOpen },
  { href: '/uses', label: 'Uses', icon: Monitor },
  { href: '/bucket-list', label: 'Bucket List', icon: ListChecks },
];

export function Footer() {
  return (
    <footer className='border-t border-white/[0.05] bg-black/30'>
      {/* Desktop layout */}
      <div className='mx-auto hidden max-w-[1200px] px-8 py-20 md:block'>
        <div className='grid grid-cols-4 gap-12'>
          <div>
            <h3 className='text-sm font-bold text-white'>Adin Fauzan</h3>
            <p className='mt-2 text-[13px] leading-relaxed text-gray-500'>
              Fullstack developer crafting digital experiences with clean code
              and thoughtful design.
            </p>
          </div>
          <div>
            <h4 className='mb-4 text-[11px] font-mono font-semibold tracking-[0.15em] uppercase text-gray-600'>
              Navigation
            </h4>
            <ul className='space-y-2.5'>
              {mainNav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className='text-[14px] text-gray-400 transition-colors hover:text-white'
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='mb-4 text-[11px] font-mono font-semibold tracking-[0.15em] uppercase text-gray-600'>
              Explore
            </h4>
            <ul className='space-y-2.5'>
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className='text-[14px] text-gray-400 transition-colors hover:text-white'
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='mb-4 text-[11px] font-mono font-semibold tracking-[0.15em] uppercase text-gray-600'>
              Connect
            </h4>
            <div className='flex items-center gap-3'>
              <a
                href='mailto:hello@adinfauzan.dev'
                className='flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.06] text-gray-500 transition-colors hover:border-white/20 hover:text-white'
                aria-label='Email'
              >
                <MailIcon />
              </a>
              <a
                href='https://github.com/adinfauzan'
                target='_blank'
                rel='noopener noreferrer'
                className='flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.06] text-gray-500 transition-colors hover:border-white/20 hover:text-white'
                aria-label='GitHub'
              >
                <GithubIcon />
              </a>
              <a
                href='https://linkedin.com/in/adinfauzan'
                target='_blank'
                rel='noopener noreferrer'
                className='flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.06] text-gray-500 transition-colors hover:border-white/20 hover:text-white'
                aria-label='LinkedIn'
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
        <div className='mt-16 border-t border-white/[0.04] pt-6 text-center text-[12px] font-mono text-gray-600'>
          &copy; {new Date().getFullYear()} Adin Fauzan. All rights reserved.
        </div>
      </div>

      {/* Mobile layout */}
      <div className='md:hidden'>
        <div className='px-6 pb-8 pt-10'>
          <div className='mb-6'>
            <h3 className='text-sm font-bold text-white'>Adin Fauzan</h3>
            <p className='mt-1 text-[13px] leading-relaxed text-gray-500'>
              Fullstack developer crafting digital experiences with clean code
              and thoughtful design.
            </p>
          </div>

          <div className='space-y-1'>
            <p className='mb-2 text-[11px] font-mono font-semibold tracking-[0.15em] uppercase text-gray-600'>
              Navigation
            </p>
            {mainNav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className='font-mono flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-400 transition-colors hover:text-white active:bg-white/[0.03]'
              >
                <l.icon size={17} />
                {l.label}
              </Link>
            ))}
          </div>

          <div className='mt-4 space-y-1'>
            <p className='mb-2 text-[11px] font-mono font-semibold tracking-[0.15em] uppercase text-gray-600'>
              Explore
            </p>
            {exploreLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className='font-mono flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-400 transition-colors hover:text-white active:bg-white/[0.03]'
              >
                <l.icon size={17} />
                {l.label}
              </Link>
            ))}
          </div>

          <div className='mt-6 flex items-center gap-3'>
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    s.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className='flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.06] text-gray-500 transition-colors hover:border-white/20 hover:text-white'
                  aria-label={s.label}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div className='border-t border-white/[0.04] px-6 py-5 text-center text-[12px] font-mono text-gray-600'>
          &copy; {new Date().getFullYear()} Adin Fauzan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
