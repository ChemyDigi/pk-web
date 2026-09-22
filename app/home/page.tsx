import type { Metadata } from "next";
import { HomeHero, HomeFeatures, HomeStats, HomeCta } from "@/components/home";

export const metadata: Metadata = {
  title: "Home | PK Web",
  description: "Welcome to PK Web - Modern web applications, services, and digital solutions.",
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
