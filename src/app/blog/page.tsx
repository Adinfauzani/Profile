import { format } from 'date-fns';

import { getPosts } from '@/db/queries';

export default async function BlogPage() {
  const posts = await getPosts();

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
