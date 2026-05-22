'use client';

import { motion } from 'framer-motion';
import { ArrowDownRight, Mail } from 'lucide-react';
import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri';

import { fadeInUp } from '@/lib/motion';

import { GlassButton } from '@/components/glass/GlassButton';
import { GlassContainer } from '@/components/glass/GlassContainer';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/adinfauzan',
    icon: RiGithubFill,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/adinfauzan',
    icon: RiTwitterXFill,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/adinfauzan',
    icon: RiLinkedinFill,
  },
  {
    label: 'Email',
    href: 'mailto:hello@adinfauzan.dev',
    icon: Mail,
  },
];

export function HeroSection() {
  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden pt-16'>
      <div className='absolute inset-0 -z-10'>
        <div className='absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-indigo-500/20 blur-[120px] filter' />
        <div className='absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-500/20 blur-[100px] filter' />
        <div className='absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[80px] filter' />
      </div>

      <div className='layout'>
        <motion.div
          initial='hidden'
          animate='show'
          variants={{
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className='flex flex-col items-center gap-8 text-center'
        >
          <motion.div variants={fadeInUp}>
            <GlassContainer className='inline-flex items-center gap-2 px-4 py-2'>
              <span className='relative flex h-2.5 w-2.5'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
                <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500' />
              </span>
              <span className='text-sm font-medium text-gray-300'>
                Currently open for remote opportunities
              </span>
            </GlassContainer>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className='text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl'
          >
            I&apos;m Adin
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className='max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl md:text-2xl'
          >
            I work with React Ecosystem, and build digital experiences with
            clean code and thoughtful design.
          </motion.p>

          <motion.div variants={fadeInUp} className='flex flex-wrap gap-3'>
            <GlassButton
              onClick={() =>
                document
                  .getElementById('blog-intro')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Learn How
              <ArrowDownRight size={16} className='ml-1' />
            </GlassButton>

            <GlassButton variant='outline' asChild>
              <a href='/about'>More about me</a>
            </GlassButton>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className='flex flex-wrap items-center justify-center gap-4'
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex items-center gap-2 text-gray-500 transition-colors hover:text-white'
                aria-label={link.label}
              >
                <link.icon
                  size={18}
                  className='transition-transform group-hover:scale-110'
                />
                <span className='text-sm'>{link.label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
