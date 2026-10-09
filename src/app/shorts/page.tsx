import { getAllShorts } from '@/lib/articles';
import { DevToPublish } from '@/components/blog/DevToPublish';

export default async function ShortsPage() {
  const shorts = await getAllShorts();

  const totalViews = shorts.reduce((sum, s) => sum + s.views, 0);
  const totalReactions = shorts.reduce((sum, s) => sum + s.reactions, 0);
  const uniqueTags = [...new Set(shorts.flatMap((s) => s.tags))];

  return (
    <div className='min-h-screen'>
      <div className='mx-auto max-w-[860px] px-6 pt-32 pb-24'>
        <h1 className='text-4xl md:text-5xl font-bold text-white tracking-tight'>
          Statik Web
        </h1>
        <p className='mt-3 text-[15px] text-gray-400 leading-relaxed max-w-md'>
          Quick snippets, mental models, and dev statistics at a glance.
        </p>

        {/* Summary Cards */}
        <div className='mt-10 grid grid-cols-3 gap-3 md:gap-4'>
          {[
            { label: 'Snippets', value: shorts.length },
            { label: 'Total Views', value: totalViews.toLocaleString() },
            {
              label: 'Total Reactions',
              value: totalReactions.toLocaleString(),
            },
            { label: 'Topics', value: uniqueTags.length },
          ].map((stat) => (
            <div
              key={stat.label}
              className='rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 md:p-5 text-center'
            >
              <div className='text-2xl md:text-3xl font-bold text-white tracking-tight'>
                {stat.value}
              </div>
              <div className='mt-1 text-[12px] font-mono text-gray-500'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Table Header */}
        <div className='mt-12'>
          <div className='hidden md:grid grid-cols-12 gap-4 px-5 py-3 text-[11px] font-mono text-gray-600 tracking-[0.1em] uppercase border-b border-white/[0.06]'>
            <div className='col-span-5'>Title</div>
            <div className='col-span-2'>Platform</div>
            <div className='col-span-2'>Topics</div>
            <div className='col-span-1 text-right'>Views</div>
            <div className='col-span-1 text-right'>Reactions</div>
            <div className='col-span-1 text-right'>Date</div>
          </div>

          <div className='divide-y divide-white/[0.04]'>
            {shorts.map((short) => (
              <div
                key={short.id}
                className='grid md:grid-cols-12 gap-2 md:gap-4 px-5 py-4 hover:bg-white/[0.02] transition-colors duration-200 rounded-lg'
              >
                <div className='md:col-span-5'>
                  <p className='text-sm font-medium text-white leading-snug'>
                    {short.title}
                  </p>
                </div>
                <div className='md:col-span-2 flex items-center'>
                  {short.platform === 'dev' ? (
                    <span className='inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full border border-emerald-500/20 text-emerald-400 bg-emerald-500/5'>
                      <span className='w-1.5 h-1.5 rounded-full bg-emerald-400' />
                      dev.to
                    </span>
                  ) : (
                    <span className='inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full border border-indigo-500/20 text-indigo-400 bg-indigo-500/5'>
                      <span className='w-1.5 h-1.5 rounded-full bg-indigo-400' />
                      Website
                    </span>
                  )}
                </div>
                <div className='md:col-span-2 flex flex-wrap gap-1.5 items-start'>
                  {short.tags.map((tag) => (
                    <span
                      key={tag}
                      className='text-[11px] font-mono text-gray-500 px-2 py-0.5 rounded-full border border-white/[0.06]'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='md:col-span-1 flex items-center justify-start md:justify-end gap-1.5'>
                  <svg
                    width='12'
                    height='12'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    className='text-gray-600 shrink-0'
                  >
                    <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
                    <circle cx='12' cy='12' r='3' />
                  </svg>
                  <span className='text-sm text-gray-400 font-mono'>
                    {short.views.toLocaleString()}
                  </span>
                </div>
                <div className='md:col-span-1 flex items-center justify-start md:justify-end gap-1.5'>
                  <svg
                    width='12'
                    height='12'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    className='text-gray-600 shrink-0'
                  >
                    <path d='M20.84 4.61a5.5 5.5 0 0 1 0 7.78l-12 12a5.5 5.5 0 0 1-7.78 0l-12-12a5.5 5.5 0 0 1 0-7.78l12-12a5.5 5.5 0 0 1 7.78 0z' />
                    <path d='M12 9v6l3 3' />
                  </svg>
                  <span className='text-sm text-gray-400 font-mono'>
                    {short.reactions.toLocaleString()}
                  </span>
                </div>
                <div className='md:col-span-1 text-sm text-gray-500 font-mono text-left md:text-right'>
                  {short.platform === 'dev' && short.url ? (
                    <DevToPublish
                      slug={short.id}
                      title={short.title}
                      isDevToArticle={true}
                      devtoUrl={short.url}
                    />
                  ) : (
                    new Date(short.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
