# AGENTS.md

Personal portfolio site for Adin Fauzan. Single Next.js 16 App Router app (despite the `Monorepo/profile` path — not a workspace). Package manager is **Bun 1.3.12**; `bun.lock` is tracked even though `.gitignore` lists it.

## Commands

- Install: `bun install`
- Dev: `bun run dev` (runs `next dev --turbo`)
- Build: `bun run build` — the `postbuild` hook runs `next-sitemap`; don't invoke `next build` directly or you'll skip sitemap generation.
- Seed DB: `bun run db:seed` (needs `DATABASE_URL`); schema changes: `bun run db:generate` / `bun run db:push`.
- Format write: `bun run format`.
- Commit types enforced by commitlint (Husky `commit-msg`): `feat|fix|docs|chore|style|refactor|ci|test|perf|revert|vercel`.

## Verification — read this before trusting the scripts

`bun run build` is the only reliable end-to-end check. Several scripts are broken against the current toolchain (Next 16.2.5, TypeScript 6, ESLint 10):

- `bun run typecheck` fails: TS 6 errors on `baseUrl` in `tsconfig.json` (TS5101) despite `next build` type-checking fine.
- `bun run lint` fails: `next lint` was removed in Next 16 (treats `lint` as a directory).
- `bun run lint:strict` fails: `eslint-plugin-react` (via eslint-config-next) incompatible with ESLint 10.
- `bun run test` fails at config load: `jest.config.mjs` imports `next/jest` which doesn't resolve under ESM (needs `next/jest.js`). `src/__tests__/pages/404.test.tsx` is also stale — it imports `@/pages/404`, but there is no `src/pages`.
- `bun run format:check` currently reports 3 unformatted files.

Fix the config/tooling rather than assuming a command works. CI (`.github/workflows/lint.yml`) still uses Node 18 + yarn and runs the same broken scripts, so expect it to be red.

## Content & data model (easy to get wrong)

Three separate content sources, only some wired up:

1. **`src/constants/*.ts` is the real source of truth** for almost every page (posts, projects, shorts, bucket-list, guestbook, navigation, socials, stacks). Add a blog post by editing `src/constants/posts.ts` (body is an inline template string). Project/blog "suggest edit" links point at these files.
2. **`src/db/*`** is a Drizzle + Neon Postgres layer. `src/db/queries.ts` reads from Postgres and falls back to constants when `DATABASE_URL` is unset — but **no page imports it yet**. Don't assume the DB is live; treat it as aspirational.
3. **`src/contents/{blogs,projects,snippets}/*.mdx`** read via `src/lib/mdx.ts` (filesystem). Only `snippets/[slug]` uses it.

`src/lib/articles.ts` merges `constants/posts` with the DEV.to API (`NEXT_PUBLIC_DEV_USERNAME`, optional `DEV_API_KEY`, cached 1h).

## Config gotchas

- `next.config.mjs` hardcodes `turbopack.root` to `/home/riu/Projects/Monorepo/profile`; update it if the checkout path changes.
- Dev uses Turbopack, but SVG-as-component (SVGR) is configured only in `webpack()`; SVG imports may behave differently in dev vs build.
- `next.config.mjs` allows remote images only from `images.unsplash.com`.
- All env vars are optional (`src/env.ts`, `@t3-oss/env-nextjs`). Set `SKIP_ENV_VALIDATION=1` to bypass validation. `.env.local` holds live secrets and is gitignored — never commit it.

## Conventions

- Path aliases: `@/*` → `src/*`, `~/*` → `public/*` (mirrored in `tsconfig.json` and `jest.config.mjs`).
- Prettier: single quotes and JSX single quotes, 2-space indent.
- ESLint enforces `simple-import-sort` groups (external → css → `@/lib`,`@/hooks` → `@/data` → `@/components` → `@/store` → `@/` → relative → `@/types`). `unused-imports` is a warning; avoid `console` in shipped code (`no-console` is warn). Note: `@/data`, `@/container`, `@/store` groups exist in config but directories don't exist yet.
- Tailwind v4: **no `tailwind.config.*`** (the one referenced in `components.json` does not exist). Theme tokens live in `src/styles/globals.css` via `@import 'tailwindcss'` + `@theme`.
- Next 16 dynamic routes: `params` is a `Promise` — `const { slug } = await params`.
- Commit only when explicitly asked.
