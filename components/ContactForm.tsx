"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/site-data";

// Set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local (and in Vercel). See README.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
const isPlaceholder = !ACCESS_KEY || ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "mt-1 w-full rounded-card border border-black/30 bg-white px-4 py-3 text-black placeholder:text-black/50 focus:border-brand";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isPlaceholder) {
      setStatus("error");
      setMessage("The form is not connected yet. Please email or call us using the details on this page.");
      return;
    }
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("from_name", "MAMREX HUB website");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setMessage("Thank you. Your message has been sent and we will reply as soon as we can.");
        form.reset();
      } else {
        throw new Error(json.message || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setMessage("Sorry, your message could not be sent. Please email us directly.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block font-semibold text-brand">
          Full name
          <input name="name" type="text" required autoComplete="name" className={field} />
        </label>
        <label className="block font-semibold text-brand">
          Email address
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block font-semibold text-brand">
          Organisation <span className="font-normal text-black/60">(optional)</span>
          <input name="organisation" type="text" autoComplete="organization" className={field} />
        </label>
        <label className="block font-semibold text-brand">
          Subject
          <select name="subject" required defaultValue="" className={field}>
            <option value="" disabled>
              Select a subject
            </option>
            {contact.form.subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block font-semibold text-brand">
        Message
        <textarea name="message" required rows={6} className={field} />
      </label>
      {/* Honeypot spam trap */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-card border-2 border-accent bg-accent px-6 py-3 text-[19px] font-bold text-white transition-colors duration-200 hover:bg-accent/90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`rounded-card p-4 ${message ? "border" : "hidden"} ${
          status === "success" ? "border-brand bg-brand/5 text-brand" : "border-black/30 text-black"
        }`}
      >
        {message}
      </p>
    </form>
  );
}
