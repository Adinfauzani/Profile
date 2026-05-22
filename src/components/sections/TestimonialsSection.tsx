'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { fadeInUp } from '@/lib/motion';

import { GlassButton } from '@/components/glass/GlassButton';
import { GlassCard } from '@/components/glass/GlassCard';

const testimonials = [
  {
    quote:
      "One of the most dependable and talented teammates I've had the privilege to work with. His ability to blend technical expertise with a keen eye for design is unmatched.",
    name: 'Ronit Panda',
    role: 'Founding Full-stack Engineer at Dimension',
    avatar: 'https://github.com/rtpa25.png',
  },
  {
    quote:
      'A pleasure to work with. His responsibility and meticulous attention to detail make him someone I can always rely on, both in writing code and during code reviews.',
    name: 'Anton Starodubtsev',
    role: 'Chat Lead at Dimension',
    avatar: 'https://github.com/pekc83.png',
  },
  {
    quote:
      'Your projects (including this website) are amazing! That shorts section with the snippets is a great idea.',
    name: '@jonwonglam',
    role: 'via Guest Book',
    avatar: 'https://github.com/jonwonglam.png',
  },
  {
    quote:
      'Just checked in your useful post about choosing Next.js data fetching strategy, thank you for clearing this out for me!',
    name: '@DanylenkoDaryna',
    role: 'via Guest Book',
    avatar: 'https://github.com/DanylenkoDaryna.png',
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

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
          <motion.div variants={fadeInUp} className='mb-12 text-center'>
            <h2 className='text-3xl font-bold text-white md:text-4xl'>
              Some good words
            </h2>
          </motion.div>

          <div className='relative mx-auto max-w-3xl'>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className='p-8 text-center'>
                <Quote
                  size={32}
                  className='mx-auto mb-6 text-indigo-400 opacity-50'
                />

                <blockquote className='text-lg leading-relaxed text-gray-300 md:text-xl'>
                  {testimonials[active].quote}
                </blockquote>

                <div className='mt-8 flex items-center justify-center gap-3'>
                  <Image
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    width={40}
                    height={40}
                    className='rounded-full ring-2 ring-white/10'
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://ui-avatars.com/api/?name=${testimonials[active].name}&background=6366f1&color=fff`;
                    }}
                    unoptimized
                  />
                  <div className='text-left'>
                    <div className='font-semibold text-white'>
                      {testimonials[active].name}
                    </div>
                    <div className='text-sm text-gray-500'>
                      {testimonials[active].role}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <div className='mt-6 flex items-center justify-center gap-4'>
              <GlassButton variant='ghost' size='icon-sm' onClick={prev}>
                <ArrowLeft size={18} />
              </GlassButton>

              <div className='flex gap-2'>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      i === active
                        ? 'bg-indigo-400 w-4'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <GlassButton variant='ghost' size='icon-sm' onClick={next}>
                <ArrowRight size={18} />
              </GlassButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
