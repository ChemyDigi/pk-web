import React from "react";

const steps = [
  { step: "01", name: "Discovery & Planning", desc: "Understanding objectives, mapping requirements, and outlining the technical blueprint." },
  { step: "02", name: "Design & Prototyping", desc: "Creating intuitive UI/UX wireframes, styling tokens, and interactive prototypes." },
  { step: "03", name: "Agile Development", desc: "Iterative sprints with clean code, testing, and continuous deployment previews." },
  { step: "04", name: "Launch & Growth", desc: "Rigorous QA, production deployment, performance optimization, and ongoing maintenance." },
];

export default function ServicesProcess() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Our Proven Delivery Process
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            A structured, transparent workflow ensuring efficiency and predictable delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="rounded-xl border border-slate-200/80 p-6 bg-white dark:border-slate-800 dark:bg-slate-950">
              <span className="text-3xl font-black text-indigo-600/30 dark:text-indigo-400/30">{item.step}</span>
              <h3 className="mt-3 font-semibold text-lg text-slate-900 dark:text-white">{item.name}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
