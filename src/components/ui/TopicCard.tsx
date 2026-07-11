type TopicCardProps = {
  title: string;
  subtitle: string;
  variant: 'flexbox' | 'fetching' | 'more';
  className?: string;
};

const FlexboxGraphic = () => (
  <div className='flex items-end gap-2 h-24 px-2'>
    <div className='w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 shadow-sm' />
    <div className='w-10 h-20 rounded-lg bg-neutral-800 border border-neutral-700 shadow-sm' />
    <div className='w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 shadow-sm' />
    <div className='w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 shadow-sm' />
  </div>
);

const FetchingGraphic = () => (
  <div className='flex items-center justify-center h-24 relative px-2'>
    <div className='absolute w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 left-4 top-0 opacity-60' />
    <div className='absolute w-14 h-14 rounded-full bg-neutral-800 border border-neutral-700 left-8 bottom-2' />
    <div className='w-16 h-16 rounded-full bg-neutral-800 border border-neutral-700 z-10' />
    <div className='absolute w-14 h-14 rounded-full bg-neutral-800 border border-neutral-700 right-8 bottom-2' />
    <div className='absolute w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 right-4 top-0 opacity-60' />
  </div>
);

const MoreGraphic = () => (
  <div className='grid grid-cols-2 gap-2 h-24 px-2 place-content-center'>
    <div className='w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 shadow-sm' />
    <div className='w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 shadow-sm' />
    <div className='w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 shadow-sm' />
    <div className='w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 shadow-sm' />
  </div>
);

export const TopicCard = ({
  title,
  subtitle,
  variant,
  className,
}: TopicCardProps) => {
  return (
    <div
      className={`w-72 h-80 rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 flex flex-col justify-between shadow-2xl hover:bg-neutral-900 transition-colors ${className || ''}`}
    >
      <div className='flex-1 flex items-center justify-center'>
        {variant === 'flexbox' && <FlexboxGraphic />}
        {variant === 'fetching' && <FetchingGraphic />}
        {variant === 'more' && <MoreGraphic />}
      </div>

      <div className='mt-4'>
        <h3 className='text-3xl font-bold text-white'>{title}</h3>
        <p className='mt-1 text-sm text-neutral-400'>{subtitle}</p>
      </div>
    </div>
  );
};
