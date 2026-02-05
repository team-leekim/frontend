import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000, // 30일 (초 단위)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'team-leekim-assets.s3.ap-northeast-2.amazonaws.com',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
