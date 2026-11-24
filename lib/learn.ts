import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Data layer for Mamrex Learn.
 *  - With NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY set: real accounts and saved progress (Supabase).
 *  - Without them: PREVIEW MODE. Everything is saved only in this browser (for testing the design).
 */

export type Learner = { id: string; email: string; name: string };
export type Enrolment = { course: string; at: string };
export type LessonResult = { course: string; lesson: string; score: number; total: number; at: string };
export type AuthResult = { user: Learner | null; error?: string; needsConfirm?: boolean };

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const cloudMode = Boolean(URL && KEY);

let sb: SupabaseClient | null = null;
function client(): SupabaseClient | null {
  if (!cloudMode) return null;
  if (!sb) sb = createClient(URL as string, KEY as string);
  return sb;
}

const toLearner = (u: { id: string; email?: string | null; user_metadata?: Record<string, unknown> }): Learner => ({
  id: u.id,
  email: u.email ?? "",
  name: String(u.user_metadata?.full_name ?? (u.email ?? "").split("@")[0] ?? "Learner"),
});

/* ───────────── preview-mode helpers (this browser only) ───────────── */
const LS_USERS = "mdh-learn-users";
const LS_SESSION = "mdh-learn-session";
const lsDataKey = (id: string) => `mdh-learn-data-${id}`;
const read = <T,>(key: string, fallback: T): T => {
  try {
    const v = window.localStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch {
    return fallback;
  }
};
const write = (key: string, value: unknown) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable */
  }
};
type LocalData = { enrolments: Enrolment[]; results: LessonResult[] };

/* ───────────── auth ───────────── */
export async function getCurrentLearner(): Promise<Learner | null> {
  const c = client();
  if (c) {
    const { data } = await c.auth.getSession();
    return data.session?.user ? toLearner(data.session.user) : null;
  }
  return read<Learner | null>(LS_SESSION, null);
}

export async function signUp(name: string, email: string, password: string): Promise<AuthResult> {
  const c = client();
  if (c) {
    const { data, error } = await c.auth.signUp({
      email,
      password,
      options: { data: { full_name: name }, emailRedirectTo: `${window.location.origin}/learn/dashboard/` },
    });
    if (error) return { user: null, error: error.message };
    if (!data.session) return { user: null, needsConfirm: true };
    return { user: data.user ? toLearner(data.user) : null };
  }
  const users = read<Learner[]>(LS_USERS, []);
  const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (existing) return { user: null, error: "An account with this email already exists. Please sign in." };
  const user: Learner = { id: `local-${Date.now()}`, email, name };
  write(LS_USERS, [...users, user]);
  write(LS_SESSION, user);
  return { user };
}

export async function signIn(email: string, password: string): Promise<AuthResult> {
  const c = client();
  if (c) {
    const { data, error } = await c.auth.signInWithPassword({ email, password });
    if (error) return { user: null, error: error.message };
    return { user: toLearner(data.user) };
  }
  const user = read<Learner[]>(LS_USERS, []).find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user) return { user: null, error: "No preview account found with this email on this device. Please register first." };
  write(LS_SESSION, user);
  return { user };
}

export async function signOut(): Promise<void> {
  const c = client();
  if (c) await c.auth.signOut();
  else {
    try {
      window.localStorage.removeItem(LS_SESSION);
    } catch {
      /* ignore */
    }
  }
}

export async function sendPasswordReset(email: string): Promise<{ error?: string }> {
  const c = client();
  if (!c) return { error: "Password reset is available once the platform is connected." };
  const { error } = await c.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/learn/sign-in/` });
  return error ? { error: error.message } : {};
}

/* ───────────── enrolments and progress ───────────── */
export async function loadLearnerData(userId: string): Promise<LocalData> {
  const c = client();
  if (c) {
    const [e, p] = await Promise.all([
      c.from("enrolments").select("course, enrolled_at").eq("user_id", userId),
      c.from("lesson_progress").select("course, lesson, score, total, completed_at").eq("user_id", userId),
    ]);
    return {
      enrolments: (e.data ?? []).map((r) => ({ course: r.course as string, at: r.enrolled_at as string })),
      results: (p.data ?? []).map((r) => ({
        course: r.course as string,
        lesson: r.lesson as string,
        score: (r.score as number) ?? 0,
        total: (r.total as number) ?? 0,
        at: r.completed_at as string,
      })),
    };
  }
  return read<LocalData>(lsDataKey(userId), { enrolments: [], results: [] });
}

export async function enrolInCourse(userId: string, course: string): Promise<{ error?: string }> {
  const c = client();
  if (c) {
    const { error } = await c.from("enrolments").upsert({ user_id: userId, course }, { onConflict: "user_id,course" });
    return error ? { error: error.message } : {};
  }
  const d = read<LocalData>(lsDataKey(userId), { enrolments: [], results: [] });
  if (!d.enrolments.some((e) => e.course === course)) d.enrolments.push({ course, at: new Date().toISOString() });
  write(lsDataKey(userId), d);
  return {};
}

export async function saveLessonResult(
  userId: string,
  course: string,
  lesson: string,
  score: number,
  total: number
): Promise<{ error?: string }> {
  const c = client();
  if (c) {
    const { error } = await c
      .from("lesson_progress")
      .upsert({ user_id: userId, course, lesson, score, total, completed_at: new Date().toISOString() }, { onConflict: "user_id,course,lesson" });
    return error ? { error: error.message } : {};
  }
  const d = read<LocalData>(lsDataKey(userId), { enrolments: [], results: [] });
  d.results = d.results.filter((r) => !(r.course === course && r.lesson === lesson));
  d.results.push({ course, lesson, score, total, at: new Date().toISOString() });
  write(lsDataKey(userId), d);
  return {};
}

/* ───────────── admin (only works for accounts listed in public.admins) ───────────── */
export type AdminLearner = {
  user_id: string;
  email: string;
  full_name: string;
  registered_at: string;
  last_sign_in: string | null;
  courses_enrolled: number;
  lessons_completed: number;
};
export type AdminEnrolment = {
  user_id: string;
  email: string;
  full_name: string;
  course: string;
  enrolled_at: string;
  lessons_done: number;
  last_activity: string | null;
};

export async function checkIsAdmin(): Promise<boolean> {
  const c = client();
  if (!c) return false;
  const { data, error } = await c.rpc("is_admin");
  return !error && data === true;
}

export async function fetchAdminData(): Promise<{ learners: AdminLearner[]; enrolments: AdminEnrolment[]; error?: string }> {
  const c = client();
  if (!c) return { learners: [], enrolments: [], error: "Not connected." };
  const [l, e] = await Promise.all([c.rpc("admin_learners"), c.rpc("admin_enrolments")]);
  if (l.error || e.error) return { learners: [], enrolments: [], error: (l.error ?? e.error)?.message };
  const num = (v: unknown) => Number(v ?? 0);
  return {
    learners: ((l.data ?? []) as AdminLearner[]).map((r) => ({ ...r, courses_enrolled: num(r.courses_enrolled), lessons_completed: num(r.lessons_completed) })),
    enrolments: ((e.data ?? []) as AdminEnrolment[]).map((r) => ({ ...r, lessons_done: num(r.lessons_done) })),
  };
}
