'use client';

import { motion } from 'framer-motion';
import { Code2, Wrench } from 'lucide-react';

import { stack, tools } from '@/constants/stacks';

import { Container } from '@/components/ui';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

export function FloatingStacks() {
  return (
    <section className='relative overflow-hidden py-24 md:py-32'>
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute left-1/3 top-1/3 h-72 w-72 rounded-full bg-indigo-500/5 blur-[120px]' />
      </div>

      <Container>
        <motion.div
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className='mb-16 text-center'>
            <span className='font-accent text-lg text-indigo-400'>
              tools & craftsmanship
            </span>
            <h2 className='mt-3 text-3xl font-bold text-white md:text-4xl'>
              Technologies I Work With
            </h2>
            <p className='mx-auto mt-4 max-w-lg text-gray-400'>
              The tools, languages, and platforms I use daily to build modern
              web experiences.
            </p>
          </motion.div>

          <div className='grid gap-10 md:grid-cols-2'>
            <motion.div variants={fadeUp}>
              <div className='mb-6 flex items-center gap-3'>
                <div className='rounded-xl bg-indigo-500/10 p-2.5'>
                  <Code2 size={20} className='text-indigo-400' />
                </div>
                <h3 className='text-lg font-semibold text-white'>
                  Languages & Frameworks
                </h3>
              </div>
              <motion.div
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={stagger}
                className='flex flex-wrap gap-3'
              >
                {stack.map((tech) => (
                  <motion.div key={tech} variants={fadeUp}>
                    <div className='group cursor-default rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/5 hover:shadow-[0_0_20px_rgba(99,102,241,0.08)]'>
                      <span className='text-sm font-medium text-gray-300 transition-colors group-hover:text-white'>
                        {tech}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className='mb-6 flex items-center gap-3'>
                <div className='rounded-xl bg-indigo-500/10 p-2.5'>
                  <Wrench size={20} className='text-indigo-400' />
                </div>
                <h3 className='text-lg font-semibold text-white'>
                  Tools & Platforms
                </h3>
              </div>
              <motion.div
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={stagger}
                className='flex flex-wrap gap-3'
              >
                {tools.map((tool) => (
                  <motion.div key={tool} variants={fadeUp}>
                    <div className='group cursor-default rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/5 hover:shadow-[0_0_20px_rgba(99,102,241,0.08)]'>
                      <span className='text-sm font-medium text-gray-300 transition-colors group-hover:text-white'>
                        {tool}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
