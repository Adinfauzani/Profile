import { env } from '@/env';

import { posts } from '@/constants/posts';
import { shorts as localShorts } from '@/constants/shorts';

export interface Article {
  id: string;
  title: string;
  description: string;
  slug: string;
  coverImage: string | null;
  publishedAt: string;
  readingTime: string;
  views: number;
  reactions: number;
  comments: number;
  tags: string[];
  platform: 'website' | 'dev';
  url: string;
  category: string;
  content?: string;
  featured?: boolean;
}

export interface Short {
  id: string;
  title: string;
  content: string;
  tags: string[];
  date: string;
  views: number;
  reactions: number;
  platform: 'website' | 'dev';
  url: string;
}

interface DevArticle {
  id: number;
  title: string;
  description: string;
  slug: string;
  cover_image: string | null;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  positive_reactions_count: number;
  comments_count: number;
  url: string;
  user: { username: string; name: string };
}

function mapWebsiteArticle(post: (typeof posts)[number]): Article {
  return {
    id: `website-${post.slug}`,
    title: post.title,
    description: post.excerpt,
    slug: post.slug,
    coverImage: post.image || null,
    publishedAt: post.date,
    readingTime: post.readTime,
    views: post.views || 0,
    reactions: post.reactions || 0,
    comments: 0,
    tags: post.tags,
    platform: 'website',
    url: `/blogs/${post.slug}`,
    category: post.category,
    content: post.content,
    featured: post.featured || false,
  };
}

function mapDevArticle(article: DevArticle): Article {
  return {
    id: `dev-${article.id}`,
    title: article.title,
    description: article.description || '',
    slug: article.slug,
    coverImage: article.cover_image || null,
    publishedAt: article.published_at,
    readingTime: `${article.reading_time_minutes} min`,
    views: 0, // dev.to API doesn't provide view counts in list endpoint
    reactions: article.positive_reactions_count || 0,
    comments: article.comments_count || 0,
    tags: article.tag_list || [],
    platform: 'dev',
    url: article.url,
    category: article.tag_list?.[0] || 'General',
    featured: false,
  };
}

function mapDevShort(article: DevArticle): Short {
  return {
    id: `dev-short-${article.id}`,
    title: article.title,
    content: article.description || '',
    tags: article.tag_list || [],
    date: article.published_at.split('T')[0],
    views: 0, // dev.to API doesn't provide view counts in list endpoint
    reactions: article.positive_reactions_count || 0,
    platform: 'dev',
    url: article.url,
  };
}

function mapWebsiteShort(short: (typeof localShorts)[number]): Short {
  return {
    id: `website-${short.id}`,
    title: short.title,
    content: short.content,
    tags: short.tags,
    date: short.date,
    views: short.views || 0,
    reactions: short.reactions || 0,
    platform: 'website',
    url: `/shorts/${short.id}`,
  };
}

async function fetchDevArticles(): Promise<Article[]> {
  const username = env.NEXT_PUBLIC_DEV_USERNAME;
  if (!username) return [];

  try {
    const headers: Record<string, string> = {};
    if (env.DEV_API_KEY) {
      headers['api-key'] = env.DEV_API_KEY;
    }

    const res = await fetch(
      `https://dev.to/api/articles?username=${username}&per_page=100`,
      { headers, next: { revalidate: 3600 } },
    );

    if (!res.ok) return [];

    const data: DevArticle[] = await res.json();
    return data.map(mapDevArticle);
  } catch {
    return [];
  }
}

export async function fetchDevArticleContent(
  devtoId: number,
): Promise<string | null> {
  const headers: Record<string, string> = {};
  if (env.DEV_API_KEY) {
    headers['api-key'] = env.DEV_API_KEY;
  }

  try {
    const res = await fetch(`https://dev.to/api/articles/${devtoId}`, {
      headers,
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const data: DevArticle & { body_markdown?: string } = await res.json();
    return data.body_markdown ?? null;
  } catch {
    return null;
  }
}

async function fetchDevShorts(): Promise<Short[]> {
  const username = env.NEXT_PUBLIC_DEV_USERNAME;
  if (!username) return [];

  try {
    const headers: Record<string, string> = {};
    if (env.DEV_API_KEY) {
      headers['api-key'] = env.DEV_API_KEY;
    }

    const res = await fetch(
      `https://dev.to/api/articles?username=${username}&per_page=100`,
      { headers, next: { revalidate: 3600 } },
    );

    if (!res.ok) return [];

    const data: DevArticle[] = await res.json();
    // Filter for articles tagged with #shorts on dev.to
    return data
      .filter((article) =>
        article.tag_list?.some((tag) => tag.toLowerCase() === 'shorts'),
      )
      .map(mapDevShort);
  } catch {
    return [];
  }
}

function getWebsiteArticles(): Article[] {
  return posts.map(mapWebsiteArticle);
}

function getWebsiteShorts(): Short[] {
  return localShorts.map(mapWebsiteShort);
}

export async function getAllArticles(): Promise<{
  articles: Article[];
  stats: { total: number; views: number; reactions: number };
}> {
  const [website, dev] = await Promise.all([
    getWebsiteArticles(),
    fetchDevArticles(),
  ]);

  const articles = [...website, ...dev].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const stats = {
    total: articles.length,
    views: articles.reduce((sum, a) => sum + a.views, 0),
    reactions: articles.reduce((sum, a) => sum + a.reactions, 0),
  };

  return { articles, stats };
}

export async function getAllShorts(): Promise<Short[]> {
  const [website, dev] = await Promise.all([
    getWebsiteShorts(),
    fetchDevShorts(),
  ]);

  return [...website, ...dev].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const website = getWebsiteArticles();
  const found = website.find((a) => a.slug === slug);
  if (found) return found;

  const dev = await fetchDevArticles();
  return dev.find((a) => a.slug === slug) || null;
}

export function getAllCategories(articles: Article[]): string[] {
  const cats = new Set(articles.map((a) => a.category).filter(Boolean));
  return Array.from(cats).sort();
}

export function getYearlyStats(articles: Article[]) {
  const years: Record<string, number> = {};
  for (const a of articles) {
    const year = new Date(a.publishedAt).getFullYear().toString();
    years[year] = (years[year] || 0) + 1;
  }
  return Object.entries(years)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, count]) => ({ year, count }));
}
