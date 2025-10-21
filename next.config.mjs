// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: { allowedOrigins: ['*'] }
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['en', 'es', 'it'],
    defaultLocale: 'en',
    localeDetection: false
  }
};

export default nextConfig;
