'use client';

import { Send } from 'lucide-react';
import { useState } from 'react';

const guestbookEntries = [
  {
    id: 1,
    name: 'Jon Wong',
    message:
      'Super impressive! Your projects (including this website) are amazing. That shorts section with the snippets is a great idea.',
    date: '2024-12-15',
    avatar: 'https://github.com/jonwonglam.png',
  },
  {
    id: 2,
    name: 'Danylenko Daryna',
    message:
      'Hello! Just checked in your useful post about choosing Next.js data fetching strategy, thank you for clearing this out for me!',
    date: '2024-11-28',
    avatar: 'https://github.com/DanylenkoDaryna.png',
  },
  {
    id: 3,
    name: 'Anthony Kusuma',
    message:
      'I came across your website when I was looking for a comparison between SSG, SSR, and CSR. Thanks for the detailed comparison.',
    date: '2024-10-20',
    avatar: 'https://github.com/anthonykusuma.png',
  },
  {
    id: 4,
    name: 'Kiellll',
    message:
      'Saw your post a while ago on Reddit and came across to your website. Looking forward to more content and best practices!',
    date: '2024-09-15',
    avatar: 'https://github.com/kielllll.png',
  },
  {
    id: 5,
    name: 'Nayyara Airlangga',
    message:
      "Hey man. Gotta say, I'm a big fan of your site and have been checking it on and off since 2021. It's nice to see how you've progressed since then.",
    date: '2024-08-22',
    avatar: 'https://github.com/nayyara-airlangga.png',
  },
  {
    id: 6,
    name: 'SamX23',
    message:
      "Wow, man! why didn't I find this blog earlier? This is a really informative react-related blog, I got more knowledge and insight from here, thanks a lot!",
    date: '2024-07-10',
    avatar: 'https://github.com/SamX23.png',
  },
  {
    id: 7,
    name: 'Vikrant',
    message: 'Hey there! This is one of my favourite technical blogs.',
    date: '2024-06-05',
    avatar: 'https://github.com/bhatvikrant.png',
  },
  {
    id: 8,
    name: 'Manish Tamang',
    message: 'Woow Dami Dami! Love from Nepal. <3',
    date: '2024-05-18',
    avatar: 'https://github.com/Manish-Tamang.png',
  },
];

export default function GuestbookPage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  return (
    <main className='layout pt-32'>
      <div className='mx-auto max-w-3xl'>
        <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
          Guestbook
        </h1>
        <p className='mb-12 text-gray-400'>
          Leave a message, say hello, or share your thoughts.
        </p>

        <div className='mb-12 rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setName('');
              setMessage('');
            }}
            className='flex flex-col gap-4'
          >
            <div>
              <label
                htmlFor='name'
                className='mb-2 block text-sm font-medium text-gray-300'
              >
                Name
              </label>
              <input
                id='name'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Your name'
                className='w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 backdrop-blur-sm transition-colors focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400'
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className='mb-2 block text-sm font-medium text-gray-300'
              >
                Message
              </label>
              <textarea
                id='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Leave a message...'
                rows={4}
                className='w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 backdrop-blur-sm transition-colors focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400'
              />
            </div>

            <button
              type='submit'
              className='inline-flex items-center gap-2 self-end rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-indigo-500'
            >
              <Send size={16} />
              Sign Guestbook
            </button>
          </form>
        </div>

        <div className='flex flex-col gap-4'>
          {guestbookEntries.map((entry) => (
            <div
              key={entry.id}
              className='rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm'
            >
              <div className='flex items-start gap-3'>
                <img
                  src={entry.avatar}
                  alt={entry.name}
                  className='h-10 w-10 rounded-full ring-2 ring-white/10'
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      `https://ui-avatars.com/api/?name=${entry.name}&background=6366f1&color=fff`;
                  }}
                />
                <div className='flex-1'>
                  <div className='flex items-center gap-2'>
                    <span className='font-medium text-white'>{entry.name}</span>
                    <span className='text-xs text-gray-500'>
                      {new Date(entry.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <p className='mt-2 text-sm text-gray-300'>{entry.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
