'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as React from 'react';

import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className='h-9 w-9 rounded-lg bg-gray-800 animate-pulse' />;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'flex h-9 w-9 items-center justify-center rounded-lg transition-colors',
        'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white',
      )}
      aria-label='Toggle theme'
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
