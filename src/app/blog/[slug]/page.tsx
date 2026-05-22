import { format } from 'date-fns';
import { ArrowLeft, Calendar, Clock, Eye } from 'lucide-react';
import { notFound } from 'next/navigation';

import { GlassContainer } from '@/components/glass/GlassContainer';

const posts = [
  {
    slug: 'list-animation-motion-react',
    title: 'List Animation using Motion for React',
    date: '2024-12-17',
    content: `
# List Animation using Motion for React

Animating lists in React can be tricky, especially when dealing with enter and exit animations. In this post, we'll explore how to use Motion for React to create smooth list animations.

## Getting Started

First, install the package:

\`\`\`bash
npm install framer-motion
\`\`\`

## AnimatePresence

The key component for exit animations is \`AnimatePresence\`. It keeps track of components that are being removed from the tree.

\`\`\`tsx
import { AnimatePresence, motion } from 'framer-motion';

function List({ items }) {
  return (
    <AnimatePresence>
      {items.map((item) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {item}
        </motion.li>
      ))}
    </AnimatePresence>
  );
}
\`\`\`

## Staggered Animations

You can stagger animations using \`staggerChildren\` in the parent variant. This creates a cascading effect where each item animates slightly after the previous one.

## Conclusion

Motion for React makes list animations straightforward and performant. The key is to use \`AnimatePresence\` for exit animations and variants for complex animation sequences.
    `,
    category: 'React',
    tags: ['react', 'animation'],
    readTime: '6 min',
    views: 1250,
  },
  {
    slug: 'advanced-react-patterns',
    title: 'Advanced React Patterns',
    date: '2024-03-03',
    content: `
# Advanced React Patterns

React provides several patterns that help you write more maintainable and reusable code.

## Compound Components

Compound components allow you to express relationships between components implicitly. Think of \`<select>\` and \`<option>\` - they work together without explicit wiring.

## Render Props

Render props allow you to share logic between components by passing a function as a prop that returns JSX.

## Control Props

Control props give consumers full control over component state, similar to controlled inputs in React.

## Conclusion

These patterns are essential for building robust React applications that scale well.
    `,
    category: 'React',
    tags: ['react', 'patterns'],
    readTime: '10 min',
    views: 2100,
  },
  {
    slug: 'nextjs-authentication-hoc',
    title: 'Next.js Authentication using Higher-Order Components',
    date: '2023-03-10',
    content: `
# Next.js Authentication using Higher-Order Components

Higher-Order Components (HOCs) are a powerful pattern for authentication in Next.js.

## The Problem

Authentication logic often gets scattered across components, making it hard to maintain.

## The HOC Solution

\`\`\`tsx
function withAuth(WrappedComponent) {
  return function AuthenticatedComponent(props) {
    const { data: session, status } = useSession();
    
    if (status === 'loading') return <Loading />;
    if (!session) return <SignIn />;
    
    return <WrappedComponent {...props} />;
  };
}
\`\`\`

## Benefits

- Colocation of auth logic
- Type-safe
- Reusable across pages

## Conclusion

HOCs provide a clean way to handle authentication in Next.js applications.
    `,
    category: 'Next.js',
    tags: ['nextjs', 'auth'],
    readTime: '7 min',
    views: 1800,
  },
  {
    slug: 'nextjs-app-router-guide',
    title: 'Getting Started with Next.js App Router',
    date: '2024-02-15',
    content: `
# Getting Started with Next.js App Router

Next.js 14 introduced the stable App Router, bringing React Server Components to the mainstream.

## Why App Router?

- Server Components by default
- Streaming and Suspense
- Better data fetching
- Layouts and nested routes

## Data Fetching

With Server Components, you can fetch data directly in your component:

\`\`\`tsx
async function getPosts() {
  const res = await fetch('https://api.example.com/posts');
  return res.json();
}

export default async function Page() {
  const posts = await getPosts();
  return <PostsList posts={posts} />;
}
\`\`\`

## Conclusion

The App Router is the future of Next.js development. Embrace Server Components and simplify your data fetching.
    `,
    category: 'Next.js',
    tags: ['nextjs', 'app-router'],
    readTime: '8 min',
    views: 3200,
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for React Developers',
    date: '2024-01-28',
    content: `
# TypeScript Best Practices for React Developers

TypeScript and React are a perfect match. Here are the best practices to follow.

## Component Props

Define clear interfaces for your component props with proper typing.

## Generic Components

Use generics to create reusable components that work with different types.

## Type Guards

Implement custom type guards to narrow types safely in your components.

## Conclusion

These patterns will make your React codebase more robust and developer-friendly.
    `,
    category: 'TypeScript',
    tags: ['typescript', 'react'],
    readTime: '6 min',
    views: 2800,
  },
  {
    slug: 'tailwind-css-tips',
    title: 'Building Beautiful UIs with Tailwind CSS',
    date: '2024-01-10',
    content: `
# Building Beautiful UIs with Tailwind CSS

Tailwind CSS is a utility-first CSS framework that makes building custom designs painless.

## The Power of Utilities

With Tailwind, you compose styles directly in your markup using utility classes.

## Custom Configuration

Extend Tailwind's default theme to match your design system.

## Dark Mode

Tailwind has built-in dark mode support using the \`dark:\` prefix.

## Conclusion

Tailwind CSS accelerates development without sacrificing design quality.
    `,
    category: 'CSS',
    tags: ['tailwind', 'css'],
    readTime: '5 min',
    views: 1500,
  },
];

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <main className='layout pt-32'>
      <a
        href='/blog'
        className='mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white'
      >
        <ArrowLeft size={16} />
        Back to Blog
      </a>

      <div className='mb-8'>
        <div className='flex items-center gap-3 text-sm text-gray-500'>
          <span className='rounded-full bg-white/10 px-2 py-0.5 text-xs text-indigo-400'>
            {post.category}
          </span>
          <span className='flex items-center gap-1'>
            <Calendar size={14} />
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMMM dd, yyyy')}
            </time>
          </span>
          <span className='flex items-center gap-1'>
            <Clock size={14} />
            {post.readTime}
          </span>
          <span className='flex items-center gap-1'>
            <Eye size={14} />
            {post.views.toLocaleString()} views
          </span>
        </div>

        <h1 className='mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl'>
          {post.title}
        </h1>

        <div className='mt-4 flex flex-wrap gap-2'>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className='rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400'
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <GlassContainer className='p-6 md:p-10'>
        <article className='prose prose-invert max-w-none prose-headings:text-white prose-a:text-indigo-400 prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm'>
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('# ')) {
              return (
                <h1 key={i} className='text-3xl font-bold text-white'>
                  {line.replace('# ', '')}
                </h1>
              );
            }
            if (line.startsWith('## ')) {
              return (
                <h2 key={i} className='mt-8 text-2xl font-semibold text-white'>
                  {line.replace('## ', '')}
                </h2>
              );
            }
            if (line.startsWith('```')) {
              return null;
            }
            if (line.startsWith('import ') || line.startsWith('export ')) {
              return (
                <code
                  key={i}
                  className='block bg-white/10 p-2 text-sm text-gray-300'
                >
                  {line}
                </code>
              );
            }
            if (line.trim() === '') return <br key={i} />;
            return (
              <p key={i} className='text-gray-300'>
                {line}
              </p>
            );
          })}
        </article>
      </GlassContainer>
    </main>
  );
}
