'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { projects } from '@/data/projects';

import { Container, Section } from '@/components/ui';
import { ProjectCard } from '@/components/ui/ProjectCard';

export function FeaturedProjects() {
  return (
    <Section id='projects'>
      <Container>
        <div className='mb-16 text-center'>
          <h2 className='text-3xl font-bold text-white md:text-4xl'>
            Featured Projects
          </h2>
          <p className='mt-4 text-gray-400 max-w-2xl mx-auto'>
            A selection of projects I&apos;ve built, showcasing expertise in
            fullstack development.
          </p>
        </div>

        <motion.div
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className='grid gap-6 md:grid-cols-2'
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              demo={project.demo}
              github={project.github}
              index={index}
            />
          ))}
        </motion.div>

        <div className='mt-16 text-center'>
          <a
            href='https://github.com/adinfauzan'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 text-indigo-400 transition-colors hover:text-indigo-300'
          >
            View all on GitHub
            <svg
              className='h-4 w-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </a>
        </div>
      </Container>
    </Section>
  );
}
