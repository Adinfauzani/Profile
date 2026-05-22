/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://tsnext-tw.thcl.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};

export default config;
