'use client';

import { useEffect, useState } from 'react';
import { Bookmark, Heart, Link2, ArrowUp, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function ActionBar() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const share = async () => {
    try {
      await navigator.share({ url: window.location.href });
    } catch {
      copyLink();
    }
  };

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className='fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-2 md:hidden bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-sm border-t border-white/[0.06]'
      >
        <div className='mx-auto max-w-[820px] flex items-center justify-around gap-2'>
          <button
            onClick={copyLink}
            className='flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.06] bg-black/60 backdrop-blur-sm text-[13px] font-mono text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200'
            title='Copy link'
          >
            <Link2 size={14} />
            <span>Copy</span>
          </button>
          <button
            onClick={share}
            className='flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.06] bg-black/60 backdrop-blur-sm text-[13px] font-mono text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200'
            title='Share'
          >
            <Share2 size={14} />
            <span>Share</span>
          </button>
          <button
            onClick={scrollTop}
            className='flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.06] bg-black/60 backdrop-blur-sm text-[13px] font-mono text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200'
            title='Back to top'
          >
            <ArrowUp size={14} />
            <span>Top</span>
          </button>
        </div>
      </motion.div>
    );
  }

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
