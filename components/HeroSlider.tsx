"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { heroSlides } from "@/lib/site-data";

const INTERVAL = 5000;

/**
 * Crossfading hero slideshow in a framed card. Accessible: pause/play button, dot controls,
 * pauses on hover/focus, and does not auto-play for visitors who prefer reduced motion.
 * Photos live in public/hero/ and are listed in lib/site-data.ts (heroSlides).
 */
export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [paused, setPaused] = useState(false);

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
      {/* soft orange offset tile behind the photo (logo motif) */}
      <div className="absolute -bottom-3 -right-3 h-full w-full rounded-tile border-2 border-accent/60" aria-hidden="true" />
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-tile border border-snow/20 bg-snow/10 shadow-lift"
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
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/70 to-transparent" aria-hidden="true" />
        <span className="absolute bottom-4 left-4 rounded-card bg-navy px-3 py-1.5 text-sm font-semibold text-snow">
          {heroSlides[index].label}
        </span>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          className="flex h-11 w-11 items-center justify-center rounded-card border-2 border-snow/70 text-snow transition-all hover:bg-snow/10 active:scale-95"
        >
          {playing ? <Pause className="h-5 w-5" aria-hidden="true" /> : <Play className="h-5 w-5" aria-hidden="true" />}
        </button>
        <div className="flex items-center">
          {heroSlides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1} of ${heroSlides.length}: ${s.label}`}
              aria-current={i === index}
              className="flex h-11 w-9 items-center justify-center"
            >
              <span className={`block h-2 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-accent" : "w-2 bg-snow/60"}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
