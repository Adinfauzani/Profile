import { desc, eq } from 'drizzle-orm';

import { bucketListItems as bucketListData } from '@/constants/bucket-list';
import { guestbookEntries as guestbookData } from '@/constants/guestbook';
import { posts as postsData } from '@/constants/posts';
import { projects as projectsData } from '@/constants/projects';
import { shorts as shortsData } from '@/constants/shorts';

import { getCachedOrFetch } from '@/lib/cache';

import { getDb } from './index';
import {
  bucketListItems,
  guestbookEntries,
  posts,
  projects,
  shorts,
} from './schema';

function isDbAvailable() {
  return !!process.env.DATABASE_URL;
}

export async function getPosts() {
  if (!isDbAvailable()) return postsData;
  return getCachedOrFetch('posts', async () => {
    try {
      return await getDb().select().from(posts).orderBy(desc(posts.date));
    } catch {
      return postsData;
    }
  });
}

export async function getPostBySlug(slug: string) {
  if (!isDbAvailable()) return postsData.find((p) => p.slug === slug) ?? null;
  return getCachedOrFetch(`post:${slug}`, async () => {
    try {
      const result = await getDb()
        .select()
        .from(posts)
        .where(eq(posts.slug, slug))
        .limit(1);
      return result[0] ?? null;
    } catch {
      return postsData.find((p) => p.slug === slug) ?? null;
    }
  });
}

export async function getPostSlugs() {
  if (!isDbAvailable()) return postsData.map((p) => p.slug);
  return getCachedOrFetch('post:slugs', async () => {
    try {
      const result = await getDb().select({ slug: posts.slug }).from(posts);
      return result.map((r) => r.slug);
    } catch {
      return postsData.map((p) => p.slug);
    }
  });
}

export async function getProjects() {
  if (!isDbAvailable()) return projectsData;
  return getCachedOrFetch('projects', async () => {
    try {
      return await getDb()
        .select()
        .from(projects)
        .orderBy(desc(projects.featured));
    } catch {
      return projectsData;
    }
  });
}

export async function getProjectBySlug(slug: string) {
  if (!isDbAvailable()) {
    const p = projectsData.find((proj) => proj.slug === slug);
    return p ?? null;
  }
  return getCachedOrFetch(`project:${slug}`, async () => {
    try {
      const result = await getDb()
        .select()
        .from(projects)
        .where(eq(projects.slug, slug))
        .limit(1);
      return result[0] ?? null;
    } catch {
      const p = projectsData.find((proj) => proj.slug === slug);
      return p ?? null;
    }
  });
}

export async function getProjectSlugs() {
  if (!isDbAvailable()) return projectsData.map((p) => p.slug);
  return getCachedOrFetch('project:slugs', async () => {
    try {
      const result = await getDb()
        .select({ slug: projects.slug })
        .from(projects);
      return result.map((r) => r.slug);
    } catch {
      return projectsData.map((p) => p.slug);
    }
  });
}

export async function getGuestbookEntries() {
  if (!isDbAvailable()) return guestbookData;
  return getCachedOrFetch('guestbook', async () => {
    try {
      return await getDb()
        .select()
        .from(guestbookEntries)
        .orderBy(desc(guestbookEntries.date));
    } catch {
      return guestbookData;
    }
  });
}

export async function getBucketListItems() {
  if (!isDbAvailable()) return bucketListData;
  return getCachedOrFetch('bucket-list', async () => {
    try {
      return await getDb().select().from(bucketListItems);
    } catch {
      return bucketListData;
    }
  });
}

export async function getShorts() {
  if (!isDbAvailable()) return shortsData;
  return getCachedOrFetch('shorts', async () => {
    try {
      return await getDb().select().from(shorts).orderBy(desc(shorts.date));
    } catch {
      return shortsData;
    }
  });
}
