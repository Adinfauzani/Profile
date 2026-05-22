import { ArrowLeft, ExternalLink } from 'lucide-react';

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='currentColor'>
      <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
    </svg>
  );
}
import { notFound } from 'next/navigation';

import { projects } from '@/constants/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const longDescription = `## Features

- **Real-time Collaboration**: Work together with your team in real-time
- **Responsive Design**: Works seamlessly across all devices
- **Modern Stack**: Built with cutting-edge technologies

## Tech Stack

${project.tech.map((t) => `- ${t}`).join('\n')}

## Overview

${project.description}`;

  return (
    <main className='layout pt-32'>
      <a
        href='/projects'
        className='mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white'
      >
        <ArrowLeft size={16} />
        Back to Projects
      </a>

      <div className='mb-8 aspect-video w-full overflow-hidden rounded-2xl bg-gray-800'>
        <img
          src={project.image ?? ''}
          alt={project.title}
          className='h-full w-full object-cover'
        />
      </div>

      <div className='mb-8 flex flex-wrap items-start justify-between gap-4'>
        <div>
          <h1 className='text-3xl font-bold text-white md:text-4xl'>
            {project.title}
          </h1>
          <p className='mt-2 text-gray-400'>{project.description}</p>
        </div>

        <div className='flex gap-3'>
          <a
            href={project.github}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md transition-all hover:bg-white/20'
          >
            <GithubIcon size={16} />
            Source Code
          </a>
          <a
            href={project.demo}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm text-white transition-all hover:bg-indigo-500'
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>

      <div className='mb-6 flex flex-wrap gap-2'>
        {project.tech.map((t: string) => (
          <span
            key={t}
            className='rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300'
          >
            {t}
          </span>
        ))}
      </div>

      <div className='rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm md:p-10'>
        <article className='prose prose-invert max-w-none'>
          {longDescription.split('\n').map((line: string, i: number) => {
            if (line.startsWith('## ')) {
              return (
                <h2 key={i} className='mt-8 text-xl font-semibold text-white'>
                  {line.replace('## ', '')}
                </h2>
              );
            }
            if (line.startsWith('- **')) {
              const match = line.match(/- \*\*(.+?)\*\*: (.+)/);
              if (match) {
                return (
                  <div key={i} className='ml-4'>
                    <strong className='text-white'>{match[1]}:</strong>{' '}
                    <span className='text-gray-300'>{match[2]}</span>
                  </div>
                );
              }
            }
            if (line.startsWith('- ')) {
              return (
                <li key={i} className='ml-4 text-gray-300'>
                  {line.replace('- ', '')}
                </li>
              );
            }
            if (line.trim() === '') return <br key={i} />;
            return (
              <p key={i} className='text-gray-300'>
                {line}
              </p>
            );
          })}
        </article>
      </div>
    </main>
  );
}
