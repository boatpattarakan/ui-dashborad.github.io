/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')
const nextConfig = {
  i18n,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['storage.googleapis.com'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig
