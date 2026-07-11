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
    <section className='my-20 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8'>
      <div className='flex items-center gap-3 mb-6'>
        <span className='w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center'>
          <Sparkles size={16} className='text-indigo-400' />
        </span>
        <div>
          <span className='text-sm font-medium text-white'>AI Companion</span>
          <p className='text-[12px] font-mono text-gray-500'>
            Ask questions about this article
          </p>
        </div>
      </div>

      <div className='flex flex-wrap gap-3'>
        {actions.map((action) => (
          <button
            key={action.label}
            className='group relative px-4 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200 text-left'
          >
            <span className='block text-[13px] font-medium text-gray-300 group-hover:text-indigo-400 transition-colors duration-200'>
              {action.label}
            </span>
            <span className='block text-[11px] font-mono text-gray-600 mt-0.5'>
              {action.description}
            </span>
          </button>
        ))}
      </div>

      <p className='mt-6 text-[12px] font-mono text-gray-600'>
        Powered by Sant.AI &mdash; coming soon
      </p>
    </section>
  );
}
