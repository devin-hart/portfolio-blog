/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/blog/:slug*',
          destination: '/work/:slug*',
          permanent: true, // This sends a 308 (permanent redirect) to browsers and Google
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  