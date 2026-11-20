"use client";

import { useEffect, useRef, useState } from "react";
import { impactNumbers } from "@/lib/site-data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value); // final value by default (SSR / no JS / reduced motion)

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setShown(0);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          setShown(Math.round(value * (1 - Math.pow(1 - p, 3)))); // ease-out
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      <span aria-hidden="true">
        {shown}
        {suffix}
      </span>
    </span>
  );
}

/** Animated counters on a navy band. Numbers live in lib/site-data.ts (impactNumbers). */
export default function ImpactCounters() {
  return (
    <dl className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {impactNumbers.map((n) => (
        <div key={n.label} className="flex flex-col rounded-tile border border-snow/15 bg-snow/5 p-6">
          <dt className="order-2 mt-2 text-sm font-medium text-snow/80">{n.label}</dt>
          <dd className="text-5xl font-extrabold text-accent sm:text-6xl">
            <Counter value={n.value} suffix={n.suffix} />
          </dd>
          <span className="order-3 mt-4 h-1 w-10 rounded-full bg-accent" aria-hidden="true" />
        </div>
      ))}
    </dl>
  );
}
