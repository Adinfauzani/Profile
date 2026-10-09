import { env } from '@/env';
import { getArticleBySlug, getAllArticles } from '@/lib/articles';

export async function POST(request: Request) {
  try {
    const { slug } = await request.json();

    if (!slug) {
      return Response.json({ error: 'Slug required' }, { status: 400 });
    }

    // Get local article
    const localArticle = await getArticleBySlug(slug);
    if (!localArticle || localArticle.platform !== 'dev') {
      return Response.json(
        { error: 'Article not found or not from dev.to' },
        { status: 404 },
      );
    }

    // Fetch fresh data from dev.to
    const { articles: devArticles } = await getAllArticles();
    const devArticle = devArticles.find(
      (a) => a.slug === slug && a.platform === 'dev',
    );

    if (!devArticle) {
      return Response.json(
        { error: 'Article not found on dev.to' },
        { status: 404 },
      );
    }

    // Return updated counts
    return Response.json({
      success: true,
      reactions: devArticle.reactions,
      comments: devArticle.comments,
      devtoUrl: devArticle.url,
    });
  } catch (error) {
    console.error('Dev.to sync error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
