import { socialLinks } from '@/constants/socials';

export function Footer() {
  return (
    <footer className='border-t border-white/5 bg-black/50'>
      <div className='layout flex flex-col items-center gap-4 py-12 text-center'>
        <p className='text-sm text-gray-500'>
          © {new Date().getFullYear()} Adin Fauzan. All rights reserved.
        </p>

        <div className='flex items-center gap-4'>
          {socialLinks.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 transition-colors hover:text-white'
                aria-label={s.label}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
