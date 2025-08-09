import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logos-world.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'companieslogo.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'press.bluebeam.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/about-us',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/blog/:path*',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/book-a-demo',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/contact-sales',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/features/:path*',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/pricing',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/resources/:path*',
        destination: '/coming-soon',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
