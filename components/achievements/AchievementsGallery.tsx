"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "@/css/achievements/AchievementsGallery.css";

interface GalleryItem {
  id: string;
  image?: string;
  alt?: string;
  aspectClass: string;
}

export default function AchievementsGallery() {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveImage(null);
      }
    };

    if (activeImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  // Desktop Column 1 items (Left)
  const desktopColumn1: GalleryItem[] = [
    {
      id: "col1-1",
      image: "/images/achievements/certificate-1.jpg",
      alt: "Pradeep Liyanage holding official industry achievement certificates",
      aspectClass: "aspect-col1-item1",
    },
    {
      id: "col1-2",
      aspectClass: "aspect-col1-item2",
    },
    {
      id: "col1-3",
      aspectClass: "aspect-col1-item3",
    },
  ];

  // Desktop Column 2 items (Center)
  const desktopColumn2: GalleryItem[] = [
    {
      id: "col2-1",
      aspectClass: "aspect-col2-item1",
    },
    {
      id: "col2-2",
      aspectClass: "aspect-col2-item2",
    },
    {
      id: "col2-3",
      aspectClass: "aspect-col2-item3",
    },
  ];

  // Desktop Column 3 items (Right)
  const desktopColumn3: GalleryItem[] = [
    {
      id: "col3-1",
      aspectClass: "aspect-col3-item1",
    },
    {
      id: "col3-2",
      aspectClass: "aspect-col3-item2",
    },
    {
      id: "col3-3",
      aspectClass: "aspect-col3-item3",
    },
  ];

  // Mobile Column 1 items (Left - 4 items)
  const mobileColumn1: GalleryItem[] = [
    {
      id: "m-col1-1",
      image: "/images/achievements/certificate-1.jpg",
      alt: "Pradeep Liyanage holding official industry achievement certificates",
      aspectClass: "aspect-m-tall-1",
    },
    {
      id: "m-col1-2",
      aspectClass: "aspect-m-short-1",
    },
    {
      id: "m-col1-3",
      aspectClass: "aspect-m-tall-2",
    },
    {
      id: "m-col1-4",
      aspectClass: "aspect-m-short-2",
    },
  ];

  // Mobile Column 2 items (Right - 4 items)
  const mobileColumn2: GalleryItem[] = [
    {
      id: "m-col2-1",
      aspectClass: "aspect-m-short-3",
    },
    {
      id: "m-col2-2",
      aspectClass: "aspect-m-tall-3",
    },
    {
      id: "m-col2-3",
      aspectClass: "aspect-m-medium-2",
    },
    {
      id: "m-col2-4",
      aspectClass: "aspect-m-tall-4",
    },
  ];

  // Mobile Bottom Item (Full-width 9th card - spans both columns evenly)
  const mobileBottomCard: GalleryItem = {
    id: "m-bottom-1",
    aspectClass: "aspect-m-full",
  };

  const renderCard = (item: GalleryItem) => {
    if (item.image) {
      return (
        <div
          key={item.id}
          className={`achievements-card achievements-card-photo ${item.aspectClass}`}
          onClick={() => setActiveImage({ src: item.image!, alt: item.alt || "Achievement image" })}
          role="button"
          tabIndex={0}
          aria-label={item.alt || "View achievement image"}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setActiveImage({ src: item.image!, alt: item.alt || "Achievement image" });
            }
          }}
        >
          <Image
            src={item.image}
            alt={item.alt || "Achievement"}
            fill
            sizes="(max-width: 640px) 50vw, 33vw"
            className="achievements-card-photo-img"
            priority
          />
          <div className="achievements-card-photo-overlay" />
          <button
            type="button"
            className="achievements-card-action-btn"
            title="Expand image"
            aria-label="Expand image"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImage({ src: item.image!, alt: item.alt || "Achievement image" });
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </button>
        </div>
      );
    }

    return (
      <div
        key={item.id}
        className={`achievements-card achievements-card-placeholder ${item.aspectClass}`}
        role="img"
        aria-label={`Achievement placeholder ${item.id}`}
      />
    );
  };

  return (
    <section className="achievements-gallery-section" id="achievements-gallery">
      <div className="achievements-gallery-container">
        {/* Mobile View: 2 Staggered Columns + Full-Width Bottom Card */}
        <div className="achievements-gallery-grid-mobile">
          <div className="achievements-gallery-col">
            {mobileColumn1.map(renderCard)}
          </div>
          <div className="achievements-gallery-col">
            {mobileColumn2.map(renderCard)}
          </div>
          <div className="achievements-gallery-mobile-bottom">
            {renderCard(mobileBottomCard)}
          </div>
        </div>

        {/* Desktop View: 3 Columns matching Figma */}
        <div className="achievements-gallery-grid-desktop">
          <div className="achievements-gallery-col">
            {desktopColumn1.map(renderCard)}
          </div>
          <div className="achievements-gallery-col">
            {desktopColumn2.map(renderCard)}
          </div>
          <div className="achievements-gallery-col">
            {desktopColumn3.map(renderCard)}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="achievements-lightbox-backdrop"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            className="achievements-lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Close image preview"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div
            className="achievements-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="achievements-lightbox-img"
            />
          </div>
        </div>
      )}
    </section>
  );
}
