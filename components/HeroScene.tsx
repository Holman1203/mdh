"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Pause, Play } from "lucide-react";
import Button from "./Button";
import { heroSlides, heroWelcome } from "@/lib/site-data";

const INTERVAL = 8000; // time each slide is shown

/**
 * Hero with a calm, video-like background and content that changes with it:
 *  - African / Nigerian photos fade slowly into each other on their own (no mouse or touch interaction),
 *    each drifting very slowly like gentle camera movement.
 *  - The headline, subtitle and both buttons change together with the photo.
 *  - Buttons sit at the bottom of the hero. A small pause button and progress dots are provided.
 *  - Only the first photo loads up front; the rest load a moment later (kind to slow networks).
 *  - Reduced-motion visitors see one still slide.
 */
export default function HeroScene() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [ready, setReady] = useState(false); // other photos mount shortly after first paint
  const slide = heroSlides[index];
  const words = slide.headline.split(" ");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
    const t = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!playing || !ready) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % heroSlides.length), INTERVAL);
    return () => clearTimeout(t); // restarts after every change, including manual jumps
  }, [playing, ready, index]);

  return (
    <div className="on-navy relative isolate flex min-h-[calc(100svh-5rem)] overflow-hidden bg-navy">
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
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy/80 via-transparent to-transparent" aria-hidden="true" />

      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-8 pt-14 sm:px-6 sm:pb-10 sm:pt-20 lg:px-8">
        <p className="text-base font-bold uppercase tracking-[0.2em] text-accent sm:text-lg">{heroWelcome}</p>

        {/* headline + subtitle: change with the photo */}
        <div key={`t-${index}`} className="my-auto animate-fade-up py-8">
          <h1 className="whitespace-nowrap leading-[0.95] text-snow" style={{ fontSize: "clamp(2.75rem, 18vw, 9rem)" }}>
            {words.slice(0, -1).join(" ")} <span className="text-accent">{words[words.length - 1]}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-2xl font-bold leading-snug text-snow sm:text-3xl">{slide.subtitle}</p>
        </div>

        {/* buttons at the bottom: also change with the photo; progress and pause beside them */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div key={`b-${index}`} className="flex animate-fade-up flex-col gap-3 [animation-delay:250ms] sm:flex-row">
            <Button href={slide.primary.href}>
              {slide.primary.label}
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button href={slide.secondary.href} variant="light">
              {slide.secondary.label}
            </Button>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause hero slideshow" : "Play hero slideshow"}
              className="mr-2 flex h-11 w-11 items-center justify-center rounded-full border border-snow/40 bg-navy/50 text-snow backdrop-blur transition-colors hover:bg-navy/80"
            >
              {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
            </button>
            {heroSlides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1} of ${heroSlides.length}: ${s.headline}`}
                aria-current={i === index}
                className="flex h-11 w-7 items-center justify-center"
              >
                <span className={`block h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-7 bg-accent" : "w-3 bg-snow/50"}`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* screen readers: describe the current photo politely */}
      <p className="sr-only" aria-live="off">
        {slide.alt}
      </p>
    </div>
  );
}
