'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export function CoverImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className='relative w-full h-[220px] sm:h-[300px] lg:h-[420px] rounded-[28px] overflow-hidden border border-white/[0.06]'
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className='object-cover transition-transform duration-700 ease-out hover:scale-[1.015]'
        sizes='(max-width: 768px) 100vw, 1280px'
      />
    </motion.div>
  );
}
