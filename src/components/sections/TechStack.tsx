'use client';

import { motion } from 'framer-motion';
import { Code2, Wrench } from 'lucide-react';

import { stack, tools } from '@/constants/stacks';

import { fadeInUp } from '@/lib/motion';

import { Container, Section } from '@/components/ui';

export function TechStack() {
  return (
    <Section id='stack'>
      <Container>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl font-bold text-white md:text-4xl'>
            Tech Stack
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-gray-400'>
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className='grid gap-12 md:grid-cols-2'>
          <div>
            <div className='mb-6 flex items-center gap-2'>
              <Code2 size={20} className='text-indigo-400' />
              <h3 className='text-xl font-semibold text-white'>
                Languages & Frameworks
              </h3>
            </div>
            <motion.div
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
              variants={fadeInUp}
              className='flex flex-wrap gap-3'
            >
              {stack.map((tech) => (
                <span
                  key={tech}
                  className='rounded-full bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-300 ring-1 ring-gray-700/50 transition-all hover:ring-indigo-500/20'
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          <div>
            <div className='mb-6 flex items-center gap-2'>
              <Wrench size={20} className='text-indigo-400' />
              <h3 className='text-xl font-semibold text-white'>
                Tools & Platforms
              </h3>
            </div>
            <motion.div
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
              variants={fadeInUp}
              className='flex flex-wrap gap-3'
            >
              {tools.map((tool) => (
                <span
                  key={tool}
                  className='rounded-full bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-300 ring-1 ring-gray-700/50 transition-all hover:ring-indigo-500/20'
                >
                  {tool}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
