'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { fadeInUp } from '@/lib/motion';

import { GlassCard } from '@/components/glass/GlassCard';

const retros = [
  {
    year: 2025,
    title: 'The 2025 Retrospective',
    description:
      'New projects, career growth, and building meaningful products.',
    views: 1250,
    href: '/blog/2025-retrospective',
  },
  {
    year: 2024,
    title: 'The 2024 Retrospective',
    description:
      'First full-time year, solo travel while working, socializing, and more!',
    views: 980,
    href: '/blog/2024-retrospective',
  },
  {
    year: 2023,
    title: 'The 2023 Retrospective',
    description: 'Graduation, tech writing, first job, mentorship, and more!',
    views: 750,
    href: '/blog/2023-retrospective',
  },
];

export function RetrospectiveSection() {
  return (
    <section className='py-24 md:py-32'>
      <div className='layout'>
        <motion.div
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            show: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          <motion.div variants={fadeInUp} className='mb-12'>
            <span className='text-sm font-medium uppercase tracking-wider text-indigo-400'>
              the yearly
            </span>
            <h2 className='mt-2 text-3xl font-bold text-white md:text-4xl'>
              Retro
            </h2>
            <p className='mt-4 max-w-2xl text-gray-400'>
              Every year, I share my progress both in career and personal life.
              Here&apos;s the last 3 years of them.
            </p>
          </motion.div>

          <div className='grid gap-6 md:grid-cols-3'>
            {retros.map((retro) => (
              <motion.a
                key={retro.year}
                href={retro.href}
                variants={fadeInUp}
                className='block'
              >
                <GlassCard className='h-full p-6'>
                  <div className='flex items-center justify-between'>
                    <span className='text-3xl font-bold text-white'>
                      {retro.year}
                    </span>
                    <span className='text-xs text-gray-500'>
                      {retro.views.toLocaleString()} views
                    </span>
                  </div>

                  <h3 className='mt-4 text-lg font-semibold text-white'>
                    {retro.title}
                  </h3>

                  <p className='mt-2 text-sm text-gray-400'>
                    {retro.description}
                  </p>
                </GlassCard>
              </motion.a>
            ))}
          </div>

          <motion.div variants={fadeInUp} className='mt-10 text-center'>
            <a
              href='/about#retro'
              className='inline-flex items-center gap-2 text-sm text-indigo-400 transition-colors hover:text-indigo-300'
            >
              more..
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
