import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseView from "@/components/learn/CourseView";
import { courses, getCourse } from "@/lib/courses";

export const dynamicParams = false;
export const generateStaticParams = () => courses.map((c) => ({ course: c.slug }));

export function generateMetadata({ params }: { params: { course: string } }): Metadata {
  const c = getCourse(params.course);
  if (!c) return {};
  return {
    title: `${c.title} | Mamrex Learn`,
    description: c.tagline,
    alternates: { canonical: `/learn/${c.slug}/` },
  };
}

export default function CoursePage({ params }: { params: { course: string } }) {
  const c = getCourse(params.course);
  if (!c) notFound();
  return <CourseView course={c} />;
}
