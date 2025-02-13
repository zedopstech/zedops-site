import "./globals.css";
import Footer from "@/Components/Footer";
import { ReactNode } from "react";
import { Metadata } from "next";
import Header from "@/Components/Header";
import { Toaster } from "@/Components/UI/toaster";

export const metadata: Metadata = {
  title: "ZedOps - AI-Powered Construction Management",
  description:
    "AI-powered construction management to streamline workflows, boost collaboration, and deliver projects smarter.",
  keywords:
    "AI construction management, project management, construction software, ZedOps, streamline workflows, smarter construction",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://www.zedops.com",
    title: "ZedOps - AI-Powered Construction Management",
    description:
      "AI-powered construction management to streamline workflows, boost collaboration, and deliver projects smarter.",
    images: [
      {
        url: "/seo/open-graph.png",
        width: 1200,
        height: 630,
        alt: "ZedOps Open Graph Image",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZedOps - AI-Powered Construction Management",
    description:
      "AI-powered construction management to streamline workflows, boost collaboration, and deliver projects smarter",
    images: ["/seo/twitter-banner.png"],
    creator: "@zedopstech",
  },
  alternates: {
    canonical: "https://www.zedops.com",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ZedOps",
              url: "https://www.zedops.com",
              logo: "https://www.zedops.com/seo/logo.png",
              description:
                "AI-powered construction management to streamline workflows, boost collaboration, and deliver projects smarter.",
              sameAs: [
                "https://www.linkedin.com/company/zedops",
                "https://x.com/zedopstech",
                "https://www.instagram.com/zedopstech",
              ],
            }),
          }}
        />
        {/* Metadata */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="ZedOps" />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.zedops.com" />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
