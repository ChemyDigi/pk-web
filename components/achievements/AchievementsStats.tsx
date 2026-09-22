import React from "react";

const achievementMetrics = [
  { metric: "100%", label: "On-Time Project Delivery" },
  { metric: "40M+", label: "Monthly API Requests Handled" },
  { metric: "99.9%", label: "Average Infrastructure Uptime" },
  { metric: "15+", label: "Industry Awards & Recognitions" },
];

export default function AchievementsStats() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Measurable Impact
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Numbers that represent our unwavering dedication to quality.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 text-center">
          {achievementMetrics.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-100 dark:border-slate-800 p-6 bg-white dark:bg-slate-950 shadow-sm"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
                {item.metric}
              </div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
