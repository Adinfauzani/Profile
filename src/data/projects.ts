export const projects = [
  {
    slug: 'soraku',
    title: 'Soraku',
    description:
      'Anime community platform for fans to discuss, share, and track their favorite series.',
    longDescription:
      "Soraku is a full-featured anime community platform built with Next.js and Supabase. Users can track their watching list, write reviews, discuss in forums, and discover new anime.\n\n## Features\n\n- **Watchlist Tracking**: Keep track of anime you're watching, completed, or plan to watch\n- **Community Forums**: Discuss episodes, characters, and theories with other fans\n- **Review System**: Write and read reviews for anime series\n- **Recommendations**: Get personalized recommendations based on your watch history\n- **Real-time Notifications**: Stay updated on replies and mentions\n\n## Tech Stack\n\n- Next.js for the frontend and API routes\n- Supabase for database and authentication\n- Tailwind CSS for styling\n- TypeScript for type safety",
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
      'TaskFlow is a comprehensive project management tool designed for teams of all sizes.\n\n## Features\n\n- **Kanban Boards**: Visual task management with drag-and-drop\n- **Gantt Charts**: Timeline view for project planning\n- **Real-time Collaboration**: See changes as they happen with Socket.io\n- **Team Management**: Role-based access control\n- **Time Tracking**: Track time spent on tasks\n\n## Tech Stack\n\n- React for the UI\n- TypeScript for type safety\n- Node.js for the backend\n- Socket.io for real-time features\n- PostgreSQL for data storage',
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
      'A comprehensive analytics dashboard that helps online store owners track revenue, manage inventory, and gain insights into customer behavior.\n\n## Features\n\n- **Revenue Tracking**: Real-time revenue metrics and trends\n- **Inventory Management**: Track stock levels and get low-stock alerts\n- **Customer Insights**: Demographics and behavior analysis\n- **Exportable Reports**: Generate CSV and PDF reports\n\n## Tech Stack\n\n- Next.js for the application\n- Prisma as the ORM\n- PostgreSQL for data storage\n- Chart.js for visualizations',
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
      "A modern AI chat interface built with React and the Vercel AI SDK.\n\n## Features\n\n- **Streaming Responses**: See responses as they're generated\n- **Conversation History**: Save and resume conversations\n- **Multiple AI Models**: Support for GPT-4, Claude, and more\n- **Clean Design**: Distraction-free interface\n\n## Tech Stack\n\n- React for the UI\n- OpenAI API for AI capabilities\n- Vercel AI SDK for streaming\n- Tailwind CSS for styling",
    tech: ['React', 'OpenAI API', 'Vercel AI SDK', 'Tailwind CSS'],
    demo: 'https://chat.soraku.dev',
    github: 'https://github.com/adinfauzan/ai-chat',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    featured: false,
  },
];
