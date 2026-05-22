export const posts = [
  {
    slug: 'list-animation-motion-react',
    title: 'List Animation using Motion for React',
    date: '2024-12-17',
    excerpt:
      'An in-depth guide on how to animate enter and exit animation for list using Motion for React (previously Framer Motion).',
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

function List({ items }: { items: string[] }) {
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

You can stagger animations using \`staggerChildren\` in the parent variant.

## Conclusion

Motion for React makes list animations straightforward and performant.
    `,
    category: 'React',
    tags: ['react', 'animation'],
    readTime: '6 min',
    views: 1250,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
  },
  {
    slug: 'advanced-react-patterns',
    title: 'Advanced React Patterns',
    date: '2024-03-03',
    excerpt: 'List of React advanced patterns complete with examples.',
    content: `
# Advanced React Patterns

React provides several patterns that help you write more maintainable and reusable code.

## Compound Components

Compound components allow you to express relationships between components implicitly.

\`\`\`tsx
function Select({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState('');
  return (
    <SelectContext.Provider value={{ value, setValue }}>
      {children}
    </SelectContext.Provider>
  );
}

function Option({ value, children }: { value: string; children: React.ReactNode }) {
  const context = useSelectContext();
  return (
    <div onClick={() => context.setValue(value)}>
      {children}
    </div>
  );
}
\`\`\`

## Render Props

Render props allow you to share logic between components.

## Control Props

Control props give consumers full control over component state.

## Conclusion

These patterns are essential for building robust React applications.
    `,
    category: 'React',
    tags: ['react', 'patterns'],
    readTime: '10 min',
    views: 2100,
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800',
  },
  {
    slug: 'nextjs-authentication-hoc',
    title: 'Next.js Authentication using Higher-Order Components',
    date: '2023-03-10',
    excerpt: 'Solve problems such as colocation, and error-prone code.',
    content: `
# Next.js Authentication using Higher-Order Components

Higher-Order Components (HOCs) are a powerful pattern for authentication in Next.js.

## The Problem

Authentication logic often gets scattered across components, making it hard to maintain.

## The HOC Solution

\`\`\`tsx
function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
  return function AuthenticatedComponent(props: P) {
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

HOCs provide a clean way to handle authentication in Next.js.
    `,
    category: 'Next.js',
    tags: ['nextjs', 'auth'],
    readTime: '7 min',
    views: 1800,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
  },
  {
    slug: 'nextjs-app-router-guide',
    title: 'Getting Started with Next.js App Router',
    date: '2024-02-15',
    excerpt:
      'A comprehensive guide to building modern web applications with Next.js 14 and the App Router.',
    content: `
# Getting Started with Next.js App Router

Next.js 14 introduced the stable App Router, bringing React Server Components to the mainstream.

## Why App Router?

- Server Components by default
- Streaming and Suspense
- Better data fetching
- Layouts and nested routes

## Data Fetching

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

The App Router is the future of Next.js.
    `,
    category: 'Next.js',
    tags: ['nextjs', 'app-router'],
    readTime: '8 min',
    views: 3200,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for React Developers',
    date: '2024-01-28',
    excerpt:
      'Level up your TypeScript skills with these essential patterns for React development.',
    content: `
# TypeScript Best Practices for React Developers

TypeScript and React are a perfect match. Here are the best practices to follow.

## Component Props

\`\`\`tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
\`\`\`

## Generic Components

## Type Guards

## Conclusion

These patterns will make your React codebase more robust.
    `,
    category: 'TypeScript',
    tags: ['typescript', 'react'],
    readTime: '6 min',
    views: 2800,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
  },
  {
    slug: 'tailwind-css-tips',
    title: 'Building Beautiful UIs with Tailwind CSS',
    date: '2024-01-10',
    excerpt:
      'Learn how to create stunning, responsive designs using utility-first CSS.',
    content: `
# Building Beautiful UIs with Tailwind CSS

Tailwind CSS is a utility-first CSS framework that makes building custom designs painless.

## The Power of Utilities

\`\`\`html
<div class="flex items-center justify-between p-6 bg-white rounded-lg shadow-md">
  <h2 class="text-xl font-bold text-gray-900">Card Title</h2>
  <p class="text-gray-600">Card description</p>
</div>
\`\`\`

## Custom Configuration

## Dark Mode

## Conclusion

Tailwind CSS accelerates development without sacrificing design quality.
    `,
    category: 'CSS',
    tags: ['tailwind', 'css'],
    readTime: '5 min',
    views: 1500,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
  },
];

export const postSlugs = posts.map((p) => p.slug);
