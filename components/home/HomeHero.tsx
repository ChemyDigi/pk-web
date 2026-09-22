"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "2", label: "MDRT" },
  { value: "14+", label: "Experience" },
  { value: "1000+", label: "Clients" },
  { value: "500+", label: "Consultations" },
];

export default function HomeHero() {
  const handleScrollDown = () => {
    if (typeof window !== "undefined") {
      window.scrollBy({
        top: window.innerHeight * 0.9,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full min-h-screen lg:h-screen lg:max-h-[1080px] -mt-24 sm:-mt-28 flex flex-col justify-between overflow-hidden bg-[#08080a] text-white">
      {/* Background Image with Cinematic Grading */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <Image
          src="/images/home/hero.jpg"
          alt="Scenic mountain landscape"
          fill
          priority
          quality={95}
          className="object-cover object-center brightness-[0.65] contrast-[1.1] saturate-[0.85]"
        />
        {/* Sky dark gradient to seamlessly blend top sky into black behind floating navbar */}
        <div className="absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-[#08080a] via-[#08080a]/80 via-35% to-transparent" />
        {/* Subtle bottom edge gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#08080a] via-[#08080a]/60 to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-32 sm:pt-36 lg:pt-28 pb-16 lg:pb-0 flex-1 flex flex-col justify-center">
        
        {/* Desktop & Mobile Layout Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-y-10 lg:gap-x-8">
          
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-20">
            {/* Pre-title */}
            <p className="text-xs sm:text-[13px] font-light tracking-wide text-neutral-300/90 mb-3 sm:mb-4">
              Confidence for every stage of life.
            </p>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[55px] font-bold text-white tracking-tight leading-[1.12]">
              The Protection <br />
              <span className="whitespace-nowrap">You Choose Today</span> <br />
              <span className="font-[family-name:Georgia,serif] italic font-normal text-white block mt-1">
                Shapes Tomorrow
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 sm:mt-6 text-xs sm:text-sm md:text-[15px] leading-relaxed text-neutral-300/85 font-light max-w-md">
              Helping individuals, professionals, and families build financial security
              through trusted insurance solutions, personalized guidance, and lifelong support.
            </p>

            {/* CTA Button */}
            <div className="mt-7 sm:mt-9">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-neutral-950 shadow-xl transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                LET&apos;S CONNECT
              </Link>
            </div>
          </div>

          {/* Spacer on Desktop for Centered Image */}
          <div className="hidden lg:block lg:col-span-4" />

          {/* Right Column: Key Stats (Desktop) */}
          <div className="hidden lg:flex lg:col-span-3 z-20 flex-col items-end text-right">
            <div className="flex flex-col items-end space-y-7 xl:space-y-9">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-end">
                  <span className="font-[family-name:Georgia,serif] italic text-3xl sm:text-4xl xl:text-5xl font-light text-white leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-[13px] text-neutral-300/80 font-light tracking-wide mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Only: Center Portrait & Stats */}
          <div className="flex lg:hidden flex-col items-center w-full z-10 mt-2">
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] flex justify-center">
              <Image
                src="/images/home/Pradeep.png"
                alt="Pradeep Liyanage"
                width={1086}
                height={1448}
                priority
                className="h-auto w-full max-h-[52vh] sm:max-h-[62vh] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
              />
            </div>

            {/* Mobile Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-md mt-6 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <span className="font-[family-name:Georgia,serif] italic text-2xl sm:text-3xl font-light text-white leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs text-neutral-300/80 font-normal tracking-wide mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Desktop Centered Portrait: Positioned at Bottom Center */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-0 z-10 items-end justify-center pointer-events-none select-none">
        <div className="relative w-auto flex justify-center">
          <Image
            src="/images/home/Pradeep.png"
            alt="Pradeep Liyanage"
            width={1086}
            height={1448}
            priority
            className="h-[78vh] xl:h-[84vh] max-h-[860px] w-auto object-contain object-bottom drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)]"
          />
        </div>
      </div>

      {/* Bottom Center: Scroll Down Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex justify-center items-center pointer-events-auto">
        <button
          type="button"
          onClick={handleScrollDown}
          className="group flex flex-col items-center gap-1.5 cursor-pointer opacity-80 hover:opacity-100 transition-opacity focus:outline-none"
          aria-label="Scroll down to explore"
        >
          {/* Minimalist Mouse SVG */}
          <div className="w-4 h-6 sm:w-4.5 sm:h-7 rounded-full border border-neutral-400/80 group-hover:border-white transition-colors flex items-start justify-center p-1">
            <div className="w-1 h-1.5 bg-neutral-300 group-hover:bg-white rounded-full animate-bounce" />
          </div>
          <span className="text-[9px] sm:text-[10px] tracking-[0.25em] font-medium uppercase text-neutral-400 group-hover:text-white transition-colors">
            SCROLL DOWN
          </span>
        </button>
      </div>
    </section>
  );
}
