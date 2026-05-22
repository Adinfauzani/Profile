'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

import { fadeInUp } from '@/lib/motion';

import { GlassButton } from '@/components/glass/GlassButton';
import { GlassCard } from '@/components/glass/GlassCard';

export function NewsletterSection() {
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
          <motion.div variants={fadeInUp} className='mx-auto max-w-2xl'>
            <GlassCard className='p-8 text-center md:p-12'>
              <div className='mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10'>
                <Mail size={24} className='text-indigo-400' />
              </div>

              <h2 className='text-2xl font-bold text-white md:text-3xl'>
                Subscribe to my newsletter
              </h2>
              <p className='mt-4 text-gray-400'>
                Don&apos;t miss out 😉. Get an email whenever I post, no spam.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className='mt-8 flex flex-col gap-3 sm:flex-row'
              >
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 backdrop-blur-sm transition-colors focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400'
                />
                <GlassButton type='submit' className='shrink-0'>
                  Subscribe Now
                  <ArrowRight size={16} className='ml-1' />
                </GlassButton>
              </form>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
