import type { Metadata } from "next";
import { ServicesUnion } from "@/components/services";

export const metadata: Metadata = {
  title: "Affinity | Pradeep Liyanage — Insurance Advisor",
  description:
    "Explore affinity partnerships with Pradeep Liyanage, including Union Uththareethara for the Bar Association of Sri Lanka.",
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      <ServicesUnion />
    </div>
  );
}
