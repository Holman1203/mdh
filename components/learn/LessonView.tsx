"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Award, CheckCircle2, XCircle } from "lucide-react";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { PASS_MARK, type Course } from "@/lib/courses";
import { useLearn } from "./LearnProvider";

export default function LessonView({ course, index }: { course: Course; index: number }) {
  const { ready, user, isEnrolled, enrol, complete, doneLessons, courseComplete } = useLearn();
  const lesson = course.lessons[index];
  const prev = course.lessons[index - 1];
  const next = course.lessons[index + 1];
  const here = `/learn/${course.slug}/${lesson.slug}/`;
  const courseHome = `/learn/${course.slug}/`;

  const [picked, setPicked] = useState<(number | null)[]>(() => lesson.quiz.map(() => null));
  const [checked, setChecked] = useState(false);
  const [busy, setBusy] = useState(false);
  const [saveError, setSaveError] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [lesson.slug]);

  if (!ready) {
    return (
      <Section>
        <p className="text-black/70" role="status">Loading your lesson…</p>
      </Section>
    );
  }

  if (!user) {
    return (
      <Section>
        <div className="mx-auto max-w-lg rounded-tile border border-black/10 bg-white p-8 text-center shadow-soft">
          <h1 className="text-4xl font-bold text-brand">Sign in to start learning</h1>
          <p className="mt-3 text-black/70">Register free to unlock every lesson and keep your progress.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href={`/learn/register/?next=${here}`}>Register free</Button>
            <Button href={`/learn/sign-in/?next=${here}`} variant="secondary">Sign in</Button>
          </div>
        </div>
      </Section>
    );
  }

  if (!isEnrolled(course.slug)) {
    return (
      <Section>
        <div className="mx-auto max-w-lg rounded-tile border border-black/10 bg-white p-8 text-center shadow-soft">
          <h1 className="text-4xl font-bold text-brand">Enrol to continue</h1>
          <p className="mt-3 text-black/70">Enrol free in <strong>{course.title}</strong> to open this lesson.</p>
          <div className="mt-6">
            <button
              type="button"
              disabled={busy}
              onClick={async () => {
                setBusy(true);
                await enrol(course.slug);
                setBusy(false);
              }}
              className="inline-flex min-h-[48px] items-center justify-center rounded-card border-2 border-accent bg-accent px-6 py-3 font-bold text-navy shadow-soft hover:bg-accent/90 disabled:opacity-60"
            >
              {busy ? "Enrolling…" : "Enrol free"}
            </button>
          </div>
        </div>
      </Section>
    );
  }

  const done = doneLessons(course.slug).includes(lesson.slug);
  const allAnswered = picked.every((p) => p !== null);
  const score = lesson.quiz.reduce((n, q, i) => n + (picked[i] === q.answer ? 1 : 0), 0);
  const passed = score / lesson.quiz.length >= PASS_MARK;
  const pct = Math.round(((index + (done ? 1 : 0)) / course.lessons.length) * 100);
  const finished = courseComplete(course.slug);

  async function check() {
    setChecked(true);
    setSaveError("");
    if (passed) {
      setBusy(true);
      try {
        await complete(course.slug, lesson.slug, score, lesson.quiz.length);
      } catch {
        setSaveError("We could not save your progress. Check your connection and try again.");
      }
      setBusy(false);
    }
  }

  function retry() {
    setPicked(lesson.quiz.map(() => null));
    setChecked(false);
  }

  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-sm text-black/70">
          <Link href="/learn/" className="underline">Learn</Link> /{" "}
          <Link href={courseHome} className="underline">{course.title}</Link>
        </nav>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          Lesson {index + 1} of {course.lessons.length} · {lesson.minutes} min
          {done && " · Completed"}
        </p>
        <h1 className="mt-2 text-5xl font-extrabold leading-[1.05] text-brand sm:text-6xl">{lesson.title}</h1>
        <div
          className="mt-5 h-2 overflow-hidden rounded-full bg-black/10"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Course progress"
        >
          <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${pct}%` }} />
        </div>

        <div className="mt-10 space-y-8">
          {lesson.blocks.map((b, i) => (
            <div key={i}>
              {b.h && <h2 className="text-3xl font-bold text-brand">{b.h}</h2>}
              {b.p?.map((t, j) => (
                <p key={j} className="mt-3 text-lg leading-relaxed text-black/80">{t}</p>
              ))}
              {b.list && (
                <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-relaxed text-black/80 marker:text-accent">
                  {b.list.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-tile border border-black/10 bg-accent/[0.08] p-6">
          <h2 className="text-2xl font-bold text-brand">Key takeaways</h2>
          <ul className="mt-3 space-y-2">
            {lesson.takeaways.map((t) => (
              <li key={t} className="flex gap-3 text-black/80">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 rounded-tile border border-black/10 bg-white p-6 shadow-soft sm:p-8">
          <h2 className="text-3xl font-bold text-brand">Quick check</h2>
          <p className="mt-1 text-black/70">Answer the questions to complete this lesson. You need at least half right.</p>

          <div className="mt-6 space-y-8">
            {lesson.quiz.map((q, qi) => (
              <fieldset key={qi} disabled={checked && passed}>
                <legend className="text-lg font-bold text-black">
                  {qi + 1}. {q.q}
                </legend>
                <div className="mt-3 space-y-2">
                  {q.options.map((o, oi) => {
                    const sel = picked[qi] === oi;
                    const showRight = checked && oi === q.answer;
                    const showWrong = checked && sel && oi !== q.answer;
                    return (
                      <label
                        key={oi}
                        className={`flex min-h-[48px] cursor-pointer items-center gap-3 rounded-card border-2 px-4 py-3 transition-colors ${
                          showRight ? "border-brand bg-brand/5" : showWrong ? "border-black bg-black/5" : sel ? "border-accent bg-accent/10" : "border-black/15 hover:border-brand/40"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`q${qi}`}
                          checked={sel}
                          onChange={() => {
                            const p = [...picked];
                            p[qi] = oi;
                            setPicked(p);
                            if (checked && !passed) setChecked(false);
                          }}
                          className="h-4 w-4 accent-[#FF7A00]"
                        />
                        <span className="flex-1">{o}</span>
                        {showRight && <CheckCircle2 className="h-5 w-5 text-brand" aria-label="Correct" />}
                        {showWrong && <XCircle className="h-5 w-5" aria-label="Not correct" />}
                      </label>
                    );
                  })}
                </div>
                {checked && <p className="mt-2 text-sm text-black/70"><strong>Why:</strong> {q.why}</p>}
              </fieldset>
            ))}
          </div>

          <div className="mt-6" aria-live="polite">
            {!checked && (
              <button
                type="button"
                onClick={check}
                disabled={!allAnswered || busy}
                className="inline-flex min-h-[48px] items-center justify-center rounded-card border-2 border-accent bg-accent px-6 py-3 font-bold text-navy shadow-soft transition-all hover:bg-accent/90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {busy ? "Saving…" : "Check my answers"}
              </button>
            )}
            {checked && passed && (
              <p className="flex items-center gap-2 font-bold text-brand">
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> You scored {score} of {lesson.quiz.length}. Lesson complete!
              </p>
            )}
            {checked && !passed && (
              <div className="flex flex-wrap items-center gap-4">
                <p className="font-bold">You scored {score} of {lesson.quiz.length}. Re-read the lesson and try again.</p>
                <button type="button" onClick={retry} className="rounded-card border-2 border-brand px-5 py-2 font-semibold text-brand hover:bg-brand/10">
                  Try again
                </button>
              </div>
            )}
            {saveError && <p className="mt-2 text-sm font-medium">{saveError}</p>}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
          {prev ? (
            <Button href={`/learn/${course.slug}/${prev.slug}/`} variant="secondary">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Previous
            </Button>
          ) : (
            <Button href={courseHome} variant="secondary">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Course page
            </Button>
          )}
          {(done || (checked && passed)) &&
            (next ? (
              <Button href={`/learn/${course.slug}/${next.slug}/`}>
                Next lesson <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            ) : (
              <Button href={finished || (checked && passed) ? `${courseHome}certificate/` : courseHome}>
                <Award className="h-5 w-5" aria-hidden="true" /> Finish and get certificate
              </Button>
            ))}
        </div>
      </div>
    </Section>
  );
}
