// Static export for GitHub Pages.
// - User/org site (repo named <user>.github.io): leave NEXT_PUBLIC_BASE_PATH unset.
// - Project site (any other repo name): set NEXT_PUBLIC_BASE_PATH=/<repo-name>.
//   The GitHub Actions workflow does this automatically.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true }, // next/image optimizer needs a server
};

export default nextConfig;
