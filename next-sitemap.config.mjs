/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://myriudesu.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};

export default config;
