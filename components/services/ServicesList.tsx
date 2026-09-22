import React from "react";

const services = [
  {
    title: "Custom Web Application Development",
    description: "Robust, scalable, and responsive web apps built using modern frameworks such as Next.js, React, and TypeScript.",
    features: ["Component-driven architecture", "API design & integration", "Database modeling & cloud backend"],
  },
  {
    title: "UI/UX & Product Design",
    description: "Visually captivating, user-centric interfaces crafted to enhance engagement, conversion, and brand recall.",
    features: ["Interactive wireframes & prototypes", "Design systems & style guides", "Cross-device responsiveness"],
  },
  {
    title: "Performance & SEO Optimization",
    description: "Audit and tune existing applications to score 90+ on Core Web Vitals, improve search engine visibility, and boost retention.",
    features: ["Lighthouse optimization", "Schema markup & structured data", "Server-side rendering & caching"],
  },
  {
    title: "Maintenance & Technical Support",
    description: "Continuous monitoring, dependency updates, bug fixes, and security patches to keep your platforms running smoothly 24/7.",
    features: ["Proactive security audits", "Regular performance checks", "Dedicated response SLAs"],
  },
];

export default function ServicesList() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Core Service Offerings
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Tailored engineering and design capabilities to accelerate your vision.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200/80 bg-white p-8 dark:border-slate-800 dark:bg-slate-950 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
              </div>
              <ul className="mt-6 space-y-2 border-t border-slate-100 dark:border-slate-800 pt-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
