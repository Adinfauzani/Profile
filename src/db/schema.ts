import { sql } from 'drizzle-orm';
import {
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  title: varchar('title', { length: 255 }).notNull(),
  date: varchar('date', { length: 50 }).notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  category: varchar('category', { length: 100 }).notNull(),
  tags: jsonb('tags').$type<string[]>().notNull().default([]),
  readTime: varchar('read_time', { length: 20 }).notNull(),
  views: integer('views').notNull().default(0),
  image: text('image'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description').notNull(),
  longDescription: text('long_description'),
  tech: jsonb('tech').$type<string[]>().notNull().default([]),
  demo: text('demo'),
  github: text('github'),
  image: text('image'),
  featured: integer('featured').notNull().default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const guestbookEntries = pgTable('guestbook_entries', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  message: text('message').notNull(),
  date: varchar('date', { length: 50 }).notNull(),
  avatar: text('avatar'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const bucketListItems = pgTable('bucket_list_items', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  status: varchar('status', { length: 50 }).notNull().default('pending'),
  category: varchar('category', { length: 100 }).notNull(),
  completedDate: varchar('completed_date', { length: 50 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const shorts = pgTable('shorts', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull(),
  tags: jsonb('tags').$type<string[]>().notNull().default([]),
  date: varchar('date', { length: 50 }).notNull(),
  views: integer('views').notNull().default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
