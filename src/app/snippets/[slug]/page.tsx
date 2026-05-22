import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';

import { getAllContent, getContentBySlug } from '@/lib/mdx';
import { useMDXComponents } from '@/lib/mdx-components';

export function generateStaticParams() {
  const snippets = getAllContent('snippets');
  return snippets.map((s) => ({ slug: s!.slug }));
}

export default async function SnippetPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const snippet = getContentBySlug('snippets', slug);
  if (!snippet) notFound();

  const { frontmatter, content } = snippet;

  return (
    <main className='layout pt-32'>
      <a
        href='/snippets'
        className='mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white'
      >
        <ArrowLeft size={16} />
        Back to Snippets
      </a>

      <div className='mb-8'>
        <div className='flex items-center gap-3 text-sm text-gray-500'>
          <span className='flex items-center gap-1'>
            <Calendar size={14} />
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </span>
          <span className='flex items-center gap-1'>
            <Clock size={14} />
            Quick read
          </span>
        </div>

        <h1 className='mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl'>
          {frontmatter.title}
        </h1>

        <p className='mt-4 text-gray-400'>{frontmatter.description}</p>

        <div className='mt-4 flex flex-wrap gap-2'>
          {frontmatter.tags.map((tag: string) => (
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
            source={content}
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
