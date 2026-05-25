import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization: prefer modern formats. AVIF first, WebP fallback.
  // All site imagery lives in /public, so no remotePatterns are needed.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
