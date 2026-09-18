# Personal site (Next.js static export for GitHub Pages)

## Edit your content
Everything is in `src/data/content.ts`. Search for `TODO` and replace each placeholder.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site is written to ./out
```

## Deploy
1. Create a GitHub repo and push this code to `main`.
   - Repo named `<your-username>.github.io` gives you `https://<your-username>.github.io`.
   - Any other name gives you `https://<your-username>.github.io/<repo-name>/`. The workflow sets the base path for you.
2. In the repo, go to **Settings > Pages > Build and deployment > Source** and choose **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes.

## Gotchas
- `next/image` optimization needs a server, so images are `unoptimized` in `next.config.mjs`. Pre-size images yourself.
- No API routes, server actions, or middleware. A static export can't run them.
- Put files like `resume.pdf` in `/public`. If deploying as a project site, reference them with the base path.
- Before publishing, replace the placeholder metrics and check the Open Graph title and description in `layout.tsx`.
