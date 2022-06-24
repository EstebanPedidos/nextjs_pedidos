export default config

const config = {
    siteUrl: process.env.SITE_URL || 'https://pedidos.com/',
    generateRobotsTxt: true,
    // optional
    //robotsTxtOptions: {
    //  additionalSitemaps: [
    //   'https://pedidos.com/sitemap-1.xml',
    //    'https://pedidos.com/sitemap-2.xml',
    //  ],
    //},
  }