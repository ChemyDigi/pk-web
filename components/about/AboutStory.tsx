import React from "react";

export default function AboutStory() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Our Journey & Mission
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300">
              Founded with a commitment to excellence, PK Web began as a specialized consultancy focused on modern front-end architectures and robust full-stack systems.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Today, we help startups, growing enterprises, and established organizations translate complex technological challenges into smooth, interactive, and high-performance applications.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Our Core Philosophy</h3>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Simplicity first:</strong> Clean code and intuitive interfaces beat unnecessary complexity.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Performance obsessed:</strong> Every millisecond counts towards user engagement.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Future-proof scalability:</strong> Engineered to grow effortlessly alongside your brand.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
