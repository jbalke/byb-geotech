module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_VERCEL_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/information-request' },
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: ['/information-request'],
};
