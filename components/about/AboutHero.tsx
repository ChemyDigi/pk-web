import React from "react";

export default function AboutHero() {
  return (
    <section className="py-24 text-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-950/50 dark:text-blue-300">
          About PK Web
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          Dedicated to Engineering Exceptional Digital Experiences
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          We combine cutting-edge technology, user-focused design, and strategic thinking to build web solutions that endure and perform.
        </p>
      </div>
    </section>
  );
}
