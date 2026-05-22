'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { featuredProjects } from '@/constants/projects';

import { fadeInUp } from '@/lib/motion';

import { Container } from '@/components/ui';
import { ProjectCard } from '@/components/ui/ProjectCard';

export function FeaturedProjectsSection() {
  return (
    <section className='py-24 md:py-32'>
      <Container>
        <motion.div
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            show: { transition: { staggerChildren: 0.1 } },
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
            {featuredProjects.map((project) => (
              <motion.div key={project.title} variants={fadeInUp}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  github={project.github}
                  demo={project.demo}
                  image={project.image}
                />
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
      </Container>
    </section>
  );
}
