'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { fadeInUp } from '@/lib/motion';

import { GlassCard } from '@/components/glass/GlassCard';

const posts = [
  {
    title: 'Getting Started with Next.js App Router',
    date: 'March 15, 2024',
    excerpt:
      'A comprehensive guide to building modern web applications with Next.js and the App Router.',
    href: '/blog/nextjs-app-router',
    category: 'Next.js',
    readTime: '8 min',
  },
  {
    title: 'TypeScript Best Practices for React Developers',
    date: 'February 28, 2024',
    excerpt:
      'Level up your TypeScript skills with these essential patterns for React development.',
    href: '/blog/typescript-best-practices',
    category: 'TypeScript',
    readTime: '6 min',
  },
  {
    title: 'Building Beautiful UIs with Tailwind CSS',
    date: 'February 10, 2024',
    excerpt:
      'Learn how to create stunning, responsive designs using utility-first CSS.',
    href: '/blog/tailwind-css-tips',
    category: 'Tailwind',
    readTime: '5 min',
  },
];

export function FeaturedPostsSection() {
  return (
    <section id='blog-intro' className='py-24 md:py-32'>
      <div className='layout'>
        <motion.div
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            show: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          <motion.div variants={fadeInUp} className='mb-12'>
            <h2 className='text-3xl font-bold text-white md:text-4xl'>
              Complex Things Made Simple
            </h2>
            <p className='mt-4 max-w-2xl text-gray-400'>
              I&apos;m sharing how I approach something and how my mental model
              affects my learning about a certain topic.
            </p>
          </motion.div>

          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {posts.map((post) => (
              <motion.a
                key={post.title}
                href={post.href}
                variants={fadeInUp}
                className='block'
              >
                <GlassCard className='h-full p-6'>
                  <div className='flex items-center gap-2 text-xs text-gray-500'>
                    <span className='rounded-full bg-white/10 px-2 py-0.5 font-medium text-indigo-400'>
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className='mt-4 text-lg font-semibold text-white transition-colors group-hover:text-indigo-400'>
                    {post.title}
                  </h3>

                  <p className='mt-2 line-clamp-2 text-sm text-gray-400'>
                    {post.excerpt}
                  </p>

                  <div className='mt-4 flex items-center justify-between text-xs text-gray-500'>
                    <span>{post.readTime} read</span>
                    <ArrowRight
                      size={14}
                      className='transition-transform group-hover:translate-x-1'
                    />
                  </div>
                </GlassCard>
              </motion.a>
            ))}
          </div>

          <motion.div variants={fadeInUp} className='mt-10 text-center'>
            <a
              href='/blog'
              className='inline-flex items-center gap-2 text-sm text-indigo-400 transition-colors hover:text-indigo-300'
            >
              See more posts
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
