import type { Metadata } from "next";
import {
  ServicesHero,
  ServicesList,
  ServicesProcess,
  ServicesPricing,
} from "@/components/services";

export const metadata: Metadata = {
  title: "Services | Pradeep Liyanage — Insurance Advisor",
  description: "Explore insurance solutions for individuals, families, and businesses — life insurance, family financial protection, retirement planning, and more with Pradeep Liyanage.",
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
