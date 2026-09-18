# tnguyen341.github.io

Personal site and resume for Tyler Nguyen, live at [tnguyen341.github.io](https://tnguyen341.github.io).

Built with Next.js (static export), TypeScript, and plain CSS.

## Structure

- `src/data/content.ts` — all site copy: profile, about, experience, skills, education, projects, case studies.
- `src/app/page.tsx` — home page.
- `src/app/case-studies/` — individual case study pages.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site written to ./out
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages via GitHub Actions.

## Notes

- `next/image` optimization needs a server, so images are `unoptimized` in `next.config.mjs`.
- No API routes, server actions, or middleware — a static export can't run them.
- Files in `/public` (e.g. the resume PDF) must be referenced with `NEXT_PUBLIC_BASE_PATH` prefixed, so links still resolve if this ever deploys as a project site instead of a user site.
