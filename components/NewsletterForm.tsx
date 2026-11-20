"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
const isPlaceholder = !ACCESS_KEY || ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Footer newsletter signup. Sends through the same Web3Forms key as the contact form. */
export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = String(new FormData(form).get("email") || "").trim();
    if (!EMAIL.test(email)) {
      setStatus("error");
      setMsg("Please enter a valid email address, for example name@example.com.");
      return;
    }
    if (isPlaceholder) {
      setStatus("error");
      setMsg("Signup is not connected yet. Please email us instead.");
      return;
    }
    setStatus("sending");
    try {
      const data = new FormData();
      data.append("access_key", ACCESS_KEY);
      data.append("subject", "Newsletter signup");
      data.append("from_name", "MAMREX HUB website");
      data.append("email", email);
      data.append("message", `Please add ${email} to the MAMREX HUB newsletter.`);
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (!json.success) throw new Error();
      setStatus("ok");
      setMsg("Thank you, you are on the list.");
      form.reset();
    } catch {
      setStatus("error");
      setMsg("Sorry, that did not go through. Please try again later.");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          aria-describedby="newsletter-msg"
          className="min-h-[48px] min-w-0 flex-1 rounded-card border border-snow/30 bg-snow/10 px-4 text-snow placeholder:text-snow/70 focus:border-accent"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          aria-label="Subscribe"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-accent text-navy transition-all hover:bg-accent/90 active:scale-95 disabled:opacity-60"
        >
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <p id="newsletter-msg" role="status" aria-live="polite" className="mt-2 min-h-[1.25rem] text-sm text-snow/90">
        {msg}
      </p>
    </form>
  );
}
