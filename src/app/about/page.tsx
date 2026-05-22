'use client';

import { ExternalLink, Mail } from 'lucide-react';

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

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='currentColor'>
      <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='currentColor'>
      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
    </svg>
  );
}

function TwitterIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='currentColor'>
      <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
    </svg>
  );
}

const connectLinks = [
  {
    label: 'Email',
    href: 'mailto:hello@adinfauzan.dev',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/adinfauzan',
    icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/adinfauzan',
    icon: GithubIcon,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/adinfauzan',
    icon: TwitterIcon,
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
                <div
                  key={exp.company}
                  className='rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm'
                >
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
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='space-y-6'>
          <div className='rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm'>
            <h3 className='text-lg font-semibold text-white'>Connect</h3>
            <div className='mt-4 flex flex-col gap-3'>
              {connectLinks.map((link) => (
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
          </div>

          <div className='rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm'>
            <h3 className='mb-4 text-lg font-semibold text-white'>
              Yearly Retro
            </h3>
            <div className='flex flex-col gap-4'>
              {milestones.map((m) => (
                <a
                  key={m.year}
                  href={`/blogs/${m.year}-retrospective`}
                  className='group block'
                >
                  <span className='text-2xl font-bold text-white group-hover:text-indigo-400'>
                    {m.year}
                  </span>
                  <p className='text-sm text-gray-400'>{m.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
