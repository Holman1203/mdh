"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  cloudMode,
  enrolInCourse,
  getCurrentLearner,
  loadLearnerData,
  saveLessonResult,
  signIn as doSignIn,
  signOut as doSignOut,
  signUp as doSignUp,
  type AuthResult,
  type Enrolment,
  type Learner,
  type LessonResult,
} from "@/lib/learn";
import { courses, getCourse } from "@/lib/courses";

type Ctx = {
  ready: boolean;
  user: Learner | null;
  enrolments: Enrolment[];
  results: LessonResult[];
  preview: boolean;
  signUp: (name: string, email: string, password: string) => Promise<AuthResult>;
  signIn: (email: string, password: string) => Promise<AuthResult>;
  signOut: () => Promise<void>;
  enrol: (course: string) => Promise<void>;
  complete: (course: string, lesson: string, score: number, total: number) => Promise<void>;
  isEnrolled: (course: string) => boolean;
  doneLessons: (course: string) => string[];
  courseComplete: (course: string) => boolean;
};

const LearnContext = createContext<Ctx | null>(null);

export function useLearn(): Ctx {
  const c = useContext(LearnContext);
  if (!c) throw new Error("useLearn must be used inside LearnProvider");
  return c;
}

export default function LearnProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<Learner | null>(null);
  const [enrolments, setEnrolments] = useState<Enrolment[]>([]);
  const [results, setResults] = useState<LessonResult[]>([]);

  const hydrate = useCallback(async (u: Learner | null) => {
    setUser(u);
    if (u) {
      const d = await loadLearnerData(u.id);
      setEnrolments(d.enrolments);
      setResults(d.results);
    } else {
      setEnrolments([]);
      setResults([]);
    }
  }, []);

  useEffect(() => {
    let alive = true;
    getCurrentLearner()
      .then((u) => (alive ? hydrate(u) : undefined))
      .catch(() => undefined)
      .finally(() => alive && setReady(true));
    return () => {
      alive = false;
    };
  }, [hydrate]);

  const value = useMemo<Ctx>(
    () => ({
      ready,
      user,
      enrolments,
      results,
      preview: !cloudMode,
      signUp: async (name, email, password) => {
        const r = await doSignUp(name, email, password);
        if (r.user) await hydrate(r.user);
        return r;
      },
      signIn: async (email, password) => {
        const r = await doSignIn(email, password);
        if (r.user) await hydrate(r.user);
        return r;
      },
      signOut: async () => {
        await doSignOut();
        await hydrate(null);
      },
      enrol: async (course) => {
        if (!user) return;
        await enrolInCourse(user.id, course);
        setEnrolments((e) => (e.some((x) => x.course === course) ? e : [...e, { course, at: new Date().toISOString() }]));
      },
      complete: async (course, lesson, score, total) => {
        if (!user) return;
        await saveLessonResult(user.id, course, lesson, score, total);
        setResults((r) => [
          ...r.filter((x) => !(x.course === course && x.lesson === lesson)),
          { course, lesson, score, total, at: new Date().toISOString() },
        ]);
      },
      isEnrolled: (course) => enrolments.some((e) => e.course === course),
      doneLessons: (course) => results.filter((r) => r.course === course).map((r) => r.lesson),
      courseComplete: (course) => {
        const c = getCourse(course);
        if (!c) return false;
        const done = new Set(results.filter((r) => r.course === course).map((r) => r.lesson));
        return c.lessons.every((l) => done.has(l.slug));
      },
    }),
    [ready, user, enrolments, results, hydrate]
  );

  return <LearnContext.Provider value={value}>{children}</LearnContext.Provider>;
}

export { courses };
