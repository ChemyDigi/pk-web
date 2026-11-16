import type { Metadata } from "next";
import {
  AboutHero,
  AboutStory,
  AboutTimeline,
  AboutServices,
  AboutAwards,
} from "@/components/about";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: {
    absolute: "About Pradeep Liyanage | Career & Leadership",
  },
  description:
    "Explore Pradeep Liyanage's professional journey, leadership experience, and career milestones in Sri Lanka's life insurance industry.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Pradeep Liyanage | Career & Leadership",
    description:
      "Explore Pradeep Liyanage's professional journey, leadership experience, and career milestones in Sri Lanka's life insurance industry.",
    url: `${siteConfig.url}/about`,
    images: [
      {
        url: "/images/about/about-story-middle.webp",
        width: 800,
        height: 1000,
        alt: "About Pradeep Liyanage - Career and Leadership in Life Insurance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Pradeep Liyanage | Career & Leadership",
    description:
      "Explore Pradeep Liyanage's professional journey, leadership experience, and career milestones in Sri Lanka's life insurance industry.",
    images: ["/images/about/about-story-middle.webp"],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutTimeline />
      <AboutServices />
      <AboutAwards />
    </>
  );
}
