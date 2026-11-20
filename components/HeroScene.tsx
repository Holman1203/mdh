"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { heroSlides } from "@/lib/site-data";

const INTERVAL = 8000; // time each photo is shown

/**
 * Hero with a calm, video-like background:
 *  - African / Nigerian photos fade slowly into each other on their own (no mouse or touch interaction).
 *  - Each photo drifts and zooms very slowly (CSS), like gentle camera movement.
 *  - Only the first photo loads up front; the rest load a moment later so slow networks are not held up.
 *  - A small pause button is provided (accessibility). Reduced-motion visitors see a still photo.
 */
export default function HeroScene({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [ready, setReady] = useState(false); // other photos mount shortly after first paint

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
    const t = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!playing || !ready) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), INTERVAL);
    return () => clearInterval(t);
  }, [playing, ready]);

  return (
    <div className="on-navy relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-navy">
      {/* background photos (decorative) */}
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        {heroSlides.map((s, i) => {
          if (i > 0 && !ready) return null;
          return (
            <Image
              key={s.src}
              src={s.src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              style={{ objectPosition: s.pos }}
              className={`animate-kenburns object-cover transition-opacity duration-[1800ms] ease-in-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          );
        })}
      </div>
      {/* navy veil keeps the text readable and ties every photo to the brand */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/35" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy/70 via-transparent to-transparent" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="max-w-2xl animate-fade-up">{children}</div>
      </div>

      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? "Pause background photos" : "Play background photos"}
        className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full border border-snow/40 bg-navy/50 text-snow backdrop-blur transition-colors hover:bg-navy/80 sm:left-6"
      >
        {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
      </button>

      {/* screen readers: describe the current photo politely */}
      <p className="sr-only" aria-live="off">
        {heroSlides[index].alt}
      </p>
    </div>
  );
}
