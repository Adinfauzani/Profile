'use client';

import { CheckCircle, Circle } from 'lucide-react';

import { GlassCard } from '@/components/glass/GlassCard';

type Status = 'completed' | 'in-progress' | 'pending';

type BucketItem = {
  id: number;
  title: string;
  status: Status;
  category: string;
  completedDate?: string;
};

const bucketListItems: BucketItem[] = [
  {
    id: 1,
    title: 'Visit Japan during cherry blossom season',
    status: 'in-progress',
    category: 'Travel',
  },
  {
    id: 2,
    title: 'Build an open-source project with 1000+ stars',
    status: 'completed',
    category: 'Career',
    completedDate: '2024-06-15',
  },
  {
    id: 3,
    title: 'Write a technical book',
    status: 'in-progress',
    category: 'Career',
  },
  {
    id: 4,
    title: 'Get PADI Advanced Open Water certification',
    status: 'completed',
    category: 'Adventure',
    completedDate: '2024-03-20',
  },
  {
    id: 5,
    title: 'Contribute to React core library',
    status: 'pending',
    category: 'Career',
  },
  {
    id: 6,
    title: 'Backpack through Europe for a month',
    status: 'pending',
    category: 'Travel',
  },
  {
    id: 7,
    title: 'Learn to play piano',
    status: 'in-progress',
    category: 'Personal',
  },
  {
    id: 8,
    title: 'Speak at a major tech conference',
    status: 'completed',
    category: 'Career',
    completedDate: '2024-09-10',
  },
  {
    id: 9,
    title: 'Build a profitable SaaS product',
    status: 'pending',
    category: 'Career',
  },
  {
    id: 10,
    title: 'Run a marathon',
    status: 'in-progress',
    category: 'Fitness',
  },
];

const statusIcons: Record<Status, React.ReactNode> = {
  completed: <CheckCircle size={20} className='text-emerald-400' />,
  'in-progress': (
    <span className='inline-block h-5 w-5 animate-spin rounded-full border-2 border-amber-400 border-t-transparent' />
  ),
  pending: <Circle size={20} className='text-gray-500' />,
};

const statusLabels: Record<Status, string> = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  pending: 'Pending',
};

export default function BucketListPage() {
  const completed = bucketListItems.filter(
    (i) => i.status === 'completed',
  ).length;
  const total = bucketListItems.length;

  return (
    <main className='layout pt-32'>
      <div className='mx-auto max-w-3xl'>
        <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
          Bucket List
        </h1>
        <p className='mb-4 text-gray-400'>
          Goals and dreams I'm working towards.
        </p>

        <div className='mb-10 rounded-xl bg-white/5 p-4 backdrop-blur-sm'>
          <div className='flex items-center justify-between text-sm text-gray-400'>
            <span>Progress</span>
            <span>
              {completed}/{total} completed
            </span>
          </div>
          <div className='mt-2 h-2 overflow-hidden rounded-full bg-white/10'>
            <div
              className='h-full rounded-full bg-indigo-500 transition-all'
              style={{ width: `${(completed / total) * 100}%` }}
            />
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          {bucketListItems.map((item) => (
            <GlassCard key={item.id} className='p-4'>
              <div className='flex items-start gap-4'>
                <div className='mt-0.5'>{statusIcons[item.status]}</div>

                <div className='flex-1'>
                  <h3 className='font-medium text-white'>{item.title}</h3>
                  <div className='mt-1 flex items-center gap-3 text-xs text-gray-500'>
                    <span className='rounded-full bg-white/10 px-2 py-0.5'>
                      {item.category}
                    </span>
                    <span>{statusLabels[item.status]}</span>
                    {item.completedDate && (
                      <span>
                        •{' '}
                        {new Date(item.completedDate).toLocaleDateString(
                          'en-US',
                          { year: 'numeric', month: 'long' },
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </main>
  );
}
