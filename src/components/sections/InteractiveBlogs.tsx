'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Eye } from 'lucide-react';

import { fadeInUp } from '@/lib/motion';

import { InteractiveTiltCard } from '@/components/ui/InteractiveTiltCard';

const cards = [
  {
    number: '01',
    title: 'Layout Systems',
    description:
      'Understanding modern responsive layouts, spacing systems, and UI structure.',
    icon: Code2,
    gradient: 'from-indigo-500/20 to-transparent',
  },
  {
    number: '02',
    title: 'Data & Fetching',
    description:
      'Exploring API patterns, caching, and scalable frontend data flow.',
    icon: Database,
    gradient: 'from-purple-500/20 to-transparent',
  },
  {
    number: '03',
    title: 'Beyond Interface',
    description:
      'Thoughts about developer experience, design systems, and clean architecture.',
    icon: Eye,
    gradient: 'from-blue-500/20 to-transparent',
  },
];

export function InteractiveBlogs() {
  return (
    <section className='py-24 md:py-32'>
      <div className='layout'>
        <motion.div
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div variants={fadeInUp} className='mb-16 max-w-2xl'>
            <span className='font-accent text-lg text-indigo-400'>
              Turning Complex Ideas
            </span>
            <h2 className='mt-2 text-3xl font-bold text-white md:text-4xl'>
              Into Clean Experiences
            </h2>
            <p className='mt-4 text-gray-400'>
              Thoughts, experiments, and frontend mental models crafted through
              Adin Fauzan&apos;s perspective.
            </p>
          </motion.div>

          <div className='grid gap-6 md:grid-cols-3'>
            {cards.map((card, i) => (
              <motion.div
                key={card.number}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: i * 0.1 },
                  },
                }}
              >
                <InteractiveTiltCard href='/blogs'>
                  <div className='flex h-full flex-col'>
                    <div className='mb-6 flex items-center justify-between'>
                      <div className='rounded-xl bg-white/10 p-3'>
                        <card.icon size={22} className='text-indigo-400' />
                      </div>
                      <span className='text-3xl font-bold text-white/10'>
                        {card.number}
                      </span>
                    </div>

                    <h3 className='text-xl font-semibold text-white'>
                      {card.title}
                    </h3>

                    <p className='mt-3 flex-1 text-sm leading-relaxed text-gray-400'>
                      {card.description}
                    </p>

                    <div className='mt-6 flex items-center gap-2 text-sm text-indigo-400'>
                      <span>Explore thoughts</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </InteractiveTiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
