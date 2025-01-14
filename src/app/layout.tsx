import "./globals.css";
import Footer from "@/Components/Footer";
import { ReactNode } from "react";
import { Metadata } from "next";
import Head from "next/head";
import Header from "@/Components/Header";

export const metadata: Metadata = {
  title: "ZedOps - Revolutionize Your Construction Workflow",
  description:
    "ZedOps is a leading construction management platform that streamlines project workflows, enhances collaboration, and drives efficiency for teams globally.",
  keywords:
    "construction management, project management, construction software, ZedOps, streamline workflows",
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://www.zedops.com",
    title: "ZedOps - Revolutionize Your Construction Workflow",
    description:
      "ZedOps is a leading construction management platform that streamlines project workflows, enhances collaboration, and drives efficiency for teams globally.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZedOps Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZedOps - Revolutionize Your Construction Workflow",
    description:
      "ZedOps is a leading construction management platform that streamlines project workflows, enhances collaboration, and drives efficiency for teams globally.",
    images: ["/twitter-card-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Metadata */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
