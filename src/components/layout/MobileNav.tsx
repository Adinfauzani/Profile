'use client';

import { FileText, FolderGit2, Home, MoreHorizontal, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const items = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/more', label: 'More', icon: MoreHorizontal, center: true },
  { href: '/blogs', label: 'Blogs', icon: FileText },
  { href: '/projects', label: 'Projects', icon: FolderGit2 },
];

export function MobileNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <nav className='fixed inset-x-0 bottom-0 z-50 md:hidden'>
      <div className='relative flex items-end justify-around border-t border-white/10 bg-black/80 px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-xl'>
        {items.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          if (item.center) {
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className={cn(
                  'relative -mt-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/40 transition-transform active:scale-95',
                  active &&
                    'ring-2 ring-blue-400 ring-offset-2 ring-offset-black',
                )}
              >
                <Icon size={24} />
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className={cn(
                'flex w-14 flex-col items-center justify-center gap-1 rounded-xl py-1.5 transition-colors',
                active ? 'text-blue-400' : 'text-gray-500 hover:text-white',
              )}
            >
              <Icon size={22} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
