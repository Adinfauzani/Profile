import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { posts } from '@/constants/posts';
import {
  getArticleBySlug,
  getAllArticles,
  fetchDevArticleContent,
} from '@/lib/articles';
import { ReadingProgress } from '@/components/blog/ReadingProgress';
import { ActionBar } from '@/components/blog/ActionBar';
import { ArticleBody } from '@/components/blog/ArticleBody';
import { CoverImage } from '@/components/blog/CoverImage';
import { EndOfArticle } from '@/components/blog/EndOfArticle';
import { AICompanion } from '@/components/blog/AICompanion';
import { CommentsSection } from '@/components/blog/CommentsSection';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { DevToPublish } from '@/components/blog/DevToPublish';

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

function FeaturedBadge({ featured }: { featured: boolean }) {
  if (!featured) return null;
  return (
    <span className='inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full border border-amber-500/20 text-amber-400 bg-amber-500/5'>
      <span className='w-1 h-1 rounded-full bg-amber-400' />
      Featured
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
      <div className='mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
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
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
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
    <section className='mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-white/[0.06]'>
      <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5'>
        <div className='w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-white/[0.04] border border-white/[0.06] overflow-hidden shrink-0'>
          <Image
            src='/images/about/me.png'
            alt='Adin Fauzan'
            width={56}
            height={56}
            className='object-cover w-full h-full'
          />
        </div>
        <div className='flex-1 min-w-0 text-center sm:text-left'>
          <p className='text-sm sm:text-base font-semibold text-white'>
            Adin Fauzan
          </p>
          <p className='text-[12px] sm:text-[13px] text-gray-400'>
            Fullstack Developer
          </p>
          <p className='mt-2 text-[13px] sm:text-[14px] text-gray-500 leading-relaxed max-w-lg mx-auto sm:mx-0'>
            Building modern web experiences with Next.js, React, and TypeScript.
            Writing about frontend engineering, system design, and developer
            tooling.
          </p>
          <div className='flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-4'>
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
                className='text-[11px] sm:text-[12px] font-mono text-gray-500 hover:text-white transition-colors duration-200'
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
          className='shrink-0 w-full sm:w-auto px-4 sm:px-5 py-2.5 text-[12px] font-mono rounded-xl border border-white/[0.06] text-gray-300 hover:text-white hover:border-white/20 transition-all duration-200 text-center'
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
    <section className='mt-10 sm:mt-12 pt-10 sm:pt-12 border-t border-white/[0.06]'>
      <p className='text-center text-[12px] sm:text-[13px] text-gray-500'>
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

function JsonLd({
  title,
  description,
  date,
  tags,
  image,
  url,
}: {
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  url: string;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: date,
    author: {
      '@type': 'Person',
      name: 'Adin Fauzan',
      url: 'https://myriudesu.vercel.app',
    },
    tags,
    image,
    mainEntityOfPage: url,
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
  if (!article) notFound();

  const post = posts.find((p) => p.slug === slug);
  const isDevTo = article.platform === 'dev';

  // For dev.to articles, fetch full content
  let content: string;
  let coverImage: string;
  let title: string;
  let excerpt: string;
  let date: string;
  let readTime: string;
  let views: number;
  let reactions: number;
  let tags: string[];
  let featured = false;
  let devtoUrl: string | undefined;

  if (isDevTo) {
    const { articles } = await getAllArticles();
    const devArticle = articles.find(
      (a) => a.slug === slug && a.platform === 'dev',
    );
    if (!devArticle) notFound();

    // Extract numeric ID from 'dev-123' format
    const devtoId = Number(devArticle.id.replace('dev-', ''));
    const markdown = await fetchDevArticleContent(devtoId);
    if (!markdown) notFound();

    content = markdown;
    coverImage = devArticle.coverImage || '';
    title = devArticle.title;
    excerpt = devArticle.description;
    date = devArticle.publishedAt;
    readTime = devArticle.readingTime;
    views = devArticle.views;
    reactions = devArticle.reactions;
    tags = devArticle.tags;
    devtoUrl = devArticle.url;
  } else {
    if (!post) notFound();
    content = post.content;
    coverImage = post.image || '';
    title = post.title;
    excerpt = post.excerpt;
    date = post.date;
    readTime = post.readTime;
    views = post.views;
    reactions = post.reactions;
    tags = post.tags;
    featured = post.featured ?? false;
  }

  return (
    <>
      <ReadingProgress />
      <JsonLd
        title={title}
        description={excerpt}
        date={date}
        tags={tags}
        image={coverImage}
        url={isDevTo ? devtoUrl! : `/blogs/${slug}`}
      />

      <main className='min-h-screen bg-black'>
        {/* Subtle background gradient */}
        <div className='fixed inset-0 overflow-hidden pointer-events-none'>
          <div className='absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/3 rounded-full blur-[120px]' />
          <div className='absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-400/2 rounded-full blur-[100px]' />
        </div>

        <div className='relative mx-auto max-w-[1280px] px-4 pt-8 pb-20 sm:px-5 sm:pt-10 md:px-8 lg:px-10'>
          {coverImage && <CoverImage src={coverImage} alt={title} />}

          <div className='mt-2 flex flex-col gap-12 lg:flex-row lg:justify-center lg:gap-12'>
            {/* Article column */}
            <div className='mx-auto w-full min-w-0 max-w-[760px] lg:mx-0 lg:max-w-[820px] lg:flex-1'>
              <header className='pt-8 pb-10'>
                {tags.length > 0 && (
                  <div className='mb-4 sm:mb-6 flex flex-wrap items-center gap-1.5 sm:gap-2'>
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className='rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 sm:px-3 py-1 font-mono text-[11px] sm:text-[12px] text-gray-400'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <h4
                  className='font-heading font-bold leading-[1.08] tracking-tight text-white'
                  style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
                >
                  {title}
                </h4>

                <p className='mt-4 sm:mt-5 text-base sm:text-[16px] md:text-[18px] leading-relaxed text-gray-400'>
                  {excerpt}
                </p>

                <div className='mt-5 sm:mt-6 flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1.5 font-mono text-[11px] sm:text-[12px] md:text-[13px] text-gray-500'>
                  <span>{formatDate(date)}</span>
                  <span className='text-gray-700'>&middot;</span>
                  <span>{readTime}</span>
                  <span className='text-gray-700'>&middot;</span>
                  <span>{views.toLocaleString()} views</span>
                  <span className='text-gray-700'>&middot;</span>
                  <span>{reactions.toLocaleString()} reactions</span>
                  <span className='text-gray-700'>&middot;</span>
                  <PlatformBadge platform={isDevTo ? 'dev' : 'website'} />
                  {featured && <FeaturedBadge featured={true} />}
                </div>

                {!isDevTo && <DevToPublish slug={slug} title={title} />}
              </header>

              {/* Article content */}
              <ArticleBody content={content} />

              {/* End of Article */}
              <EndOfArticle />

              {/* AI Companion */}
              <AICompanion />
            </div>

            {/* Table of contents (tablet+) */}
            <div className='hidden lg:block'>
              <TableOfContents content={content} />
            </div>
          </div>

          <div className='mx-auto mt-16 max-w-[820px] lg:max-w-[1280px]'>
            {/* Related Articles */}
            <RelatedArticles currentSlug={slug} />

            {/* Author */}
            <AuthorSection />

            {/* Comments */}
            <CommentsSection />

            {/* Footer */}
            <FooterSection />
          </div>
        </div>
      </main>

      <ActionBar />
    </>
  );
}
