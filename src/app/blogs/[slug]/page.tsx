import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { posts } from '@/constants/posts';
import { getArticleBySlug } from '@/lib/articles';
import { ReadingProgress } from '@/components/blog/ReadingProgress';
import { ActionBar } from '@/components/blog/ActionBar';
import { ArticleBody } from '@/components/blog/ArticleBody';
import { CoverImage } from '@/components/blog/CoverImage';
import { EndOfArticle } from '@/components/blog/EndOfArticle';
import { AICompanion } from '@/components/blog/AICompanion';
import { CommentsSection } from '@/components/blog/CommentsSection';

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} — Adin Fauzan`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
      images: [{ url: post.image, width: 800, height: 450 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function PlatformBadge({ platform }: { platform: 'website' | 'dev' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full border ${
        platform === 'website'
          ? 'border-indigo-500/20 text-indigo-400 bg-indigo-500/5'
          : 'border-emerald-500/20 text-emerald-400 bg-emerald-500/5'
      }`}
    >
      <span
        className={`w-1 h-1 rounded-full ${
          platform === 'website' ? 'bg-indigo-400' : 'bg-emerald-400'
        }`}
      />
      {platform === 'website' ? 'Website' : 'DEV Community'}
    </span>
  );
}

function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const related = posts.filter((p) => p.slug !== currentSlug).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className='mt-24 pt-16 border-t border-white/[0.06]'>
      <span className='text-[11px] font-mono text-gray-500 tracking-[0.2em] uppercase'>
        Related Articles
      </span>
      <div className='mt-6 grid md:grid-cols-3 gap-5'>
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className='group rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-indigo-500/20 transition-all duration-300'
          >
            {post.image && (
              <div className='relative aspect-[16/9] overflow-hidden'>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className='object-cover transition-all duration-500 group-hover:scale-105'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300' />
              </div>
            )}
            <div className='p-5'>
              <p className='text-[15px] font-medium text-white group-hover:text-indigo-400 transition-colors duration-200 line-clamp-2'>
                {post.title}
              </p>
              <p className='mt-1.5 text-[13px] text-gray-500 line-clamp-2 leading-relaxed'>
                {post.excerpt}
              </p>
              <div className='mt-3 flex items-center gap-3 text-[11px] font-mono text-gray-600'>
                <span>{formatDate(post.date)}</span>
                <span>&middot;</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            <div className='px-5 pb-4 flex items-center gap-1 text-[12px] font-mono text-gray-600 group-hover:text-indigo-400 transition-colors duration-200'>
              Read article
              <span className='inline-block transition-transform duration-200 group-hover:translate-x-1'>
                &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function AuthorSection() {
  return (
    <section className='mt-16 pt-16 border-t border-white/[0.06]'>
      <div className='flex items-start gap-5'>
        <div className='w-14 h-14 rounded-full bg-white/[0.04] border border-white/[0.06] overflow-hidden shrink-0'>
          <Image
            src='/images/about/me.png'
            alt='Adin Fauzan'
            width={56}
            height={56}
            className='object-cover w-full h-full'
          />
        </div>
        <div className='flex-1 min-w-0'>
          <p className='text-base font-semibold text-white'>Adin Fauzan</p>
          <p className='text-[13px] text-gray-400'>Fullstack Developer</p>
          <p className='mt-2 text-[14px] text-gray-500 leading-relaxed max-w-lg'>
            Building modern web experiences with Next.js, React, and TypeScript.
            Writing about frontend engineering, system design, and developer
            tooling.
          </p>
          <div className='flex flex-wrap gap-4 mt-4'>
            {[
              { label: 'GitHub', href: 'https://github.com/adinfauzan' },
              { label: 'DEV', href: 'https://dev.to/adinfauzan' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/adinfauzan' },
              { label: 'Portfolio', href: 'https://adinfauzan.dev' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-[12px] font-mono text-gray-500 hover:text-white transition-colors duration-200'
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <a
          href='https://github.com/adinfauzan'
          target='_blank'
          rel='noopener noreferrer'
          className='shrink-0 px-5 py-2.5 text-[12px] font-mono rounded-xl border border-white/[0.06] text-gray-300 hover:text-white hover:border-white/20 transition-all duration-200'
        >
          Follow
        </a>
      </div>
    </section>
  );
}

function FooterSection() {
  const repoUrl = 'https://github.com/adinfauzan/profile';

  return (
    <section className='mt-12 pt-12 border-t border-white/[0.06]'>
      <p className='text-[13px] text-gray-500'>
        Found a mistake?{' '}
        <a
          href={`${repoUrl}/edit/main/src/constants/posts.ts`}
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-white underline underline-offset-2 decoration-white/10 transition-all duration-200'
        >
          Suggest an edit on GitHub
        </a>{' '}
        &middot;{' '}
        <a
          href={`${repoUrl}/issues/new`}
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-white underline underline-offset-2 decoration-white/10 transition-all duration-200'
        >
          Report issue
        </a>
      </p>
    </section>
  );
}

function JsonLd({ post }: { post: (typeof posts)[number] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Adin Fauzan',
      url: 'https://myriudesu.vercel.app',
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article || article.platform !== 'website') notFound();

  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <ReadingProgress />
      <JsonLd post={post} />

      <main className='min-h-screen bg-black'>
        {/* Subtle background gradient */}
        <div className='fixed inset-0 pointer-events-none'>
          <div className='absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/3 rounded-full blur-[120px]' />
          <div className='absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-400/2 rounded-full blur-[100px]' />
        </div>

        <div className='relative mx-auto max-w-[1280px] px-6 md:px-10 pb-24 pt-10'>
          <CoverImage src={post.image} alt={post.title} />

          <div className='max-w-[920px]'>
            <header className='pt-8 pb-10'>
              <div className='flex flex-wrap items-center gap-2 mb-6'>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className='text-[12px] font-mono px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-gray-400'
                  >
                    {tag}
                  </span>
                ))}
                <PlatformBadge platform='website' />
              </div>

              <h1
                className='font-heading font-bold text-white tracking-tight leading-[1.05] max-w-[900px]'
                style={{ fontSize: 'clamp(52px, 6vw, 72px)' }}
              >
                {post.title}
              </h1>

              <p className='mt-5 text-[18px] text-gray-400 leading-relaxed max-w-[760px]'>
                {post.excerpt}
              </p>

              <div className='mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] font-mono text-gray-500'>
                <span>{formatDate(post.date)}</span>
                <span className='text-gray-700'>&middot;</span>
                <span>{post.readTime}</span>
                <span className='text-gray-700'>&middot;</span>
                <span>{post.views.toLocaleString()} views</span>
                <span className='text-gray-700'>&middot;</span>
                <span>&mdash;</span>
                <span className='text-gray-700'>&middot;</span>
                <PlatformBadge platform='website' />
              </div>
            </header>
          </div>

          {/* Content with TOC sidebar */}
          <div className='max-w-[1280px] mx-auto'>
            <ArticleBody content={post.content} />
          </div>

          {/* End of Article */}
          <div className='max-w-[980px] mx-auto'>
            <EndOfArticle />
          </div>

          {/* AI Companion */}
          <div className='max-w-[980px] mx-auto'>
            <AICompanion />
          </div>

          {/* Related Articles */}
          <RelatedArticles currentSlug={slug} />

          {/* Author */}
          <AuthorSection />

          {/* Comments */}
          <CommentsSection />

          {/* Footer */}
          <FooterSection />
        </div>
      </main>

      <ActionBar />
    </>
  );
}
