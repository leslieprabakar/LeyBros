import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/build", destination: "/web", permanent: true },
      { source: "/build/:path*", destination: "/web/:path*", permanent: true },
      { source: "/create", destination: "/ai", permanent: true },
      { source: "/create/:path*", destination: "/ai/:path*", permanent: true },
      { source: "/observe", destination: "/market-insight", permanent: true },
      { source: "/observe/:path*", destination: "/market-insight/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
