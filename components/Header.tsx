"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoFull } from "./Logo";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
import { nav, site } from "@/lib/site-data";

/**
 * Sticky header: compact with a soft shadow after scrolling.
 * Mobile: slide-in panel from the right (Escape closes, page scroll is locked while open).
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <>
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur transition-all duration-300 ${
        scrolled ? "border-black/10 shadow-soft" : "border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "h-14" : "h-20"
        }`}
      >
        <Link href="/" aria-label="Mamrex Digital Hub — home" className="shrink-0">
          <LogoFull className={`w-auto transition-all duration-300 ${scrolled ? "h-8" : "h-11"}`} />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative whitespace-nowrap rounded-card px-3 py-2 text-[15px] font-semibold transition-colors duration-200 hover:bg-brand/10 ${
                isActive(item.href) ? "text-brand" : "text-black/70 hover:text-brand"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" aria-hidden="true" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button href="/donate/" className="hidden !min-h-[44px] whitespace-nowrap !px-5 !py-2 !text-[15px] sm:inline-flex">
            Donate Now
          </Button>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-card text-brand hover:bg-brand/10 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>

      {/* Slide-in mobile menu (outside <header>: backdrop-blur would otherwise trap fixed positioning) */}
      <div className={`fixed inset-0 z-[60] overflow-hidden xl:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundColor: "rgb(10 31 68 / 0.6)" }}
          onClick={() => setOpen(false)}
        />
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className={`on-navy absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-navy p-6 text-snow shadow-lift transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full invisible"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-extrabold">{site.shortName}</span>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-card hover:bg-snow/10"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <ul className="mt-8 flex-1 space-y-1 overflow-y-auto">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex min-h-[48px] items-center rounded-card px-3 text-lg font-semibold transition-colors hover:bg-snow/10 ${
                    isActive(item.href) ? "bg-snow/10 text-accent" : "text-snow"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/donate/" className="mt-6 w-full">
            Donate Now
          </Button>
          <p className="mt-4 text-center text-sm text-snow/80">{site.tagline}</p>
        </nav>
      </div>
    </>
  );
}
