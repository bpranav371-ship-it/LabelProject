/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for development
  reactStrictMode: true,

  // Image optimization
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },

  // Environment variables
  env: {
    // Add your environment variables here
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    return config;
  },

  // Headers configuration
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },

  // Redirects configuration
  async redirects() {
    return [];
  },

  // Rewrites configuration
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    };
  },

  // Build configuration
  swcMinify: true,
  productionBrowserSourceMaps: false,

  // API configuration
  api: {
    responseLimit: '4mb',
  },

  // Compression
  compress: true,

  // Generate ETag
  generateEtags: true,

  // PoweredBy header
  poweredByHeader: false,
};

module.exports = nextConfig;
