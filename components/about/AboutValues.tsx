import React from "react";

const values = [
  {
    title: "Transparency",
    description: "Honest communication and clear roadmaps ensure we are always aligned with your goals.",
  },
  {
    title: "Craftsmanship",
    description: "We take immense pride in writing elegant, maintainable code and building sleek user interfaces.",
  },
  {
    title: "Innovation",
    description: "Constantly adopting modern best practices to keep your products ahead of the curve.",
  },
  {
    title: "Accountability",
    description: "We treat your project with the dedication and ownership of our own core products.",
  },
];

export default function AboutValues() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Guiding Values
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            The principles that anchor every decision we make and every product we ship.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {values.map((val) => (
            <div
              key={val.title}
              className="rounded-xl border border-slate-200/80 p-6 bg-white dark:border-slate-800 dark:bg-slate-950 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white">{val.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
