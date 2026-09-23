import type { Metadata } from "next";
import {
  AboutHero,
  AboutStory,
  AboutTimeline,
  AboutServices,
  AboutAwards,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About Us | PK Web",
  description: "Learn about Pradeep Liyanage, career milestones, values, and professional insurance guidance.",
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


