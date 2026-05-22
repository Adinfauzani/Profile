import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { featuredPosts } from '@/constants/posts';

import { Container } from '@/components/ui';

export function FeaturedBlogs() {
  return (
    <section className='py-24 md:py-32'>
      <Container>
        <div className='mb-12'>
          <h2 className='text-3xl font-bold text-white md:text-4xl'>
            Latest Writing
          </h2>
          <p className='mt-4 max-w-2xl text-gray-400'>
            Thoughts on development, architecture, and the tools I use.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-3'>
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className='group rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/5'
            >
              <div className='flex items-center gap-2 text-xs text-gray-500'>
                <span className='rounded-full bg-white/10 px-2 py-0.5 text-indigo-400'>
                  {post.category}
                </span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className='mt-3 text-lg font-semibold text-white transition-colors group-hover:text-indigo-400'>
                {post.title}
              </h3>

              <p className='mt-2 line-clamp-2 text-sm text-gray-400'>
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>

        <div className='mt-10 text-center'>
          <Link
            href='/blogs'
            className='inline-flex items-center gap-2 text-sm text-indigo-400 transition-colors hover:text-indigo-300'
          >
            Read all posts
            <ArrowRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
