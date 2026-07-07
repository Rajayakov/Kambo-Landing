import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
  // Security headers can't run on a static export (no server) — they live in public/.htaccess instead.
};

export default nextConfig;
