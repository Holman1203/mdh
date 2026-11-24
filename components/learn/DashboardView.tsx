"use client";

import Link from "next/link";
import { Award } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { courses } from "@/lib/courses";
import CourseCard from "./CourseCard";
import { useLearn } from "./LearnProvider";

export default function DashboardView() {
  const { ready, user, enrolments, courseComplete, signOut } = useLearn();

  if (!ready) {
    return (
      <Section>
        <p className="text-black/70" role="status">Loading your learning…</p>
      </Section>
    );
  }

  if (!user) {
    return (
      <Section>
        <div className="mx-auto max-w-lg rounded-tile border border-black/10 bg-white p-8 text-center shadow-soft">
          <h1 className="text-4xl font-semibold text-brand">Sign in to see your courses</h1>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/learn/sign-in/">Sign in</Button>
            <Button href="/learn/register/" variant="secondary">Register free</Button>
          </div>
        </div>
      </Section>
    );
  }

  const mine = courses.filter((c) => enrolments.some((e) => e.course === c.slug));
  const others = courses.filter((c) => !mine.includes(c));
  const certs = mine.filter((c) => courseComplete(c.slug));

  return (
    <>
      <PageHero eyebrow="My learning" title={`Welcome, ${user.name.split(" ")[0]}`} intro="Pick up where you stopped, or start another free course.">
        <button
          type="button"
          onClick={() => signOut().then(() => window.location.assign("/learn/"))}
          className="inline-flex min-h-[48px] items-center justify-center rounded-card border-2 border-snow/80 px-6 py-3 font-semibold text-snow hover:bg-snow/10"
        >
          Sign out
        </button>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="My courses" title={mine.length ? "Keep going" : "Start your first course"} />
        {mine.length ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mine.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        ) : (
          <p className="mt-6 max-w-xl text-lg text-black/70">
            You have not enrolled in a course yet. Choose one below. They are all free.
          </p>
        )}

        {certs.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-semibold text-brand">My certificates</h2>
            <ul className="mt-4 space-y-2">
              {certs.map((c) => (
                <li key={c.slug}>
                  <Link href={`/learn/${c.slug}/certificate/`} className="inline-flex items-center gap-2 font-semibold text-brand underline">
                    <Award className="h-5 w-5" aria-hidden="true" /> {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      {others.length > 0 && (
        <Section tone="tint">
          <SectionHeading eyebrow="More free courses" title="Learn something new" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
