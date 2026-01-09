import type { NextConfig } from "next";

const cdnPrefix =
  process.env.NEXT_PUBLIC_CDN_URL && process.env.NEXT_PUBLIC_CDN_URL.startsWith("http")
    ? process.env.NEXT_PUBLIC_CDN_URL
    : undefined;

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: cdnPrefix,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
