import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { Container } from '@/components/ui';

export function CTASection() {
  return (
    <section className='relative py-24 md:py-32'>
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[200px]' />
      </div>

      <Container>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-white md:text-4xl'>
            Let&apos;s Work Together
          </h2>
          <p className='mx-auto mt-4 max-w-lg text-gray-400'>
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className='mt-8 flex flex-wrap items-center justify-center gap-4'>
            <Link
              href='/about'
              className='inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-indigo-500'
            >
              Get in Touch
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href='/projects'
              className='inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-gray-300 transition-all hover:border-white/40 hover:text-white'
            >
              View Projects
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
