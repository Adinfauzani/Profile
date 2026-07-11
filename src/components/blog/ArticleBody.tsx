'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

import { usePremiumMDXComponents } from './MDXComponents';
import { TableOfContents } from './TableOfContents';

export function ArticleBody({ content }: { content: string }) {
  const components = usePremiumMDXComponents();

  return (
    <div className='flex gap-20 justify-center'>
      <div className='flex-1 min-w-0 max-w-[700px] xl:max-w-[980px]'>
        <article>
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
            components={components}
          />
        </article>
      </div>
      <div className='hidden xl:block'>
        <TableOfContents content={content} />
      </div>
    </div>
  );
}
