import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "www.rogerperry.com",
      },
      {
        protocol: "https",
        hostname: "imagescdn.homes.com",
      },
      {
        protocol: "https",
        hostname: "bluprinthomeloans.com",
      },
    ],
  },
};

export default nextConfig;
