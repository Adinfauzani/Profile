import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1 className='text-3xl font-bold text-white' {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className='mt-8 text-2xl font-semibold text-white' {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className='mt-6 text-xl font-semibold text-white' {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className='text-gray-300 leading-relaxed' {...props}>
        {children}
      </p>
    ),
    a: ({ children, ...props }) => (
      <a className='text-indigo-400 hover:text-indigo-300' {...props}>
        {children}
      </a>
    ),
    code: ({ children, className, ...props }) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code
            className='rounded bg-white/10 px-1.5 py-0.5 text-sm text-gray-200'
            {...props}
          >
            {children}
          </code>
        );
      }
      return (
        <pre className='overflow-x-auto rounded-xl bg-gray-900 p-4 text-sm'>
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      );
    },
    pre: ({ children, ...props }) => (
      <pre
        className='overflow-x-auto rounded-xl bg-gray-900 p-4 text-sm'
        {...props}
      >
        {children}
      </pre>
    ),
    ul: ({ children, ...props }) => (
      <ul className='list-disc pl-6 text-gray-300' {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className='list-decimal pl-6 text-gray-300' {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className='my-1' {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className='border-l-4 border-indigo-500 pl-4 italic text-gray-400'
        {...props}
      >
        {children}
      </blockquote>
    ),
    img: ({ alt, ...props }) => (
      <img className='rounded-xl' alt={alt ?? ''} {...props} />
    ),
    hr: (props) => <hr className='border-gray-800 my-8' {...props} />,
    table: ({ children, ...props }) => (
      <div className='overflow-x-auto'>
        <table className='w-full text-sm text-gray-300' {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th
        className='border border-gray-700 px-4 py-2 font-semibold text-white'
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className='border border-gray-700 px-4 py-2' {...props}>
        {children}
      </td>
    ),
    ...components,
  };
}
