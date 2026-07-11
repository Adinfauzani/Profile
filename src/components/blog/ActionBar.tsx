'use client';

import { useEffect, useState } from 'react';
import { Bookmark, Heart, Link2, ArrowUp, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function ActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className='fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2'
    >
      <button
        onClick={copyLink}
        className='w-9 h-9 rounded-xl border border-white/[0.06] bg-black/60 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all duration-200'
        title='Copy link'
      >
        <Link2 size={14} />
      </button>
      <button
        className='w-9 h-9 rounded-xl border border-white/[0.06] bg-black/60 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all duration-200'
        title='Share'
      >
        <Share2 size={14} />
      </button>
      <button
        onClick={scrollTop}
        className='w-9 h-9 rounded-xl border border-white/[0.06] bg-black/60 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all duration-200'
        title='Back to top'
      >
        <ArrowUp size={14} />
      </button>
    </motion.div>
  );
}
