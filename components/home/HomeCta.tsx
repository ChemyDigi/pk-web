import React from "react";
import Link from "next/link";

export default function HomeCta() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-600 px-6 py-16 sm:p-16 text-center text-white shadow-xl dark:bg-blue-700">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to bring your digital vision to reality?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Let&apos;s build fast, accessible, and high-converting web solutions tailored to your unique requirements.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 transition"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
