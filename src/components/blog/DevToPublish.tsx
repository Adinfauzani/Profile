'use client';

import { useState } from 'react';
import { Send, RefreshCw, ExternalLink, Loader2 } from 'lucide-react';

interface DevToPublishProps {
  slug: string;
  title: string;
  isDevToArticle?: boolean;
  devtoUrl?: string;
  devtoId?: number;
}

export function DevToPublish({
  slug,
  title,
  isDevToArticle,
  devtoUrl,
  devtoId,
}: DevToPublishProps) {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = useState('');
  const [syncStatus, setSyncStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handlePublish = async () => {
    setStatus('loading');
    setMessage('Publishing to dev.to as draft...');

    try {
      const res = await fetch('/api/devto/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(`Published as draft! View on dev.to`);
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to publish');
      }
    } catch {
      setStatus('error');
      setMessage('Network error');
    }
  };

  const handleSync = async () => {
    setSyncStatus('loading');

    try {
      const res = await fetch('/api/devto/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      });

      const data = await res.json();

      if (res.ok) {
        setSyncStatus('success');
        setMessage(
          `Synced: ${data.reactions} reactions, ${data.comments} comments`,
        );
      } else {
        setSyncStatus('error');
        setMessage(data.error || 'Sync failed');
      }
    } catch {
      setSyncStatus('error');
      setMessage('Network error');
    }
  };

  if (isDevToArticle) {
    return (
      <div className='flex flex-wrap items-center gap-3'>
        {devtoUrl && (
          <a
            href={devtoUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 px-4 py-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-mono hover:bg-emerald-500/20 transition-colors'
          >
            <ExternalLink size={14} />
            View on dev.to
          </a>
        )}
        <button
          onClick={handleSync}
          disabled={syncStatus === 'loading'}
          className='flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.06] bg-white/[0.02] text-[13px] font-mono text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200 disabled:opacity-50'
        >
          {syncStatus === 'loading' ? (
            <>
              <Loader2 size={14} className='animate-spin' />
              Syncing...
            </>
          ) : (
            <>
              <RefreshCw size={14} />
              Sync Stats
            </>
          )}
        </button>
        {message && (
          <span
            className={`text-sm font-mono ${
              syncStatus === 'success'
                ? 'text-emerald-400'
                : syncStatus === 'error'
                  ? 'text-red-400'
                  : 'text-gray-500'
            }`}
          >
            {message}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className='flex flex-wrap items-center gap-3'>
      <button
        onClick={handlePublish}
        disabled={status === 'loading'}
        className='flex items-center gap-2 px-4 py-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-mono hover:bg-indigo-500/20 transition-colors disabled:opacity-50'
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={14} className='animate-spin' />
            Publishing...
          </>
        ) : (
          <>
            <Send size={14} />
            Publish to dev.to
          </>
        )}
      </button>
      {message && (
        <span
          className={`text-sm font-mono ${
            status === 'success'
              ? 'text-emerald-400'
              : status === 'error'
                ? 'text-red-400'
                : 'text-gray-500'
          }`}
        >
          {message}
        </span>
      )}
    </div>
  );
}
