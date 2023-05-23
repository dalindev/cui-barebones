const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const NO_INDEX_FOLLOW_PATHS = ['/cart', '/checkout', '/checkout/success']

// Security headers
const HEADERS = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'same-origin',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy':
    "img-src 'self'; base-uri 'self'; child-src 'self'",
  'Permissions-Policy':
    'camera=(self), microphone=(self), geolocation=(self), interest-cohort=(self)',
}

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  transpilePackages: ['@composable/ui'],
  images: {
    domains: ['loremflickr.com'],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  experimental: {
    esmExternals: 'loose',
  },
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: Object.entries(HEADERS).map(([key, value]) => ({
          key,
          value,
        })),
      },
      ...NO_INDEX_FOLLOW_PATHS.map((source) => ({
        source,
        headers: [
          {
            key: 'x-robots-tag',
            value: 'noindex, follow',
          },
        ],
      })),
    ]
  },
})
