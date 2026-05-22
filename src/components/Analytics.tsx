import { env } from '@/env';

export function Analytics() {
  if (!env.NEXT_PUBLIC_UMAMI_WEBSITE_ID) return null;

  return (
    <script
      defer
      src={env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
      data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
    />
  );
}
