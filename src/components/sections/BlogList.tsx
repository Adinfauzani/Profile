'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import React from 'react';

import { fadeInUp } from '@/lib/motion';

import { Container, Section } from '@/components/ui';

// Sample blog posts - replace with real data
const posts = [
  {
    title: 'Getting Started with Next.js App Router',
    date: '2024-03-15',
    excerpt:
      'A comprehensive guide to building modern web applications with Next.js 14 and the App Router.',
    href: '/blog/nextjs-app-router',
  },
  {
    title: 'TypeScript Best Practices for React Developers',
    date: '2024-02-28',
    excerpt:
      'Level up your TypeScript skills with these essential patterns for React development.',
    href: '/blog/typescript-best-practices',
  },
  {
    title: 'Building Beautiful UIs with Tailwind CSS',
    date: '2024-02-10',
    excerpt:
      'Learn how to create stunning, responsive designs using utility-first CSS.',
    href: '/blog/tailwind-css-tips',
  },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}

export function BlogList() {
  return (
    <Section id='blog'>
      <Container>
        <div className='mb-12 flex items-end justify-between'>
          <div>
            <h2 className='text-3xl font-bold text-white md:text-4xl'>
              Latest Writings
            </h2>
            <p className='mt-4 text-gray-400 max-w-2xl'>
              Thoughts on development, design, and technology.
            </p>
          </div>
          <a
            href='/blog'
            className='hidden items-center gap-2 text-indigo-400 transition-colors hover:text-indigo-300 md:flex'
          >
            View all posts
            <ArrowRight size={16} />
          </a>
        </div>

        <motion.div
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'
        >
          {posts.map((post) => (
            <motion.article
              key={post.title}
              variants={fadeInUp}
              className='group flex flex-col rounded-xl border border-gray-800 bg-gray-900/30 p-6 transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/50'
            >
              <div className='flex items-center gap-2 text-sm text-gray-500'>
                <Calendar size={14} />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>

              <h3 className='mt-4 text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors'>
                {post.title}
              </h3>

              <p className='mt-2 flex-1 text-sm text-gray-400 line-clamp-3'>
                {post.excerpt}
              </p>

              <div className='mt-4 flex items-center text-sm text-indigo-400 opacity-0 transition-opacity group-hover:opacity-100'>
                Read more
                <ArrowRight size={14} className='ml-1' />
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className='mt-8 text-center md:hidden'>
          <a
            href='/blog'
            className='inline-flex items-center gap-2 text-indigo-400 transition-colors hover:text-indigo-300'
          >
            View all posts
            <ArrowRight size={16} />
          </a>
        </div>
      </Container>
    </Section>
  );
}
