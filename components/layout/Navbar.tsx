"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface SubLink {
  name: string;
  href: string;
}

interface NavLink {
  name: string;
  href: string;
  dropdown?: SubLink[];
}

const navLinks: NavLink[] = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "ACHIEVEMENTS", href: "/achievements" },
  {
    name: "AFFINITY",
    href: "/services",
    dropdown: [
      { name: "Union Uththareethara", href: "/services" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-8 flex flex-col items-center pointer-events-none">
      {/* Pill-shaped navigation bar */}
      <div className="relative w-full max-w-6xl bg-[#262628]/95 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 sm:px-8 sm:py-3 shadow-2xl flex items-center justify-between pointer-events-auto transition-all duration-300">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center shrink-0 transition-opacity hover:opacity-90">
          <Image
            src="/images/header/Pradeep-Liyanage-Logo-2.png"
            alt="Pradeep Liyanage Logo"
            width={38}
            height={46}
            className="h-8 sm:h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10 absolute left-1/2 -translate-x-1/2 pointer-events-auto">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/" || pathname === "/home"
                : pathname === link.href || (link.href === "/achievements" && pathname === "/gallery");

            if (link.dropdown) {
              return (
                <div
                  key={link.name}
                  className="relative group/affinity flex items-center py-2"
                >
                  {/* Non-clickable tab on navbar */}
                  <span
                    className={`text-xs sm:text-[13px] tracking-wider uppercase transition-colors duration-200 inline-flex items-center gap-1.5 cursor-default select-none ${
                      isActive
                        ? "text-white font-bold"
                        : "text-neutral-300 font-medium group-hover/affinity:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <svg
                      className="w-3 h-3 transition-transform duration-200 group-hover/affinity:rotate-180 text-neutral-400 group-hover/affinity:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 opacity-0 invisible group-hover/affinity:opacity-100 group-hover/affinity:visible transition-all duration-200 pointer-events-none group-hover/affinity:pointer-events-auto z-50">
                    <div className="min-w-[210px] bg-[#1d1d20]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-1.5 shadow-2xl flex flex-col gap-0.5">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`px-3.5 py-2.5 text-xs sm:text-[13px] rounded-xl transition-all duration-150 flex items-center whitespace-nowrap font-medium ${
                            pathname === subItem.href
                              ? "text-white bg-white/10 font-semibold"
                              : "text-neutral-200 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs sm:text-[13px] tracking-wider uppercase transition-colors duration-200 ${
                  isActive
                    ? "text-white font-bold"
                    : "text-neutral-300 font-medium hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-full border border-neutral-300/80 hover:border-white px-4 py-2 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-semibold text-white tracking-wider uppercase inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-200 group leading-none"
          >
            <span className="leading-none">LET&apos;S TALK</span>
            <svg
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-300 hover:text-white focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="mt-2 w-full max-w-6xl bg-[#262628]/95 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-3 md:hidden pointer-events-auto">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/" || pathname === "/home"
                : pathname === link.href || (link.href === "/achievements" && pathname === "/gallery");

            if (link.dropdown) {
              return (
                <div key={link.name} className="flex flex-col">
                  {/* Non-clickable Affinity Tab in Mobile */}
                  <span
                    className={`text-sm tracking-wider uppercase py-1.5 cursor-default select-none ${
                      isActive ? "text-white font-bold" : "text-neutral-300"
                    }`}
                  >
                    {link.name}
                  </span>

                  <div className="pl-4 mt-1 border-l border-white/10 flex flex-col gap-1.5">
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-xs tracking-wide py-1 transition-colors ${
                          pathname === subItem.href
                            ? "text-white font-semibold"
                            : "text-neutral-300 hover:text-white"
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <div key={link.name} className="flex flex-col">
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm tracking-wider uppercase py-1.5 transition-colors flex items-center justify-between ${
                    isActive ? "text-white font-bold" : "text-neutral-300 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
}
