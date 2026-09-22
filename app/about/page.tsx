import type { Metadata } from "next";
import { AboutHero, AboutStory, AboutValues, AboutTeam } from "@/components/about";

export const metadata: Metadata = {
  title: "About Us | PK Web",
  description: "Learn about PK Web, our mission, values, and the team driving our digital solutions.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
    </>
  );
}
