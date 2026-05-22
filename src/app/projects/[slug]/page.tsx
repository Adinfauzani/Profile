import { ArrowLeft, ExternalLink } from 'lucide-react';
import { RiGithubFill } from 'react-icons/ri';
import { notFound } from 'next/navigation';

import { getProjectBySlug, getProjectSlugs } from '@/db/queries';

import { GlassContainer } from '@/components/glass/GlassContainer';

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const longDescription = project.longDescription ?? '';

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
            href={project.github ?? '#'}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md transition-all hover:bg-white/20'
          >
            <RiGithubFill size={16} />
            Source Code
          </a>
          <a
            href={project.demo ?? '#'}
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

      <GlassContainer className='p-6 md:p-10'>
        <article className='prose prose-invert max-w-none'>
          {(longDescription as string)
            .split('\n')
            .map((line: string, i: number) => {
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
      </GlassContainer>
    </main>
  );
}
