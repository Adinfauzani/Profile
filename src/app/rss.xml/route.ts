import { getAllArticles } from '@/lib/articles';
import { env } from '@/env';

export async function GET() {
  const { articles } = await getAllArticles();

  const siteUrl = env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const rssItems = articles
    .filter((a) => a.platform === 'website')
    .map((article) => {
      const url = `${siteUrl}/blogs/${article.slug}`;
      const pubDate = new Date(article.publishedAt).toUTCString();

      return `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${article.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      ${article.tags.map((tag) => `<category><![CDATA[${tag}]]></category>`).join('')}
      ${article.coverImage ? `<enclosure url="${article.coverImage}" type="image/jpeg" />` : ''}
    </item>`;
    })
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Adin Fauzan — Writing & Ideas</title>
    <link>${siteUrl}/blogs</link>
    <description>Thoughts, engineering notes, tutorials, product updates, and everything I'm learning while building modern software.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
    },
  });
}
