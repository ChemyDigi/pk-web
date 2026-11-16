"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import "@/css/achievements/AchievementsGallery.css";

export interface GalleryItem {
  id: string;
  image?: string;
  images?: string[];
  title?: string;
  description?: string;
  alt?: string;
  aspectClass: string;
}

const uaPremierClubImages = [
  "/images/achievements/ua-premier-club-2024-1.jpg",
  "/images/achievements/ua-premier-club-2024-2.jpg",
  "/images/achievements/ua-premier-club-2024-3.jpg",
  "/images/achievements/ua-premier-club-2024-4.jpg",
];

const firstAchievementData = {
  images: uaPremierClubImages,
  image: uaPremierClubImages[0],
  title: "UA Premier Club Member – 2024",
  description:
    "Proudly qualified as a UA Premier Club Member for three consecutive quarters (Q1, Q2, and Q3) in 2024. This quarterly recognition reflects consistent performance, dedication, and commitment to excellence at Union Assurance.",
  alt: "UA Premier Club Member – 2024",
};

interface CardProps {
  item: GalleryItem;
  onOpen: (item: GalleryItem, slideIdx: number) => void;
}

function AchievementCard({ item, onOpen }: CardProps) {
  const images = item.images && item.images.length > 0 ? item.images : item.image ? [item.image] : [];
  const hasImages = images.length > 0;
  const isSlideshow = images.length > 1;

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slide rotation every 3.5 seconds
  useEffect(() => {
    if (!isSlideshow) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isSlideshow, images.length]);

  if (!hasImages) {
    return (
      <div
        className={`achievements-card achievements-card-placeholder ${item.aspectClass}`}
        role="img"
        aria-label={`Achievement placeholder ${item.id}`}
      />
    );
  }

  return (
    <div
      className={`achievements-card achievements-card-photo ${item.aspectClass}`}
      onClick={() => onOpen(item, currentSlide)}
      role="button"
      tabIndex={0}
      aria-label={item.title || item.alt || "View achievement image"}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(item, currentSlide);
        }
      }}
    >
      {/* Slideshow image container */}
      <div className="achievements-card-slides-track">
        {images.map((src, idx) => (
          <div
            key={src}
            className={`achievements-card-slide ${idx === currentSlide ? "active" : ""}`}
            style={{
              opacity: idx === currentSlide ? 1 : 0,
              pointerEvents: idx === currentSlide ? "auto" : "none",
            }}
          >
            <Image
              src={src}
              alt={item.alt || item.title || `Achievement photo ${idx + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
              className="achievements-card-photo-img"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      <div className="achievements-card-photo-overlay" />

      {/* Slide dots indicator if multiple images */}
      {isSlideshow && (
        <div className="achievements-card-indicators" onClick={(e) => e.stopPropagation()}>
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`achievements-card-dot ${idx === currentSlide ? "active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide(idx);
              }}
              aria-label={`Go to image slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Expand / View Details Button */}
      <button
        type="button"
        className="achievements-card-action-btn"
        title="View achievement details"
        aria-label="View achievement details"
        onClick={(e) => {
          e.stopPropagation();
          onOpen(item, currentSlide);
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

export default function AchievementsGallery() {
  const [modalState, setModalState] = useState<{
    item: GalleryItem;
    activeSlide: number;
  } | null>(null);

  const activeItem = modalState?.item || null;
  const activeSlide = modalState?.activeSlide ?? 0;

  const imagesList = activeItem
    ? activeItem.images && activeItem.images.length > 0
      ? activeItem.images
      : activeItem.image
      ? [activeItem.image]
      : []
    : [];

  const handleNextSlide = useCallback(() => {
    if (imagesList.length <= 1) return;
    setModalState((prev) =>
      prev ? { ...prev, activeSlide: (prev.activeSlide + 1) % imagesList.length } : null
    );
  }, [imagesList.length]);

  const handlePrevSlide = useCallback(() => {
    if (imagesList.length <= 1) return;
    setModalState((prev) =>
      prev
        ? {
            ...prev,
            activeSlide: (prev.activeSlide - 1 + imagesList.length) % imagesList.length,
          }
        : null
    );
  }, [imagesList.length]);

  const handleSelectSlide = useCallback((index: number) => {
    setModalState((prev) => (prev ? { ...prev, activeSlide: index } : null));
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalState(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      } else if (e.key === "ArrowRight") {
        handleNextSlide();
      } else if (e.key === "ArrowLeft") {
        handlePrevSlide();
      }
    };

    if (modalState) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalState, handleCloseModal, handleNextSlide, handlePrevSlide]);

  const handleOpen = (item: GalleryItem, slideIdx: number) => {
    setModalState({ item, activeSlide: slideIdx });
  };

  // Desktop Column 1 items (Left)
  const desktopColumn1: GalleryItem[] = [
    {
      id: "col1-1",
      ...firstAchievementData,
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
      ...firstAchievementData,
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

  return (
    <section className="achievements-gallery-section" id="achievements-gallery">
      <div className="achievements-gallery-container">
        {/* Mobile View: 2 Staggered Columns + Full-Width Bottom Card */}
        <div className="achievements-gallery-grid-mobile">
          <div className="achievements-gallery-col">
            {mobileColumn1.map((item) => (
              <AchievementCard key={item.id} item={item} onOpen={handleOpen} />
            ))}
          </div>
          <div className="achievements-gallery-col">
            {mobileColumn2.map((item) => (
              <AchievementCard key={item.id} item={item} onOpen={handleOpen} />
            ))}
          </div>
          <div className="achievements-gallery-mobile-bottom">
            <AchievementCard item={mobileBottomCard} onOpen={handleOpen} />
          </div>
        </div>

        {/* Desktop View: 3 Columns matching Figma */}
        <div className="achievements-gallery-grid-desktop">
          <div className="achievements-gallery-col">
            {desktopColumn1.map((item) => (
              <AchievementCard key={item.id} item={item} onOpen={handleOpen} />
            ))}
          </div>
          <div className="achievements-gallery-col">
            {desktopColumn2.map((item) => (
              <AchievementCard key={item.id} item={item} onOpen={handleOpen} />
            ))}
          </div>
          <div className="achievements-gallery-col">
            {desktopColumn3.map((item) => (
              <AchievementCard key={item.id} item={item} onOpen={handleOpen} />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Details Modal */}
      {modalState && activeItem && (
        <div
          className="achievements-lightbox-backdrop"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title || "Achievement details preview"}
        >
          <div
            className={`achievements-modal-dialog ${
              activeItem.title ? "has-details" : "image-only"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="achievements-lightbox-close"
              onClick={handleCloseModal}
              aria-label="Close preview"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Media Area */}
            <div className="achievements-modal-media">
              <div className="achievements-modal-img-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imagesList[activeSlide] || activeItem.image}
                  alt={activeItem.alt || activeItem.title || "Achievement photo"}
                  className="achievements-modal-img"
                />

                {/* Left/Right Navigation Arrows */}
                {imagesList.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="achievements-modal-arrow achievements-modal-arrow-left"
                      onClick={handlePrevSlide}
                      aria-label="Previous image"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      className="achievements-modal-arrow achievements-modal-arrow-right"
                      onClick={handleNextSlide}
                      aria-label="Next image"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Slide Counter Overlay */}
                {imagesList.length > 1 && (
                  <div className="achievements-modal-counter">
                    {activeSlide + 1} / {imagesList.length}
                  </div>
                )}
              </div>

              {/* Thumbnails Strip */}
              {imagesList.length > 1 && (
                <div className="achievements-modal-thumbnails">
                  {imagesList.map((src, idx) => (
                    <button
                      key={src}
                      type="button"
                      className={`achievements-modal-thumb-btn ${
                        idx === activeSlide ? "active" : ""
                      }`}
                      onClick={() => handleSelectSlide(idx)}
                      aria-label={`View photo ${idx + 1}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`Thumbnail ${idx + 1}`}
                        className="achievements-modal-thumb-img"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details Panel */}
            {activeItem.title && (
              <div className="achievements-modal-info">
                <div className="achievements-modal-title-wrapper">
                  <span className="achievements-modal-label">Title</span>
                  <h2 className="achievements-modal-title">{activeItem.title}</h2>
                </div>

                <div className="achievements-modal-desc-wrapper">
                  <span className="achievements-modal-desc-label">Description</span>
                  <p className="achievements-modal-desc">{activeItem.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
