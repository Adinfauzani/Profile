import { useMDXComponents as getDefaultComponents } from '@/lib/mdx-components';

import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return getDefaultComponents(components);
}
