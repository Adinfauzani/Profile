import { ArrowLeft, ExternalLink } from 'lucide-react';
import { RiGithubFill } from 'react-icons/ri';
import { notFound } from 'next/navigation';

import { GlassContainer } from '@/components/glass/GlassContainer';

const projects = [
  {
    slug: 'soraku',
    title: 'Soraku',
    description:
      'Anime community platform for fans to discuss, share, and track their favorite series.',
    longDescription: `Soraku is a full-featured anime community platform built with Next.js and Supabase. Users can track their watching list, write reviews, discuss in forums, and discover new anime.

## Features

- **Watchlist Tracking**: Keep track of anime you're watching, completed, or plan to watch
- **Community Forums**: Discuss episodes, characters, and theories with other fans
- **Review System**: Write and read reviews for anime series
- **Recommendations**: Get personalized recommendations based on your watch history
- **Real-time Notifications**: Stay updated on replies and mentions
- **Rating System**: Robust rating and ranking system

## Tech Stack

- Next.js for the frontend and API routes
- Supabase for database and authentication
- Tailwind CSS for styling
- TypeScript for type safety

## Challenges

Building a real-time notification system with Supabase was challenging but rewarding. The platform handles thousands of daily active users.`,
    tech: ['Next.js', 'Tailwind CSS', 'Supabase', 'TypeScript'],
    demo: 'https://soraku.vercel.app',
    github: 'https://github.com/adinfauzan/soraku',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800',
  },
  {
    slug: 'taskflow',
    title: 'TaskFlow',
    description:
      'Productivity app with real-time collaboration, Kanban boards, and team management.',
    longDescription: `TaskFlow is a comprehensive project management tool designed for teams of all sizes.

## Features

- **Kanban Boards**: Visual task management with drag-and-drop
- **Gantt Charts**: Timeline view for project planning
- **Real-time Collaboration**: See changes as they happen with Socket.io
- **Team Management**: Role-based access control
- **Time Tracking**: Track time spent on tasks
- **Reports**: Generate productivity reports

## Tech Stack

- React for the UI
- TypeScript for type safety
- Node.js for the backend
- Socket.io for real-time features
- PostgreSQL for data storage`,
    tech: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL'],
    demo: 'https://taskflow.app',
    github: 'https://github.com/adinfauzan/taskflow',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
  },
  {
    slug: 'ecommerce-dashboard',
    title: 'E-Commerce Dashboard',
    description:
      'Analytics dashboard for online stores with revenue tracking, inventory, and customer insights.',
    longDescription: `A comprehensive analytics dashboard that helps online store owners track revenue, manage inventory, and gain insights into customer behavior.

## Features

- **Revenue Tracking**: Real-time revenue metrics and trends
- **Inventory Management**: Track stock levels and get low-stock alerts
- **Customer Insights**: Demographics and behavior analysis
- **Exportable Reports**: Generate CSV and PDF reports
- **Automated Alerts**: Get notified on important events

## Tech Stack

- Next.js for the application
- Prisma as the ORM
- PostgreSQL for data storage
- Chart.js for visualizations`,
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Chart.js'],
    demo: 'https://dashboard.soraku.dev',
    github: 'https://github.com/adinfauzan/dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
  },
  {
    slug: 'ai-chat',
    title: 'AI Chat Interface',
    description:
      'Clean, minimal chat interface with streaming responses and conversation history.',
    longDescription: `A modern AI chat interface built with React and the Vercel AI SDK.

## Features

- **Streaming Responses**: See responses as they're generated
- **Conversation History**: Save and resume conversations
- **Multiple AI Models**: Support for GPT-4, Claude, and more
- **Clean Design**: Distraction-free interface
- **Keyboard Shortcuts**: Power user shortcuts

## Tech Stack

- React for the UI
- OpenAI API for AI capabilities
- Vercel AI SDK for streaming
- Tailwind CSS for styling`,
    tech: ['React', 'OpenAI API', 'Vercel AI SDK', 'Tailwind CSS'],
    demo: 'https://chat.soraku.dev',
    github: 'https://github.com/adinfauzan/ai-chat',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
  },
];

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

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
          src={project.image}
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
            <RiGithubFill size={16} />
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
        {project.tech.map((t) => (
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
          {project.longDescription.split('\n').map((line, i) => {
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
