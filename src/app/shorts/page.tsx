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

export default function ShortsPage() {
  return (
    <main className='layout pt-32'>
      <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>Shorts</h1>
      <p className='mb-12 text-gray-400'>
        Quick tips and mental models for developers.
      </p>

      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {shorts.map((short) => (
          <div
            key={short.id}
            className='rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm'
          >
            <div className='flex items-start justify-between'>
              <h3 className='text-lg font-semibold text-white'>
                {short.title}
              </h3>
              <span className='text-xs text-gray-500'>
                {short.views.toLocaleString()} views
              </span>
            </div>

            <p className='mt-3 text-sm text-gray-400'>{short.content}</p>

            <div className='mt-4 flex flex-wrap gap-2'>
              {short.tags.map((tag) => (
                <span
                  key={tag}
                  className='rounded-full bg-white/10 px-2 py-0.5 text-xs text-gray-400'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
