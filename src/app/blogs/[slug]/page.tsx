import { ArrowLeft, Calendar, Clock, Eye } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';

import { posts } from '@/constants/posts';

import { useMDXComponents } from '@/lib/mdx-components';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className='layout pt-32'>
      <a
        href='/blogs'
        className='mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white'
      >
        <ArrowLeft size={16} />
        Back to Blog
      </a>

      <div className='mb-8'>
        <div className='flex items-center gap-3 text-sm text-gray-500'>
          <span className='rounded-full bg-white/10 px-2 py-0.5 text-xs text-indigo-400'>
            {post.category}
          </span>
          <span className='flex items-center gap-1'>
            <Calendar size={14} />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </span>
          <span className='flex items-center gap-1'>
            <Clock size={14} />
            {post.readTime}
          </span>
          <span className='flex items-center gap-1'>
            <Eye size={14} />
            {post.views.toLocaleString()} views
          </span>
        </div>

        <h1 className='mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl'>
          {post.title}
        </h1>

        <div className='mt-4 flex flex-wrap gap-2'>
          {post.tags.map((tag: string) => (
            <span
              key={tag}
              className='rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400'
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className='rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm md:p-10'>
        <article className='prose prose-invert max-w-none prose-headings:text-white prose-a:text-indigo-400 prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm'>
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
            components={useMDXComponents({})}
          />
        </article>
      </div>
    </main>
  );
}
