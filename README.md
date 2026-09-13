# NEXA Social

**Production-grade social platform**  
Free · Premium Apple Glass UI · Algorithm-controlled trends  
*You own your feed. We own the trends.*

Built to MNC engineering standards: typed, secure, accessible, deployable.

---

## Architecture

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + custom glass design system |
| Auth | Clerk |
| Database | Supabase (Postgres + RLS + Realtime) |
| Validation | Zod |
| Icons | Lucide React |
| Motion | Framer Motion (ready) |

---

## Quick Start

```bash
npm install
cp .env.example .env.local
# Fill Clerk + Supabase keys
npm run dev
```

Open http://localhost:3000

## Database

Run `supabase/schema.sql` in the Supabase SQL Editor.

## Features

- Production glass UI system
- Responsive layout (desktop + mobile bottom nav)
- Feed with mode switcher (Chronological / Interest / Curated)
- Post composer + interactive likes/bookmarks
- Explore / Trends (platform controlled)
- Profile + Connections + Chat shells
- Complete Supabase schema with RLS

## Next Steps

1. Clerk integration (middleware + providers)
2. Live Supabase queries + server actions
3. Real-time chat
4. Admin trend control panel

**Motto:** You own your feed. We own the trends. Free forever.
