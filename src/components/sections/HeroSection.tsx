'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, File } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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

function InstagramIcon() {
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
      <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
      <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
      <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
    </svg>
  );
}

const socialLinks = [
  { href: 'https://github.com/adinfauzani', icon: GithubIcon, label: 'GitHub' },
  {
    href: 'https://linkedin.com/in/adinfauzani',
    icon: LinkedinIcon,
    label: 'LinkedIn',
  },
  { href: 'mailto:hello@adinfauzan.dev', icon: MailIcon, label: 'Email' },
  {
    href: 'https://instagram.com/adinfauzani',
    icon: InstagramIcon,
    label: 'Instagram',
  },
  { href: 'https://x.com/adinfauzani', icon: TwitterIcon, label: 'Twitter' },
];

export function HeroSection() {
  return (
    <section className='relative flex min-h-[60vh] items-start md:min-h-screen md:items-center overflow-hidden'>
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[150px]' />
        <div className='absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-500/8 blur-[150px]' />
      </div>

      <div className='layout relative w-full'>
        <div className='flex flex-col-reverse items-center gap-8 md:flex-row md:gap-16 lg:gap-24'>
          <div className='w-full flex-1 pt-24 md:pt-0'>
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
              ></motion.div>

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
                <span className='font-mono text-xs text-gray-400'>
                  Open for Work
                </span>
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
                  className='btn-pixel-primary font-mono inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white'
                >
                  View Projects
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  href='/about'
                  className='btn-pixel font-mono inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-300'
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
                <span className='text-gray-600 text-sm'>|</span>
                <a
                  href='/resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-white'
                >
                  <File size={16} />
                  Resume
                </a>
              </motion.div>
            </motion.div>
          </div>

          <div className='relative hidden w-full flex-1 items-center justify-center pt-20 md:flex md:pt-12'>
            <div
              className='absolute flex items-center justify-center'
              style={{ inset: '-100px' }}
            >
              <div className='h-[600px] w-[600px] rounded-full bg-indigo-500/15 blur-[150px] md:h-[800px] md:w-[800px]' />
            </div>

            <div className='relative z-10'>
              <Image
                src='/images/hero.png'
                alt='Adin Fauzan'
                width={500}
                height={500}
                className='relative h-auto w-80 object-contain sm:w-96 md:w-[28rem] lg:w-[32rem]'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
