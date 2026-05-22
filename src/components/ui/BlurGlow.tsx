import { cn } from '@/lib/utils';

interface BlurGlowProps {
  className?: string;
  color?: string;
}

export function BlurGlow({
  className,
  color = 'bg-indigo-500/10',
}: BlurGlowProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute -z-10 h-80 w-80 rounded-full blur-[150px]',
        color,
        className,
      )}
    />
  );
}
