import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LessonView from "@/components/learn/LessonView";
import { courses, getCourse } from "@/lib/courses";

export const dynamicParams = false;
export const generateStaticParams = () =>
  courses.flatMap((c) => c.lessons.map((l) => ({ course: c.slug, lesson: l.slug })));

export function generateMetadata({ params }: { params: { course: string; lesson: string } }): Metadata {
  const c = getCourse(params.course);
  const l = c?.lessons.find((x) => x.slug === params.lesson);
  if (!c || !l) return {};
  return {
    title: `${l.title} | ${c.title}`,
    description: l.summary,
    robots: { index: false, follow: true },
    alternates: { canonical: `/learn/${c.slug}/${l.slug}/` },
  };
}

export default function LessonPage({ params }: { params: { course: string; lesson: string } }) {
  const c = getCourse(params.course);
  const idx = c ? c.lessons.findIndex((x) => x.slug === params.lesson) : -1;
  if (!c || idx < 0) notFound();
  return <LessonView key={params.lesson} course={c} index={idx} />;
}
