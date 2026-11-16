import type { Metadata } from "next";
import { ServicesUnion } from "@/components/services";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: {
    absolute: "Affinity Partnerships | Pradeep Liyanage",
  },
  description:
    "Explore professional partnerships and affinity initiatives associated with Pradeep Liyanage's career at Union Assurance Sri Lanka.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Affinity Partnerships | Pradeep Liyanage",
    description:
      "Explore professional partnerships and affinity initiatives associated with Pradeep Liyanage's career at Union Assurance Sri Lanka.",
    url: `${siteConfig.url}/services`,
    images: [
      {
        url: "/images/services/union.png",
        width: 600,
        height: 600,
        alt: "Union Uththareethara - Bar Association of Sri Lanka Partnership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affinity Partnerships | Pradeep Liyanage",
    description:
      "Explore professional partnerships and affinity initiatives associated with Pradeep Liyanage's career at Union Assurance Sri Lanka.",
    images: ["/images/services/union.png"],
  },
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      <ServicesUnion />
    </div>
  );
}
