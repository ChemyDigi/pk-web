"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "@/css/layout/SplashScreen.css";

export default function SplashScreen() {
  const [isMounted, setIsMounted] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    // Lock scrolling while splash screen is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Start fadeout after 1.25s
    const hideTimer = setTimeout(() => {
      setIsHiding(true);
    }, 1250);

    // Unmount completely from DOM after transition completes (450ms fadeout)
    const unmountTimer = setTimeout(() => {
      setIsMounted(false);
      document.body.style.overflow = originalOverflow;
    }, 1700);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(unmountTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`splash-overlay ${isHiding ? "is-hiding" : ""}`}
      aria-hidden="true"
    >
      <div className="splash-content">
        {/* PK Brand Logo */}
        <div className="splash-logo-wrap">
          <Image
            src="/images/header/Pradeep-Liyanage-Logo-2.png"
            alt="PK Logo"
            width={104}
            height={124}
            priority
            className="splash-logo"
          />
        </div>

        {/* 3 Animated Sequential Dots */}
        <div className="splash-dots-wrap" aria-label="Loading...">
          <span className="splash-dot" />
          <span className="splash-dot" />
          <span className="splash-dot" />
        </div>

        {/* Brand Name Signature */}
        <span className="splash-text">PRADEEP LIYANAGE</span>
      </div>
    </div>
  );
}
