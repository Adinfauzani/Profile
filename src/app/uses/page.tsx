const hardware = [
  { item: 'MacBook Pro 14" M2 Pro', description: 'Main development machine' },
  { item: 'LG UltraWide 34"', description: 'External monitor' },
  { item: 'Keychron K2', description: 'Mechanical keyboard' },
  { item: 'Logitech MX Master 3', description: 'Wireless mouse' },
  { item: 'AirPods Pro', description: 'Daily drivers' },
];

const software = [
  { item: 'VS Code', description: 'Primary code editor' },
  { item: 'Arc Browser', description: 'Daily browser' },
  { item: 'iTerm2 + Oh My Zsh', description: 'Terminal setup' },
  { item: 'Figma', description: 'Design and prototyping' },
  { item: 'Notion', description: 'Notes and project management' },
];

const stack = [
  { item: 'Next.js', description: 'React framework' },
  { item: 'TypeScript', description: 'Type safety' },
  { item: 'Tailwind CSS', description: 'Styling' },
  { item: 'Supabase', description: 'Backend as a service' },
  { item: 'Prisma', description: 'ORM' },
  { item: 'Vercel', description: 'Hosting and deployment' },
  { item: 'GitHub', description: 'Version control' },
];

function CategorySection({
  title,
  items,
}: {
  title: string;
  items: { item: string; description: string }[];
}) {
  return (
    <div>
      <h2 className='mb-4 text-xl font-bold text-white'>{title}</h2>
      <div className='flex flex-col gap-3'>
        {items.map((item) => (
          <div
            key={item.item}
            className='rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm'
          >
            <div className='flex items-start justify-between gap-4'>
              <div>
                <h3 className='font-medium text-white'>{item.item}</h3>
                <p className='mt-1 text-sm text-gray-400'>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function UsesPage() {
  return (
    <main className='layout pt-32'>
      <div className='mx-auto max-w-3xl'>
        <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>Uses</h1>
        <p className='mb-12 text-gray-400'>
          Hardware, software, and technologies I use daily.
        </p>

        <div className='flex flex-col gap-10'>
          <CategorySection title='Hardware' items={hardware} />
          <CategorySection title='Software' items={software} />
          <CategorySection title='Tech Stack' items={stack} />
        </div>
      </div>
    </main>
  );
}
