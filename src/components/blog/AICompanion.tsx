'use client';

import { Sparkles } from 'lucide-react';

const actions = [
  { label: 'Summarize', description: 'Get a concise summary' },
  { label: 'Explain Simply', description: 'Break down complex concepts' },
  { label: 'Generate Example', description: 'See a practical example' },
  { label: 'Key Takeaways', description: 'Extract the main points' },
];

export function AICompanion() {
  return (
    <section className='my-16 sm:my-20 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-8'>
      <div className='flex items-center gap-3 mb-5 sm:mb-6'>
        <span className='w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0'>
          <Sparkles size={16} className='text-indigo-400' />
        </span>
        <div className='min-w-0'>
          <span className='text-sm font-medium text-white truncate block'>
            AI Companion
          </span>
          <p className='text-[11px] sm:text-[12px] font-mono text-gray-500 truncate'>
            Ask questions about this article
          </p>
        </div>
      </div>

      <div className='flex flex-wrap gap-2 sm:gap-3'>
        {actions.map((action) => (
          <button
            key={action.label}
            className='group relative flex-1 min-w-[140px] sm:min-w-0 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200 text-left'
          >
            <span className='block text-[12px] sm:text-[13px] font-medium text-gray-300 group-hover:text-indigo-400 transition-colors duration-200 truncate'>
              {action.label}
            </span>
            <span className='block text-[10px] sm:text-[11px] font-mono text-gray-600 mt-0.5 truncate'>
              {action.description}
            </span>
          </button>
        ))}
      </div>

      <p className='mt-5 sm:mt-6 text-[11px] sm:text-[12px] font-mono text-gray-600 text-center'>
        Powered by Sant.AI &mdash; coming soon
      </p>
    </section>
  );
}
