import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white relative">
      {/* Top CTA Banner with Background Image */}
      <div className="relative overflow-hidden bg-black">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/footer/bg.jpg')" }}
        />

        {/* Gradient Overlay that blends seamlessly into solid black */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/85 via-70% to-black" />

        {/* CTA Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-24 text-center">
          {/* Subtitle with dash */}
          <div className="inline-flex items-center justify-center gap-2.5 mb-2.5">
            <span className="inline-block w-7 h-[1.5px] bg-neutral-300" aria-hidden="true" />
            <span className="text-[12.5px] font-medium tracking-[0.04em] text-neutral-300">Begin the Conversation</span>
          </div>

          {/* Headline */}
          <h2 className="text-[1.625rem] sm:text-[2rem] lg:text-[2.25rem] font-normal tracking-[-0.015em] text-white leading-[1.22] sm:leading-[1.2] m-0">
            Your future deserves
            <span className="block font-normal">complete protection</span>
          </h2>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-[13px] font-bold tracking-[0.05em] uppercase text-[#0a0a0c] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5),0_8px_10px_-6px_rgba(0,0,0,0.5)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#e4e4e7] hover:scale-[1.03] active:scale-[0.98]"
            >
              LET&apos;S CONNECT
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-[13px] font-bold tracking-[0.05em] uppercase text-[#0a0a0c] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5),0_8px_10px_-6px_rgba(0,0,0,0.5)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#e4e4e7] hover:scale-[1.03] active:scale-[0.98]"
            >
              DISCOVER MY STORY
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Section (Pure Black) */}
      <div className="relative z-10 bg-black pt-4 pb-12">
        <div className="mx-auto max-w-5xl px-6 text-center">
          {/* Brand Logo */}
          <div className="flex justify-center mb-6">
            <Link href="/" className="inline-block transition duration-200 hover:opacity-90">
              <Image
                src="/images/footer/Pradeep-Liyanage-Logo-2.png"
                alt="Pradeep Liyanage Logo"
                width={56}
                height={70}
                className="h-16 w-auto object-contain mx-auto"
                priority
              />
            </Link>
          </div>

          {/* Description / Bio Tagline */}
          <p className="mx-auto max-w-xl text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-7">
            Helping individuals, families, and professionals protect what matters most through trusted advice, tailored insurance solutions, and lifelong support.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-5 mb-7 text-white">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition duration-200 hover:text-neutral-400 hover:scale-110"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition duration-200 hover:text-neutral-400 hover:scale-110"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition duration-200 hover:text-neutral-400 hover:scale-110"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="transition duration-200 hover:text-neutral-400 hover:scale-110"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.46 2.79 1.25-.03 2.4-1.01 2.55-2.28.09-.76.06-1.53.06-2.3V.02z" />
              </svg>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-neutral-300 font-light mb-4">
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition-colors duration-200">
              About
            </Link>
            <Link href="/achievements" className="hover:text-white transition-colors duration-200">
              Achievements
            </Link>
            <Link href="/services" className="hover:text-white transition-colors duration-200">
              Services
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors duration-200">
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom Bar with subtle divider */}
        <div className="mt-10 border-t border-neutral-800/80">
          <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400 font-light">
            <p>© 2026 Pradeep Liyanage. All Rights Reserved.</p>
            <p>
              Designed &amp; Developed by{" "}
              <a
                href="https://alchemy.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-semibold text-white tracking-wide hover:text-white/80 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  style={{ verticalAlign: "middle", marginRight: "4px", display: "inline-block" }}
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="#fc0f0f"
                    d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                  />
                </svg>
                Alchemy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
