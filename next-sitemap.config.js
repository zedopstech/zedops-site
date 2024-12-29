/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.zedops.com", // Replace with your site URL
  generateRobotsTxt: true, // Generate robots.txt file
  changefreq: "daily", // Frequency of changes
  priority: 0.7, // Priority of pages
  sitemapSize: 5000, // Limit the number of URLs per sitemap file
  generateIndexSitemap: true, // Generate a sitemap index file
  exclude: ["/admin/*", "/api/*"], // Exclude specific paths
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/admin/" },
    ],
    additionalSitemaps: [
      "https://www.zedops.com/sitemap-0.xml",
      "https://www.zedops.com/sitemap-1.xml",
    ],
  },
};
