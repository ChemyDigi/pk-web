"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "@/css/layout/PageTransition.css";

type TransitionState = "idle" | "entering" | "leaving";

export default function PageTransition() {
  const pathname = usePathname();
  const [state, setState] = useState<TransitionState>("idle");
  const previousPathname = useRef(pathname);
  const transitionStartTimestamp = useRef<number>(0);
  const finishTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Intercept internal link clicks across the site to start solid transition immediately
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Skip non-internal or special links
      if (
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      try {
        const targetUrl = new URL(anchor.href, window.location.href);
        const currentUrl = new URL(window.location.href);

        // Ignore clicks to the exact same page path
        if (
          targetUrl.pathname === currentUrl.pathname &&
          targetUrl.search === currentUrl.search
        ) {
          return;
        }

        // Trigger solid transition immediately
        transitionStartTimestamp.current = Date.now();
        setState("entering");

        // Clear any prior timeouts
        if (finishTimeoutRef.current) clearTimeout(finishTimeoutRef.current);
        if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);

        // Safety fallback timeout: if navigation is cancelled or delayed, exit cleanly
        safetyTimeoutRef.current = setTimeout(() => {
          setState("leaving");
          finishTimeoutRef.current = setTimeout(() => {
            setState("idle");
          }, 460);
        }, 1600);
      } catch {
        // Fallback gracefully on URL parsing error
      }
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleDocumentClick, {
        capture: true,
      });
    };
  }, []);

  // 2. React to pathname changes (route change finished)
  useEffect(() => {
    if (pathname === previousPathname.current) {
      return;
    }

    previousPathname.current = pathname;

    // Minimum display time (420ms) so the solid screen and PK logo display cleanly
    const minDisplayTime = 420;
    const elapsed = Date.now() - transitionStartTimestamp.current;
    const remainingTime = Math.max(0, minDisplayTime - elapsed);

    // If navigation happened without click (e.g. browser back/forward buttons),
    // trigger a smooth transition
    if (state === "idle") {
      setState("entering");
      finishTimeoutRef.current = setTimeout(() => {
        setState("leaving");
        finishTimeoutRef.current = setTimeout(() => {
          setState("idle");
        }, 460);
      }, minDisplayTime);
      return;
    }

    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
    }

    finishTimeoutRef.current = setTimeout(() => {
      setState("leaving");
      finishTimeoutRef.current = setTimeout(() => {
        setState("idle");
      }, 460);
    }, remainingTime);

    return () => {
      if (finishTimeoutRef.current) clearTimeout(finishTimeoutRef.current);
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    };
  }, [pathname, state]);

  if (state === "idle") {
    return null;
  }

  return (
    <div
      className={`page-transition-overlay ${
        state === "entering" ? "is-entering" : "is-leaving"
      }`}
      aria-hidden="true"
    >
      <div className="page-transition-content">
        <div className="page-transition-glow" />

        <div className="page-transition-logo-wrap">
          <Image
            src="/images/header/Pradeep-Liyanage-Logo-2.png"
            alt="PK Logo"
            width={88}
            height={104}
            priority
            className="page-transition-logo"
          />
        </div>

        <div className="page-transition-line-wrap">
          <div className="page-transition-line-progress" />
        </div>

        <span className="page-transition-text">PRADEEP LIYANAGE</span>
      </div>
    </div>
  );
}
