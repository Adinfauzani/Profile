import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { RiGithubFill } from 'react-icons/ri';
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  demo: string;
  github: string;
  index?: number;
}

export function ProjectCard({
  title,
  description,
  tech,
  demo,
  github,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1 },
        },
      }}
      whileHover='hover'
      className='group relative flex flex-col rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10'
    >
      <div className='flex flex-1 flex-col'>
        <div className='flex items-start justify-between gap-4'>
          <h3 className='text-xl font-bold text-white group-hover:text-indigo-400 transition-colors'>
            {title}
          </h3>
          <div className='flex gap-2'>
            <a
              href={demo}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-lg p-2 text-gray-400 hover:bg-gray-800 hover:text-indigo-400 transition-colors'
              aria-label='View live demo'
            >
              <ExternalLink size={18} />
            </a>
            <a
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-lg p-2 text-gray-400 hover:bg-gray-800 hover:text-indigo-400 transition-colors'
              aria-label='View source code'
            >
              <RiGithubFill size={18} />
            </a>
          </div>
        </div>

        <p className='mt-3 flex-1 text-gray-400 leading-relaxed'>
          {description}
        </p>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tech.map((t) => (
            <span
              key={t}
              className='rounded-md bg-gray-800/50 px-3 py-1 text-xs font-medium text-gray-300 ring-1 ring-gray-700/50'
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
