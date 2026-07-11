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
    <section className='mt-24 mb-16 text-center'>
      <div className='max-w-[640px] mx-auto'>
        <span className='text-[54px] leading-none text-white/10 select-none font-serif'>
          &ldquo;
        </span>
        <p className='-mt-6 text-lg text-gray-300 leading-relaxed'>
          Hope you enjoyed reading.
          <br />
          If this article helped you, consider sharing it with other developers.
        </p>

        <div className='mt-8 flex items-center justify-center gap-3'>
          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-[13px] font-mono transition-all duration-200 ${
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
            className='flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.06] text-[13px] font-mono text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200'
          >
            <Share2 size={14} />
            Share
          </button>

          <button
            onClick={handleCopyLink}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-[13px] font-mono transition-all duration-200 ${
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
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-[13px] font-mono transition-all duration-200 ${
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
