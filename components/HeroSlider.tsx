"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { heroSlides } from "@/lib/site-data";

const INTERVAL = 5000;

/**
 * Crossfading hero slideshow. Accessible: pause/play button, dot controls, pauses on hover/focus,
 * and does not auto-play for visitors who prefer reduced motion. Opacity-only CSS transitions.
 */
export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [paused, setPaused] = useState(false); // hover / focus pause

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);

  useEffect(() => {
    if (!playing || paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), INTERVAL);
    return () => clearInterval(t);
  }, [playing, paused]);

  return (
    <div
      className="relative"
      role="group"
      aria-roledescription="carousel"
      aria-label="Photos of technology, skills and enterprise"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-tile bg-white/10"
        aria-live={playing && !paused ? "off" : "polite"}
      >
        {heroSlides.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt={s.alt}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            priority={i === 0}
            loading={i === 0 ? undefined : "lazy"}
            aria-hidden={i !== index}
            className={`object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <span className="absolute bottom-4 left-4 rounded-card bg-brand px-3 py-1.5 text-sm font-semibold text-white">
          {heroSlides[index].label}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          className="flex h-11 w-11 items-center justify-center rounded-card border-2 border-white text-white hover:bg-white/10"
        >
          {playing ? <Pause className="h-5 w-5" aria-hidden="true" /> : <Play className="h-5 w-5" aria-hidden="true" />}
        </button>
        <div className="flex items-center gap-1">
          {heroSlides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1} of ${heroSlides.length}: ${s.label}`}
              aria-current={i === index}
              className="flex h-11 w-8 items-center justify-center"
            >
              <span className={`block h-2 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-accent" : "w-2 bg-white/60"}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
