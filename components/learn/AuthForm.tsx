"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useLearn } from "./LearnProvider";

const field =
  "mt-2 min-h-[48px] w-full rounded-card border border-black/30 bg-white px-4 py-3 text-black placeholder:text-black/60 transition-colors focus:border-brand";

/** Only same-site paths under /learn/ are allowed as a return address. */
function safeNext(): string {
  try {
    const n = new URLSearchParams(window.location.search).get("next");
    if (n && n.startsWith("/learn/") && !n.startsWith("//")) return n;
  } catch {
    /* ignore */
  }
  return "/learn/dashboard/";
}

export default function AuthForm({ mode }: { mode: "register" | "sign-in" }) {
  const { ready, user, signIn, signUp, preview } = useLearn();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const register = mode === "register";

  useEffect(() => {
    if (ready && user) window.location.assign(safeNext());
  }, [ready, user]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setNotice("");
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const email = String(f.get("email") ?? "").trim();
    const password = String(f.get("password") ?? "");
    if (register && name.length < 2) return setError("Please enter your full name.");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Please enter a valid email address.");
    if (register && password.length < 8) return setError("Choose a password of at least 8 characters.");
    if (!register && !password) return setError("Please enter your password.");
    setBusy(true);
    const r = register ? await signUp(name, email, password) : await signIn(email, password);
    setBusy(false);
    if (r.error) return setError(r.error);
    if (r.needsConfirm) return setNotice("Almost there. We sent a confirmation link to your email. Open it, then sign in.");
  }

  return (
    <div className="mx-auto max-w-md rounded-tile border border-black/10 bg-white p-6 shadow-soft sm:p-8">
      <h2 className="text-4xl font-semibold text-brand">{register ? "Create your free account" : "Welcome back"}</h2>
      <p className="mt-2 text-black/70">
        {register ? "Register once, then enrol in as many free courses as you like." : "Sign in to continue where you stopped."}
      </p>

      <form onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
        {register && (
          <div>
            <label htmlFor="al-name" className="font-semibold text-brand">Full name</label>
            <input id="al-name" name="name" type="text" autoComplete="name" required className={field} />
          </div>
        )}
        <div>
          <label htmlFor="al-email" className="font-semibold text-brand">Email address</label>
          <input id="al-email" name="email" type="email" autoComplete="email" required className={field} />
        </div>
        <div>
          <label htmlFor="al-password" className="font-semibold text-brand">Password</label>
          <input
            id="al-password"
            name="password"
            type="password"
            autoComplete={register ? "new-password" : "current-password"}
            required
            minLength={register ? 8 : undefined}
            className={field}
          />
          {register && <p className="mt-1 text-sm text-black/70">At least 8 characters.</p>}
        </div>

        <button
          type="submit"
          disabled={busy}
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-card border-2 border-accent bg-accent px-8 py-3 text-base font-bold text-navy shadow-soft transition-all duration-200 hover:bg-accent/90 hover:shadow-lift active:scale-[0.98] disabled:opacity-60"
        >
          {busy ? "Please wait…" : register ? "Create account" : "Sign in"}
        </button>

        <div aria-live="polite">
          {error && (
            <p className="flex items-start gap-2 rounded-card border border-black/30 p-3 text-sm font-medium">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {error}
            </p>
          )}
          {notice && (
            <p className="flex items-start gap-2 rounded-card border border-brand bg-brand/5 p-3 text-sm font-medium text-brand">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {notice}
            </p>
          )}
        </div>
      </form>

      <p className="mt-6 text-sm text-black/70">
        {register ? "Already have an account? " : "New here? "}
        <Link href={register ? "/learn/sign-in/" : "/learn/register/"} className="font-bold text-brand underline">
          {register ? "Sign in" : "Create a free account"}
        </Link>
      </p>
      {preview && (
        <p className="mt-3 text-xs text-black/70">
          Preview mode: this sign-in only works on this device until the platform is connected, and no password is checked.
        </p>
      )}
    </div>
  );
}
