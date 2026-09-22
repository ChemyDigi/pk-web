import React from "react";

const features = [
  {
    title: "Modern Web Architecture",
    description: "Built on state-of-the-art web frameworks ensuring lightning fast load times, scalability, and security.",
    icon: "⚡",
  },
  {
    title: "User-Centric Design",
    description: "Intuitive, accessible, and responsive interfaces that deliver delightful user experiences across all devices.",
    icon: "🎨",
  },
  {
    title: "Result-Driven Solutions",
    description: "Tailored strategies and custom software crafted to accelerate your business growth and digital reach.",
    icon: "🚀",
  },
];

export default function HomeFeatures() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Everything you need to scale your digital presence
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
