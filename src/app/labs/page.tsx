const experiments = [
  {
    name: 'Voxel Engine',
    description:
      'A lightweight voxel renderer built with Three.js and custom shaders.',
    status: 'Active',
    tech: ['Three.js', 'GLSL', 'TypeScript'],
    href: '#',
  },
  {
    name: 'CLI Weather',
    description:
      'Minimal weather forecast tool for the terminal with ASCII art output.',
    status: 'Active',
    tech: ['Go', 'REST API', 'JSON'],
    href: '#',
  },
  {
    name: 'Design System',
    description: 'Component library and design tokens for rapid prototyping.',
    status: 'Paused',
    tech: ['React', 'Storybook', 'CSS'],
    href: '#',
  },
  {
    name: 'TinyDB',
    description:
      'Embedded document store written from scratch for learning purposes.',
    status: 'Archived',
    tech: ['Rust', 'Serde', 'CLI'],
    href: '#',
  },
  {
    name: 'Audio Visualizer',
    description: 'Real-time audio frequency visualizer in the browser.',
    status: 'Active',
    tech: ['Web Audio API', 'Canvas', 'JavaScript'],
    href: '#',
  },
  {
    name: 'Dotfiles',
    description:
      'Personal development environment configuration and automation.',
    status: 'Maintained',
    tech: ['Zsh', 'Neovim', 'tmux', 'Git'],
    href: '#',
  },
];

function statusColor(status: string) {
  if (status === 'Active') return 'bg-emerald-400';
  if (status === 'Paused') return 'bg-amber-400';
  if (status === 'Archived') return 'bg-gray-500';
  return 'bg-blue-400';
}

export default function LabsPage() {
  return (
    <div className='min-h-screen'>
      <div className='mx-auto max-w-[760px] px-6 pt-32 pb-24'>
        <h1 className='text-4xl md:text-5xl font-bold text-white tracking-tight'>
          Digital Lab
        </h1>
        <p className='mt-3 text-[15px] text-gray-400 leading-relaxed max-w-md'>
          Experimental projects, tools, and side quests I&apos;m tinkering with.
        </p>

        <div className='mt-12 grid gap-4'>
          {experiments.map((exp) => (
            <a
              key={exp.name}
              href={exp.href}
              className='group block rounded-[20px] border border-white/[0.06] bg-white/[0.02] p-5 hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300'
            >
              <div className='flex items-start justify-between gap-4'>
                <div className='flex-1 min-w-0'>
                  <h2 className='text-lg font-semibold text-white group-hover:text-white/90 transition-colors duration-300'>
                    {exp.name}
                  </h2>
                  <p className='mt-1.5 text-sm text-gray-400 leading-relaxed'>
                    {exp.description}
                  </p>
                  <div className='flex flex-wrap gap-2 mt-4'>
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className='text-[11px] font-mono text-gray-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]'
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='flex items-center gap-1.5 shrink-0 mt-1'>
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${statusColor(exp.status)}`}
                  />
                  <span className='text-[12px] font-mono text-gray-500'>
                    {exp.status}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
