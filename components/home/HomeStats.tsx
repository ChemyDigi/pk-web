import React from "react";

const stats = [
  { label: "Successful Projects Delivered", value: "50+" },
  { label: "Client Satisfaction Rate", value: "99%" },
  { label: "Years of Professional Experience", value: "5+" },
  { label: "Active Enterprise Clients", value: "30+" },
];

export default function HomeStats() {
  return (
    <section className="py-16 border-y border-slate-100 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-12 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-2">
              <dt className="text-sm leading-6 text-slate-600 dark:text-slate-400">{stat.label}</dt>
              <dd className="order-first text-3xl font-extrabold tracking-tight text-blue-600 sm:text-5xl dark:text-blue-400">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
