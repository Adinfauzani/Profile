'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp, List } from 'lucide-react';
import { motion } from 'framer-motion';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ content }: { content: string }) {
  const [activeId, setActiveId] = useState('');
  const [items, setItems] = useState<TOCItem[]>([]);
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const tocRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (items.length === 0) return null;

  const activeIndex = items.findIndex((i) => i.id === activeId);

  return (
    <nav
      ref={tocRef}
      className='sticky top-28 max-h-[calc(100vh-10rem)] w-full lg:w-[240px] xl:w-[260px] shrink-0 self-start overflow-y-auto'
    >
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='lg:hidden flex items-center justify-between w-full mb-4 px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white transition-all duration-200 hover:border-white/10'
        aria-expanded={isOpen}
        aria-controls='toc-list'
      >
        <span className='flex items-center gap-2'>
          <List size={16} className='text-gray-400' />
          <span className='text-[11px] font-mono text-gray-500 tracking-[0.15em] uppercase'>
            On this page
          </span>
        </span>
        {isOpen ? (
          <ChevronUp size={16} className='text-gray-400' />
        ) : (
          <ChevronDown size={16} className='text-gray-400' />
        )}
      </button>

      {/* Vertical progress line - desktop only */}
      <div className='hidden lg:block relative ml-[3px] mb-6'>
        <div className='absolute left-0 top-0 bottom-0 w-px bg-white/[0.06] rounded-full' />
        <div
          className='absolute left-0 top-0 w-px bg-indigo-400/60 rounded-full transition-all duration-200 ease-out'
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      <motion.ul
        id='toc-list'
        className='space-y-0 lg:block'
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
      >
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
                  if (window.innerWidth < 1024) setIsOpen(false);
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
      </motion.ul>
    </nav>
  );
}
