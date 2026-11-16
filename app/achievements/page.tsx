import type { Metadata } from "next";
import {
  AchievementsHero,
  AchievementsGallery,
} from "@/components/achievements";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: {
    absolute: "Pradeep Liyanage | Awards & Achievements",
  },
  description:
    "Discover Pradeep Liyanage's MDRT qualifications, prestigious insurance industry awards, and professional recognition throughout his career.",
  alternates: {
    canonical: "/achievements",
  },
  openGraph: {
    title: "Pradeep Liyanage | Awards & Achievements",
    description:
      "Discover Pradeep Liyanage's MDRT qualifications, prestigious insurance industry awards, and professional recognition throughout his career.",
    url: `${siteConfig.url}/achievements`,
    images: [
      {
        url: "/images/home/awwards-hero.png",
        width: 1536,
        height: 1024,
        alt: "Pradeep Liyanage Awards and Achievements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradeep Liyanage | Awards & Achievements",
    description:
      "Discover Pradeep Liyanage's MDRT qualifications, prestigious insurance industry awards, and professional recognition throughout his career.",
    images: ["/images/home/awwards-hero.png"],
  },
};

export default function AchievementsPage() {
  return (
    <>
      <AchievementsHero />
      <div id="achievements-content">
        <AchievementsGallery />
      </div>
    </>
  );
}
