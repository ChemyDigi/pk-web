import React from "react";

const contactDetails = [
  { label: "Email", value: "contact@pkweb.dev", desc: "For general inquiries and estimates" },
  { label: "Phone", value: "+1 (555) 019-2834", desc: "Monday - Friday, 9am - 6pm" },
  { label: "Location", value: "Remote / Global", desc: "Serving clients worldwide" },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Direct Communication</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Reach out through any of our official channels or schedule a technical discovery call.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((detail) => (
          <div
            key={detail.label}
            className="rounded-xl border border-slate-200/80 bg-white p-5 dark:border-slate-800 dark:bg-slate-950 shadow-sm"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {detail.label}
            </div>
            <div className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
              {detail.value}
            </div>
            <div className="mt-1 text-xs text-slate-500">
              {detail.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
