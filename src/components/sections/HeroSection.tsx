'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { floatingStacks } from '@/constants/stacks';

import { BlurGlow } from '@/components/ui/BlurGlow';
import { StackBadge } from '@/components/ui/StackBadge';

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

const socialLinks = [
  { href: 'https://github.com/adinfauzan', icon: GithubIcon, label: 'GitHub' },
  {
    href: 'https://linkedin.com/in/adinfauzan',
    icon: LinkedinIcon,
    label: 'LinkedIn',
  },
  { href: 'mailto:hello@adinfauzan.dev', icon: MailIcon, label: 'Email' },
];

export function HeroSection() {
  return (
    <section className='relative flex min-h-screen items-center overflow-hidden'>
      <BlurGlow className='-top-40 -left-40 h-[500px] w-[500px]' />
      <BlurGlow
        className='-bottom-40 -right-40 h-[400px] w-[400px]'
        color='bg-purple-500/8'
      />

      <div className='layout relative w-full'>
        <div className='flex flex-col justify-center md:flex-row md:items-center md:gap-16'>
          <div className='max-w-xl flex-1 pt-32 md:pt-0'>
            <motion.div
              initial='hidden'
              animate='show'
              variants={{
                show: { transition: { staggerChildren: 0.12 } },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className='mb-4 text-sm text-gray-500'
              >
                hello world!
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className='mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm'
              >
                <span className='relative flex h-2 w-2'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
                  <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
                </span>
                <span className='text-xs text-gray-400'>Open for Work</span>
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className='text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl'
              >
                Adin Fauzan
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.1 },
                  },
                }}
                className='mt-4 max-w-xl text-lg leading-relaxed text-gray-400 sm:text-xl'
              >
                Fullstack Developer crafting scalable
                <br />
                and modern web experiences.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.15 },
                  },
                }}
                className='mt-3 max-w-lg text-sm leading-relaxed text-gray-500'
              >
                Focused on modern frontend architecture, clean UI systems, and
                developer experience.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.25 },
                  },
                }}
                className='mt-8 flex flex-wrap items-center gap-4'
              >
                <Link
                  href='/projects'
                  className='inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-indigo-500'
                >
                  View Projects
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  href='/about'
                  className='inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-gray-300 transition-all hover:border-white/40 hover:text-white'
                >
                  Contact Me
                </Link>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { duration: 0.6, delay: 0.35 },
                  },
                }}
                className='mt-8 flex items-center gap-4'
              >
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm text-gray-500 transition-colors hover:text-white'
                    aria-label={s.label}
                  >
                    <s.icon />
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className='relative mt-16 hidden h-96 w-full md:mt-0 md:block md:flex-1'>
            {floatingStacks.map((stack, i) => {
              const positions = [
                { top: '10%', right: '20%' },
                { top: '25%', right: '60%' },
                { top: '50%', right: '30%' },
                { top: '70%', right: '55%' },
                { top: '85%', right: '15%' },
              ];
              return (
                <div key={stack} className='absolute' style={positions[i]}>
                  <StackBadge label={stack} index={i} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
