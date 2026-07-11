const shorts = [
  {
    id: 'flexbox-mental-model',
    title: 'Flexbox Mental Model',
    content:
      'Think of flexbox as a one-dimensional layout system. Main axis flows left-to-right by default (row), cross axis flows top-to-bottom. Use justify-content for main axis alignment, align-items for cross axis.',
    tags: ['CSS', 'Flexbox'],
    date: '2024-11-20',
    views: 4500,
  },
  {
    id: 'nextjs-fetch-method',
    title: 'Next.js Data Fetching',
    content:
      'Server Components let you fetch data directly in your component. No more getServerSideProps. Just use async/await in your component and it works. The data is fetched on the server and sent to the client.',
    tags: ['Next.js', 'Data Fetching'],
    date: '2024-10-15',
    views: 3800,
  },
  {
    id: 'react-keys',
    title: 'Why React Keys Matter',
    content:
      'Keys help React identify which items have changed, been added, or removed. Without keys, React may reorder elements unpredictably. Always use stable IDs, not array indices.',
    tags: ['React', 'Performance'],
    date: '2024-09-22',
    views: 2900,
  },
  {
    id: 'typescript-narrowing',
    title: 'Type Narrowing in TypeScript',
    content:
      'Use typeof, instanceof, in, and custom type guards to narrow types. TypeScript will automatically narrow within conditional blocks. Custom type guards return type predicates.',
    tags: ['TypeScript'],
    date: '2024-08-18',
    views: 2100,
  },
  {
    id: 'tailwind-responsive',
    title: 'Responsive Design with Tailwind',
    content:
      'Tailwind uses mobile-first breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px). Prefix utilities with breakpoint names.',
    tags: ['Tailwind', 'CSS'],
    date: '2024-07-10',
    views: 1800,
  },
  {
    id: 'framer-motion-layout',
    title: 'Layout Animations with Framer Motion',
    content:
      'Add the layout prop to any motion component and it will automatically animate to its new position. Combine with layoutId for shared element transitions between routes.',
    tags: ['Framer Motion', 'Animation'],
    date: '2024-06-05',
    views: 3200,
  },
];

const totalViews = shorts.reduce((sum, s) => sum + s.views, 0);
const uniqueTags = [...new Set(shorts.flatMap((s) => s.tags))];

export default function ShortsPage() {
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
            <div className='col-span-3'>Topics</div>
            <div className='col-span-2 text-right'>Views</div>
            <div className='col-span-2 text-right'>Date</div>
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
                <div className='md:col-span-3 flex flex-wrap gap-1.5 items-start'>
                  {short.tags.map((tag) => (
                    <span
                      key={tag}
                      className='text-[11px] font-mono text-gray-500 px-2 py-0.5 rounded-full border border-white/[0.06]'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='md:col-span-2 flex items-center justify-start md:justify-end gap-1.5'>
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
                <div className='md:col-span-2 text-sm text-gray-500 font-mono text-left md:text-right'>
                  {new Date(short.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
