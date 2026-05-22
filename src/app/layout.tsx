import type { Metadata } from 'next';

import '../styles/globals.css';
import '../styles/animations.css';

import { Analytics } from '@/components/Analytics';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { dancingScript, plusJakartaSans } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Adin Fauzan | Fullstack Developer',
  description:
    'Portfolio of Adin Fauzan, a Fullstack Developer specializing in modern web technologies. Building clean, fast, and user-centric applications.',
  keywords: [
    'Adin Fauzan',
    'Fullstack Developer',
    'Web Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Adin Fauzan | Fullstack Developer',
    description:
      'Crafting digital experiences with clean code and thoughtful design.',
    url: 'https://adinfauzan.dev',
    siteName: 'Adin Fauzan Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Adin Fauzan Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adin Fauzan | Fullstack Developer',
    description:
      'Crafting digital experiences with clean code and thoughtful design.',
    creator: '@adinfauzan',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${plusJakartaSans.variable} ${dancingScript.variable} bg-black text-white selection:bg-indigo-500/30 selection:text-indigo-300`}
      >
        <Navbar />
        <main className='relative'>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
