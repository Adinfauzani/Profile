'use client';

import { ExternalLink } from 'lucide-react';
import Giscus from '@giscus/react';
import { motion } from 'framer-motion';

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='currentColor'>
      <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
    </svg>
  );
}

const GISCUS_CONFIG = {
  repo: 'Adinfauzani/Profile' as const,
  repoId: 'R_kgDOSWpWEg',
  category: 'General' as const,
  categoryId: 'DIC_kwDOSWpWEs4DAx3X',
  mapping: 'pathname' as const,
  strict: '1' as const,
  reactionsEnabled: '1' as const,
  emitMetadata: '0' as const,
  inputPosition: 'top' as const,
  lang: 'id' as const,
  loading: 'lazy' as const,
};

export default function GuestbookPage() {
  return (
    <div className='min-h-screen'>
      <div className='mx-auto max-w-[760px] px-6 pt-32 pb-24'>
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='text-center'
        >
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]'>
            Guest Book
          </h1>
          <p className='mt-5 text-[15px] md:text-base text-gray-400 leading-relaxed max-w-lg mx-auto'>
            A place where developers, friends, collaborators, and visitors can
            leave a message, share feedback, or simply say hello.
          </p>
          <div className='mt-6 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5'>
            <span className='w-1.5 h-1.5 rounded-full bg-emerald-400/60' />
            <span className='text-[13px] font-mono text-gray-500'>
              Powered by GitHub Discussions
            </span>
          </div>
        </motion.div>

        {/* Welcome Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className='mt-16 rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-8 md:p-10'
        >
          <div className='flex items-start gap-4'>
            <span className='text-2xl shrink-0 mt-0.5'>👋</span>
            <div>
              <h2 className='text-xl font-semibold text-white'>Welcome!</h2>
              <p className='mt-3 text-[15px] text-gray-400 leading-relaxed'>
                Thanks for visiting my portfolio. Feel free to leave a message,
                share your thoughts, or tell me what you&apos;re building.
              </p>
              <p className='mt-3 text-[15px] text-gray-400 leading-relaxed'>
                Every discussion helps improve my work and makes this portfolio
                a little more meaningful.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className='mt-10 flex flex-wrap items-center gap-4'
        >
          <a
            href='https://github.com/Adinfauzani/Profile/discussions/new'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 text-sm font-medium text-white bg-white/[0.08] hover:bg-white/[0.12] px-5 py-2.5 rounded-full transition-colors duration-300'
          >
            <svg
              width='15'
              height='15'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
            </svg>
            Start a Discussion
          </a>
          <a
            href='https://github.com/Adinfauzani/Profile'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300'
          >
            <GithubIcon size={15} />
            View Repository
            <ExternalLink size={13} />
          </a>
        </motion.div>

        {/* Giscus */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className='mt-8'
        >
          <div className='giscus-wrapper [&_.giscus]:w-full'>
            <Giscus
              repo={GISCUS_CONFIG.repo}
              repoId={GISCUS_CONFIG.repoId}
              category={GISCUS_CONFIG.category}
              categoryId={GISCUS_CONFIG.categoryId}
              mapping={GISCUS_CONFIG.mapping}
              strict={GISCUS_CONFIG.strict}
              reactionsEnabled={GISCUS_CONFIG.reactionsEnabled}
              emitMetadata={GISCUS_CONFIG.emitMetadata}
              inputPosition={GISCUS_CONFIG.inputPosition}
              lang={GISCUS_CONFIG.lang}
              loading={GISCUS_CONFIG.loading}
              theme='dark_high_contrast'
            />
          </div>
        </motion.div>

        {/* Info Note */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
          className='mt-16 rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-8 md:p-10'
        >
          <h3 className='text-base font-semibold text-white'>
            Why GitHub Discussions?
          </h3>
          <p className='mt-3 text-[15px] text-gray-400 leading-relaxed'>
            I believe conversations should remain open, transparent, and
            accessible. Using GitHub Discussions keeps everything versioned,
            searchable, and connected with my projects.
          </p>
        </motion.div>

        {/* Footer Message */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
          className='mt-20 text-center text-[13px] text-gray-600 font-mono'
        >
          Thanks for stopping by. I read every message.
        </motion.p>
      </div>
    </div>
  );
}
