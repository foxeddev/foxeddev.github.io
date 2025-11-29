import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.modrinth.com",
        port: "",
        pathname: "/data/**",
      },
    ],
  },
};

export default nextConfig;
