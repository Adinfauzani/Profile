'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { fadeInUp } from '@/lib/motion';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui';

const posts = [
  {
    title: 'List Animation using Motion for React',
    excerpt:
      'An in-depth guide on how to animate enter and exit animation for list using Motion for React (previously Framer Motion).',
    date: 'Dec 17, 2024',
    readTime: '6 min',
    slug: 'list-animation-motion-react',
    tags: ['react', 'animation'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
  },
  {
    title: 'Advanced React Patterns',
    excerpt: 'List of react advanced patterns complete with examples.',
    date: 'Mar 3, 2024',
    readTime: '10 min',
    slug: 'advanced-react-patterns',
    tags: ['react'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
  },
  {
    title: 'Getting Started with Next.js App Router',
    excerpt:
      'A comprehensive guide to Next.js 14 App Router, covering layouts, nested routes, loading states, and server components.',
    date: 'Feb 15, 2024',
    readTime: '8 min',
    slug: 'nextjs-app-router-guide',
    tags: ['nextjs'],
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800',
  },
  {
    title: 'TypeScript Best Practices for React Developers',
    excerpt:
      'TypeScript tips, patterns, and best practices specifically tailored for React developers.',
    date: 'Jan 28, 2024',
    readTime: '6 min',
    slug: 'typescript-best-practices',
    tags: ['typescript'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
  },
];

// Bento spans: big feature tile + wide tile fill a clean 4x2 desktop grid
const bentoSpans = [
  'col-span-2 row-span-2',
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
];

export function WritingSection() {
  return (
    <section className='py-24 md:py-32'>
      <Container>
        <motion.div
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div variants={fadeInUp} className='mb-12'>
            <h2 className='text-3xl font-bold text-white md:text-4xl'>
              Featured Posts
            </h2>
            <p className='mt-4 max-w-2xl text-gray-400'>
              Thoughts on development, architecture, and the tools I use.
            </p>
          </motion.div>

          <div className='grid auto-rows-[200px] grid-cols-2 gap-3 sm:gap-4 md:auto-rows-[230px] md:grid-cols-4 md:gap-5'>
            {posts.map((post, i) => {
              const featured = i === 0;
              const wide = i === 1;
              return (
                <motion.div
                  key={post.slug}
                  variants={fadeInUp}
                  className={cn('h-full', bentoSpans[i % bentoSpans.length])}
                >
                  <Link
                    href={`/blogs/${post.slug}`}
                    className='group flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all hover:border-white/20 hover:bg-white/[0.04]'
                  >
                    <div className='relative min-h-0 w-full flex-1 overflow-hidden bg-gray-800'>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes='(max-width: 768px) 50vw, 25vw'
                        className='object-cover transition-transform duration-500 group-hover:scale-105'
                      />
                      <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
                    </div>

                    <div className='p-4 md:p-5'>
                      <div className='flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-gray-500 md:text-xs'>
                        <span>{post.date}</span>
                        <span>&middot;</span>
                        <span>{post.readTime} read</span>
                      </div>

                      <h3
                        className={cn(
                          'mt-2 line-clamp-2 font-bold text-white transition-colors group-hover:text-indigo-400',
                          featured
                            ? 'text-lg md:text-2xl'
                            : 'text-sm md:text-base',
                        )}
                      >
                        {post.title}
                      </h3>

                      {(featured || wide) && (
                        <p
                          className={cn(
                            'mt-2 text-xs text-gray-400 md:text-sm',
                            featured
                              ? 'line-clamp-2 md:line-clamp-3'
                              : 'line-clamp-2',
                          )}
                        >
                          {post.excerpt}
                        </p>
                      )}

                      {featured && (
                        <div className='mt-3 flex flex-wrap gap-1.5 md:mt-4 md:gap-2'>
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className='rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-gray-300 md:px-3 md:py-1 md:text-xs'
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={fadeInUp} className='mt-10 text-center'>
            <Link
              href='/blogs'
              className='inline-flex items-center gap-2 text-sm text-indigo-400 transition-colors hover:text-indigo-300'
            >
              See more posts
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
