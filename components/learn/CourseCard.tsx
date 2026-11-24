"use client";

import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import Icon from "@/components/Icon";
import { totalMinutes, type Course } from "@/lib/courses";
import { useLearn } from "./LearnProvider";

export default function CourseCard({ course }: { course: Course }) {
  const { user, doneLessons, isEnrolled } = useLearn();
  const done = user ? doneLessons(course.slug).length : 0;
  const total = course.lessons.length;
  const pct = Math.round((done / total) * 100);
  const enrolled = user ? isEnrolled(course.slug) : false;

  return (
    <Link
      href={`/learn/${course.slug}/`}
      className="group flex h-full flex-col rounded-tile border border-black/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-card bg-accent text-navy">
          <Icon name={course.icon} />
        </span>
        <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
          Free
        </span>
      </div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-black/70">{course.pillar}</p>
      <h3 className="mt-1 text-3xl font-bold tracking-wide text-brand">{course.title}</h3>
      <p className="mt-2 flex-1 leading-relaxed text-black/70">{course.tagline}</p>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-black/70">
        <span className="inline-flex items-center gap-1.5">
          <BookOpen className="h-4 w-4" aria-hidden="true" /> {total} lessons
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-4 w-4" aria-hidden="true" /> about {Math.ceil(totalMinutes(course) / 10) * 10} min
        </span>
        <span>{course.level}</span>
      </div>

      {enrolled && (
        <div className="mt-4">
          <div className="h-2 overflow-hidden rounded-full bg-black/10" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${course.title} progress`}>
            <div className="h-full rounded-full bg-accent" style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-1 text-sm font-semibold text-brand">{done} of {total} lessons done</p>
        </div>
      )}

      <span className="mt-5 inline-flex items-center gap-2 font-bold text-brand">
        {enrolled ? (done === total ? "View course" : "Continue") : "View course"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
