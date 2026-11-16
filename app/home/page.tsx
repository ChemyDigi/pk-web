import type { Metadata } from "next";
import { HomeHero, HomeFeatures, HomeStats, HomeCta } from "@/components/home";

export const metadata: Metadata = {
  title: "Pradeep Liyanage | Insurance & Financial Protection",
  description: "Discover Pradeep Liyanage, Regional Sales Manager at Union Assurance Sri Lanka, dedicated to insurance solutions, financial protection, and leadership.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomeRoutePage() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeFeatures />
      <HomeCta />
    </>
  );
}
