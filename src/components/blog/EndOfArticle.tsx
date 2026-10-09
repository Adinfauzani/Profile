'use client';

import { Bookmark, Heart, Link, Share2 } from 'lucide-react';
import { useState } from 'react';

export function EndOfArticle() {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silently fail
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({ url: window.location.href });
    } catch {
      handleCopyLink();
    }
  };

  return (
    <section className='mt-20 mb-12 sm:mt-24 sm:mb-16 text-center'>
      <div className='max-w-[640px] mx-auto px-4 sm:px-0'>
        <span className='text-[48px] sm:text-[54px] leading-none text-white/10 select-none font-serif'>
          &ldquo;
        </span>
        <p className='-mt-4 sm:-mt-6 text-base sm:text-lg text-gray-300 leading-relaxed'>
          Hope you enjoyed reading.
          <br />
          If this article helped you, consider sharing it with other developers.
        </p>

        <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3'>
          <button
            onClick={() => setLiked(!liked)}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-[12px] sm:text-[13px] font-mono transition-all duration-200 ${
              liked
                ? 'border-red-500/30 bg-red-500/10 text-red-400'
                : 'border-white/[0.06] text-gray-400 hover:text-white hover:border-white/20'
            }`}
          >
            <Heart size={14} className={liked ? 'fill-red-400' : ''} />
            {liked ? 'Liked' : 'Like'}
          </button>

          <button
            onClick={handleShare}
            className='w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.06] text-[12px] sm:text-[13px] font-mono text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200'
          >
            <Share2 size={14} />
            Share
          </button>

          <button
            onClick={handleCopyLink}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-[12px] sm:text-[13px] font-mono transition-all duration-200 ${
              copied
                ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                : 'border-white/[0.06] text-gray-400 hover:text-white hover:border-white/20'
            }`}
          >
            <Link size={14} />
            {copied ? 'Copied!' : 'Copy Link'}
          </button>

          <button
            onClick={() => setBookmarked(!bookmarked)}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-[12px] sm:text-[13px] font-mono transition-all duration-200 ${
              bookmarked
                ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400'
                : 'border-white/[0.06] text-gray-400 hover:text-white hover:border-white/20'
            }`}
          >
            <Bookmark
              size={14}
              className={bookmarked ? 'fill-indigo-400' : ''}
            />
            {bookmarked ? 'Saved' : 'Bookmark'}
          </button>
        </div>
      </div>
    </section>
  );
}
