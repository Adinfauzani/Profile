'use client';

import { ExternalLink } from 'lucide-react';
import { RiGithubFill } from 'react-icons/ri';

import { GlassCard } from '@/components/glass/GlassCard';

const projects = [
  {
    slug: 'soraku',
    title: 'Soraku',
    description:
      'Anime community platform for fans to discuss, share, and track their favorite series.',
    longDescription:
      'Soraku is a full-featured anime community platform built with Next.js and Supabase. Users can track their watching list, write reviews, discuss in forums, and discover new anime. The platform features real-time notifications, personalized recommendations, and a robust rating system.',
    tech: ['Next.js', 'Tailwind CSS', 'Supabase', 'TypeScript'],
    demo: 'https://soraku.vercel.app',
    github: 'https://github.com/adinfauzan/soraku',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800',
    featured: true,
  },
  {
    slug: 'taskflow',
    title: 'TaskFlow',
    description:
      'Productivity app with real-time collaboration, Kanban boards, and team management.',
    longDescription:
      'TaskFlow is a comprehensive project management tool that combines Kanban boards, Gantt charts, and team collaboration features. Built with React and Socket.io for real-time updates.',
    tech: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL'],
    demo: 'https://taskflow.app',
    github: 'https://github.com/adinfauzan/taskflow',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
    featured: true,
  },
  {
    slug: 'ecommerce-dashboard',
    title: 'E-Commerce Dashboard',
    description:
      'Analytics dashboard for online stores with revenue tracking, inventory, and customer insights.',
    longDescription:
      'A comprehensive analytics dashboard that helps online store owners track revenue, manage inventory, and gain insights into customer behavior. Features include real-time charts, exportable reports, and automated alerts.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Chart.js'],
    demo: 'https://dashboard.soraku.dev',
    github: 'https://github.com/adinfauzan/dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    featured: false,
  },
  {
    slug: 'ai-chat',
    title: 'AI Chat Interface',
    description:
      'Clean, minimal chat interface with streaming responses and conversation history.',
    longDescription:
      'A modern AI chat interface built with React and the Vercel AI SDK. Features streaming responses, conversation history, multiple AI model support, and a clean, distraction-free design.',
    tech: ['React', 'OpenAI API', 'Vercel AI SDK', 'Tailwind CSS'],
    demo: 'https://chat.soraku.dev',
    github: 'https://github.com/adinfauzan/ai-chat',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <main className='layout pt-32'>
      <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
        Projects
      </h1>
      <p className='mb-12 text-gray-400'>
        A collection of projects I've built and contributed to.
      </p>

      <div className='grid gap-6 md:grid-cols-2'>
        {projects.map((project) => (
          <GlassCard key={project.slug} className='overflow-hidden'>
            <div className='aspect-video w-full overflow-hidden bg-gray-800'>
              <img
                src={project.image}
                alt={project.title}
                className='h-full w-full object-cover transition-transform hover:scale-105'
              />
            </div>

            <div className='p-6'>
              <div className='flex items-start justify-between gap-4'>
                <h2 className='text-xl font-bold text-white'>
                  {project.title}
                </h2>
                <div className='flex gap-2'>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white'
                    aria-label='View source code'
                  >
                    <RiGithubFill size={18} />
                  </a>
                  <a
                    href={project.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white'
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
          </GlassCard>
        ))}
      </div>
    </main>
  );
}
