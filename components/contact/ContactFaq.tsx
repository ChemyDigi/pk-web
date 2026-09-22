import React from "react";

const faqs = [
  {
    q: "How quickly do you start a new project?",
    a: "Following an initial discovery session and proposal approval, onboarding usually begins within 3 to 5 business days.",
  },
  {
    q: "Do you offer post-launch maintenance and support?",
    a: "Yes, we provide flexible monthly maintenance packages covering hosting support, performance reviews, and feature upgrades.",
  },
  {
    q: "Can you collaborate with our existing in-house engineering team?",
    a: "Absolutely. We routinely integrate into existing Git workflows, issue trackers, and team communication channels.",
  },
];

export default function ContactFaq() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto max-w-3xl divide-y divide-slate-200 dark:divide-slate-800">
          {faqs.map((faq) => (
            <div key={faq.q} className="py-6">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">{faq.q}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
