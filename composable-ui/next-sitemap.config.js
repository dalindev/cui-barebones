const getSiteUrl = () => {
  // Vercel Support
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }

  // Netlify Support
  if (process.env.NEXT_PUBLIC_NETLIFY_URL) {
    return process.env.NEXT_PUBLIC_NETLIFY_URL
  }

  // Localhost
  return `http://localhost:${process.env.NEXT_PUBLIC_PORT ?? 3000}`
}

const sitemapServerPaths = ['sitemap/categories.xml', 'sitemap/products.xml']

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `${getSiteUrl()}/`,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    ...sitemapServerPaths.map((path) => `/${path}`),
    '/category/*',
    '/checkout*',
    '/product/*',
    '/404',
    '/cart',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api', '/checkout', '/404', '/cart'],
      },
    ],
    additionalSitemaps: [
      ...sitemapServerPaths.map((path) => `${getSiteUrl()}/${path}`),
    ],
  },
  // All the options: https://github.com/iamvishnusankar/next-sitemap#configuration-options
}
