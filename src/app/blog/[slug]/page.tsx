import { format } from 'date-fns';
import { ArrowLeft, Calendar, Clock, Eye } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';

import { getPostBySlug, getPostSlugs } from '@/db/queries';

import { useMDXComponents } from '@/lib/mdx-components';

import { GlassContainer } from '@/components/glass/GlassContainer';

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className='layout pt-32'>
      <a
        href='/blog'
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
              {format(new Date(post.date), 'MMMM dd, yyyy')}
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

      <GlassContainer className='p-6 md:p-10'>
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
      </GlassContainer>
    </main>
  );
}
