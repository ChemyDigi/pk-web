import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} PK Web. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/achievements" className="hover:text-blue-600 transition">Achievements</Link>
          <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
