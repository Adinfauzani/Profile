import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';

const contentsDir = path.join(process.cwd(), 'src', 'contents');

export interface Frontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
  [key: string]: unknown;
}

export function getContentBySlug(dir: string, slug: string) {
  const fullPath = path.join(contentsDir, dir, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const source = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(source);
  return { frontmatter: data as Frontmatter, content, slug };
}

export function getContentSlugs(dir: string) {
  const fullDir = path.join(contentsDir, dir);
  if (!fs.existsSync(fullDir)) return [];
  return fs
    .readdirSync(fullDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getAllContent(dir: string) {
  const slugs = getContentSlugs(dir);
  return slugs
    .map((slug) => getContentBySlug(dir, slug))
    .filter(Boolean)
    .sort(
      (a, b) =>
        new Date(b!.frontmatter.date).getTime() -
        new Date(a!.frontmatter.date).getTime(),
    );
}
