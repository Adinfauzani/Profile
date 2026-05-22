import { ExternalLink } from 'lucide-react';

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='currentColor'>
      <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
    </svg>
  );
}

import { projects } from '@/constants/projects';

export default function ProjectsPage() {
  return (
    <main className='layout pt-32'>
      <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
        Projects
      </h1>
      <p className='mb-12 text-gray-400'>
        A collection of projects I&apos;ve built and contributed to.
      </p>

      <div className='grid gap-6 md:grid-cols-2'>
        {projects.map((project) => (
          <div
            key={project.slug}
            className='group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]'
          >
            <div className='aspect-video w-full overflow-hidden bg-gray-800'>
              <img
                src={project.image}
                alt={project.title}
                className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
              />
            </div>

            <div className='p-6'>
              <div className='flex items-start justify-between gap-4'>
                <h2 className='text-xl font-bold text-white transition-colors group-hover:text-indigo-400'>
                  {project.title}
                </h2>
                <div className='flex gap-2'>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white'
                    aria-label='View source code'
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href={project.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white'
                    aria-label='View live demo'
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <p className='mt-2 text-sm text-gray-400'>
                {project.description}
              </p>

              <div className='mt-4 flex flex-wrap gap-2'>
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
          </div>
        ))}
      </div>
    </main>
  );
}
