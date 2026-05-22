import React from 'react';

import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-11/12 max-w-6xl', className)}>{children}</div>
  );
}
