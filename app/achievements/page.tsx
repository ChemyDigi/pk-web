import type { Metadata } from "next";
import {
  AchievementsHero,
  AchievementsList,
  AchievementsStats,
  AchievementsCertificates,
} from "@/components/achievements";

export const metadata: Metadata = {
  title: "Achievements | PK Web",
  description: "Explore our achievements, project milestones, metrics, and professional certifications.",
};

export default function AchievementsPage() {
  return (
    <>
      <AchievementsHero />
      <AchievementsStats />
      <AchievementsList />
      <AchievementsCertificates />
    </>
  );
}
