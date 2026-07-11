'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  ExternalLink,
  Eye,
  Heart,
  MessageCircle,
  Search,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import type { Article } from '@/lib/articles';
import { getAllCategories, getYearlyStats } from '@/lib/articles';

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
      className={`inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full border ${
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

function HeroSection() {
  return (
    <section className='relative pt-32 pb-16 md:pb-24 overflow-hidden'>
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none select-none'>
        <span className='text-[clamp(6rem,20vw,16rem)] font-bold text-white/[0.015] tracking-tighter leading-none'>
          WRITING
        </span>
      </div>
      <div className='relative mx-auto max-w-[760px] px-6 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className='text-[11px] font-mono text-gray-500 tracking-[0.2em] uppercase'>
            Journal
          </span>
          <h1 className='mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight'>
            Writing & Ideas
          </h1>
          <p className='mt-4 text-[15px] text-gray-400 leading-relaxed max-w-lg mx-auto'>
            Thoughts, engineering notes, tutorials, product updates, and
            everything I&apos;m learning while building modern software.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection({
  stats,
}: {
  stats: { total: number; views: number; reactions: number };
}) {
  const items = [
    { label: 'Articles', value: stats.total },
    { label: 'Total Views', value: stats.views.toLocaleString() },
    { label: 'Reactions', value: stats.reactions.toLocaleString() },
  ];

  return (
    <section className='mx-auto max-w-[760px] px-6 pb-16 md:pb-24'>
      <div className='grid grid-cols-3 gap-3 md:gap-4'>
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, margin: '-40px' }}
            className='rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 md:p-5 text-center'
          >
            <div className='text-2xl md:text-3xl font-bold text-white tracking-tight'>
              {item.value}
            </div>
            <div className='mt-1 text-[12px] font-mono text-gray-500'>
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeaturedArticle({ articles }: { articles: Article[] }) {
  const [index, setIndex] = useState(0);
  const article = articles[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % articles.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [articles.length]);

  return (
    <section className='mx-auto max-w-[1060px] px-6 pb-20 md:pb-28'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: '-60px' }}
      >
        <div className='flex items-center justify-between mb-5'>
          <span className='text-[11px] font-mono text-gray-500 tracking-[0.2em] uppercase'>
            Featured
          </span>
          {articles.length > 1 && (
            <div className='flex gap-1.5'>
              {articles.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? 'w-6 bg-white/40'
                      : 'w-1.5 bg-white/[0.12] hover:bg-white/20'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href={article.url}
              target={article.platform === 'dev' ? '_blank' : undefined}
              rel={
                article.platform === 'dev' ? 'noopener noreferrer' : undefined
              }
              className='grid md:grid-cols-2 gap-8 md:gap-12 items-center'
            >
              <div className='order-2 md:order-1'>
                <div className='flex items-center gap-3 mb-4'>
                  <PlatformBadge platform={article.platform} />
                  <span className='text-[13px] text-gray-500 font-mono'>
                    {formatDate(article.publishedAt)}
                  </span>
                  <span className='text-[13px] text-gray-500 font-mono'>
                    {article.readingTime}
                  </span>
                </div>
                <h2 className='text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-white/80 transition-colors duration-300'>
                  {article.title}
                </h2>
                <p className='mt-3 text-[15px] text-gray-400 leading-relaxed'>
                  {article.description}
                </p>
                <div className='mt-6 flex items-center gap-5 text-sm text-gray-500 font-mono'>
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
                  <span className='flex items-center gap-1.5 text-white/60 group-hover:gap-2 transition-all duration-300'>
                    Read Article
                    <ExternalLink size={14} />
                  </span>
                </div>
              </div>

              <div className='order-1 md:order-2'>
                {article.coverImage ? (
                  <div className='relative aspect-[16/10] rounded-[24px] overflow-hidden border border-white/[0.06]'>
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className='object-cover transition-transform duration-700 group-hover:scale-[1.03]'
                      sizes='(max-width: 768px) 100vw, 480px'
                    />
                  </div>
                ) : (
                  <div className='aspect-[16/10] rounded-[24px] bg-white/[0.02] border border-white/[0.06] flex items-center justify-center'>
                    <span className='text-gray-600 font-mono text-sm'>
                      No cover
                    </span>
                  </div>
                )}
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function ArticlesList({ articles }: { articles: Article[] }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = ['All', 'Website', 'DEV', ...getAllCategories(articles)];
    return [...new Set(cats)];
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
    <section className='mx-auto max-w-[760px] px-6 pb-20 md:pb-28'>
      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className='flex items-center gap-2 mb-6 flex-wrap'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[13px] font-mono px-3 py-1.5 rounded-full border transition-all duration-200 ${
                filter === cat
                  ? 'border-white/20 text-white bg-white/10'
                  : 'border-white/[0.06] text-gray-500 hover:text-gray-300 hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className='relative mb-10'>
          <Search
            size={14}
            className='absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500'
          />
          <input
            type='text'
            placeholder='Search articles...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full bg-white/[0.02] border border-white/[0.06] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 transition-colors duration-200'
          />
        </div>
      </motion.div>

      {/* List */}
      <AnimatePresence mode='popLayout'>
        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-center text-gray-500 font-mono text-sm py-12'
          >
            No articles found.
          </motion.p>
        )}
        <div className='space-y-6'>
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
                href={article.url}
                target={article.platform === 'dev' ? '_blank' : undefined}
                rel={
                  article.platform === 'dev' ? 'noopener noreferrer' : undefined
                }
                className='group grid md:grid-cols-[160px_1fr] gap-4 md:gap-6 py-5 border-t border-white/[0.04] first:border-t-0'
              >
                {/* Cover */}
                <div className='relative aspect-[16/9] md:aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.04] bg-white/[0.01]'>
                  {article.coverImage ? (
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-105'
                      sizes='160px'
                    />
                  ) : (
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <span className='text-[11px] font-mono text-gray-600'>
                        No cover
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className='flex-1 min-w-0'>
                  <div className='flex items-center gap-2 mb-2 flex-wrap'>
                    <PlatformBadge platform={article.platform} />
                    <span className='text-[12px] font-mono text-gray-500'>
                      {formatDate(article.publishedAt)}
                    </span>
                    <span className='text-[12px] font-mono text-gray-500'>
                      {article.readingTime}
                    </span>
                  </div>

                  <h3 className='text-base font-semibold text-white group-hover:text-white/80 transition-colors duration-200 leading-snug'>
                    {article.title}
                  </h3>
                  <p className='mt-1 text-[13px] text-gray-400 leading-relaxed line-clamp-2'>
                    {article.description}
                  </p>

                  <div className='mt-3 flex items-center gap-4 text-[12px] font-mono text-gray-500'>
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
                    <span className='ml-auto flex items-center gap-1 text-gray-600 group-hover:text-white/40 group-hover:gap-1.5 transition-all duration-200'>
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

function TimelineSection({ articles }: { articles: Article[] }) {
  const years = getYearlyStats(articles);

  return (
    <section className='mx-auto max-w-[760px] px-6 pb-20 md:pb-28'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className='text-[11px] font-mono text-gray-500 tracking-[0.2em] uppercase'>
          Archive
        </span>
        <div className='mt-6 flex gap-8 md:gap-12'>
          {years.map(({ year, count }, i) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <div className='text-3xl md:text-4xl font-bold text-white tracking-tight'>
                {year}
              </div>
              <div className='mt-1 text-[13px] font-mono text-gray-500'>
                {count} Article{count > 1 ? 's' : ''}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className='mx-auto max-w-[760px] px-6 pb-20 md:pb-28'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='border-t border-white/[0.06] pt-12'
      >
        <span className='text-[11px] font-mono text-gray-500 tracking-[0.2em] uppercase'>
          Philosophy
        </span>
        <h2 className='mt-4 text-2xl font-bold text-white'>Why I Write</h2>
        <p className='mt-3 text-[15px] text-gray-400 leading-relaxed max-w-lg'>
          Writing helps me organize ideas, document my journey, and share
          knowledge with the developer community.
        </p>
      </motion.div>
    </section>
  );
}

function FollowSection() {
  return (
    <section className='mx-auto max-w-[760px] px-6 pb-20 md:pb-28'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='border-t border-white/[0.06] pt-12'
      >
        <span className='text-[11px] font-mono text-gray-500 tracking-[0.2em] uppercase'>
          Follow
        </span>
        <h2 className='mt-4 text-2xl font-bold text-white'>Stay in Touch</h2>
        <p className='mt-3 text-[15px] text-gray-400 leading-relaxed max-w-lg'>
          Follow my writing across platforms.
        </p>
        <div className='mt-6 flex flex-wrap gap-3'>
          <a
            href='https://github.com/adinfauzan'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-sm text-gray-300 hover:text-white hover:border-white/20 transition-all duration-200'
          >
            <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
            </svg>
            GitHub
          </a>
          <a
            href='https://dev.to/adinfauzan'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-sm text-gray-300 hover:text-white hover:border-white/20 transition-all duration-200'
          >
            <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M7.333 3.333H24v17.333H7.333V3.333zm1.334 1.334v14.666H22.666V4.667H8.667zM4 6l2.667 2.667v.666L5.333 10.667 6.667 12v.667L4 15.333V14l2-2.667L4 8.667V6zm12.667 2a1 1 0 110 2 1 1 0 010-2zm-4 0a1 1 0 110 2 1 1 0 010-2zm4 4a1 1 0 110 2 1 1 0 010-2zm-4 0a1 1 0 110 2 1 1 0 010-2zm0 4a1 1 0 110 2 1 1 0 010-2z' />
            </svg>
            DEV Community
          </a>
          <a
            href='/rss.xml'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-sm text-gray-300 hover:text-white hover:border-white/20 transition-all duration-200'
          >
            <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
              <circle cx='6' cy='18' r='3' />
              <path d='M4 11a9 9 0 019 9h-2a7 7 0 00-7-7v-2zm0-4a13 13 0 0113 13h-2a11 11 0 00-11-11v-2z' />
            </svg>
            RSS Feed
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function FooterNote() {
  return (
    <section className='mx-auto max-w-[760px] px-6 pb-24'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='border-t border-white/[0.06] pt-12 text-center'
      >
        <p className='text-lg text-gray-300 leading-relaxed'>
          Thanks for reading.
          <br />I hope something here helps you build better software.
        </p>
      </motion.div>
    </section>
  );
}

export function BlogsPageClient({
  articles,
  stats,
}: {
  articles: Article[];
  stats: { total: number; views: number; reactions: number };
}) {
  const featuredArticles = articles.slice(0, 5);

  return (
    <>
      <HeroSection />
      <StatsSection stats={stats} />
      {featuredArticles.length > 0 && (
        <FeaturedArticle articles={featuredArticles} />
      )}
      <ArticlesList articles={articles} />
      <TimelineSection articles={articles} />
      <PhilosophySection />
      <FollowSection />
      <FooterNote />
    </>
  );
}
