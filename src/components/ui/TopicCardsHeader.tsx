import { Lightbulb } from 'lucide-react';

export const Header = () => {
  return (
    <div className='relative flex flex-col items-center text-center max-w-xl'>
      <h2
        className='text-3xl md:text-4xl text-neutral-200 -mb-2'
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        Complex Things
      </h2>

      <div className='relative mt-1'>
        <div className='border border-neutral-700 rounded-3xl px-8 py-3 md:px-12 md:py-4'>
          <h1 className='text-5xl md:text-7xl font-bold tracking-tight'>
            Made{' '}
            <span
              className='text-transparent'
              style={{ WebkitTextStroke: '1.5px #e5e5e5' }}
            >
              Simple
            </span>
          </h1>
        </div>

        <div className='absolute -right-8 top-1/2 -translate-y-1/2 translate-y-4 md:-right-10 md:translate-y-6'>
          <div className='w-14 h-14 md:w-16 md:h-16 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center shadow-lg'>
            <Lightbulb className='w-6 h-6 md:w-7 md:h-7 text-neutral-300' />
          </div>
        </div>
      </div>

      <p className='mt-8 md:mt-10 text-neutral-400 text-sm md:text-base max-w-md leading-relaxed'>
        I'm sharing how I approach something and how my mental model affect my
        learning about a certain topic.
      </p>
    </div>
  );
};
