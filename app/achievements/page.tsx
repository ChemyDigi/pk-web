import type { Metadata } from "next";
import {
  AchievementsHero,
  AchievementsGallery,
} from "@/components/achievements";

export const metadata: Metadata = {
  title: "Achievements | PK Web",
  description: "Explore our achievements, project milestones, metrics, and memorable captures.",
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
