export const projects = [
  {
    slug: 'soraku',
    title: 'Soraku',
    description:
      'Anime community platform for fans to discuss, share, and track their favorite series.',
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
    tech: ['React', 'OpenAI API', 'Vercel AI SDK', 'Tailwind CSS'],
    demo: 'https://chat.soraku.dev',
    github: 'https://github.com/adinfauzan/ai-chat',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
