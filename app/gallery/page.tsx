import type { Metadata } from "next";
import AchievementsPage from "@/app/achievements/page";

export const metadata: Metadata = {
  title: "Pradeep Liyanage | Awards & Achievements",
  description: "Discover Pradeep Liyanage's MDRT qualifications, prestigious insurance industry awards, and professional recognition throughout his career.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/achievements",
  },
};

export default AchievementsPage;
