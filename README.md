# LeyBros Private Ltd., — Web • AI • Market Insight

Freelance technology & AI creative practice on an enterprise engineering foundation.

- **WEB**: Websites, web apps, vibe coding, SEO (Next.js, Tailwind, Supabase, performance, Search Console)
- **AI**: AI image enhancement/generation, video, 3D, product/architecture viz, UGC/cinematic ads
- **MARKET INSIGHT**: Private investor — micro/small-cap observation. **Educational knowledge-sharing only, not a service.** Not SEBI-registered, no buy/sell calls.

## Stack
Next.js 16 (App Router, webpack), Tailwind 4, TypeScript, Resend, Vercel.

## Run
```bash
npm install
npm run dev -- --webpack   # http://localhost:3000
npm run build -- --webpack # webpack required on this Win32 env; Vercel uses native SWC
```

## Env
Copy `.env.example` → `.env.local` and set `RESEND_API_KEY`, `CONTACT_TO*`.

## Content feeds
- `src/data/projects.ts` — drop real project data, flip `status: placeholder → published`
- `src/data/observations.ts` — screenshot case studies (`observed / whyInteresting / dataShowed / afterward / learned`)
- `public/portfolio/` and `public/observe/` — place real images/videos; reference from data files

## GitHub + Vercel
```bash
git remote add origin <your-github-url>
git commit -m "feat: initial LeyBros portfolio v1"
git push -u origin main
# Vercel → Import GitHub repo → env vars → Deploy
```

## Routes
`/`, `/web`, `/ai`, `/market-insight`, `/about`, `/contact`, `/sitemap.xml`, `/robots.txt`
