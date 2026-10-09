'use client';

import {
  BookOpen,
  File,
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
      <div className='mx-auto max-w-[1200px] px-6 pt-12 pb-32 md:px-8 md:py-20'>
        <div className='grid gap-10 md:grid-cols-2 md:gap-16'>
          {/* Column 1 — Brand + Socials */}
          <div>
            <h3 className='text-sm font-bold text-white'>Adin Fauzan</h3>
            <p className='mt-2 max-w-sm text-[13px] leading-relaxed text-gray-500'>
              Fullstack developer crafting digital experiences with clean code
              and thoughtful design.
            </p>
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
              <span className='text-gray-700'>|</span>
              <a
                href='/resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.06] text-gray-500 transition-colors hover:border-white/20 hover:text-white'
                aria-label='CV'
              >
                <File size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 — Links */}
          <div className='grid grid-cols-2 gap-8'>
            <div>
              <h4 className='mb-3 text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-gray-600'>
                Navigation
              </h4>
              <ul>
                {mainNav.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className='flex items-center gap-2.5 py-1.5 text-[14px] text-gray-400 transition-colors hover:text-white'
                    >
                      <l.icon size={16} className='text-gray-600' />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className='mb-3 text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-gray-600'>
                Explore
              </h4>
              <ul>
                {exploreLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className='flex items-center gap-2.5 py-1.5 text-[14px] text-gray-400 transition-colors hover:text-white'
                    >
                      <l.icon size={16} className='text-gray-600' />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-12 border-t border-white/[0.04] pt-6 text-center text-[12px] font-mono text-gray-600'>
          &copy; {new Date().getFullYear()} Adin Fauzan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
