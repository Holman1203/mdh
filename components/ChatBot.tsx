"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { answer, greeting, quickReplies, type Reply } from "@/lib/chat";

type Msg = { from: "bot" | "user"; text: string; links?: Reply["links"] };

/**
 * Website assistant: opens a chat window, answers from the site's own information, offers quick-reply buttons
 * and hands over to WhatsApp for anything it cannot answer. Nothing typed here leaves the visitor's browser.
 */
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open && msgs.length === 0) setMsgs([{ from: "bot", ...greeting }]);
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open, msgs.length]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [msgs, typing, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function ask(q: string) {
    const clean = q.trim().slice(0, 300);
    if (!clean || typing) return;
    setMsgs((m) => [...m, { from: "user", text: clean }]);
    setText("");
    setTyping(true);
    const reply = answer(clean);
    setTimeout(() => {
      setMsgs((m) => [...m, { from: "bot", ...reply }]);
      setTyping(false);
    }, 550);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    ask(text);
  }

  const linkCls =
    "inline-flex min-h-[36px] items-center rounded-full border border-brand/40 bg-white px-3 text-sm font-semibold text-brand transition-colors hover:bg-brand/10";

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="Chat with the MAMREX HUB assistant"
          className="fixed bottom-24 right-4 z-40 flex h-[min(34rem,calc(100svh-8rem))] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-tile border border-black/10 bg-white shadow-lift sm:right-6"
        >
          <div className="on-navy flex items-center justify-between gap-3 bg-navy px-4 py-3 text-snow">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-navy">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold leading-tight">MAMREX HUB assistant</p>
                <p className="text-xs text-snow/80">Ask me anything about us</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                btnRef.current?.focus();
              }}
              aria-label="Close chat"
              className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-snow/10"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4" role="log" aria-live="polite" aria-label="Conversation">
            {msgs.map((m, i) => (
              <div key={i} className={m.from === "user" ? "flex justify-end" : "flex justify-start"}>
                <div className="max-w-[88%]">
                  <p
                    className={`whitespace-pre-line rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed ${
                      m.from === "user" ? "rounded-br-md bg-accent font-medium text-navy" : "rounded-bl-md bg-brand/10 text-black"
                    }`}
                  >
                    {m.text}
                  </p>
                  {m.links && m.links.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {m.links.map((l) =>
                        l.external ? (
                          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={linkCls}>
                            {l.label}
                          </a>
                        ) : (
                          <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={linkCls}>
                            {l.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start" role="status" aria-label="Assistant is typing">
                <span className="flex gap-1 rounded-2xl rounded-bl-md bg-brand/10 px-4 py-3">
                  {[0, 1, 2].map((d) => (
                    <span key={d} className="h-2 w-2 animate-twinkle rounded-full bg-brand" style={{ animationDelay: `${d * -0.6}s` }} />
                  ))}
                </span>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-black/10 px-3 pt-3">
            <div className="flex gap-2 overflow-x-auto pb-3">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => ask(q)}
                  disabled={typing}
                  className="shrink-0 rounded-full border border-brand/40 px-3 py-1.5 text-sm font-semibold text-brand transition-colors hover:bg-brand/10 disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>
            <form onSubmit={onSubmit} className="flex gap-2 pb-3">
              <label htmlFor="chat-input" className="sr-only">
                Type your question
              </label>
              <input
                id="chat-input"
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={300}
                placeholder="Type your question…"
                autoComplete="off"
                className="min-h-[44px] flex-1 rounded-card border border-black/30 bg-white px-3 text-[15px] text-black placeholder:text-black/60"
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={!text.trim() || typing}
                className="flex h-11 w-11 items-center justify-center rounded-card bg-accent text-navy transition-colors hover:bg-accent/90 disabled:opacity-50"
              >
                <Send className="h-5 w-5" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat with the MAMREX HUB assistant"}
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-navy shadow-lift transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/90 active:scale-95"
      >
        {open ? <X className="h-7 w-7" aria-hidden="true" /> : <MessageCircle className="h-7 w-7" aria-hidden="true" />}
      </button>
    </>
  );
}
