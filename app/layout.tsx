import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { PersonJsonLd } from "@/components/seo";
import { siteConfig } from "@/data/siteConfig";

export const viewport: Viewport = {
  themeColor: "#08080a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Pradeep Liyanage | Insurance & Financial Protection",
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.shortName, url: siteConfig.url }],
  creator: siteConfig.shortName,
  publisher: siteConfig.shortName,
  keywords: [
    "Pradeep Liyanage",
    "Union Assurance",
    "Sri Lanka Insurance",
    "Life Insurance Advisor",
    "Regional Sales Manager",
    "MDRT Sri Lanka",
    "Financial Protection",
    "Retirement Planning",
    "Agency Distribution",
    "Union Uththareethara",
    "Bar Association of Sri Lanka Insurance",
  ],
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Pradeep Liyanage | Insurance & Financial Protection",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 900,
        height: 1349,
        alt: "Pradeep Liyanage - Regional Sales Manager at Union Assurance PLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradeep Liyanage | Insurance & Financial Protection",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/images/header/Pradeep-Liyanage-Logo-2.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/header/Pradeep-Liyanage-Logo-2.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <PersonJsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-[#08080a] text-slate-900">
        <Navbar />
        <main className="flex-1 pt-24 sm:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
