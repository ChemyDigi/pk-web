import React from "react";

export default function ServicesHero() {
  return (
    <section className="py-24 text-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-950/50 dark:text-indigo-300">
          What We Do
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          Comprehensive Digital Services for Forward-Thinking Brands
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          From full-stack development to brand-enhancing UI/UX design, our services are tailored to deliver competitive advantages and measurable ROI.
        </p>
      </div>
    </section>
  );
}
