import React from "react";

export default function ContactHero() {
  return (
    <section className="py-24 text-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700 ring-1 ring-inset ring-cyan-700/10 dark:bg-cyan-950/50 dark:text-cyan-300">
          Get in Touch
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          Let&apos;s Build Something Great Together
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Have a project in mind, need technical advisory, or want to discuss a potential partnership? We would love to hear from you.
        </p>
      </div>
    </section>
  );
}
