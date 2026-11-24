"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { LogoFull } from "./Logo";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
import { navMenu, site } from "@/lib/site-data";

/**
 * Sticky header: compact with a soft shadow after scrolling.
 * Mobile: slide-in panel from the right (Escape closes, page scroll is locked while open).
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false); // desktop "About Us" dropdown
  const [mobileGroup, setMobileGroup] = useState(false); // mobile "About Us" accordion
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

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
          {navMenu.map((item) => {
            const active = item.children ? item.children.some((c) => isActive(c.href)) : isActive(item.href);
            const linkCls = `relative whitespace-nowrap rounded-card px-3 py-2 text-[15px] font-semibold transition-colors duration-200 hover:bg-brand/10 ${
              active ? "text-brand" : "text-black/70 hover:text-brand"
            }`;
            const underline = active && (
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" aria-hidden="true" />
            );
            if (!item.children) {
              return (
                <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={linkCls}>
                  {item.label}
                  {underline}
                </Link>
              );
            }
            return (
              <div
                key={item.label}
                ref={dropRef}
                className="relative"
                onPointerEnter={(e) => e.pointerType === "mouse" && setMenuOpen(true)}
                onPointerLeave={(e) => e.pointerType === "mouse" && setMenuOpen(false)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((v) => !v)}
                  className={`${linkCls} inline-flex items-center gap-1`}
                >
                  {item.label}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  {underline}
                </button>
                {menuOpen && (
                  <div className="absolute left-0 top-full z-50 min-w-[220px] pt-2">
                    <div className="overflow-hidden rounded-card border border-black/10 bg-white shadow-lift">
                      <ul className="p-2">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              aria-current={isActive(c.href) ? "page" : undefined}
                              className={`flex min-h-[44px] items-center rounded-card px-3 text-[15px] font-semibold transition-colors hover:bg-brand/10 ${
                                isActive(c.href) ? "text-brand" : "text-black/70 hover:text-brand"
                              }`}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
            {navMenu.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <button
                    type="button"
                    aria-expanded={mobileGroup}
                    onClick={() => setMobileGroup((v) => !v)}
                    className={`flex min-h-[48px] w-full items-center justify-between rounded-card px-3 text-lg font-semibold transition-colors hover:bg-snow/10 ${
                      item.children.some((c) => isActive(c.href)) ? "text-accent" : "text-snow"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileGroup ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  {mobileGroup && (
                    <ul className="ml-3 mt-1 space-y-1 border-l border-snow/20 pl-3">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            aria-current={isActive(c.href) ? "page" : undefined}
                            className={`flex min-h-[44px] items-center rounded-card px-3 text-base font-semibold transition-colors hover:bg-snow/10 ${
                              isActive(c.href) ? "bg-snow/10 text-accent" : "text-snow/90"
                            }`}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
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
              )
            )}
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
