import { env } from '@/env';
import { headers } from 'next/headers';

export async function POST(request: Request) {
  try {
    const headerList = await headers();
    const signature = headerList.get('x-devto-signature');

    // Verify webhook signature (optional but recommended)
    // const body = await request.text();
    // const expectedSig = crypto
    //   .createHmac('sha256', env.DEV_API_KEY)
    //   .update(body)
    //   .digest('hex');
    // if (signature !== expectedSig) {
    //   return Response.json({ error: 'Invalid signature' }, { status: 401 });
    // }

    const payload = await request.json();
    const { article, type } = payload;

    console.log('Dev.to webhook:', type, article?.id);

    // Handle different event types
    switch (type) {
      case 'article.published':
      case 'article.updated':
        // Article was published/updated on dev.to
        // Could trigger revalidation of portfolio
        break;
      case 'article.reaction_created':
      case 'article.reaction_destroyed':
        // Reaction (like/unlike) changed
        break;
      case 'comment.created':
      case 'comment.updated':
      case 'comment.deleted':
        // Comment changed
        break;
    }

    // Revalidate relevant pages
    // In a real app, you'd use Next.js revalidateTag or revalidatePath
    // await revalidatePath(`/blogs/${article.slug}`);

    return Response.json({ received: true });
  } catch (error) {
    console.error('Dev.to webhook error:', error);
    return Response.json(
      { error: 'Webhook processing failed' },
      { status: 500 },
    );
  }
}
