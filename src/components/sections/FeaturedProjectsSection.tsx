'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { RiGithubFill } from 'react-icons/ri';

import { fadeInUp } from '@/lib/motion';

import { projects } from '@/data/projects';

import { GlassButton } from '@/components/glass/GlassButton';
import { GlassCard } from '@/components/glass/GlassCard';

export function FeaturedProjectsSection() {
  return (
    <section id='projects' className='py-24 md:py-32'>
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
            <h2 className='text-3xl font-bold text-white md:text-4xl'>
              Featured Projects
            </h2>
            <p className='mt-4 max-w-2xl text-gray-400'>
              A selection of projects that I&apos;ve worked on.
            </p>
          </motion.div>

          <div className='grid gap-6 md:grid-cols-2'>
            {projects.map((project) => (
              <motion.div key={project.title} variants={fadeInUp}>
                <GlassCard className='h-full p-6' hover>
                  <div className='flex flex-col gap-4'>
                    <div className='flex-1'>
                      <h3 className='text-xl font-bold text-white transition-colors group-hover:text-indigo-400'>
                        {project.title}
                      </h3>
                      <p className='mt-2 text-gray-400'>
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <span className='text-xs font-medium uppercase tracking-wider text-gray-500'>
                        Tools:
                      </span>
                      <div className='mt-2 flex flex-wrap gap-2'>
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className='rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300'
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className='flex flex-wrap gap-3 pt-2'>
                      <GlassButton variant='outline' size='sm' asChild>
                        <a
                          href={project.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-1'
                        >
                          <RiGithubFill size={14} />
                          GitHub
                        </a>
                      </GlassButton>
                      <GlassButton size='sm' asChild>
                        <a
                          href={project.demo}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-1'
                        >
                          <ExternalLink size={14} />
                          Live Site
                        </a>
                      </GlassButton>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className='mt-10 text-center'>
            <a
              href='https://github.com/adinfauzan'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-sm text-indigo-400 transition-colors hover:text-indigo-300'
            >
              See more projects
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
