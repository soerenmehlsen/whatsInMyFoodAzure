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
        source: "/ingest/:path*",
        destination: "https://eu.posthog.com/:path*",
      },
    ];
  },
};

export default nextConfig;
