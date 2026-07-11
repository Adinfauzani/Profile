'use client';

import { useRef } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HeroSection } from '@/components/sections/HeroSection';
import { WritingSection } from '@/components/sections/WritingSection';

function ReactIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 256 228' fill='#61DAFB'>
      <path d='M210.483 73.823a178.081 178.081 0 0 0-18.44-6.145 96.649 96.649 0 0 0-22.917-22.916 134.233 134.233 0 0 0-10.146-14.77c-9.89-12.86-20.355-19.512-28.98-19.512-8.626 0-19.09 6.652-28.98 19.512a134.233 134.233 0 0 0-10.146 14.77 96.649 96.649 0 0 0-22.917 22.916 178.081 178.081 0 0 0-18.44 6.145c-13.08 4.848-24.736 11.072-34.514 18.442-9.778 7.37-15.548 14.98-15.548 21.725 0 6.745 5.77 14.355 15.548 21.725 9.778 7.37 21.435 13.594 34.514 18.442a178.081 178.081 0 0 0 18.44 6.145 96.649 96.649 0 0 0 22.917 22.916 134.233 134.233 0 0 0 10.146 14.77c9.89 12.86 20.355 19.512 28.98 19.512 8.626 0 19.09-6.652 28.98-19.512a134.233 134.233 0 0 0 10.146-14.77 96.649 96.649 0 0 0 22.917-22.916 178.081 178.081 0 0 0 18.44-6.145c13.08-4.848 24.736-11.072 34.514-18.442 9.778-7.37 15.548-14.98 15.548-21.725 0-6.745-5.77-14.355-15.548-21.725-9.778-7.37-21.435-13.594-34.514-18.442Zm-42.3 19.126a24.229 24.229 0 1 1-24.229 24.229 24.258 24.258 0 0 1 24.229-24.229Zm-17.747-63.58c6.825 0 16.098 8.496 23.426 22.636a112.332 112.332 0 0 0-11.012 4.724 89.5 89.5 0 0 0-12.338 6.976 97.75 97.75 0 0 0-11.472 8.988 99.492 99.492 0 0 1-42.486-6.16c10.574-16.087 21.067-25.564 27.69-30.354 8.007-5.784 15.794-9.81 25.192-9.81Zm-69.2 114.69a145.229 145.229 0 0 1-10.537-7.075c-7.84-5.914-14.655-12.02-20.562-18.16a112.727 112.727 0 0 1-13.224-16.133 108.52 108.52 0 0 0 15.097-16.696c8.097-10.896 15.98-21.16 23.79-28.308a106.588 106.588 0 0 0 4.268-3.388 112.675 112.675 0 0 1 10.246 17.674 121.97 121.97 0 0 1 6.694 17.766 118.704 118.704 0 0 1 2.034 18.222 99.13 99.13 0 0 1-10.096 9.243 99.72 99.72 0 0 1-16.233 10.924 141.003 141.003 0 0 1-11.501 5.351Zm-6.321-41.51a109.62 109.62 0 0 1-4.768-3.497c-2.607-2.024-5.115-4.16-7.519-6.404 2.497-2.813 5.11-5.475 7.831-7.97a112.974 112.974 0 0 1 13.21-10.24 102.314 102.314 0 0 0-1.546 13.777 122.862 122.862 0 0 0-1.067 9.1 153.14 153.14 0 0 1-6.14 4.234Zm-49.1 4.49c2.308 5.347 7.71 11.056 15.549 16.402 7.838 5.346 16.9 10.324 26.536 14.461a160.64 160.64 0 0 1-8.278 5.352c-11.318 6.944-23.435 12.246-35.708 15.973-9.143-16.944-14.61-30.794-16.409-40.94 3.407-2.446 7.007-4.762 10.802-6.948 5.64-3.237 11.573-6.04 17.838-8.394l.038.013Z' />
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
    category: 'Campus Collaboration Ecosystem',
    description:
      'Connecting students from Sains Data, Teknik Informatika, and Sistem Informasi to collaborate on real-world projects.',
    status: 'Active Development',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL'],
    version: 'v0.6.0',
    href: '#',
    accent: '#4FA3D1',
    accentRGB: '79, 163, 209',
  },
  {
    name: 'Rynex',
    category: 'Modern Web Solutions',
    description:
      'Creating scalable business websites and modern web applications with a focus on performance and user experience.',
    status: 'Production',
    tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Cloudflare'],
    version: 'v1.0.0',
    href: '#',
    accent: '#06B6D4',
    accentRGB: '6, 182, 212',
  },
  {
    name: 'Soraku',
    category: 'Creative Ecosystem',
    description:
      'Building a connected ecosystem of products, communities, and creative digital experiences.',
    status: 'Growing',
    tech: ['React', 'TypeScript', 'Supabase', 'Motion'],
    version: 'v2.3.1',
    href: 'https://soraku.vercel.app',
    guestbook: 'https://github.com/adinfauzani/soraku/discussions',
    accent: '#A855F7',
    accentRGB: '168, 85, 247',
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

function ProductCard({
  product,
  i,
  total,
  progress,
}: {
  product: (typeof currentlyBuilding)[0];
  i: number;
  total: number;
  progress: any;
}) {
  const targetScale = 1 - (total - i - 1) * 0.08;
  const range = [(i / total) * 0.9, 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  const isSantAi = product.name === 'Sant.AI';
  const isRynex = product.name === 'Rynex';
  const auraColor = isSantAi
    ? 'bg-[#4FA3D1]/[0.03]'
    : isRynex
      ? 'bg-[#06B6D4]/[0.03]'
      : 'bg-[#A855F7]/[0.03]';

  return (
    <div className='sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black'>
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        <div className='absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px]' />
      </div>
      <motion.div
        style={{ scale, transformOrigin: 'top center' }}
        className='w-full max-w-[1200px] px-6'
      >
        <div className='grid md:grid-cols-2 gap-12 md:gap-16 items-center min-h-[60vh]'>
          {/* Left — Content */}
          <div>
            <span className='text-[11px] font-mono text-gray-500 tracking-[0.2em] uppercase'>
              {product.category}
            </span>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mt-4 leading-[1.05]'>
              {product.name}
            </h2>
            <p className='text-[15px] text-gray-400 mt-5 leading-relaxed max-w-md'>
              {product.description}
            </p>
            <div className='flex items-center gap-4 mt-8'>
              <div className='flex items-center gap-2'>
                {isSantAi ? (
                  <span className='relative flex w-2 h-2'>
                    <motion.span
                      animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: 'easeInOut',
                      }}
                      className='absolute inset-0 rounded-full bg-yellow-400/40'
                    />
                    <span className='relative w-2 h-2 rounded-full bg-yellow-400' />
                  </span>
                ) : (
                  <span
                    className={`w-2 h-2 rounded-full ${isRynex ? 'bg-green-400' : 'bg-purple-400'}`}
                  />
                )}
                <span
                  className={`text-[13px] font-mono ${isSantAi ? 'text-yellow-400/70' : isRynex ? 'text-green-400/70' : 'text-purple-400/70'}`}
                >
                  {product.status}
                </span>
              </div>
              <span className='text-[13px] font-mono text-gray-600'>
                {product.version}
              </span>
            </div>
            <div className='flex flex-wrap gap-2 mt-6'>
              {product.tech.map((tech) => (
                <span
                  key={tech}
                  className='text-[12px] font-mono text-gray-500 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02]'
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className='flex items-center gap-4 mt-10'>
              <a
                href={product.href}
                target={product.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  product.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className='inline-flex items-center gap-2 text-sm font-medium text-white bg-white/[0.08] hover:bg-white/[0.12] px-5 py-2.5 rounded-full transition-colors duration-300'
              >
                View Project <ArrowRight size={14} />
              </a>
              {'guestbook' in product && product.guestbook ? (
                <a
                  href={product.guestbook}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300'
                >
                  GuestBook <ExternalLink size={13} />
                </a>
              ) : (
                <a
                  href={product.href}
                  target={
                    product.href.startsWith('http') ? '_blank' : undefined
                  }
                  rel={
                    product.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className='inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300'
                >
                  Learn More <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>

          {/* Right — Preview */}
          <div className='relative hidden md:flex items-center justify-center'>
            <motion.div
              animate={{
                y: isSantAi
                  ? [-8, 8, -8]
                  : isRynex
                    ? [-6, 6, -6]
                    : [-10, 10, -10],
              }}
              transition={{
                repeat: Infinity,
                duration: isSantAi ? 6 : isRynex ? 5 : 7,
                ease: 'easeInOut',
              }}
              className='relative w-full aspect-square max-w-[480px]'
            >
              {isSantAi ? (
                <svg viewBox='0 0 400 400' className='w-full h-full'>
                  <circle
                    cx='200'
                    cy='200'
                    r='150'
                    fill='none'
                    stroke='rgba(79,163,209,0.06)'
                    strokeWidth='60'
                  />
                  <circle
                    cx='200'
                    cy='200'
                    r='120'
                    fill='none'
                    stroke='rgba(79,163,209,0.04)'
                    strokeWidth='40'
                  />
                  {[
                    { x1: 200, y1: 60, x2: 290, y2: 140 },
                    { x1: 290, y1: 140, x2: 310, y2: 260 },
                    { x1: 310, y1: 260, x2: 200, y2: 340 },
                    { x1: 200, y1: 340, x2: 90, y2: 260 },
                    { x1: 90, y1: 260, x2: 110, y2: 140 },
                    { x1: 110, y1: 140, x2: 200, y2: 60 },
                    { x1: 200, y1: 60, x2: 200, y2: 340 },
                    { x1: 110, y1: 140, x2: 290, y2: 260 },
                    { x1: 290, y1: 140, x2: 90, y2: 260 },
                  ].map((line, j) => (
                    <line
                      key={j}
                      {...line}
                      stroke='rgba(79,163,209,0.08)'
                      strokeWidth='1'
                    />
                  ))}
                  {[
                    { cx: 200, cy: 60, r: 6 },
                    { cx: 290, cy: 140, r: 5 },
                    { cx: 310, cy: 260, r: 6 },
                    { cx: 200, cy: 340, r: 5 },
                    { cx: 90, cy: 260, r: 6 },
                    { cx: 110, cy: 140, r: 5 },
                  ].map((node, j) => (
                    <circle
                      key={j}
                      {...node}
                      fill='rgba(79,163,209,0.15)'
                      stroke='rgba(79,163,209,0.3)'
                      strokeWidth='1'
                    />
                  ))}
                  <circle cx='200' cy='200' r='80' fill='url(#santaiGlow)' />
                  <circle
                    cx='200'
                    cy='200'
                    r='30'
                    fill='rgba(79,163,209,0.1)'
                  />
                  <motion.circle
                    cx='200'
                    cy='200'
                    r='50'
                    fill='none'
                    stroke='rgba(79,163,209,0.15)'
                    strokeWidth='1'
                    animate={{ r: [40, 70, 40], opacity: [0.3, 0, 0.3] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: 'easeInOut',
                    }}
                  />
                  <defs>
                    <radialGradient id='santaiGlow'>
                      <stop offset='0%' stopColor='rgba(79,163,209,0.12)' />
                      <stop offset='100%' stopColor='rgba(79,163,209,0)' />
                    </radialGradient>
                  </defs>
                </svg>
              ) : isRynex ? (
                <div className='w-full h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden flex flex-col'>
                  <div className='flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06]'>
                    <div className='w-2.5 h-2.5 rounded-full bg-red-400/30' />
                    <div className='w-2.5 h-2.5 rounded-full bg-yellow-400/30' />
                    <div className='w-2.5 h-2.5 rounded-full bg-green-400/30' />
                    <div className='ml-3 flex-1 max-w-[200px] h-5 rounded-md bg-white/[0.04]' />
                  </div>
                  <div className='flex-1 p-4 md:p-6 space-y-4'>
                    <div className='flex gap-3'>
                      <div className='w-20 h-20 rounded-xl bg-gradient-to-br from-[#06B6D4]/10 to-transparent border border-white/[0.04]' />
                      <div className='flex-1 space-y-2'>
                        <div className='h-3 w-3/4 rounded bg-white/[0.04]' />
                        <div className='h-2 w-1/2 rounded bg-white/[0.03]' />
                      </div>
                    </div>
                    <div className='grid grid-cols-3 gap-2'>
                      {[...Array(3)].map((_, j) => (
                        <div
                          key={j}
                          className='h-16 rounded-lg bg-white/[0.03] border border-white/[0.04] flex items-center justify-center'
                        >
                          <div className='h-3 w-8 rounded bg-white/[0.04]' />
                        </div>
                      ))}
                    </div>
                    <div className='h-24 rounded-lg bg-white/[0.02] border border-white/[0.04] p-3 space-y-2'>
                      <div className='h-2 w-1/3 rounded bg-white/[0.04]' />
                      <div className='h-2 w-full rounded bg-white/[0.03]' />
                      <div className='h-2 w-5/6 rounded bg-white/[0.03]' />
                    </div>
                  </div>
                </div>
              ) : (
                <svg viewBox='0 0 400 400' className='w-full h-full'>
                  <circle
                    cx='200'
                    cy='200'
                    r='160'
                    fill='rgba(168,85,247,0.03)'
                  />
                  <circle
                    cx='200'
                    cy='200'
                    r='120'
                    fill='none'
                    stroke='rgba(168,85,247,0.06)'
                    strokeWidth='1'
                  />
                  <circle
                    cx='200'
                    cy='200'
                    r='80'
                    fill='none'
                    stroke='rgba(168,85,247,0.04)'
                    strokeWidth='1'
                  />
                  <circle cx='200' cy='200' r='60' fill='url(#sorakuGlow)' />
                  <circle
                    cx='200'
                    cy='200'
                    r='4'
                    fill='rgba(168,85,247,0.25)'
                  />
                  <motion.circle
                    cx='200'
                    cy='200'
                    r='40'
                    fill='none'
                    stroke='rgba(168,85,247,0.12)'
                    strokeWidth='1'
                    animate={{ r: [30, 60, 30], opacity: [0.3, 0, 0.3] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: 'easeInOut',
                    }}
                  />
                  {[...Array(8)].map((_, j) => (
                    <motion.circle
                      key={j}
                      cx={200 + Math.cos((j / 8) * Math.PI * 2) * 100}
                      cy={200 + Math.sin((j / 8) * Math.PI * 2) * 100}
                      r='2'
                      fill='rgba(168,85,247,0.15)'
                      animate={{ r: [2, 5, 2] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        delay: j * 0.3,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                  <defs>
                    <radialGradient id='sorakuGlow'>
                      <stop offset='0%' stopColor='rgba(168,85,247,0.1)' />
                      <stop offset='100%' stopColor='rgba(168,85,247,0)' />
                    </radialGradient>
                  </defs>
                </svg>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function HomePage() {
  const stackRef = useRef(null);
  const { scrollYProgress: stackProgress } = useScroll({
    target: stackRef,
    offset: ['start start', 'end end'],
  });

  return (
    <main className='bg-black text-white'>
      <HeroSection />

      {/* Tech Stack Marquee */}
      <div className='relative py-6 md:py-12 overflow-hidden'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
            className='flex shrink-0 gap-16 items-center'
          >
            {[...Array(2)].map((_, loop) => (
              <div key={loop} className='flex shrink-0 gap-16 items-center'>
                {Object.entries(techIcons).map(([name, { Icon, color }]) => (
                  <div
                    key={name}
                    className='flex items-center gap-3 text-gray-500'
                  >
                    <Icon size={20} />
                    <span className='text-sm whitespace-nowrap'>{name}</span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Product Stack — Skiper-style */}
      <div ref={stackRef} className='relative pt-[40vh] pb-[40vh]'>
        {currentlyBuilding.map((product, i) => (
          <ProductCard
            key={product.name}
            product={product}
            i={i}
            total={currentlyBuilding.length}
            progress={stackProgress}
          />
        ))}
      </div>

      {/* Separator */}
      <div className='mx-auto max-w-[1200px] px-6'>
        <div className='h-px bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent' />
      </div>

      {/* Selected Work */}
      <section className='relative py-32'>
        <div className='mx-auto max-w-[1200px] px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className='mb-16'
          >
            <h2 className='text-4xl font-bold text-white tracking-tight mt-4'>
              Selected Work
            </h2>
            <p className='text-[15px] text-gray-400 mt-3 max-w-xl leading-relaxed'>
              A curated selection of projects I&apos;ve designed and built.
            </p>
          </motion.div>

          <div className='space-y-8'>
            {selectedWork.map((work, i) => (
              <motion.div
                key={work.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                viewport={{ once: true, margin: '-80px' }}
              >
                <a
                  href={work.href}
                  className='group relative block rounded-[24px] overflow-hidden border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-500'
                >
                  <div className='grid md:grid-cols-2 gap-0'>
                    <div
                      className={`relative h-[320px] md:h-full min-h-[280px] overflow-hidden ${i % 2 !== 0 ? 'md:order-2' : ''}`}
                    >
                      <Image
                        src={work.image}
                        alt={work.name}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-700'
                        sizes='(max-width: 768px) 100vw, 50vw'
                      />
                      <div
                        className={`absolute inset-0 ${i % 2 !== 0 ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-black/40 via-transparent to-transparent`}
                      />
                      <div
                        className={`absolute top-5 ${i % 2 !== 0 ? 'right-5' : 'left-5'}`}
                      >
                        <span className='text-[11px] text-gray-300 font-mono px-3 py-1.5 rounded-full bg-black/50 border border-white/[0.08]'>
                          {work.category}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`p-10 flex flex-col justify-center ${i % 2 !== 0 ? 'md:order-1' : ''}`}
                    >
                      <h3 className='text-2xl font-bold text-white mb-3 group-hover:text-[#4FA3D1] transition-colors duration-300'>
                        {work.name}
                      </h3>
                      <p className='text-[15px] text-gray-400 leading-relaxed mb-6'>
                        {work.description}
                      </p>
                      <div className='flex flex-wrap gap-2 mb-8'>
                        {work.tech.map((t) => (
                          <span
                            key={t}
                            className='text-[11px] text-gray-500 font-mono px-2.5 py-1 rounded-full border border-white/[0.06]'
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className='flex items-center gap-2 text-sm text-gray-500 group-hover:text-[#4FA3D1] transition-colors duration-300'>
                        <span>View Case Study</span>
                        <ArrowRight
                          size={16}
                          className='-translate-x-2 group-hover:translate-x-0 transition-transform duration-300'
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WritingSection />
    </main>
  );
}
