'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { container, item } from '@/lib/motion';

import { Container } from '@/components/ui/Container';

export function Hero() {
  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden pt-16'>
      {/* Background gradient glow */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute left-1/2 top-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl filter' />
        <div className='absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl filter' />
      </div>

      <Container className='flex flex-col items-center text-center'>
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          className='flex flex-col items-center gap-6'
        >
          {/* Status Badge */}
          <motion.div variants={item} className='flex items-center gap-2'>
            <span className='relative flex h-3 w-3'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
              <span className='relative inline-flex h-3 w-3 rounded-full bg-emerald-500' />
            </span>
            <span className='text-sm font-medium text-gray-400'>
              Open for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className='text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl'
          >
            Adin Fauzan
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={item}
            className='text-xl text-gray-400 sm:text-2xl md:text-3xl'
          >
            Fullstack Developer
          </motion.p>

          {/* Short bio */}
          <motion.p
            variants={item}
            className='max-w-lg text-gray-500 leading-relaxed'
          >
            Crafting digital experiences with clean code and thoughtful design.
            Building the future, one commit at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className='mt-4 flex flex-wrap items-center justify-center gap-4'
          >
            <a
              href='#projects'
              className='rounded-full bg-indigo-600 px-8 py-3 font-medium text-white transition-all hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/25'
            >
              View Projects
            </a>
            <a
              href='#stack'
              className='rounded-full border border-gray-700 px-8 py-3 font-medium text-gray-300 transition-all hover:border-gray-500 hover:text-white'
            >
              Tech Stack
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
