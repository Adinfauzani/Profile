import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl',
        'before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 before:transition-opacity',
        hover && 'before:hover:opacity-100',
        'shadow-[0_8px_32px_rgba(0,0,0,0.4)]',
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
