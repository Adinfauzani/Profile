'use client';

import Giscus from '@giscus/react';

const GISCUS_CONFIG = {
  repo: 'Adinfauzani/Profile' as const,
  repoId: 'R_kgDOSWpWEg',
  category: 'General' as const,
  categoryId: 'DIC_kwDOSWpWEs4DAx3X',
  mapping: 'pathname' as const,
  strict: '0' as const,
  reactionsEnabled: '1' as const,
  emitMetadata: '0' as const,
  inputPosition: 'top' as const,
  lang: 'en' as const,
  loading: 'lazy' as const,
};

export function CommentsSection() {
  return (
    <section className='mt-16 pt-16 border-t border-white/[0.06]'>
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
    </section>
  );
}
