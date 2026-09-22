import React from "react";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-950/50 dark:text-blue-300">
            Welcome to PK Web
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
            Crafting Digital Solutions with Precision & Passion
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Empowering modern businesses with top-tier web applications, strategic digital services, and proven achievements.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/services"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold leading-6 text-slate-900 hover:text-blue-600 dark:text-slate-100 dark:hover:text-blue-400 transition"
            >
              Get in Touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
