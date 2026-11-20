"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon from "./Icon";
import { programmeFilters, programmes } from "@/lib/site-data";

/** Filterable programme cards (data in lib/site-data.ts → programmes). */
export default function Programmes() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? programmes : programmes.filter((p) => p.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter programmes by pillar" className="flex flex-wrap gap-2">
        {programmeFilters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={active === f}
            onClick={() => setActive(f)}
            className={`min-h-[44px] rounded-full border-2 px-5 text-sm font-semibold transition-all duration-200 active:scale-95 ${
              active === f
                ? "border-navy bg-navy text-snow dark:border-accent dark:bg-accent dark:text-navy"
                : "border-black/15 text-black/80 hover:border-brand hover:text-brand"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {list.map((p) => (
          <li
            key={p.title}
            className="group flex flex-col rounded-tile border border-black/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-card bg-navy text-snow">
                <Icon name={p.icon} />
              </span>
              <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                {p.category}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-bold text-brand">{p.title}</h3>
            <p className="mt-2 flex-1 text-black/70">{p.text}</p>
            <Link
              href="/contact/"
              className="mt-5 inline-flex min-h-[44px] items-center gap-1 font-semibold text-brand"
            >
              Enquire
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm text-black/70">
        Programmes launch in phases. See our{" "}
        <Link href="/roadmap/" className="font-semibold text-brand underline underline-offset-4">
          roadmap
        </Link>{" "}
        for timings.
      </p>
    </div>
  );
}
