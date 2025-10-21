/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ['es', 'en', 'it', 'de', 'ca'],
    defaultLocale: 'es',
    localeDetection: false,
  },
}

export default nextConfig
