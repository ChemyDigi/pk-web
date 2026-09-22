import React from "react";

const teamMembers = [
  {
    name: "Lead Architect",
    role: "Full-Stack Specialist",
    bio: "Dedicated to scalable cloud systems, modern web frameworks, and clean code principles.",
  },
  {
    name: "Design Lead",
    role: "UI/UX & Product Design",
    bio: "Specializing in cohesive visual identities, responsive component libraries, and ergonomic interfaces.",
  },
  {
    name: "Engineering Lead",
    role: "Frontend & Performance",
    bio: "Focused on optimizing web vitals, accessible components, and seamless user experiences.",
  },
];

export default function AboutTeam() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Leadership & Expertise
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Passionate professionals turning complex business ideas into smooth digital reality.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.role}
              className="rounded-2xl border border-slate-200/80 bg-white p-8 dark:border-slate-800 dark:bg-slate-950 shadow-sm"
            >
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400 mb-4">
                PK
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{member.name}</h3>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{member.role}</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
