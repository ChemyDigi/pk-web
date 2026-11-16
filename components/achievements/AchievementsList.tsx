import React from "react";

const achievements = [
  {
    year: "2026",
    title: "Second MDRT Qualification – 2026",
    description:
      "Proudly achieved my second MDRT qualification for 2026, marking another milestone in my professional journey. This moment captures both my 2025 and 2026 MDRT certificates, reflecting two consecutive years of qualification and continued commitment to professional excellence.",
    tag: "MDRT",
  },
  {
    year: "2025",
    title: "First MDRT Qualification – 2025",
    description:
      "Achieved my first Million Dollar Round Table (MDRT) qualification for 2025, marking a significant milestone in my professional journey. This certificate, awarded by the MDRT Association, represents my dedication to excellence in the financial services industry.",
    tag: "MDRT",
  },
  {
    year: "2024",
    title: "UA Premier Club Member – 2024",
    description:
      "Proudly qualified as a UA Premier Club Member for three consecutive quarters (Q1, Q2, and Q3) in 2024. This quarterly recognition reflects consistent performance, dedication, and commitment to excellence at Union Assurance.",
    tag: "Union Assurance",
  },
  {
    year: "2020",
    title: "Diamond Award – Annual Awards 2020",
    description:
      "Honoured to receive the prestigious Diamond Award at the 2020 Annual Awards in recognition of outstanding performance and achievements as a Business Development Officer.",
    tag: "Union Assurance",
  },
  {
    year: "2025",
    title: "Global Enterprise Web Portal Launch",
    description: "Designed and engineered an enterprise-grade customer portal handling over 100k daily active users with 99.99% uptime.",
    tag: "Scalability",
  },
  {
    year: "2024",
    title: "Performance Optimization Milestone",
    description: "Achieved 100/100 Lighthouse performance metrics across client portfolio applications, boosting organic traffic by 45%.",
    tag: "Performance",
  },
  {
    year: "2023",
    title: "Fintech Platform Modernization",
    description: "Successfully migrated a legacy banking dashboard to Next.js and TypeScript, reducing client latency by 60%.",
    tag: "Fintech",
  },
  {
    year: "2022",
    title: "Design System Implementation",
    description: "Created a unified, cross-product design system adopted by multiple cross-functional engineering teams.",
    tag: "UI / UX",
  },
];

export default function AchievementsList() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Major Project Highlights
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Real outcomes delivered with engineering discipline and strategic focus.
          </p>
        </div>
        <div className="mx-auto max-w-4xl space-y-6">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="flex flex-col md:flex-row md:items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950 transition hover:border-emerald-500/50"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                  <span className="text-xs font-medium text-slate-400">{item.year}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
