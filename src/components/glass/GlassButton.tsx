import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import { cn } from '@/lib/utils';

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'icon-sm';
  asChild?: boolean;
}

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  (
    {
      children,
      className,
      variant = 'default',
      size = 'md',
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center overflow-hidden rounded-xl font-medium transition-all duration-300 backdrop-blur-md active:scale-95',
          variant === 'default' &&
            'border border-white/10 bg-white/10 text-white hover:bg-white/20 hover:border-white/20',
          variant === 'outline' &&
            'border border-white/20 bg-transparent text-white hover:bg-white/10',
          variant === 'ghost' &&
            'bg-transparent text-white/70 hover:bg-white/10 hover:text-white',
          size === 'sm' && 'gap-1.5 px-3 py-1.5 text-xs',
          size === 'md' && 'gap-2 px-5 py-2.5 text-sm',
          size === 'icon-sm' && 'size-8 p-0',
          'shadow-[0_4px_16px_rgba(0,0,0,0.3)]',
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

GlassButton.displayName = 'GlassButton';
