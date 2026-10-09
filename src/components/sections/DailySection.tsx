'use client';

import { useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { shorts } from '@/constants/shorts';

import { cn } from '@/lib/utils';

const displayShorts = shorts.slice(0, 10);

// Bento spans (fills a clean 4x3 desktop grid, degrades to a nice 2-col mobile grid)
const bentoSpans = [
  'col-span-2 row-span-2',
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
  'col-span-2 row-span-1',
];

const accents: Record<string, string> = {
  CSS: '99, 102, 241',
  'Next.js': '148, 163, 184',
  React: '56, 189, 248',
  TypeScript: '59, 130, 246',
  Tailwind: '56, 189, 248',
  'Framer Motion': '217, 70, 239',
};

function DailyCard({
  short,
  featured = false,
}: {
  short: (typeof shorts)[number];
  featured?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const accent = accents[short.tags[0]] ?? '99, 102, 241';

  const rotateX = useSpring(0, { stiffness: 220, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 18 });
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${mx}% ${my}%, rgba(${accent}, 0.28), transparent 65%)`;

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mx.set(px * 100);
    my.set(py * 100);
    rotateY.set((px - 0.5) * 16);
    rotateX.set(-(py - 0.5) * 16);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    mx.set(50);
    my.set(50);
  };

  return (
    <div className='h-full' style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className='h-full will-change-transform'
      >
        <Link
          href='/shorts'
          aria-label={short.title}
          style={
            {
              '--accent': accent,
              transformStyle: 'preserve-3d',
            } as React.CSSProperties
          }
          className='group relative block h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl transition-[border-color,box-shadow,background-color] duration-300 hover:border-[rgba(var(--accent),0.5)] hover:bg-white/[0.05] hover:shadow-[0_0_45px_-10px_rgba(var(--accent),0.55)]'
        >
          {/* Top sheen line */}
          <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent' />

          {/* Accent glow orb */}
          <div
            className='pointer-events-none absolute -top-10 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100'
            style={{ background: `rgba(${accent}, 0.35)` }}
          />

          {/* Cursor spotlight */}
          <motion.div
            style={{ background: spotlight }}
            className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
          />

          {/* Shine sweep */}
          <div className='pointer-events-none absolute -inset-y-10 -left-1/3 w-1/3 -skew-x-12 bg-white/10 blur-md transition-transform duration-[900ms] ease-out group-hover:translate-x-[460%]' />

          {/* Content */}
          <div className='relative z-10 flex h-full flex-col justify-between p-4 transition-transform duration-300 [transform:translateZ(0)] group-hover:[transform:translateZ(46px)] md:p-5'>
            <div>
              <div className='flex items-start justify-between gap-2'>
                <span
                  className='inline-block rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wide'
                  style={{
                    color: `rgb(${accent})`,
                    borderColor: `rgba(${accent}, 0.3)`,
                    background: `rgba(${accent}, 0.12)`,
                  }}
                >
                  {short.tags[0]}
                </span>
                <ArrowUpRight
                  size={15}
                  className='-translate-x-1 text-white/40 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-white group-hover:opacity-100'
                />
              </div>

              <h3
                className={cn(
                  'mt-3 font-bold leading-snug text-white',
                  featured
                    ? 'line-clamp-3 text-lg md:text-2xl'
                    : 'line-clamp-2 text-[14px]',
                )}
              >
                {short.title}
              </h3>
              <p
                className={cn(
                  'mt-1.5 leading-relaxed text-gray-400',
                  featured
                    ? 'line-clamp-5 text-[12px] md:text-[13px]'
                    : 'line-clamp-2 text-[11px] md:line-clamp-3',
                )}
              >
                {short.content}
              </p>
            </div>

            <div className='flex items-center justify-between'>
              <span className='font-mono text-[10px] text-gray-500'>
                {new Date(short.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
              <span className='flex items-center gap-1 font-mono text-[10px] text-gray-500'>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
                  <circle cx='12' cy='12' r='3' />
                </svg>
                {short.views.toLocaleString()}
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export function DailySection() {
  return (
    <section className='py-32'>
      <div className='mx-auto max-w-[1200px] px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className='mb-14'
        >
          <h2 className='text-4xl font-bold text-white tracking-tight mt-4'>
            My Daily
          </h2>
          <p className='text-[15px] text-gray-400 mt-3 max-w-xl leading-relaxed'>
            Quick dev snippets, tips, and mental models.
          </p>
        </motion.div>

        <div className='grid auto-rows-[180px] grid-cols-2 gap-3 sm:gap-4 md:auto-rows-[200px] md:grid-cols-4'>
          {displayShorts.map((short, i) => (
            <motion.div
              key={short.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              viewport={{ once: true, margin: '-40px' }}
              className={cn('h-full', bentoSpans[i % bentoSpans.length])}
            >
              <DailyCard short={short} featured={i === 0} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className='mt-10'
        >
          <Link
            href='/shorts'
            className='inline-flex items-center gap-1.5 text-[13px] font-mono text-gray-500 hover:text-white transition-colors duration-200'
          >
            View all snippets
            <svg
              width='13'
              height='13'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path d='M5 12h14M12 5l7 7-7 7' />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
