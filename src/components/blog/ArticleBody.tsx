import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

import { mdxComponents } from './MDXComponents';

export function ArticleBody({ content }: { content: string }) {
  return (
    <article>
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
        components={mdxComponents}
      />
    </article>
  );
}
