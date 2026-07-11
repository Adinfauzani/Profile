type GoalStatus = 'done' | 'in-progress' | 'planned';

interface Goal {
  title: string;
  status: GoalStatus;
}

const timeline: { year: string; items: Goal[] }[] = [
  {
    year: '2024',
    items: [
      { title: 'Launch personal portfolio v1', status: 'done' },
      { title: 'Start open source contributions', status: 'done' },
      { title: 'Write 12+ technical blog posts', status: 'done' },
      { title: 'Build and ship first product', status: 'done' },
    ],
  },
  {
    year: '2025',
    items: [
      { title: 'Grow open source repositories', status: 'done' },
      { title: 'Speak at a local tech event', status: 'done' },
      { title: 'Reach 100 stars on GitHub projects', status: 'done' },
      { title: 'Launch Rynex production', status: 'done' },
    ],
  },
  {
    year: '2026',
    items: [
      {
        title: 'Build a developer tool that ships to 100+ users',
        status: 'in-progress',
      },
      { title: 'Write consistently on blog & shorts', status: 'in-progress' },
      { title: 'Deepen expertise in system design', status: 'in-progress' },
      { title: 'Contribute to 5+ open source projects', status: 'planned' },
      { title: 'Start a YouTube or screencast series', status: 'planned' },
    ],
  },
  {
    year: '2027+',
    items: [
      { title: 'Launch a paid product or SaaS', status: 'planned' },
      { title: 'Build a community of builders', status: 'planned' },
      { title: 'Freelance or join a mission-driven team', status: 'planned' },
      { title: 'Master Go or Rust for systems programming', status: 'planned' },
    ],
  },
];

function StatusDot({ status }: { status: GoalStatus }) {
  if (status === 'done')
    return (
      <span className='w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-1.5' />
    );
  if (status === 'in-progress')
    return (
      <span className='relative flex w-2 h-2 shrink-0 mt-1.5'>
        <span className='absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-50' />
        <span className='relative w-2 h-2 rounded-full bg-amber-400' />
      </span>
    );
  return (
    <span className='w-2 h-2 rounded-full bg-white/[0.15] shrink-0 mt-1.5' />
  );
}

export default function RoadmapPage() {
  return (
    <div className='min-h-screen'>
      <div className='mx-auto max-w-[640px] px-6 pt-32 pb-24'>
        <h1 className='text-4xl md:text-5xl font-bold text-white tracking-tight'>
          Roadmap
        </h1>
        <p className='mt-3 text-[15px] text-gray-400 leading-relaxed max-w-md'>
          Current vision, personal goals, and what&apos;s coming next.
        </p>

        <div className='mt-16 space-y-14'>
          {timeline.map((period) => (
            <div key={period.year}>
              <div className='flex items-center gap-3 mb-6'>
                <span className='text-[13px] font-mono text-amber-400/60 tracking-[0.15em] uppercase'>
                  {period.year}
                </span>
                <div className='h-px flex-1 bg-gradient-to-r from-amber-400/10 to-transparent' />
              </div>
              <div className='space-y-4'>
                {period.items.map((item) => (
                  <div
                    key={item.title}
                    className='flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5'
                  >
                    <StatusDot status={item.status} />
                    <span
                      className={`text-sm leading-snug ${item.status === 'done' ? 'text-gray-400' : item.status === 'in-progress' ? 'text-white' : 'text-gray-500'}`}
                    >
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
