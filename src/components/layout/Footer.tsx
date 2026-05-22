import { ArrowRight, Mail } from 'lucide-react';
import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri';

import { GlassContainer } from '@/components/glass/GlassContainer';

const generalLinks = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/projects' },
  { label: 'Shorts', href: '/shorts' },
  { label: 'About', href: '/about' },
];

const websiteLinks = [
  { label: 'Bucket List', href: '/bucket-list' },
  { label: 'Uses', href: '/uses' },
  { label: 'Guest Book', href: '/guestbook' },
];

const resourceLinks = [
  { label: 'Book Notes', href: '/book-notes' },
  { label: 'RSS', href: '/rss.xml' },
  { label: 'Analytics', href: '/analytics' },
];

const socialLinks = [
  { label: 'Email', href: 'mailto:hello@adinfauzan.dev', icon: Mail },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/adinfauzan',
    icon: RiLinkedinFill,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/adinfauzan',
    icon: RiGithubFill,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/adinfauzan',
    icon: RiTwitterXFill,
  },
];

export function Footer() {
  return (
    <footer className='border-t border-white/5 bg-black/50'>
      <div className='layout py-16'>
        <GlassContainer intensity='sm' className='p-8 md:p-12'>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <div>
              <h3 className='text-lg font-semibold text-white'>Adin Fauzan</h3>
              <p className='mt-2 text-sm text-gray-400'>
                Help you rebuild and redefine fundamental concepts through
                mental models.
              </p>
              <div className='mt-4 flex gap-3'>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-lg p-2 text-gray-500 transition-colors hover:bg-white/10 hover:text-white'
                    aria-label={link.label}
                  >
                    <link.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className='mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400'>
                General
              </h4>
              <ul className='space-y-2'>
                {generalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className='text-sm text-gray-500 transition-colors hover:text-white'
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className='mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400'>
                The Website
              </h4>
              <ul className='space-y-2'>
                {websiteLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className='text-sm text-gray-500 transition-colors hover:text-white'
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className='mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400'>
                Resources
              </h4>
              <ul className='space-y-2'>
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className='inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-white'
                    >
                      {link.label}
                      <ArrowRight size={12} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='mt-12 border-t border-white/5 pt-8 text-center'>
            <p className='text-sm text-gray-600'>
              © {new Date().getFullYear()} Adin Fauzan. All rights reserved.
            </p>
          </div>
        </GlassContainer>
      </div>
    </footer>
  );
}
