import React from "react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "Custom",
    description: "Ideal for small businesses needing a modern landing page or portfolio site.",
    features: ["Responsive 1-5 pages", "Tailwind CSS & Next.js", "Basic SEO setup", "Contact form integration"],
  },
  {
    name: "Growth",
    price: "Custom",
    featured: true,
    description: "Perfect for scaling businesses requiring dynamic web apps and custom integrations.",
    features: ["Full web application", "CMS or API integration", "Advanced animations & UX", "Performance optimization (90+ Lighthouse)", "Ongoing support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For established brands needing bespoke architectures, security audits, and dedicated maintenance.",
    features: ["End-to-end custom platform", "Scalable cloud architecture", "Role-based access & auth", "SLA & 24/7 priority support"],
  },
];

export default function ServicesPricing() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Engagement Packages
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Flexible models structured to fit your milestones, scale, and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 transition shadow-sm ${
                tier.featured
                  ? "border-2 border-indigo-600 bg-white dark:bg-slate-950 dark:border-indigo-500 shadow-md"
                  : "border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-950"
              }`}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{tier.name}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{tier.description}</p>
              <div className="my-6">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white">{tier.price}</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className={`block w-full py-2.5 px-4 text-center text-sm font-semibold rounded-lg transition ${
                    tier.featured
                      ? "bg-indigo-600 text-white hover:bg-indigo-500"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                  }`}
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
