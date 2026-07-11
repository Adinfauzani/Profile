'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'List Animation using Motion for React',
    excerpt:
      'An in-depth guide on how to animate enter and exit animation for list using Motion for React (previously Framer Motion).',
    date: 'Dec 17, 2024',
    readTime: '6 min',
    views: 1250,
    slug: 'list-animation-motion-react',
    tags: ['react', 'animation'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
  },
  {
    title: 'Advanced React Patterns',
    excerpt: 'List of react advanced patterns complete with examples.',
    date: 'Mar 3, 2024',
    readTime: '10 min',
    views: 980,
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
    views: 3400,
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
    views: 1560,
    slug: 'typescript-best-practices',
    tags: ['typescript'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
  },
  {
    title: 'Next.js Authentication using Higher-Order Components',
    excerpt: 'Solve problems such as colocation, and error-prone code.',
    date: 'Mar 10, 2023',
    readTime: '7 min',
    views: 2100,
    slug: 'nextjs-authentication-hoc',
    tags: ['nextjs'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
  },
];

export function WritingSection() {
  return (
    <section className='py-32'>
      <div className='mx-auto max-w-[1200px] px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className='mb-14'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-white tracking-tight'>
            Featured Posts
          </h2>
        </motion.div>

        <div className='space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-14'>
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <Link href={`/blogs/${post.slug}`} className='group block'>
                {/* Cover Image */}
                <div className='relative aspect-[5/3] rounded-[20px] overflow-hidden border border-white/[0.06] mb-5'>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className='object-cover transition-all duration-500 group-hover:scale-[1.03]'
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  />
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300' />
                </div>

                {/* Date */}
                <span className='text-[13px] font-mono text-gray-500'>
                  {post.date}
                </span>

                {/* Title */}
                <h3 className='mt-1.5 text-lg md:text-xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300 leading-snug'>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className='mt-2 text-[14px] text-gray-400 leading-relaxed line-clamp-2'>
                  {post.excerpt}
                </p>

                {/* Metadata */}
                <div className='mt-3 flex items-center gap-3 text-[12px] font-mono text-gray-600'>
                  <span>{post.readTime} read</span>
                  <span>&middot;</span>
                  <span>{post.views.toLocaleString()} views</span>
                </div>

                {/* Tags */}
                <div className='flex flex-wrap gap-1.5 mt-3'>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className='text-[11px] font-mono text-gray-500 px-2 py-0.5 rounded-full border border-white/[0.06]'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className='mt-14 text-center'
        >
          <Link
            href='/blogs'
            className='inline-flex items-center gap-2 text-[13px] font-mono text-gray-400 hover:text-white transition-colors duration-200'
          >
            See more posts
            <ArrowRight size={13} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
