/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.zedops.com", // Replace with your site URL
  generateRobotsTxt: true, // Generate robots.txt file
  changefreq: "daily", // Frequency of changes
  priority: 0.7, // Priority of pages
  sitemapSize: 5000, // Limit the number of URLs per sitemap file
  generateIndexSitemap: false, // Generate a sitemap index file
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
