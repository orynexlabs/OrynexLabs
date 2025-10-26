/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://orynexlabs.com', // your live domain
  generateRobotsTxt: true,           // also creates robots.txt
  // Custom robots rules tuned for Next.js so crawlers can fetch static assets
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: ['/', '/_next/static/', '/_next/image/'],
        disallow: ['/private/', '/admin/', '/api/'],
      },
    ],
    additionalSitemaps: ['https://orynexlabs.com/sitemap.xml'],
  },
};
