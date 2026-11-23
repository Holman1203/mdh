"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

/** Small "copy" button for account details. Falls back gracefully if the clipboard is unavailable. */
export default function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked: the value is still visible on screen to copy by hand
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      className="inline-flex min-h-[44px] items-center gap-2 rounded-card border-2 border-brand px-4 text-sm font-semibold text-brand transition-all hover:-translate-y-0.5 hover:bg-brand/10 active:scale-95"
    >
      {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
      {copied ? "Copied" : "Copy"}
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? `${label} copied to clipboard` : ""}
      </span>
    </button>
  );
}
