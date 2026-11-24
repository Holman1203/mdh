"use client";

import { useEffect, useMemo, useState } from "react";
import { Download } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { checkIsAdmin, fetchAdminData, type AdminEnrolment, type AdminLearner } from "@/lib/learn";
import { courses, getCourse } from "@/lib/courses";
import { useLearn } from "./LearnProvider";

const fmt = (iso: string | null) =>
  iso ? new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "—";

/** CSV-safe cell: quotes are doubled and a leading apostrophe stops spreadsheet formula injection. */
const cell = (v: string | number | null) => {
  let s = v === null || v === undefined ? "" : String(v);
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
  return '"' + s.replace(/"/g, '""') + '"';
};

function download(name: string, rows: (string | number | null)[][]) {
  const csv = rows.map((r) => r.map(cell).join(",")).join("\r\n");
  const url = URL.createObjectURL(new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

const csvBtn =
  "inline-flex min-h-[44px] items-center gap-2 rounded-card border-2 border-brand px-4 py-2 font-semibold text-brand hover:bg-brand/10";

export default function AdminView() {
  const { ready, user, preview } = useLearn();
  const [state, setState] = useState<"checking" | "denied" | "ok" | "error">("checking");
  const [learners, setLearners] = useState<AdminLearner[]>([]);
  const [enrolments, setEnrolments] = useState<AdminEnrolment[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (!ready) return;
    if (!user || preview) {
      setState("denied");
      return;
    }
    let alive = true;
    (async () => {
      if (!(await checkIsAdmin())) {
        if (alive) setState("denied");
        return;
      }
      const d = await fetchAdminData();
      if (!alive) return;
      if (d.error) {
        setState("error");
        return;
      }
      setLearners(d.learners);
      setEnrolments(d.enrolments);
      setState("ok");
    })();
    return () => {
      alive = false;
    };
  }, [ready, user, preview]);

  const perCourse = useMemo(
    () =>
      courses.map((c) => {
        const rows = enrolments.filter((e) => e.course === c.slug);
        return {
          slug: c.slug,
          title: c.title,
          enrolled: rows.length,
          completed: rows.filter((r) => r.lessons_done >= c.lessons.length).length,
        };
      }),
    [enrolments]
  );

  const shown = learners.filter((l) => `${l.full_name} ${l.email}`.toLowerCase().includes(filter.toLowerCase()));

  if (state === "checking") {
    return (
      <Section>
        <p className="text-black/70" role="status">Checking access…</p>
      </Section>
    );
  }

  if (state === "denied" || state === "error") {
    return (
      <Section>
        <div className="mx-auto max-w-lg rounded-tile border border-black/10 bg-white p-8 text-center shadow-soft">
          <h1 className="text-4xl font-semibold text-brand">{state === "error" ? "Could not load the data" : "Admin access only"}</h1>
          <p className="mt-3 text-black/70">
            {state === "error"
              ? "Please refresh the page and try again."
              : user
                ? "This account does not have admin access."
                : "Sign in with an admin account to continue."}
          </p>
          {!user && (
            <div className="mt-6">
              <Button href="/learn/sign-in/?next=/learn/admin/">Sign in</Button>
            </div>
          )}
        </div>
      </Section>
    );
  }

  const stats: [string, number][] = [
    ["Registered learners", learners.length],
    ["Course enrolments", enrolments.length],
    ["Lessons completed", learners.reduce((n, l) => n + l.lessons_completed, 0)],
    ["Courses completed", perCourse.reduce((n, c) => n + c.completed, 0)],
  ];

  return (
    <>
      <PageHero
        eyebrow="Admin"
        title="Learner overview"
        intro="Everyone who registered, what they enrolled in and how far they got. Visible only to admin accounts."
      />
      <Section>
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map(([label, value]) => (
            <div key={label} className="rounded-tile border border-black/10 bg-white p-5 shadow-soft">
              <dt className="text-sm font-medium text-black/70">{label}</dt>
              <dd className="font-heading text-5xl text-brand">{value}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-12 text-3xl font-semibold text-brand">By course</h2>
        <div className="mt-4 overflow-x-auto rounded-tile border border-black/10 bg-white shadow-soft">
          <table className="w-full min-w-[480px] text-left">
            <thead className="bg-accent/[0.12] text-sm uppercase tracking-wider text-brand">
              <tr>
                <th className="p-3">Course</th>
                <th className="p-3">Enrolled</th>
                <th className="p-3">Completed</th>
              </tr>
            </thead>
            <tbody>
              {perCourse.map((c) => (
                <tr key={c.slug} className="border-t border-black/10">
                  <td className="p-3 font-semibold">{c.title}</td>
                  <td className="p-3">{c.enrolled}</td>
                  <td className="p-3">{c.completed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold text-brand">Learners</h2>
          <div className="flex flex-wrap items-center gap-3">
            <label className="sr-only" htmlFor="adm-filter">Search learners</label>
            <input
              id="adm-filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search name or email"
              className="min-h-[44px] rounded-card border border-black/30 bg-white px-4 py-2 text-black placeholder:text-black/60"
            />
            <button
              type="button"
              className={csvBtn}
              onClick={() =>
                download("mamrex-learners.csv", [
                  ["Name", "Email", "Registered", "Last sign-in", "Courses enrolled", "Lessons completed"],
                  ...learners.map((l) => [l.full_name, l.email, fmt(l.registered_at), fmt(l.last_sign_in), l.courses_enrolled, l.lessons_completed]),
                ])
              }
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Learners CSV
            </button>
            <button
              type="button"
              className={csvBtn}
              onClick={() =>
                download("mamrex-enrolments.csv", [
                  ["Name", "Email", "Course", "Enrolled", "Lessons done", "Lessons in course", "Last activity"],
                  ...enrolments.map((e) => [
                    e.full_name,
                    e.email,
                    getCourse(e.course)?.title ?? e.course,
                    fmt(e.enrolled_at),
                    e.lessons_done,
                    getCourse(e.course)?.lessons.length ?? "",
                    fmt(e.last_activity),
                  ]),
                ])
              }
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Enrolments CSV
            </button>
          </div>
        </div>

        <div className="mt-4 overflow-x-auto rounded-tile border border-black/10 bg-white shadow-soft">
          <table className="w-full min-w-[720px] text-left">
            <thead className="bg-accent/[0.12] text-sm uppercase tracking-wider text-brand">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Registered</th>
                <th className="p-3">Courses</th>
                <th className="p-3">Lessons done</th>
              </tr>
            </thead>
            <tbody>
              {shown.map((l) => (
                <tr key={l.user_id} className="border-t border-black/10">
                  <td className="p-3 font-semibold">{l.full_name || "—"}</td>
                  <td className="break-all p-3">{l.email}</td>
                  <td className="p-3">{fmt(l.registered_at)}</td>
                  <td className="p-3">{l.courses_enrolled}</td>
                  <td className="p-3">{l.lessons_completed}</td>
                </tr>
              ))}
              {!shown.length && (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-black/70">
                    {learners.length ? "No learners match your search." : "No one has registered yet."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}
