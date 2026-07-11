import { env } from '@/env';

import { posts } from '@/constants/posts';

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
    reactions: 0,
    comments: 0,
    tags: post.tags,
    platform: 'website',
    url: `/blogs/${post.slug}`,
    category: post.category,
    content: post.content,
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
    views: 0,
    reactions: article.positive_reactions_count || 0,
    comments: article.comments_count || 0,
    tags: article.tag_list || [],
    platform: 'dev',
    url: article.url,
    category: article.tag_list?.[0] || 'General',
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

function getWebsiteArticles(): Article[] {
  return posts.map(mapWebsiteArticle);
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
