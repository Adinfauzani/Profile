'use client';

import { motion } from 'framer-motion';
import { useCallback, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

interface InteractiveTiltCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function InteractiveTiltCard({
  children,
  className,
  href,
}: InteractiveTiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -6;
    const rotateYValue = ((x - centerX) / centerX) * 6;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    setGlowX((x / rect.width) * 100);
    setGlowY((y / rect.height) * 100);
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlowX(50);
    setGlowY(50);
  }, []);

  const handleClick = useCallback(() => {
    if (href) window.location.href = href;
  }, [href]);

  const Wrapper = href ? 'button' : 'div';

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={cn('group perspective-[800px]', href && 'cursor-pointer')}
    >
      <motion.div
        animate={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
        className={cn(
          'relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl',
          'transition-all duration-300',
          'hover:border-indigo-500/40',
          className,
        )}
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: isHovered
            ? `0 0 40px rgba(99,102,241,0.15), inset 0 1px 0 rgba(255,255,255,0.05)`
            : 'inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        <div
          className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
          style={{
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(99,102,241,0.12), transparent 60%)`,
          }}
        />
        <div
          className='relative z-10'
          style={{ transform: 'translateZ(20px)' }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
