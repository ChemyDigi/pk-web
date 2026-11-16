import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 95],
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/gallery",
        destination: "/achievements",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
