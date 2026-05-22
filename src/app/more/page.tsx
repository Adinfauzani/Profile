import {
  ArrowRight,
  CheckCircle,
  Circle,
  Code2,
  MessageSquare,
  Target,
} from 'lucide-react';
import Link from 'next/link';

const sections = [
  {
    title: 'Shorts',
    description: 'Quick tips and mental models for developers.',
    href: '/shorts',
    icon: Code2,
  },
  {
    title: 'Guestbook',
    description: 'Leave a message or share your thoughts.',
    href: '/guestbook',
    icon: MessageSquare,
  },
  {
    title: 'Bucket List',
    description: "Goals and dreams I'm working towards.",
    href: '/bucket-list',
    icon: Target,
  },
  {
    title: 'Uses',
    description: 'Tools and gear I use daily.',
    href: '/uses',
    icon: CheckCircle,
  },
];

export default function MorePage() {
  return (
    <main className='layout pt-32'>
      <h1 className='mb-3 text-4xl font-bold text-white md:text-5xl'>More</h1>
      <p className='mb-12 text-gray-400'>Explore more content and features.</p>

      <div className='grid gap-6 md:grid-cols-2'>
        {sections.map((section) => (
          <Link key={section.href} href={section.href}>
            <div className='group rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-white/20'>
              <div className='flex items-start justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='rounded-xl bg-white/10 p-2.5'>
                    <section.icon size={20} className='text-indigo-400' />
                  </div>
                  <div>
                    <h2 className='text-lg font-semibold text-white'>
                      {section.title}
                    </h2>
                    <p className='mt-1 text-sm text-gray-400'>
                      {section.description}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className='mt-2 shrink-0 text-gray-600 transition-all group-hover:translate-x-1 group-hover:text-indigo-400'
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
