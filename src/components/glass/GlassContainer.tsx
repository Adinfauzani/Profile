import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

interface GlassContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  intensity?: 'sm' | 'md' | 'lg';
}

export function GlassContainer({
  children,
  className,
  intensity = 'md',
  ...props
}: GlassContainerProps) {
  const blurMap = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-xl',
    lg: 'backdrop-blur-2xl',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/10 bg-white/5',
        blurMap[intensity],
        'shadow-[0_8px_32px_rgba(0,0,0,0.4)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
