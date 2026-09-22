import type { Metadata } from "next";
import {
  ServicesHero,
  ServicesList,
  ServicesProcess,
  ServicesPricing,
} from "@/components/services";

export const metadata: Metadata = {
  title: "Services | PK Web",
  description: "Discover our full range of web development, UI/UX design, and performance optimization services.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesPricing />
    </>
  );
}
