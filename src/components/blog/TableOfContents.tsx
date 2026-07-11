'use client';

import { useEffect, useRef, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ content }: { content: string }) {
  const [activeId, setActiveId] = useState('');
  const [items, setItems] = useState<TOCItem[]>([]);
  const [progress, setProgress] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headings = content.match(/^#{2,3}\s.+$/gm);
    if (!headings) return;

    const parsed: TOCItem[] = headings.map((h) => {
      const level = h.startsWith('###') ? 3 : 2;
      const text = h.replace(/^#{2,3}\s/, '');
      const id = text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
      return { id, text, level };
    });
    setItems(parsed);
  }, [content]);

  useEffect(() => {
    if (items.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -65% 0px', threshold: 0 },
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, [items]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      setProgress(Math.min(scrollTop / docHeight, 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (items.length === 0) return null;

  const activeIndex = items.findIndex((i) => i.id === activeId);

  return (
    <nav className='sticky top-28 w-[280px] shrink-0 self-start max-h-[calc(100vh-10rem)] overflow-y-auto'>
      <span className='text-[11px] font-mono text-gray-600 tracking-[0.15em] uppercase mb-6 block'>
        On this page
      </span>

      {/* Vertical progress line */}
      <div className='relative ml-[3px] mb-6'>
        <div className='absolute left-0 top-0 bottom-0 w-px bg-white/[0.06] rounded-full' />
        <div
          className='absolute left-0 top-0 w-px bg-indigo-400/60 rounded-full transition-all duration-200 ease-out'
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      <ul className='space-y-0'>
        {items.map((item, i) => {
          const isActive = activeId === item.id;
          const num = String(i + 1).padStart(2, '0');
          const isPastSection = activeIndex >= 0 && i < activeIndex;

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`group flex items-start gap-3 py-2.5 transition-all duration-300 ${
                  item.level === 3 ? 'pl-7' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(item.id);
                  if (el) {
                    const top =
                      el.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
              >
                {/* Accent indicator */}
                <span
                  className={`shrink-0 w-0.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'h-5 bg-indigo-400'
                      : isPastSection
                        ? 'h-4 bg-white/[0.12]'
                        : 'h-4 bg-white/[0.06] group-hover:bg-white/20'
                  }`}
                />

                <div className='flex-1 min-w-0'>
                  {/* Number */}
                  <span
                    className={`block font-mono text-[11px] tracking-wider transition-colors duration-300 ${
                      isActive
                        ? 'text-indigo-400'
                        : 'text-gray-600 group-hover:text-gray-500'
                    }`}
                  >
                    {num}
                  </span>
                  {/* Text */}
                  <span
                    className={`block text-[13px] leading-snug transition-colors duration-300 ${
                      isActive
                        ? 'text-white font-medium'
                        : 'text-gray-500 group-hover:text-gray-300'
                    }`}
                  >
                    {item.text}
                  </span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
