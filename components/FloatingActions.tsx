"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import ChatBot from "./ChatBot";

/** Floating chat assistant + back-to-top button (appears after scrolling). */
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-brand shadow-lift transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
      </button>
      <ChatBot />
    </div>
  );
}
