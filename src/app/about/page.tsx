'use client';

import { Briefcase } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';

function ReactIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 256 228' fill='#61DAFB'>
      <path d='M210.483 73.823a178.081 178.081 0 0 0-18.44-6.145 96.649 96.649 0 0 0-22.917-22.916 134.233 134.233 0 0 0-10.146-14.77c-9.89-12.86-20.355-19.512-28.98-19.512-8.626 0-19.09 6.652-28.98 19.512a134.233 134.233 0 0 0-10.146 14.77 96.649 96.649 0 0 0-22.917 22.916 178.081 178.081 0 0 0-18.44 6.145c-13.08 4.848-24.736 11.072-34.514 18.442-9.778 7.37-15.548 14.98-15.548 21.725 0 6.745 5.77 14.355 15.548 21.725 9.778 7.37 21.435 13.594 34.514 18.442a178.081 178.081 0 0 0 18.44 6.145 96.649 96.649 0 0 0 22.917 22.916 134.233 134.233 0 0 0 10.146 14.77c9.89 12.86 20.355 19.512 28.98 19.512 8.626 0 19.09-6.652 28.98-19.512a134.233 134.233 0 0 0 10.146-14.77 96.649 96.649 0 0 0 22.917-22.916 178.081 178.081 0 0 0 18.44-6.145c13.08-4.848 24.736-11.072 34.514-18.442 9.778-7.37 15.548-14.98 15.548-21.725 0-6.745-5.77-14.355-15.548-21.725-9.778-7.37-21.435-13.594-34.514-18.442Zm-42.3 19.126a24.229 24.229 0 1 1-24.229 24.229 24.258 24.258 0 0 1 24.229-24.229Zm-17.747-63.58c6.825 0 16.098 8.496 23.426 22.636a112.332 112.332 0 0 0-11.012 4.724 89.5 89.5 0 0 0-12.338 6.976 97.75 97.75 0 0 0-11.472 8.988 99.492 99.492 0 0 1-42.486-6.16c10.574-16.087 21.067-25.564 27.69-30.354 8.007-5.784 15.794-9.81 25.192-9.81Zm-69.2 114.69a145.229 145.229 0 0 1-10.537-7.075c-7.84-5.914-14.655-12.02-20.562-18.16a112.727 112.727 0 0 1-13.224-16.133 108.52 108.52 0 0 0 15.097-16.696c8.097-10.896 15.98-21.16 23.79-28.308a106.588 106.588 0 0 0 4.268-3.388 112.675 112.675 0 0 1 10.246 17.674 121.97 121.97 0 0 1 6.694 17.766 118.704 118.704 0 0 1 2.034 18.222 99.13 99.13 0 0 1-10.096 9.243 99.72 99.72 0 0 1-16.233 10.924 141.003 141.003 0 0 1-11.501 5.351Zm-6.321-41.51a109.62 109.62 0 0 1-4.768-3.497c-2.607-2.024-5.115-4.16-7.519-6.404 2.497-2.813 5.11-5.475 7.831-7.97a112.974 112.974 0 0 1 13.21-10.24 102.314 102.314 0 0 0-1.546 13.777 122.862 122.862 0 0 0-1.067 9.1 153.14 153.14 0 0 1-6.14 4.234Zm-49.1 4.49c2.308 5.347 7.71 11.056 15.549 16.402 7.838 5.346 16.9 10.324 26.536 14.461a160.64 160.64 0 0 0-5.33 7.596 116.36 116.36 0 0 0-3.535 5.892c-17.706-5.209-32.293-13.25-41.906-21.626-4.61-4.016-8.108-8.038-10.318-11.518 7.848-2.785 16.667-5.456 19.004-11.207Zm162.156 0c2.337 5.751 11.156 8.422 19.004 11.207-2.21 3.48-5.708 7.502-10.318 11.518-9.613 8.376-24.2 16.417-41.906 21.626a116.36 116.36 0 0 0-3.535-5.892 160.64 160.64 0 0 0-5.33-7.596c9.636-4.137 18.698-9.115 26.536-14.461 7.838-5.346 13.241-11.055 15.549-16.402Zm22.912 39.009a109.295 109.295 0 0 1-10.114 5.357c-5.607 2.572-11.587 4.834-17.776 6.718 1.91-3.894 3.968-7.659 6.133-11.27 1.355-2.262 2.752-4.497 4.181-6.698 7.776 2.148 15.28 4.24 21.64 6.39a14.953 14.953 0 0 1-4.064-.497Zm-72.402 56.891c-6.825 0-16.098-8.496-23.426-22.636a112.332 112.332 0 0 0 11.012-4.724 89.5 89.5 0 0 0 12.338-6.976 97.75 97.75 0 0 0 11.472-8.988 99.492 99.492 0 0 1 42.486 6.16c-10.574 16.087-21.067 25.564-27.69 30.354-8.007 5.784-15.794 9.81-25.192 9.81Zm69.2-114.69a145.229 145.229 0 0 1 10.537 7.075c7.84 5.914 14.655 12.02 20.562 18.16a112.727 112.727 0 0 1 13.224 16.133 108.52 108.52 0 0 0-15.097 16.696c-8.097 10.896-15.98 21.16-23.79 28.308a106.588 106.588 0 0 0-4.268 3.388 112.675 112.675 0 0 1-10.246-17.674 121.97 121.97 0 0 1-6.694-17.766 118.704 118.704 0 0 1-2.034-18.222 99.13 99.13 0 0 1 10.096-9.243 99.72 99.72 0 0 1 16.233-10.924 141.003 141.003 0 0 1 11.501-5.351Z' />
    </svg>
  );
}

function NextJsIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 256 256' fill='white'>
      <path d='M128 0C57.307 0 0 57.307 0 128s57.307 128 128 128 128-57.307 128-128S198.693 0 128 0Zm0 232.727c-57.73 0-104.727-46.997-104.727-104.727S70.27 23.273 128 23.273s104.727 46.997 104.727 104.727S185.73 232.727 128 232.727Zm0-186.182c-44.987 0-81.455 36.468-81.455 81.455S83.013 209.455 128 209.455c27.107 0 51.057-13.233 65.898-33.464l-55.838-74.28v58.484h-9.286v-72.97h9.286l53.165 70.74V93.09h9.286v69.818a9.286 9.286 0 0 1-9.286 9.286h-6.779l34.397 45.76c13.092-16.638 20.943-37.477 20.943-60.058 0-44.987-36.468-81.455-81.455-81.455Z' />
    </svg>
  );
}

function TypeScriptIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 256 256' fill='#3178C6'>
      <path d='M0 128v128h256V0H0v128Zm157.723-6.678v57.729h27.465v13.766h-27.465v24.277h-15.45V100.918h42.915v13.766h-27.465v6.638Zm-41.03-3.705c0-16.748-28.084-19.416-37.534-1.992l-13.355-7.354c10.075-22.856 51.622-27.737 64.255-2.569 6.195 12.377 3.127 34.468-15.758 42.926 7.429 3.435 24.88 12.857 23.153 34.153-2.137 26.188-31.59 34.62-51.975 21.221-11.883-6.945-16.78-18.064-16.78-18.064l14.433-7.776c4.825 10.478 16.78 16.838 25.952 11.912 7.326-4.543 6.921-13.889 0-17.937l-21.908-11.28c-19.124-17.34-12.894-43.906 10.454-50.721 15.332-3.747 34.963 1.689 42.77 16.929l-13.678 7.825c-4.414-9.401-15.623-11.752-23.787-9.226-5.496 1.109-8.624 5.474-8.472 9.671Z' />
    </svg>
  );
}

function TailwindIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 256 154' fill='#38BDF8'>
      <path d='M128 0C93.867 0 72.533 17.067 64 51.2c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.57 160.275 77.2 192 77.2c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.83 159.725.2 128 .2ZM64 77.2c-34.133 0-55.467 17.067-64 51.2 12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 139.57 96.275 154.2 128 154.2c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.83 95.725 77.2 64 77.2Z' />
    </svg>
  );
}

function PostgreSQLIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 256 264' fill='#336791'>
      <path d='M255.008 158.188c-1.018-7.234-5.237-11.665-11.868-12.457-1.246-.148-2.539-.222-3.832-.222-9.211 0-17.297 2.87-23.511 7.643-5.052 3.879-8.586 8.827-10.771 14.34-.742 1.873-1.29 3.773-1.733 5.676-1.195 5.122-.918 9.676.44 13.682-3.968.733-8.783 1.534-13.993 2.457-16.246 2.87-32.303 6.589-48.751 10.726-10.326 2.598-17.677 4.676-22.831 8.061-5.154 3.385-7.31 7.096-7.353 12.124-.044 4.922 1.99 9.202 6.045 12.68 4.01 3.431 9.716 5.632 16.908 6.535 12.618 1.582 27.55.478 44.777-3.459 5.341-1.221 10.616-2.637 15.573-4.123 2.856 3.357 7.274 5.106 12.649 5.106 1.39 0 2.803-.103 4.24-.322 7.706-1.175 13.05-5.506 15.561-12.602 1.306-3.685 1.639-7.118.999-10.211 2.085-1.16 3.982-2.511 5.695-4.05 5.705-5.128 8.712-11.34 8.938-18.463.082-2.584-.087-5.023-.509-7.305 2.342-.685 4.519-1.6 6.513-2.745 7.786-4.475 12.179-11.029 13.042-19.481.403-3.931-.005-7.482-1.214-10.554Z' />
    </svg>
  );
}

function SupabaseIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 109 113' fill='none'>
      <path
        d='M63.708 110.284c-2.86 3.601-8.86 1.628-8.86-2.91v-38.7c0-1.152.934-2.086 2.086-2.086h36.695c7.767 0 11.654 9.377 6.255 15.095l-31.216 36.554.04.047Z'
        fill='url(#supabase-a)'
      />
      <path
        d='M63.708 110.284c-2.86 3.601-8.86 1.628-8.86-2.91v-38.7c0-1.152.934-2.086 2.086-2.086h36.695c7.767 0 11.654 9.377 6.255 15.095l-31.216 36.554.04.047Z'
        fill='url(#supabase-b)'
      />
      <path
        d='M45.162 2.454c2.86-3.601 8.86-1.628 8.86 2.91v38.7a2.086 2.086 0 0 1-2.086 2.086H15.241c-7.767 0-11.654-9.377-6.255-15.095L45.162 2.454Z'
        fill='url(#supabase-c)'
      />
      <defs>
        <linearGradient
          id='supabase-a'
          x1='53.031'
          y1='54.49'
          x2='70.872'
          y2='100.061'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#249361' />
          <stop offset='1' stopColor='#3ECF8E' />
        </linearGradient>
        <linearGradient
          id='supabase-b'
          x1='70.282'
          y1='74.646'
          x2='52.047'
          y2='112.668'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#1A8C54' />
          <stop offset='1' stopColor='#249361' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='supabase-c'
          x1='36.349'
          y1='30.065'
          x2='54.483'
          y2='-5.956'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2D9F64' />
          <stop offset='1' stopColor='#30A46C' />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ShadcnIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 256 256' fill='white'>
      <path
        d='M208 128c0 44.183-35.817 80-80 80s-80-35.817-80-80 35.817-80 80-80 80 35.817 80 80Z'
        fill='none'
        stroke='white'
        strokeWidth='8'
      />
      <path
        d='m147.314 84.686 24 24'
        stroke='white'
        strokeWidth='8'
        strokeLinecap='round'
      />
      <path
        d='M108.686 123.314 147.314 161.942'
        stroke='white'
        strokeWidth='8'
        strokeLinecap='round'
      />
    </svg>
  );
}

const techIcons: Record<string, { Icon: typeof ReactIcon; color: string }> = {
  React: { Icon: ReactIcon, color: '#61DAFB' },
  'Next.js': { Icon: NextJsIcon, color: '#fff' },
  TypeScript: { Icon: TypeScriptIcon, color: '#3178C6' },
  'Tailwind CSS': { Icon: TailwindIcon, color: '#38BDF8' },
  'shadcn/ui': { Icon: ShadcnIcon, color: '#fff' },
  PostgreSQL: { Icon: PostgreSQLIcon, color: '#336791' },
  Supabase: { Icon: SupabaseIcon, color: '#3ECF8E' },
};

const currentlyBuilding = [
  {
    name: 'Sant.AI',
    category: 'AI Ecosystem',
    description:
      'Building an AI ecosystem focused on education, research, and productivity.',
    status: 'Active Development',
    href: '#',
  },
  {
    name: 'Rynex',
    category: 'Modern Web App',
    description:
      'A modern web application built with cutting-edge technologies.',
    status: 'In Progress',
    href: '#',
  },
  {
    name: 'Soraku',
    category: 'Anime Community',
    description:
      'Anime community platform for fans to discuss, share, and track their favorite series.',
    status: 'Live',
    href: 'https://soraku.vercel.app',
  },
];

const selectedWork = [
  {
    name: 'Soraku',
    category: 'Anime Community',
    description:
      'Anime community platform for fans to discuss, share, and track their favorite series.',
    tech: ['Next.js', 'Tailwind CSS', 'Supabase', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800',
    href: '/projects/soraku',
  },
  {
    name: 'TaskFlow',
    category: 'Productivity',
    description:
      'Productivity app with real-time collaboration, Kanban boards, and team management.',
    tech: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
    href: '/projects/taskflow',
  },
];

const openSourceRepos = [
  {
    name: 'soraku',
    description: 'Anime community platform built with Next.js and Supabase.',
    stars: 128,
    language: 'TypeScript',
    languageColor: '#3178C6',
    updated: '2 days ago',
    href: 'https://github.com/adinfauzan/soraku',
  },
  {
    name: 'taskflow',
    description:
      'Productivity app with real-time collaboration and Kanban boards.',
    stars: 64,
    language: 'TypeScript',
    languageColor: '#3178C6',
    updated: '1 week ago',
    href: 'https://github.com/adinfauzan/taskflow',
  },
  {
    name: 'ai-chat',
    description:
      'Clean chat interface with streaming responses and conversation history.',
    stars: 42,
    language: 'TypeScript',
    languageColor: '#3178C6',
    updated: '3 weeks ago',
    href: 'https://github.com/adinfauzan/ai-chat',
  },
  {
    name: 'dashboard',
    description: 'Analytics dashboard for online stores with revenue tracking.',
    stars: 31,
    language: 'TypeScript',
    languageColor: '#3178C6',
    updated: '1 month ago',
    href: 'https://github.com/adinfauzan/dashboard',
  },
];

const techStackData = {
  Frontend: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'shadcn/ui',
    'Framer Motion',
  ],
  Backend: ['NestJS', 'Supabase', 'PostgreSQL', 'Prisma', 'Redis', 'Node.js'],
  Tools: ['Docker', 'Git', 'Linux', 'VS Code', 'Figma', 'Vercel'],
};

const writingPosts = [
  {
    title: 'List Animation using Motion for React',
    category: 'React',
    date: 'Dec 17, 2024',
    readTime: '6 min',
    slug: 'list-animation-motion-react',
  },
  {
    title: 'Advanced React Patterns',
    category: 'React',
    date: 'Mar 3, 2024',
    readTime: '10 min',
    slug: 'advanced-react-patterns',
  },
  {
    title: 'Next.js Authentication using Higher-Order Components',
    category: 'Next.js',
    date: 'Mar 10, 2023',
    readTime: '7 min',
    slug: 'nextjs-authentication-hoc',
  },
  {
    title: 'Getting Started with Next.js App Router',
    category: 'Next.js',
    date: 'Feb 15, 2024',
    readTime: '8 min',
    slug: 'nextjs-app-router-guide',
  },
  {
    title: 'TypeScript Best Practices for React Developers',
    category: 'TypeScript',
    date: 'Jan 28, 2024',
    readTime: '6 min',
    slug: 'typescript-best-practices',
  },
];

const timeline = [
  {
    year: '2020',
    title: 'The Beginning',
    description:
      'Started learning web development out of pure curiosity. HTML, CSS, and JavaScript became the foundation of everything that followed.',
  },
  {
    year: '2021',
    title: 'First Freelance Projects',
    description:
      'Took on first freelance projects, building simple websites and landing pages. Discovered React and fell in love with component-based architecture.',
  },
  {
    year: '2022',
    title: 'Deep Dive into React',
    description:
      'Spent the year mastering React, TypeScript, and the modern frontend ecosystem. Built several fullstack applications to solidify my skills.',
  },
  {
    year: '2023',
    title: 'University & Growth',
    description:
      'Started Data Science at Universitas Saintek Muhammadiyah. Expanded my skill set with backend technologies, databases, and system design.',
  },
  {
    year: '2024',
    title: 'Freelance & Exploration',
    description:
      'Worked with multiple clients on diverse projects — dashboards, company profiles, and web applications. Explored new tools and frameworks.',
  },
  {
    year: '2025',
    title: 'Founding Soraku Studio',
    description:
      'Founded Soraku Studio and launched Rynex. Started building products with a focus on clean design, developer experience, and user delight.',
  },
  {
    year: '2026',
    title: 'Building Sant.AI',
    description:
      'Founded Sant.AI, an AI ecosystem for education, research, and productivity. Designing scalable architecture for the next generation of tools.',
  },
];

const experiences = [
  {
    date: '2026 \u2014 Present',
    org: 'Sant.AI',
    role: 'Founder & Fullstack Developer',
    location: 'Bogor, Indonesia',
    description:
      'Building an AI ecosystem focused on education, research, and productivity.',
    achievements: [
      'Designed the complete ecosystem architecture.',
      'Built AI Workspace.',
      'Developed AI Chat.',
      'Implemented authentication.',
      'Designed scalable backend architecture.',
      'Built article management system.',
      'Created dashboard and role management.',
    ],
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'TailwindCSS',
      'shadcn/ui',
      'Supabase',
      'PostgreSQL',
    ],
  },
  {
    date: '2025',
    org: 'Soraku Studio',
    role: 'Founder',
    location: 'Indonesia',
    description: 'Building modern web products and digital experiences.',
    achievements: [
      'Developed Rynex.',
      'Built Soraku ecosystem.',
      'Designed branding.',
      'Created modern UI systems.',
      'Built reusable design components.',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'shadcn/ui'],
  },
  {
    date: '2024',
    org: 'Freelance Fullstack Developer',
    role: 'Fullstack Developer',
    location: 'Indonesia',
    description:
      'Worked with multiple clients creating company profiles, dashboards, and web applications.',
    achievements: [],
    tech: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'PostgreSQL'],
  },
  {
    date: '2023',
    org: 'Universitas Saintek Muhammadiyah',
    role: 'Data Science Student',
    location: 'Indonesia',
    description:
      'Started building larger fullstack projects while actively participating in organizations and research.',
    achievements: [],
    tech: ['React', 'TypeScript', 'Node.js'],
  },
];

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='currentColor'>
      <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='currentColor'>
      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
    </svg>
  );
}

function TwitterIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='currentColor'>
      <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
    </svg>
  );
}

function StackedProfileCard() {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [4, -4]);
  const rotateY = useTransform(mouseX, [0, 1], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className='relative w-[240px] h-[320px] cursor-pointer'
    >
      {/* Card 2 - Workspace */}
      <motion.div
        animate={{
          rotate: isHovered ? 0 : -8,
          x: isHovered ? 0 : -18,
          y: isHovered ? 0 : -12,
          scale: isHovered ? 1 : 0.98,
          zIndex: isHovered ? 3 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className='absolute inset-0 rounded-[24px] border border-white/[0.06] bg-gradient-to-br from-[#14142a] to-[#0a0a14] overflow-hidden'
        style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
      >
        {/* Workspace Scene */}
        <div className='relative h-full w-full p-6'>
          {/* Desk */}
          <div className='absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-white/[0.02] to-transparent' />

          {/* Laptop */}
          <div className='absolute bottom-14 left-1/2 -translate-x-1/2 w-[78%]'>
            {/* Screen */}
            <div className='bg-gradient-to-br from-indigo-950/40 to-slate-900/30 rounded-t-[6px] h-[92px] border border-white/[0.06] relative overflow-hidden'>
              {/* VS Code Window */}
              <div className='absolute inset-1.5 rounded-[3px] bg-[#1e1e1e]/90 border border-white/[0.04] overflow-hidden'>
                {/* Title Bar */}
                <div className='h-3 bg-white/[0.05] flex items-center gap-1 px-2'>
                  <div className='w-[5px] h-[5px] rounded-full bg-red-400/50' />
                  <div className='w-[5px] h-[5px] rounded-full bg-yellow-400/50' />
                  <div className='w-[5px] h-[5px] rounded-full bg-green-400/50' />
                  <span className='text-[5px] text-white/20 ml-2'>
                    workspace
                  </span>
                </div>
                {/* Code Lines */}
                <div className='p-1.5 space-y-1'>
                  {[75, 50, 65, 35, 80, 45].map((w, i) => (
                    <div key={i} className='flex gap-1.5 items-center'>
                      <span className='text-[5px] text-white/[0.08] w-2 text-right'>
                        {i + 1}
                      </span>
                      <div
                        className={`h-[5px] rounded-full ${i % 2 === 0 ? 'bg-blue-400/20' : 'bg-emerald-400/15'}`}
                        style={{ width: `${w}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Base */}
            <div className='h-[6px] bg-gradient-to-b from-white/[0.04] to-white/[0.01] rounded-b-[3px] border-x border-b border-white/[0.06]' />
          </div>

          {/* Mechanical Keyboard */}
          <div className='absolute bottom-[18px] left-1/2 -translate-x-1/2 w-[55%]'>
            <div className='grid grid-cols-10 gap-[2px]'>
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className='h-[5px] rounded-[1px] bg-white/[0.05]'
                />
              ))}
            </div>
          </div>

          {/* Coffee */}
          <div className='absolute bottom-[52px] right-7'>
            <div className='w-[22px] h-[28px] rounded-t-full bg-gradient-to-b from-amber-800/25 to-amber-900/15 border border-white/[0.05] relative'>
              <div className='absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-[3px] rounded-full bg-white/[0.03]' />
              <div className='absolute -top-2.5 left-1/2 -translate-x-1/2'>
                <div className='w-[2px] h-3 bg-white/[0.04] rounded-full' />
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className='absolute bottom-3 left-0 right-0 text-center'>
            <p className='text-[9px] text-white/15 italic tracking-wider'>
              My workspace where ideas become products.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Card 1 - Minimal Profile */}
      <motion.div
        animate={{
          rotate: isHovered ? 8 : 3,
          x: isHovered ? 50 : 0,
          y: isHovered ? -15 : 0,
          scale: isHovered ? 0.95 : 1,
          zIndex: isHovered ? 1 : 2,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className='absolute inset-0 rounded-[24px] border border-white/[0.06] overflow-hidden'
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
        }}
      >
        {/* Photo */}
        <div className='relative h-[62%] w-full overflow-hidden bg-white/[0.02]'>
          <Image
            src='/images/about/me.png'
            alt='Adin Fauzan'
            fill
            className='object-cover'
            sizes='280px'
          />
          {/* Overlay gradient */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />
        </div>

        {/* Content */}
        <div className='p-5'>
          <p className='text-xl text-center text-gray-300 [font-family:var(--font-dancing-script)]'>
            Adinfauzan
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef<HTMLElement | null>(null);
  const animating = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      if (rect.top > 0) return;

      const atFirst = activeIndex === 0;
      const atLast = activeIndex === timeline.length - 1;
      const scrollingUp = e.deltaY < 0;
      const scrollingDown = e.deltaY > 0;

      if ((atFirst && scrollingUp) || (atLast && scrollingDown)) return;

      e.preventDefault();
      if (animating.current) return;

      animating.current = true;

      const dir = scrollingDown ? 1 : -1;
      const next = Math.max(
        0,
        Math.min(activeIndex + dir, timeline.length - 1),
      );

      if (next !== activeIndex) {
        setDirection(dir);
        setActiveIndex(next);

        const sectionTop = window.scrollY + rect.top;
        const totalSectionHeight = section.offsetHeight;
        const viewHeight = window.innerHeight;
        const scrollable = totalSectionHeight - viewHeight;
        const step = scrollable / (timeline.length - 1);
        let targetY = sectionTop + next * step;

        if (next === timeline.length - 1) {
          targetY = sectionTop + scrollable - viewHeight * 0.25;
        }

        window.scrollTo({ top: targetY, behavior: 'instant' });
      }

      setTimeout(() => {
        animating.current = false;
      }, 600);
    };

    section.addEventListener('wheel', handleWheel, { passive: false });
    return () => section.removeEventListener('wheel', handleWheel);
  }, [activeIndex]);

  return (
    <main className='bg-black text-white'>
      {/* Background Gradient */}
      <div className='fixed inset-0 -z-10'>
        <div className='absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-black opacity-100' />
        <div className='absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-950/5 blur-[120px]' />
      </div>

      {/* Premium About Section */}
      <section className='relative pt-32 pb-40 overflow-hidden'>
        <div className='mx-auto max-w-[1180px] px-6'>
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='mb-20 text-center'
          >
            <h1 className='text-6xl md:text-7xl font-bold tracking-tight mb-3'>
              About <span className='text-[#4FA3D1]'>Me</span>
            </h1>
            <p className='text-base text-gray-400'>
              A story of growth and discovery
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div
            className='grid gap-16 items-center'
            style={{ gridTemplateColumns: '30% 70%' }}
          >
            {/* LEFT COLUMN - Stacked Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='flex justify-center'
            >
              <StackedProfileCard />
            </motion.div>

            {/* RIGHT COLUMN - Biography */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='max-w-[680px]'
            >
              {/* Name */}
              <h2 className='text-5xl font-bold text-white mb-3'>
                Adin Fauzan
              </h2>

              {/* Role */}
              <p className='text-xl text-gray-300 mb-9'>Fullstack Developer</p>

              {/* Biography */}
              <div className='space-y-7 text-lg leading-relaxed text-gray-300'>
                <p>
                  Hey! I'm{' '}
                  <span className='text-white font-semibold'>Adin Fauzan</span>,
                  a Fullstack Developer from Indonesia. I work primarily with
                  the React ecosystem, building clean, performant, and scalable
                  web applications.
                </p>

                <p>
                  I started learning web development in 2020 out of curiosity.
                  What began as a hobby has evolved into a passion for crafting
                  beautiful user interfaces and robust backend systems. I
                  believe in writing code that's not just functional, but also
                  maintainable and elegant.
                </p>

                <p>
                  Beyond coding, I enjoy sharing knowledge through technical
                  writing and open-source contributions. My goal is to help
                  other developers understand complex concepts through clear
                  explanations and practical examples.
                </p>

                {/* Current Favorites Stack */}
                <div className='pt-8 border-t border-white/10'>
                  <p className='text-base text-white font-semibold mb-6'>
                    Current Favorites
                  </p>
                  <div className='flex flex-wrap gap-3'>
                    {Object.entries(techIcons).map(
                      ([name, { Icon, color }], idx) => (
                        <motion.div
                          key={name}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.2 + idx * 0.08,
                          }}
                          viewport={{ once: true }}
                          whileHover={{ y: -4, scale: 1.05 }}
                          className='group relative'
                          title={name}
                        >
                          <div
                            className='w-12 h-12 rounded-[14px] flex items-center justify-center transition-all duration-300 cursor-default'
                            style={{
                              background: 'rgba(255,255,255,0.03)',
                              border: '1px solid rgba(255,255,255,0.06)',
                              backdropFilter: 'blur(12px)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = color;
                              e.currentTarget.style.boxShadow = `0 0 20px -4px ${color}40`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor =
                                'rgba(255,255,255,0.06)';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            <Icon size={22} />
                          </div>
                          {/* Tooltip */}
                          <div className='absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm border border-white/10 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10'>
                            {name}
                          </div>
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section - Pinned Storytelling */}
      <section
        ref={sectionRef}
        className='relative'
        style={{ height: `${timeline.length * 100}vh` }}
      >
        <div className='sticky top-0 h-screen overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-20' />

          <div className='mx-auto max-w-[1180px] px-6 h-full flex flex-col justify-center'>
            <div className='mb-10'>
              <h2 className='text-4xl font-bold text-white'>Journey</h2>
              <div className='w-12 h-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full mt-4' />
            </div>

            <div className='flex gap-14 items-center'>
              <div className='w-[340px] shrink-0'>
                <div className='space-y-8'>
                  <div className='space-y-3'>
                    <div className='text-6xl font-bold text-white tracking-tight'>
                      {timeline[activeIndex].year}
                    </div>
                    <h3 className='text-xl font-bold text-white leading-snug'>
                      {timeline[activeIndex].title}
                    </h3>
                    <p className='text-gray-400 text-sm leading-relaxed pr-4'>
                      {timeline[activeIndex].description}
                    </p>
                  </div>

                  <div className='flex items-center gap-2'>
                    {timeline.map((_, i) => (
                      <div
                        key={i}
                        className='h-[3px] rounded-full transition-all duration-500'
                        style={{
                          width: i === activeIndex ? '28px' : '12px',
                          background:
                            i <= activeIndex
                              ? 'linear-gradient(90deg, rgba(99,102,241,0.8), rgba(99,102,241,0.4))'
                              : 'rgba(255,255,255,0.12)',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className='flex-1 min-h-[260px] flex items-center'>
                <AnimatePresence mode='wait' custom={direction}>
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={{
                      enter: (dir) => ({ y: dir > 0 ? 40 : -40, opacity: 0 }),
                      center: { y: 0, opacity: 1, scale: 1 },
                      exit: (dir) => ({
                        y: dir > 0 ? -40 : 40,
                        opacity: 0,
                        scale: 0.98,
                      }),
                    }}
                    initial='enter'
                    animate='center'
                    exit='exit'
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className='w-full'
                  >
                    <div
                      className='group relative h-[240px] rounded-[24px] p-9 overflow-hidden bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] transition-all duration-300'
                      style={{
                        boxShadow: '0 0 30px -10px rgba(99,102,241,0.12)',
                      }}
                    >
                      <div className='absolute bottom-[-16px] right-[24px] text-[160px] font-extrabold text-white/[0.06] pointer-events-none select-none leading-none'>
                        {timeline[activeIndex].year}
                      </div>

                      <div
                        className='absolute left-0 top-4 bottom-4 w-[3px] bg-indigo-400 rounded-r-full'
                        style={{
                          boxShadow: '0 0 14px 3px rgba(99,102,241,0.25)',
                        }}
                      />

                      <div className='relative z-10 flex flex-col h-full pt-1'>
                        <div className='text-[14px] text-white/40 mb-5 tracking-wide uppercase'>
                          Journey &bull; {timeline[activeIndex].year}
                        </div>
                        <h3 className='text-[34px] font-bold text-white leading-tight mb-3'>
                          {timeline[activeIndex].title}
                        </h3>
                        <p className='text-[16px] text-white/70 leading-relaxed max-w-[90%]'>
                          {timeline[activeIndex].description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className='relative overflow-hidden py-[140px]'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='absolute inset-0 pointer-events-none select-none overflow-hidden z-0'
        >
          <div
            className='absolute left-1/2'
            style={{
              top: '0px',
              width: 'min(1200px, 95vw)',
              transform: 'translateX(-50%)',
              opacity: 0.03,
            }}
          >
            <Image
              src='/images/about/Experiences.png'
              alt=''
              width={1000}
              height={250}
              priority={false}
              sizes='1000px'
              className='w-full h-auto'
            />
          </div>
        </motion.div>

        <div className='mx-auto max-w-[1180px] px-6 relative z-10'>
          <div className='mb-24 text-center'>
            <div className='inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.03] mb-5'>
              <Briefcase size={16} className='text-white/40' />
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-white tracking-tight'>
              Experiences
            </h2>
            <div className='w-12 h-[2px] bg-white/[0.15] rounded-full mt-5 mx-auto' />
            <p className='text-[15px] text-gray-500 mt-5 max-w-xl leading-relaxed mx-auto'>
              Organizations, leadership, freelancing, communities, and products
              I&apos;ve been building throughout my journey.
            </p>
          </div>

          <div className='space-y-20'>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-60px' }}
                className='flex gap-12'
              >
                <div className='w-[200px] shrink-0 pt-0.5'>
                  <span className='text-[13px] text-gray-500 tracking-wide'>
                    {exp.date}
                  </span>
                </div>

                <div className='flex-1 min-w-0'>
                  <div className='pb-8 border-b border-white/[0.06]'>
                    <h3 className='text-xl font-bold text-white mb-1'>
                      {exp.org}
                    </h3>
                    <div className='flex items-center gap-3 text-sm text-gray-500'>
                      <span>{exp.role}</span>
                      {exp.location && (
                        <>
                          <span className='text-white/[0.08]'>&bull;</span>
                          <span>{exp.location}</span>
                        </>
                      )}
                    </div>

                    <p className='text-[15px] text-gray-400 leading-relaxed mt-4 max-w-2xl'>
                      {exp.description}
                    </p>

                    {exp.achievements.length > 0 && (
                      <div className='mt-5 space-y-1.5'>
                        {exp.achievements.map((a, j) => (
                          <div
                            key={j}
                            className='flex items-start gap-2.5 text-[14px] text-gray-400'
                          >
                            <span className='text-white/[0.15] mt-[7px] shrink-0'>
                              <svg
                                width='4'
                                height='4'
                                viewBox='0 0 4 4'
                                fill='currentColor'
                              >
                                <circle cx='2' cy='2' r='2' />
                              </svg>
                            </span>
                            <span>{a}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {exp.tech.length > 0 && (
                      <div className='flex flex-wrap gap-2 mt-5'>
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className='text-[12px] text-gray-500 px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]'
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
