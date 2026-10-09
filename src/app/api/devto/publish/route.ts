import { env } from '@/env';
import { getArticleBySlug } from '@/lib/articles';
import { posts } from '@/constants/posts';

interface DevToArticle {
  article: {
    title: string;
    body_markdown: string;
    published: boolean;
    tags: string[];
    series?: string;
    canonical_url?: string;
    description?: string;
    main_image?: string;
  };
}

export async function POST(request: Request) {
  try {
    const { slug } = await request.json();

    if (!slug) {
      return Response.json({ error: 'Slug required' }, { status: 400 });
    }

    const post = posts.find((p) => p.slug === slug);
    if (!post) {
      return Response.json({ error: 'Post not found' }, { status: 404 });
    }

    const article: DevToArticle = {
      article: {
        title: post.title,
        body_markdown: post.content,
        published: false, // Always draft
        tags: post.tags,
        canonical_url: `${env.NEXT_PUBLIC_SITE_URL}/blogs/${post.slug}`,
        description: post.excerpt,
        main_image: post.image,
      },
    };

    const res = await fetch('https://dev.to/api/articles', {
      method: 'POST',
      headers: {
        'api-key': env.DEV_API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article),
    });

    const data = await res.json();

    if (!res.ok) {
      return Response.json(
        { error: 'Failed to create article', details: data },
        { status: res.status },
      );
    }

    return Response.json({
      success: true,
      devtoId: data.id,
      devtoUrl: data.url,
      message: 'Article created as draft on dev.to',
    });
  } catch (error) {
    console.error('Dev.to publish error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
