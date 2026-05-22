import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import { bucketListItems } from '@/constants/bucket-list';
import { guestbookEntries } from '@/constants/guestbook';
import { posts } from '@/constants/posts';
import { shorts } from '@/constants/shorts';

import * as schema from './schema';

async function seed() {
  const sql = neon(process.env.DATABASE_URL!);
  const db = drizzle(sql, { schema });

  console.log('Seeding posts...');
  for (const post of posts) {
    await db.insert(schema.posts).values({
      slug: post.slug,
      title: post.title,
      date: post.date,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      tags: post.tags,
      readTime: post.readTime,
      views: post.views,
      image: post.image,
    });
  }

  console.log('Seeding shorts...');
  for (const short of shorts) {
    await db.insert(schema.shorts).values({
      slug: short.id,
      title: short.title,
      content: short.content,
      tags: short.tags,
      date: short.date,
      views: short.views,
    });
  }

  console.log('Seeding guestbook entries...');
  for (const entry of guestbookEntries) {
    await db.insert(schema.guestbookEntries).values({
      name: entry.name,
      message: entry.message,
      date: entry.date,
      avatar: entry.avatar,
    });
  }

  console.log('Seeding bucket list items...');
  for (const item of bucketListItems) {
    await db.insert(schema.bucketListItems).values({
      title: item.title,
      status: item.status,
      category: item.category,
      completedDate: item.completedDate,
    });
  }

  console.log('Seed complete!');
}

seed().catch(console.error);
