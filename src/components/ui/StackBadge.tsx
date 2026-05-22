'use client';

import { motion } from 'framer-motion';

interface StackBadgeProps {
  label: string;
  index?: number;
}

export function StackBadge({ label, index = 0 }: StackBadgeProps) {
  return (
    <motion.span
      className='inline-block rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-medium text-gray-300 backdrop-blur-sm'
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.6, 1, 0.6],
        y: [0, -8, 0],
        scale: 1,
      }}
      transition={{
        duration: 4 + index * 0.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.5,
      }}
      whileHover={{ scale: 1.1 }}
    >
      {label}
    </motion.span>
  );
}
