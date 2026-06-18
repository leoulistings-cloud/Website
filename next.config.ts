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
      {
        protocol: "https",
        hostname: "s.yimg.com",
      },
      {
        protocol: "https",
        hostname: "www.gtspiritmedia.com",
      },
      {
        protocol: "https",
        hostname: "loisllc.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "www.rent.com",
      },
      {
        protocol: "https",
        hostname: "www.laconservancy.org",
      },
      {
        protocol: "https",
        hostname: "assets.site-static.com",
      },
      {
        protocol: "https",
        hostname: "hbr.org",
      },
      {
        protocol: "https",
        hostname: "www.decorilla.com",
      },
    ],
  },
};

export default nextConfig;
