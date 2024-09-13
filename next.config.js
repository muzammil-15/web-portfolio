/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { dev }) => {
      // Disable webpack cache in development
      if (dev) {
        config.cache = false;
      }
  
      return config;
    },
    images: {
      remotePatterns: [
        {
          hostname: 'via.placeholder.com',
        },
      ],
    },
  };
  
  module.exports = nextConfig;