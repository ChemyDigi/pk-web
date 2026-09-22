import React from "react";

const credentials = [
  { title: "Next.js & React Certified Expert", issuer: "Frontend Ecosystem Standards", year: "2024" },
  { title: "AWS Solutions Architecture & Deployment", issuer: "Cloud Engineering Alliance", year: "2024" },
  { title: "Web Accessibility (WCAG 2.1 AA) Compliance", issuer: "A11y Standards Board", year: "2023" },
];

export default function AchievementsCertificates() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Certifications & Professional Credentials
          </h2>
        </div>
        <div className="mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-6">
          {credentials.map((cred) => (
            <div
              key={cred.title}
              className="rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 text-center shadow-sm"
            >
              <div className="text-emerald-600 dark:text-emerald-400 font-bold text-lg mb-1">🏅</div>
              <h3 className="font-semibold text-sm text-slate-900 dark:text-white">{cred.title}</h3>
              <p className="mt-1 text-xs text-slate-500">{cred.issuer}</p>
              <span className="mt-2 inline-block text-xs font-medium text-slate-400">{cred.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
