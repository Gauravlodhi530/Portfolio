import type { NextConfig } from "next";
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*', // Replace with your actual backend
      },
    ];
  },
};
export default nextConfig;
