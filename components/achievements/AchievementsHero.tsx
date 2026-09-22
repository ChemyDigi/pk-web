import React from "react";

export default function AchievementsHero() {
  return (
    <section className="py-24 text-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-700/10 dark:bg-emerald-950/50 dark:text-emerald-300">
          Track Record & Milestones
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          Our Milestones & Key Achievements
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          A showcase of completed projects, industry recognitions, and measurable impacts we have made for our partners and clients.
        </p>
      </div>
    </section>
  );
}
