import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL ?? '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN ?? '',
});

const DEFAULT_TTL = 300;

export function isCacheAvailable() {
  return !!(
    process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  );
}

export async function getCachedOrFetch<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl = DEFAULT_TTL,
): Promise<T> {
  if (!isCacheAvailable()) return fetcher();

  const cached = await redis.get<T>(key);
  if (cached !== null) return cached;

  const data = await fetcher();
  await redis.setex(key, ttl, JSON.stringify(data));
  return data;
}

export async function invalidateCache(key: string) {
  if (!isCacheAvailable()) return;
  await redis.del(key);
}
