import type { Metadata } from "next";
import {
  HomeHero,
  HomeAbout,
  HomeAwards,
  HomeServices,
  HomeInsights,
} from "@/components/home";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: {
    absolute: "Pradeep Liyanage | Insurance & Financial Protection",
  },
  description:
    "Discover Pradeep Liyanage, Regional Sales Manager at Union Assurance Sri Lanka, dedicated to insurance solutions, financial protection, and leadership.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pradeep Liyanage | Insurance & Financial Protection",
    description:
      "Discover Pradeep Liyanage, Regional Sales Manager at Union Assurance Sri Lanka, dedicated to insurance solutions, financial protection, and leadership.",
    url: siteConfig.url,
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
    description:
      "Discover Pradeep Liyanage, Regional Sales Manager at Union Assurance Sri Lanka, dedicated to insurance solutions, financial protection, and leadership.",
    images: [siteConfig.ogImage],
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeAwards />
      <HomeServices />
      <HomeInsights />
    </>
  );
}
