"use client";

import Link from "next/link";
import { useState } from "react";
import { Award, CheckCircle2, Circle, Clock, Lock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { totalMinutes, type Course } from "@/lib/courses";
import { useLearn } from "./LearnProvider";

export default function CourseView({ course }: { course: Course }) {
  const { ready, user, isEnrolled, enrol, doneLessons, courseComplete } = useLearn();
  const [busy, setBusy] = useState(false);
  const enrolled = !!user && isEnrolled(course.slug);
  const done = user ? doneLessons(course.slug) : [];
  const next = course.lessons.find((l) => !done.includes(l.slug)) ?? course.lessons[0];
  const complete = !!user && courseComplete(course.slug);
  const here = `/learn/${course.slug}/`;

  return (
    <>
      <PageHero eyebrow={`${course.pillar} · Free course`} title={course.title} intro={course.tagline}>
        {!ready ? null : !user ? (
          <>
            <Button href={`/learn/register/?next=${here}`}>Register free to start</Button>
            <Button href={`/learn/sign-in/?next=${here}`} variant="light">
              Sign in
            </Button>
          </>
        ) : !enrolled ? (
          <button
            type="button"
            disabled={busy}
            onClick={async () => {
              setBusy(true);
              await enrol(course.slug);
              setBusy(false);
            }}
            className="inline-flex min-h-[48px] items-center justify-center rounded-card border-2 border-accent bg-accent px-6 py-3 text-base font-bold text-navy shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/90 active:scale-[0.98] disabled:opacity-60"
          >
            {busy ? "Enrolling…" : "Enrol free"}
          </button>
        ) : complete ? (
          <Button href={`${here}certificate/`}>
            <Award className="h-5 w-5" aria-hidden="true" /> Get your certificate
          </Button>
        ) : (
          <Button href={`${here}${next.slug}/`}>{done.length ? "Continue learning" : "Start the first lesson"}</Button>
        )}
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading eyebrow="Lessons" title="What you will learn" />
            <ol className="mt-8 space-y-3">
              {course.lessons.map((l, i) => {
                const isDone = done.includes(l.slug);
                const open = enrolled;
                const row = (
                  <div className="flex items-start gap-4 rounded-tile border border-black/10 bg-white p-5 shadow-soft transition-all duration-200 group-hover:border-brand/30">
                    <span className="mt-0.5 shrink-0 text-brand" aria-hidden="true">
                      {isDone ? <CheckCircle2 className="h-6 w-6" /> : open ? <Circle className="h-6 w-6" /> : <Lock className="h-6 w-6" />}
                    </span>
                    <span className="flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-black/70">
                        Lesson {i + 1} · {l.minutes} min
                        {isDone && " · Completed"}
                      </span>
                      <span className="mt-1 block text-2xl font-bold text-brand">{l.title}</span>
                      <span className="mt-1 block text-black/70">{l.summary}</span>
                    </span>
                  </div>
                );
                return (
                  <li key={l.slug}>
                    {open ? (
                      <Link href={`${here}${l.slug}/`} className="group block">
                        {row}
                      </Link>
                    ) : (
                      <div className="group">{row}</div>
                    )}
                  </li>
                );
              })}
            </ol>
            {!enrolled && ready && (
              <p className="mt-4 text-sm text-black/70">
                {user ? "Enrol above to unlock the lessons." : "Register free to unlock the lessons."}
              </p>
            )}
          </div>

          <aside className="space-y-6 lg:pt-16">
            <div className="rounded-tile border border-black/10 bg-white p-6 shadow-soft">
              <h3 className="text-2xl font-semibold text-brand">By the end you can</h3>
              <ul className="mt-4 space-y-3">
                {course.outcomes.map((o) => (
                  <li key={o} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                    <span className="text-black/80">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-tile border border-black/10 bg-accent/[0.08] p-6">
              <p className="flex items-center gap-2 font-semibold text-brand">
                <Clock className="h-5 w-5" aria-hidden="true" /> About {Math.ceil(totalMinutes(course) / 10) * 10} minutes in total
              </p>
              <p className="mt-2 text-black/70">
                <strong>Who it is for:</strong> {course.audience}
              </p>
              <p className="mt-2 text-black/70">
                <strong>Level:</strong> {course.level}. Free, self-paced, no experience needed.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
