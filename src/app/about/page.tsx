'use client';

import { ExternalLink, Mail } from 'lucide-react';
import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri';

import { GlassCard } from '@/components/glass/GlassCard';

const experience = [
  {
    role: 'Fullstack Developer',
    company: 'Tech Startup',
    period: '2023 - Present',
    description:
      'Building modern web applications with Next.js, React, and TypeScript. Leading frontend architecture decisions.',
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2022 - 2023',
    description:
      'Developed responsive websites and web applications for various clients. Focused on performance and accessibility.',
  },
  {
    role: 'Junior Developer',
    company: 'Software House',
    period: '2021 - 2022',
    description:
      'Started my professional journey building web applications with React and Node.js.',
  },
];

const milestones = [
  {
    year: 2025,
    title: 'The 2025 Retrospective',
    description:
      'New projects, career growth, and building meaningful products.',
  },
  {
    year: 2024,
    title: 'The 2024 Retrospective',
    description:
      'First full-time year, solo travel while working, socializing, and more!',
  },
  {
    year: 2023,
    title: 'The 2023 Retrospective',
    description: 'Graduation, tech writing, first job, mentorship, and more!',
  },
];

export default function AboutPage() {
  return (
    <main className='layout pt-32'>
      <div className='grid gap-12 md:grid-cols-3'>
        <div className='md:col-span-2'>
          <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
            About Me
          </h1>

          <div className='prose prose-invert max-w-none'>
            <p className='text-gray-300'>
              Hey! I&apos;m Adin Fauzan, a Fullstack Developer based in
              Indonesia. I work with the React Ecosystem and focus on building
              clean, performant, and accessible web applications.
            </p>
            <p className='text-gray-300'>
              I&apos;m passionate about sharing knowledge through technical
              writing and open-source projects. My goal is to help developers
              understand complex concepts through simple mental models.
            </p>
          </div>

          <div className='mt-8'>
            <h2 className='mb-6 text-2xl font-bold text-white'>Experience</h2>
            <div className='flex flex-col gap-4'>
              {experience.map((exp) => (
                <GlassCard key={exp.company} className='p-6'>
                  <div className='flex items-start justify-between gap-4'>
                    <div>
                      <h3 className='text-lg font-semibold text-white'>
                        {exp.role}
                      </h3>
                      <p className='text-gray-400'>{exp.company}</p>
                    </div>
                    <span className='shrink-0 text-sm text-gray-500'>
                      {exp.period}
                    </span>
                  </div>
                  <p className='mt-3 text-sm text-gray-400'>
                    {exp.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>

        <div className='space-y-6'>
          <GlassCard className='p-6'>
            <h3 className='text-lg font-semibold text-white'>Connect</h3>
            <div className='mt-4 flex flex-col gap-3'>
              {[
                {
                  label: 'Email',
                  href: 'mailto:hello@adinfauzan.dev',
                  icon: Mail,
                },
                {
                  label: 'LinkedIn',
                  href: 'https://linkedin.com/in/adinfauzan',
                  icon: RiLinkedinFill,
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/adinfauzan',
                  icon: RiGithubFill,
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/adinfauzan',
                  icon: RiTwitterXFill,
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white'
                >
                  <link.icon size={16} />
                  {link.label}
                  <ExternalLink size={12} className='ml-auto' />
                </a>
              ))}
            </div>
          </GlassCard>

          <GlassCard className='p-6'>
            <h3 className='mb-4 text-lg font-semibold text-white'>
              Yearly Retro
            </h3>
            <div className='flex flex-col gap-4'>
              {milestones.map((m) => (
                <a
                  key={m.year}
                  href={`/blog/${m.year}-retrospective`}
                  className='group block'
                >
                  <span className='text-2xl font-bold text-white group-hover:text-indigo-400'>
                    {m.year}
                  </span>
                  <p className='text-sm text-gray-400'>{m.description}</p>
                </a>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}
