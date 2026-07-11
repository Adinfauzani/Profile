import { getAllArticles } from '@/lib/articles';

import { BlogsPageClient } from '@/components/blogs/BlogsPageClient';

export const revalidate = 3600;

export default async function BlogsPage() {
  const { articles, stats } = await getAllArticles();

  return (
    <div className='min-h-screen bg-black text-white'>
      <BlogsPageClient articles={articles} stats={stats} />
    </div>
  );
}
