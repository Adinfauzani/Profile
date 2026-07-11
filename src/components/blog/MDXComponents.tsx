'use client';

import { useState } from 'react';
import type { MDXComponents } from 'mdx/types';

import { Callout } from './Callout';
import { ImageLightbox } from './ImageLightbox';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className='absolute top-3 right-3 px-2.5 py-1.5 text-[11px] font-mono text-gray-500 bg-white/[0.04] border border-white/[0.06] rounded-lg hover:text-gray-300 hover:border-white/20 transition-all duration-200 z-10 opacity-0 group-hover:opacity-100'
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

function AnchorHeading({
  level,
  id,
  children,
  className,
}: {
  level: 2 | 3;
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const autoId =
    id ||
    (typeof children === 'string'
      ? children
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, '')
      : undefined);

  const Tag = level === 2 ? 'h2' : 'h3';

  return (
    <Tag id={autoId} className={`group scroll-mt-24 ${className || ''}`}>
      <a
        href={`#${autoId}`}
        className='no-underline text-inherit hover:text-inherit'
      >
        <span className='invisible group-hover:visible absolute -ml-6 pr-2 text-gray-600 hover:text-gray-400 font-normal select-none'>
          #
        </span>
        {children}
      </a>
    </Tag>
  );
}

export function usePremiumMDXComponents(): MDXComponents {
  return {
    h2: ({ children, id, ...props }) => (
      <AnchorHeading
        level={2}
        id={id}
        className='mt-14 mb-5 text-2xl md:text-3xl font-bold text-white tracking-tight'
        {...props}
      >
        {children}
      </AnchorHeading>
    ),
    h3: ({ children, id, ...props }) => (
      <AnchorHeading
        level={3}
        id={id}
        className='mt-10 mb-4 text-xl md:text-2xl font-semibold text-white tracking-tight'
        {...props}
      >
        {children}
      </AnchorHeading>
    ),
    p: ({ children, ...props }) => (
      <p
        className='text-[17px] md:text-[18px] text-gray-300 leading-[1.9] mb-6 max-w-[72ch]'
        {...props}
      >
        {children}
      </p>
    ),
    a: ({ children, href, ...props }) => (
      <a
        href={href}
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        className='text-indigo-400 hover:text-indigo-300 underline underline-offset-2 decoration-white/10 hover:decoration-indigo-400/40 transition-all duration-200'
        {...props}
      >
        {children}
      </a>
    ),
    code: ({ children, className, ...props }) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code
            className='rounded-md bg-white/[0.06] px-1.5 py-0.5 text-sm font-mono text-gray-200'
            {...props}
          >
            {children}
          </code>
        );
      }
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    pre: ({ children, ...props }) => {
      let codeText = '';
      let className = '';
      if (children) {
        const child = children as React.ReactElement<{
          children?: React.ReactNode;
          className?: string;
        }>;
        if (child?.props) {
          codeText = String(child.props.children ?? '');
          className = child.props.className ?? '';
        }
      }
      const lang = className.replace('language-', '');
      const lines = codeText.split('\n');
      const lineCount = lines.length;
      const fileName =
        lang === 'bash'
          ? 'terminal.sh'
          : lang === 'tsx' || lang === 'ts'
            ? `example.${lang}`
            : lang === 'js' || lang === 'jsx'
              ? `example.${lang}`
              : lang === 'css'
                ? 'styles.css'
                : lang === 'json'
                  ? 'config.json'
                  : lang
                    ? `index.${lang}`
                    : 'code';

      return (
        <div className='group relative my-8 rounded-[20px] border border-white/[0.06] bg-[#0a0a0f] overflow-hidden'>
          {/* Title bar */}
          <div className='flex items-center justify-between px-5 py-2.5 border-b border-white/[0.04] bg-white/[0.015]'>
            <div className='flex items-center gap-3'>
              <div className='flex items-center gap-1.5'>
                <span className='w-3 h-3 rounded-full bg-red-500/80' />
                <span className='w-3 h-3 rounded-full bg-yellow-500/80' />
                <span className='w-3 h-3 rounded-full bg-green-500/80' />
              </div>
              {lang && (
                <span className='text-[11px] font-mono text-gray-500 px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.04]'>
                  {lang}
                </span>
              )}
            </div>
            <span className='text-[11px] font-mono text-gray-600'>
              {fileName}
            </span>
          </div>
          {/* Code area */}
          <div className='relative'>
            <CopyButton text={codeText} />
            <div className='flex'>
              {/* Line numbers */}
              <div className='select-none text-right px-4 py-4 text-[13px] leading-relaxed font-mono text-gray-600 border-r border-white/[0.04] bg-white/[0.005]'>
                {Array.from({ length: Math.max(lineCount - 1, 1) }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <pre
                className='overflow-x-auto p-4 text-[13px] md:text-[14px] leading-relaxed flex-1 [&>code]:bg-transparent [&>code]:p-0'
                {...props}
              >
                {children}
              </pre>
            </div>
          </div>
        </div>
      );
    },
    ul: ({ children, ...props }) => (
      <ul
        className='list-disc pl-6 text-[17px] md:text-[18px] text-gray-300 leading-relaxed space-y-2 mb-6 max-w-[72ch]'
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className='list-decimal pl-6 text-[17px] md:text-[18px] text-gray-300 leading-relaxed space-y-2 mb-6 max-w-[72ch]'
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className='pl-1 marker:text-gray-500' {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote className='relative my-10 max-w-[72ch]' {...props}>
        <span className='absolute -top-4 -left-2 text-[64px] leading-none text-indigo-500/15 select-none font-serif'>
          &ldquo;
        </span>
        <div className='border-l-2 border-indigo-500/30 pl-6 py-2 text-[17px] md:text-[18px] text-gray-400 italic leading-relaxed'>
          {children}
        </div>
      </blockquote>
    ),
    hr: (props) => (
      <hr className='border-white/[0.06] my-16 max-w-[72ch]' {...props} />
    ),
    table: ({ children, ...props }) => (
      <div className='overflow-x-auto my-8 rounded-xl border border-white/[0.06] max-w-[72ch]'>
        <table className='w-full text-[15px] text-gray-300' {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th
        className='border-b border-white/[0.06] bg-white/[0.02] px-5 py-3.5 text-left font-semibold text-white text-sm'
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td
        className='border-b border-white/[0.04] px-5 py-3.5 text-[15px]'
        {...props}
      >
        {children}
      </td>
    ),
    img: ({ alt, src, ...props }) => {
      if (!src) return null;
      return (
        <span className='block my-10'>
          <ImageLightbox src={src} alt={alt ?? ''}>
            <img
              className='rounded-[20px] w-full cursor-zoom-in'
              alt={alt ?? ''}
              src={src}
              loading='lazy'
              {...props}
            />
          </ImageLightbox>
          {alt && (
            <span className='block text-center text-[13px] text-gray-500 mt-3 font-mono'>
              {alt}
            </span>
          )}
        </span>
      );
    },
    Callout,
  };
}
