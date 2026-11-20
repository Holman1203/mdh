"use client";

import { useRef, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { contact } from "@/lib/site-data";

// Set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local (and in Vercel). See README.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
const isPlaceholder = !ACCESS_KEY || ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

function validate(v: Record<string, string>): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!EMAIL.test(v.email.trim())) e.email = "Please enter a valid email address, for example name@example.com.";
  if (!v.subject) e.subject = "Please choose a subject so we can route your message.";
  if (v.message.trim().length < 10) e.message = "Please write at least 10 characters so we can help you properly.";
  return e;
}

const field =
  "mt-2 min-h-[48px] w-full rounded-card border border-black/30 bg-white px-4 py-3 text-black placeholder:text-black/60 transition-colors focus:border-brand aria-[invalid=true]:border-2 aria-[invalid=true]:border-black";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const values = () => {
    const d = new FormData(formRef.current!);
    return Object.fromEntries(["name", "email", "subject", "message"].map((k) => [k, String(d.get(k) || "")]));
  };

  // Validate one field when the user leaves it (not on every keystroke)
  function onBlur(key: keyof Errors) {
    const e = validate(values());
    setErrors((prev) => ({ ...prev, [key]: e[key] }));
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const e = validate(values());
    setErrors(e);
    if (Object.keys(e).length) {
      setStatus("idle");
      setTimeout(() => summaryRef.current?.focus(), 0);
      return;
    }
    if (isPlaceholder) {
      setStatus("error");
      setMessage("The form is not connected yet. Please email or call us using the details on this page.");
      return;
    }
    setStatus("sending");
    const form = formRef.current!;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("from_name", "MAMREX HUB website");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      setStatus("success");
      setMessage("Thank you. Your message has been sent and we will reply as soon as we can.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Sorry, your message could not be sent. Please try again, or email us directly.");
    }
  }

  const errList = Object.entries(errors).filter(([, v]) => v) as [string, string][];
  const err = (k: keyof Errors) => (errors[k] ? `${k}-error` : undefined);

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
      {errList.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-card border-2 border-black p-4"
        >
          <p className="flex items-center gap-2 font-bold text-brand">
            <AlertCircle className="h-5 w-5" aria-hidden="true" /> Please fix the following:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
            {errList.map(([k, v]) => (
              <li key={k}>
                <a href={`#cf-${k}`} className="underline">
                  {v}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="font-semibold text-brand">
            Full name <span aria-hidden="true">*</span>
          </label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" className={field}
            aria-invalid={!!errors.name} aria-describedby={err("name")} onBlur={() => onBlur("name")} />
          {errors.name && <p id="name-error" className="mt-1 text-sm font-medium text-black">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className="font-semibold text-brand">
            Email address <span aria-hidden="true">*</span>
          </label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" className={field}
            aria-invalid={!!errors.email} aria-describedby={err("email")} onBlur={() => onBlur("email")} />
          {errors.email && <p id="email-error" className="mt-1 text-sm font-medium text-black">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-org" className="font-semibold text-brand">
            Organisation <span className="font-normal text-black/70">(optional)</span>
          </label>
          <input id="cf-org" name="organisation" type="text" autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor="cf-subject" className="font-semibold text-brand">
            Subject <span aria-hidden="true">*</span>
          </label>
          <select id="cf-subject" name="subject" required defaultValue="" className={field}
            aria-invalid={!!errors.subject} aria-describedby={err("subject")} onBlur={() => onBlur("subject")}>
            <option value="" disabled>Select a subject</option>
            {contact.form.subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.subject && <p id="subject-error" className="mt-1 text-sm font-medium text-black">{errors.subject}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="font-semibold text-brand">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea id="cf-message" name="message" required rows={6} className={field}
          aria-invalid={!!errors.message} aria-describedby={err("message")} onBlur={() => onBlur("message")} />
        {errors.message && <p id="message-error" className="mt-1 text-sm font-medium text-black">{errors.message}</p>}
      </div>

      {/* Honeypot spam trap */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-[48px] items-center justify-center rounded-card border-2 border-accent bg-accent px-8 py-3 text-base font-bold text-navy shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-lift active:translate-y-0 active:scale-[0.98] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      <div role="status" aria-live="polite">
        {message && (
          <p className={`flex items-start gap-2 rounded-card border p-4 ${status === "success" ? "border-brand bg-brand/5 text-brand" : "border-black/30"}`}>
            {status === "success" ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            ) : (
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            )}
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
