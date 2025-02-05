import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: process.env.NEXT_PUBLIC_SUPABASE_DOMAIN 
      ? [process.env.NEXT_PUBLIC_SUPABASE_DOMAIN]
      : [],
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://eu.i.posthog.com/decide",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true, 
};

export default nextConfig;
