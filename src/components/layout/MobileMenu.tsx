'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/constants/navigation';
import { socialLinks } from '@/constants/socials';

import { cn } from '@/lib/utils';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className='absolute left-4 right-4 top-16 rounded-2xl border border-white/10 bg-black/90 p-4 backdrop-blur-xl md:hidden'
    >
      <div className='flex flex-col gap-1'>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white',
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <div className='mt-4 flex gap-4 border-t border-white/10 pt-4'>
        {socialLinks.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.label}
              href={s.href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-500 transition-colors hover:text-white'
              aria-label={s.label}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}
