"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./LastYearGallery.module.css";

const GALLERY_ITEMS = [
  { id: 1, img: "/assets/lastyear/1.jpeg", title: "Grand Felicitations", caption: "Honoring the young emerging artists of NAVMEDHA" },
  { id: 2, img: "/assets/lastyear/2.jpeg", title: "Certificate Distribution", caption: "Awarding official certificates & recognition shields" },
  { id: 3, img: "/assets/lastyear/3.jpeg", title: "Joy of Achievement", caption: "Smiles and celebration of creative excellence" },
  { id: 4, img: "/assets/lastyear/4.jpeg", title: "Prizes & Recognition", caption: "Encouraging young minds through festive hampers" },
  { id: 5, img: "/assets/lastyear/5.jpeg", title: "Artistic Moments", caption: "Memorable glimpses from the ceremony stage" },
  { id: 6, img: "/assets/lastyear/6.jpeg", title: "Celebrating Talent", caption: "Jury and organizers felicitating outstanding entries" },
  { id: 7, img: "/assets/lastyear/7.jpeg", title: "Cherished Memories", caption: "A gathering of devotion, art, and togetherness" },
  { id: 8, img: "/assets/lastyear/8.jpeg", title: "Festival of Expressions", caption: "Concluding the grand prize distribution ceremony" },
];

export function LastYearGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-swipe every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
    }, 3500);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.sectionHeaderCenter}>
          <span className={styles.sectionKicker}>✧ Nostalgia & Glories ✧</span>
          <h2 className={styles.sectionTitle}>Last Year Prize Distribution</h2>
          <p className={styles.sectionSubtitle}>
            A glimpse into the cherished moments, awards ceremony, and radiant smiles of NAVMEDHA winners.
          </p>
        </div>

        {/* Poker Card Deck Container */}
        <div
          className={styles.deckWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className={styles.pokerDeck}>
            {GALLERY_ITEMS.map((item, idx) => {
              // Calculate relative offset from active card
              const total = GALLERY_ITEMS.length;
              let diff = (idx - activeIndex + total) % total;
              if (diff > total / 2) diff -= total; // allow negative wrapping

              const isActive = diff === 0;
              const isVisible = Math.abs(diff) <= 3; // Show top 5-7 cards in fan

              if (!isVisible) return null;

              // Calculate fan transform (rotation, translateX, translateY, zIndex)
              const rot = diff * 7.5; // degrees tilt
              const transX = diff * 65; // horizontal spread
              const transY = Math.abs(diff) * 18 - (isActive ? 35 : 0); // lift top card
              const zIndex = 50 - Math.abs(diff);
              const scale = isActive ? 1.05 : Math.max(0.85, 1 - Math.abs(diff) * 0.06);
              const opacity = Math.max(0.4, 1 - Math.abs(diff) * 0.18);

              return (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(idx)}
                  className={`${styles.framedCard} ${isActive ? styles.activeCard : ""}`}
                  style={{
                    transform: `translateX(${transX}px) translateY(${transY}px) rotate(${rot}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                  }}
                >
                  {/* Photo inside the decorative cutout frame */}
                  <div className={styles.photoContainer}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 300px, 460px"
                      className={styles.realPhoto}
                    />
                  </div>

                  {/* The Ornate Frame Layer Overlay */}
                  <div className={styles.frameOverlay}>
                    <Image
                      src="/assets/frame-window.png"
                      alt="Durga Puja Ornate Golden Frame"
                      fill
                      priority={idx === 0}
                      className={styles.frameImage}
                    />
                  </div>

                  {/* Card Deck Indicator Badge */}
                  {isActive && (
                    <div className={styles.cardIndicatorBadge}>
                      <span>{idx + 1} / {GALLERY_ITEMS.length}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Active Card Meta & Thumbnail Dots */}
        <div className={styles.activeCardInfo}>
          <h3 className={styles.currentTitle}>{GALLERY_ITEMS[activeIndex].title}</h3>
          <p className={styles.currentCaption}>{GALLERY_ITEMS[activeIndex].caption}</p>

          {/* Quick selector dots */}
          <div className={styles.dotDeck}>
            {GALLERY_ITEMS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ""}`}
                aria-label={`Select frame ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

