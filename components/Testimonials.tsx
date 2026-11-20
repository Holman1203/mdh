"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/site-data";

/** Testimonial carousel. Renders nothing until real testimonials are added in lib/site-data.ts. */
export default function Testimonials() {
  const [i, setI] = useState(0);
  if (testimonials.length === 0) return null;
  const t = testimonials[i];
  const go = (d: number) => setI((i + d + testimonials.length) % testimonials.length);

  return (
    <section aria-roledescription="carousel" aria-label="Testimonials" className="bg-brand/5 py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Quote className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
        <figure className="mt-6" aria-live="polite">
          <blockquote className="text-2xl font-semibold leading-snug text-brand sm:text-3xl">“{t.quote}”</blockquote>
          <figcaption className="mt-6 text-black/70">
            <span className="font-bold text-brand">{t.name}</span> · {t.role}
          </figcaption>
        </figure>
        {testimonials.length > 1 && (
          <div className="mt-8 flex items-center justify-center gap-3">
            <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="flex h-11 w-11 items-center justify-center rounded-card border-2 border-brand text-brand hover:bg-brand/10 active:scale-95">
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <span className="text-sm text-black/70">
              {i + 1} / {testimonials.length}
            </span>
            <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="flex h-11 w-11 items-center justify-center rounded-card border-2 border-brand text-brand hover:bg-brand/10 active:scale-95">
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
