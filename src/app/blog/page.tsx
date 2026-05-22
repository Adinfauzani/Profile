import { format } from 'date-fns';

const posts = [
  {
    slug: 'list-animation-motion-react',
    title: 'List Animation using Motion for React',
    date: '2024-12-17',
    excerpt:
      'An in-depth guide on how to animate enter and exit animation for list using Motion for React.',
    category: 'React',
    tags: ['react', 'animation'],
    readTime: '6 min',
  },
  {
    slug: 'advanced-react-patterns',
    title: 'Advanced React Patterns',
    date: '2024-03-03',
    excerpt: 'List of React advanced patterns complete with examples.',
    category: 'React',
    tags: ['react', 'patterns'],
    readTime: '10 min',
  },
  {
    slug: 'nextjs-authentication-hoc',
    title: 'Next.js Authentication using Higher-Order Components',
    date: '2023-03-10',
    excerpt: 'Solve problems such as colocation, and error-prone code.',
    category: 'Next.js',
    tags: ['nextjs', 'auth'],
    readTime: '7 min',
  },
  {
    slug: 'nextjs-app-router-guide',
    title: 'Getting Started with Next.js App Router',
    date: '2024-02-15',
    excerpt:
      'A comprehensive guide to building modern web applications with Next.js.',
    category: 'Next.js',
    tags: ['nextjs', 'app-router'],
    readTime: '8 min',
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for React Developers',
    date: '2024-01-28',
    excerpt: 'Level up your TypeScript skills with these essential patterns.',
    category: 'TypeScript',
    tags: ['typescript', 'react'],
    readTime: '6 min',
  },
  {
    slug: 'tailwind-css-tips',
    title: 'Building Beautiful UIs with Tailwind CSS',
    date: '2024-01-10',
    excerpt:
      'Learn how to create stunning, responsive designs using utility-first CSS.',
    category: 'CSS',
    tags: ['tailwind', 'css'],
    readTime: '5 min',
  },
];

export default function BlogPage() {
  return (
    <main className='layout pt-32'>
      <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>Blog</h1>
      <p className='mb-12 text-gray-400'>
        Thoughts on development, design, and technology.
      </p>

      <div className='flex flex-col gap-6'>
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className='group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10'
          >
            <div className='flex items-center gap-3 text-sm text-gray-500'>
              <time dateTime={post.date}>
                {format(new Date(post.date), 'MMMM dd, yyyy')}
              </time>
              <span>•</span>
              <span className='rounded-full bg-white/10 px-2 py-0.5 text-xs text-indigo-400'>
                {post.category}
              </span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h2 className='mt-3 text-xl font-semibold text-white group-hover:text-indigo-400'>
              {post.title}
            </h2>

            <p className='mt-2 text-sm text-gray-400'>{post.excerpt}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
