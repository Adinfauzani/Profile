'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Eye,
  Heart,
  MessageCircle,
  Search,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import type { Article } from '@/lib/articles';
import { getAllCategories } from '@/lib/articles';
import { cn } from '@/lib/utils';

const container = 'mx-auto w-full max-w-[1080px] px-5 sm:px-6 md:px-8';

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function PlatformBadge({ platform }: { platform: 'website' | 'dev' }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[11px] ${
        platform === 'website'
          ? 'border-indigo-500/20 bg-indigo-500/5 text-indigo-400'
          : 'border-emerald-500/20 bg-emerald-500/5 text-emerald-400'
      }`}
    >
      <span
        className={`h-1 w-1 rounded-full ${
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
    <span className='inline-flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/5 px-2 py-0.5 font-mono text-[11px] text-amber-400'>
      <span className='h-1 w-1 rounded-full bg-amber-400' />
      Featured
    </span>
  );
}

function HeroSection() {
  return (
    <section className='relative overflow-hidden pt-32 pb-16 md:pb-24'>
      <div className='pointer-events-none absolute inset-0 flex items-center justify-center select-none'>
        <span className='text-[clamp(6rem,20vw,16rem)] font-bold leading-none tracking-tighter text-white/[0.015]'>
          WRITING
        </span>
      </div>
      <div className={`${container} relative text-center`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className='font-mono text-[11px] tracking-[0.2em] text-gray-500 uppercase'>
            Journal
          </span>
          <h1 className='mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl'>
            Writing &amp; Ideas
          </h1>
          <p className='mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-gray-400'>
            Thoughts, engineering notes, tutorials, product updates, and
            everything I&apos;m learning while building modern software.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedArticles({ articles }: { articles: Article[] }) {
  const count = articles.length;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (count <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 6000);
    return () => clearInterval(timer);
  }, [count]);

  const goTo = (i: number) => setIndex(((i % count) + count) % count);
  const article = articles[index];

  return (
    <section className={`${container} pb-16 md:pb-24`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: '-60px' }}
      >
        <div className='mb-6 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <span className='font-mono text-[11px] tracking-[0.2em] text-gray-500 uppercase'>
              Featured
            </span>
            <span className='font-mono text-[11px] text-gray-600'>
              {String(index + 1).padStart(2, '0')} /{' '}
              {String(count).padStart(2, '0')}
            </span>
          </div>

          {count > 1 && (
            <div className='hidden items-center gap-2 sm:flex'>
              <button
                onClick={() => goTo(index - 1)}
                aria-label='Previous featured article'
                className='flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-gray-400 transition-colors hover:border-white/20 hover:text-white'
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => goTo(index + 1)}
                aria-label='Next featured article'
                className='flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-gray-400 transition-colors hover:border-white/20 hover:text-white'
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        <div className='relative overflow-hidden'>
          <motion.div
            key={article.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Link
              href={`/blogs/${article.slug}`}
              className='group grid items-center gap-6 md:grid-cols-2 md:gap-10'
            >
              <div className='order-2 md:order-1'>
                <div className='mb-4 flex flex-wrap items-center gap-3'>
                  <PlatformBadge platform={article.platform} />
                  <FeaturedBadge featured={article.featured ?? false} />
                  <span className='font-mono text-[13px] text-gray-500'>
                    {formatDate(article.publishedAt)}
                  </span>
                  <span className='font-mono text-[13px] text-gray-500'>
                    {article.readingTime}
                  </span>
                </div>
                <h2 className='text-2xl leading-tight font-bold text-white transition-colors duration-300 group-hover:text-white/80 md:text-3xl'>
                  {article.title}
                </h2>
                <p className='mt-3 line-clamp-3 text-[15px] leading-relaxed text-gray-400'>
                  {article.description}
                </p>
                {article.tags.length > 0 && (
                  <div className='mt-4 flex flex-wrap gap-2'>
                    {article.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className='rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-gray-400'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className='mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm text-gray-500'>
                  <span className='flex items-center gap-1.5'>
                    <Eye size={14} />
                    {article.views || '—'}
                  </span>
                  <span className='flex items-center gap-1.5'>
                    <Heart size={14} />
                    {article.reactions || '—'}
                  </span>
                  <span className='flex items-center gap-1.5'>
                    <MessageCircle size={14} />
                    {article.comments || '—'}
                  </span>
                  <span className='flex items-center gap-1.5 text-white/60 transition-all duration-300 group-hover:gap-2'>
                    Read Article
                    <ExternalLink size={14} />
                  </span>
                </div>
              </div>

              <div className='order-1 md:order-2'>
                {article.coverImage ? (
                  <div className='relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/[0.06]'>
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className='object-cover transition-transform duration-700 group-hover:scale-[1.03]'
                      sizes='(max-width: 768px) 100vw, 520px'
                    />
                  </div>
                ) : (
                  <div className='flex aspect-[16/10] items-center justify-center rounded-3xl border border-white/[0.06] bg-white/[0.02]'>
                    <span className='font-mono text-sm text-gray-600'>
                      No cover
                    </span>
                  </div>
                )}
              </div>
            </Link>
          </motion.div>
        </div>

        {count > 1 && (
          <div className='mt-6 flex justify-center gap-1.5 sm:justify-start'>
            {articles.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to featured article ${i + 1}`}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300',
                  i === index
                    ? 'w-6 bg-white/40'
                    : 'w-1.5 bg-white/[0.12] hover:bg-white/20',
                )}
              />
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}

function ArticlesList({ articles }: { articles: Article[] }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<string>('All');

  const categories = useMemo(() => {
    const platformFilters = [
      ...(articles.some((a) => a.platform === 'website') ? ['Website'] : []),
      ...(articles.some((a) => a.platform === 'dev') ? ['DEV'] : []),
    ];
    return ['All', ...platformFilters, ...getAllCategories(articles)];
  }, [articles]);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      if (filter === 'Website' && a.platform !== 'website') return false;
      if (filter === 'DEV' && a.platform !== 'dev') return false;
      if (
        filter !== 'All' &&
        filter !== 'Website' &&
        filter !== 'DEV' &&
        a.category !== filter
      )
        return false;
      if (!search) return true;
      const q = search.toLowerCase();
      return (
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q)) ||
        a.category.toLowerCase().includes(q)
      );
    });
  }, [articles, filter, search]);

  return (
    <section className={`${container} pb-16 md:pb-24`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className='mb-6 flex flex-wrap items-center gap-2'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                'rounded-full border px-3 py-1.5 font-mono text-[13px] transition-all duration-200',
                filter === cat
                  ? 'border-white/20 bg-white/10 text-white'
                  : 'border-white/[0.06] text-gray-500 hover:border-white/10 hover:text-gray-300',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className='relative mb-10'>
          <Search
            size={14}
            className='absolute top-1/2 left-3.5 -translate-y-1/2 text-gray-500'
          />
          <input
            type='text'
            placeholder='Search articles...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full rounded-xl border border-white/[0.06] bg-white/[0.02] py-3 pr-4 pl-10 text-sm text-white transition-colors duration-200 placeholder:text-gray-600 focus:border-white/20 focus:outline-none'
          />
        </div>
      </motion.div>

      <AnimatePresence mode='popLayout'>
        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='py-12 text-center font-mono text-sm text-gray-500'
          >
            No articles found.
          </motion.p>
        )}

        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {filtered.map((article, i) => (
            <motion.div
              key={article.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              <Link
                href={`/blogs/${article.slug}`}
                className='group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]'
              >
                <div className='relative aspect-[16/9] overflow-hidden border-b border-white/[0.04] bg-white/[0.01]'>
                  {article.coverImage ? (
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-105'
                      sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    />
                  ) : (
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <span className='font-mono text-[11px] text-gray-600'>
                        No cover
                      </span>
                    </div>
                  )}
                </div>

                <div className='flex flex-1 flex-col p-4 md:p-5'>
                  <div className='mb-2 flex flex-wrap items-center gap-2'>
                    <PlatformBadge platform={article.platform} />
                    <FeaturedBadge featured={article.featured ?? false} />
                    <span className='font-mono text-[12px] text-gray-500'>
                      {formatDate(article.publishedAt)}
                    </span>
                    <span className='font-mono text-[12px] text-gray-500'>
                      {article.readingTime}
                    </span>
                  </div>

                  <h3 className='line-clamp-2 text-base leading-snug font-semibold text-white transition-colors duration-200 group-hover:text-white/80'>
                    {article.title}
                  </h3>
                  <p className='mt-2 line-clamp-2 text-[13px] leading-relaxed text-gray-400'>
                    {article.description}
                  </p>

                  {article.tags.length > 0 && (
                    <div className='mt-3 flex flex-wrap gap-1.5'>
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className='rounded-full border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-gray-500'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className='mt-auto flex items-center gap-4 pt-4 font-mono text-[12px] text-gray-500'>
                    <span className='flex items-center gap-1'>
                      <Eye size={12} />
                      {article.views || '—'}
                    </span>
                    <span className='flex items-center gap-1'>
                      <Heart size={12} />
                      {article.reactions || '—'}
                    </span>
                    <span className='flex items-center gap-1'>
                      <MessageCircle size={12} />
                      {article.comments || '—'}
                    </span>
                    <span className='ml-auto flex items-center gap-1 text-gray-600 transition-all duration-200 group-hover:gap-1.5 group-hover:text-white/40'>
                      Read
                      <ExternalLink size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </section>
  );
}

function FollowSection() {
  const links = [
    {
      href: 'https://github.com/adinfauzan',
      label: 'GitHub',
      handle: '@adinfauzan',
      glow: 'rgba(148,163,184,0.28)',
      icon: (
        <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
          <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
        </svg>
      ),
    },
    {
      href: 'https://dev.to/adinfauzan',
      label: 'DEV Community',
      handle: '@adinfauzan',
      glow: 'rgba(99,102,241,0.28)',
      icon: (
        <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
          <path d='M7.333 3.333H24v17.333H7.333V3.333zm1.334 1.334v14.666H22.666V4.667H8.667zM4 6l2.667 2.667v.666L5.333 10.667 6.667 12v.667L4 15.333V14l2-2.667L4 8.667V6zm12.667 2a1 1 0 110 2 1 1 0 010-2zm-4 0a1 1 0 110 2 1 1 0 010-2zm4 4a1 1 0 110 2 1 1 0 010-2zm-4 0a1 1 0 110 2 1 1 0 010-2zm0 4a1 1 0 110 2 1 1 0 010-2z' />
        </svg>
      ),
    },
    {
      href: '/rss.xml',
      label: 'RSS Feed',
      handle: 'Subscribe',
      glow: 'rgba(249,115,22,0.28)',
      icon: (
        <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
          <circle cx='6' cy='18' r='3' />
          <path d='M4 11a9 9 0 019 9h-2a7 7 0 00-7-7v-2zm0-4a13 13 0 0113 13h-2a11 11 0 00-11-11v-2z' />
        </svg>
      ),
    },
  ];

  return (
    <section className={`${container} pb-16 md:pb-24`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-60px' }}
        className='relative overflow-hidden rounded-3xl border border-white/[0.08] p-8 md:p-12'
      >
        <div className='pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/[0.12] via-purple-500/[0.06] to-transparent' />
        <div className='pointer-events-none absolute -top-24 -right-16 -z-10 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl' />
        <div className='pointer-events-none absolute -bottom-24 -left-16 -z-10 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl' />
        <div
          className='pointer-events-none absolute inset-0 -z-10 opacity-[0.12]'
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage:
              'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />

        <span className='font-mono text-[11px] tracking-[0.2em] text-indigo-300/80 uppercase'>
          Follow
        </span>
        <h2 className='mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl'>
          Stay in Touch
        </h2>
        <p className='mt-3 max-w-xl text-[15px] leading-relaxed text-gray-400'>
          Follow my writing across platforms and never miss a new article.
        </p>

        <div className='mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className='group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20'
            >
              <span
                className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${link.glow}, transparent 70%)`,
                }}
              />
              <span className='relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-gray-300 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white'>
                {link.icon}
              </span>
              <span className='relative min-w-0'>
                <span className='block text-sm font-semibold text-white'>
                  {link.label}
                </span>
                <span className='block truncate font-mono text-[12px] text-gray-500'>
                  {link.handle}
                </span>
              </span>
              <ArrowUpRight
                size={16}
                className='relative ml-auto shrink-0 text-gray-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white'
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function FooterNote() {
  return (
    <section className={`${container} pb-24`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='border-t border-white/[0.06] pt-12 text-center'
      >
        <p className='text-lg leading-relaxed text-gray-300'>
          Thanks for reading.
          <br />I hope something here helps you build better software.
        </p>
      </motion.div>
    </section>
  );
}

export function BlogsPageClient({ articles }: { articles: Article[] }) {
  const featuredArticles = articles.slice(0, 3);

  return (
    <>
      <HeroSection />
      {featuredArticles.length > 0 && (
        <FeaturedArticles articles={featuredArticles} />
      )}
      <ArticlesList articles={articles} />
      <FollowSection />
      <FooterNote />
    </>
  );
}
