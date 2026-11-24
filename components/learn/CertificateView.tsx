"use client";

import { Printer } from "lucide-react";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { LogoFull } from "@/components/Logo";
import type { Course } from "@/lib/courses";
import { useLearn } from "./LearnProvider";

export default function CertificateView({ course }: { course: Course }) {
  const { ready, user, results, courseComplete } = useLearn();

  if (!ready) {
    return (
      <Section>
        <p className="text-black/70" role="status">Loading…</p>
      </Section>
    );
  }

  if (!user || !courseComplete(course.slug)) {
    return (
      <Section>
        <div className="mx-auto max-w-lg rounded-tile border border-black/10 bg-white p-8 text-center shadow-soft">
          <h1 className="text-4xl font-semibold text-brand">Certificate not ready yet</h1>
          <p className="mt-3 text-black/70">
            {user ? "Complete every lesson in this course to unlock your certificate." : "Sign in to view your certificate."}
          </p>
          <div className="mt-6">
            <Button href={user ? `/learn/${course.slug}/` : "/learn/sign-in/"}>{user ? "Back to the course" : "Sign in"}</Button>
          </div>
        </div>
      </Section>
    );
  }

  const when = results
    .filter((r) => r.course === course.slug)
    .map((r) => new Date(r.at).getTime())
    .reduce((a, b) => Math.max(a, b), 0);
  const date = new Date(when || Date.now()).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <Section>
      <div className="mx-auto max-w-4xl">
        <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-4xl font-semibold text-brand">Your certificate</h1>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex min-h-[48px] items-center gap-2 rounded-card border-2 border-accent bg-accent px-6 py-3 font-bold text-navy shadow-soft hover:bg-accent/90"
          >
            <Printer className="h-5 w-5" aria-hidden="true" /> Print or save as PDF
          </button>
        </div>

        <div className="certificate rounded-tile border-[10px] border-double border-navy bg-white p-8 text-center text-black sm:p-14">
          <div className="flex justify-center">
            <LogoFull className="h-14 w-auto" />
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-black/70">Certificate of completion</p>
          <p className="mt-6 text-lg text-black/70">This certifies that</p>
          <p className="mt-2 break-words font-heading text-6xl text-navy sm:text-7xl">{user.name}</p>
          <p className="mt-6 text-lg text-black/70">has successfully completed the free online course</p>
          <p className="mx-auto mt-2 max-w-2xl font-heading text-4xl text-navy sm:text-5xl">{course.title}</p>
          <p className="mt-2 text-black/70">{course.pillar} · {course.lessons.length} lessons</p>
          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-accent" aria-hidden="true" />
          <p className="mt-6 font-semibold text-black">{date}</p>
          <p className="mt-1 text-sm text-black/70">Mamrex Digital Hub Ltd · Maiduguri, Nigeria</p>
          <p className="mt-6 text-xs text-black/60">
            Online, self-paced course. This certificate confirms completion of the lessons and quizzes and is not an accredited qualification.
          </p>
        </div>
      </div>
    </Section>
  );
}
