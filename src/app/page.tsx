'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { DailySection } from '@/components/sections/DailySection';
import { HeroSection } from '@/components/sections/HeroSection';
import { WritingSection } from '@/components/sections/WritingSection';

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

export default function HomePage() {
  return (
    <main className='bg-black text-white'>
      <HeroSection />

      {/* Separator */}
      <div className='mx-auto max-w-[1200px] px-6'>
        <div className='h-px bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent' />
      </div>

      {/* Selected Work */}
      <section className='relative py-20 md:py-32'>
        <div className='mx-auto max-w-[1200px] px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className='mb-10 md:mb-16'
          >
            <h2 className='text-4xl font-bold text-white tracking-tight mt-4'>
              My Projects
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
                      className={`p-6 sm:p-8 md:p-10 flex flex-col justify-center ${i % 2 !== 0 ? 'md:order-1' : ''}`}
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

      <DailySection />

      <WritingSection />
    </main>
  );
}
