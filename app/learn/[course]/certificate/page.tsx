import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CertificateView from "@/components/learn/CertificateView";
import { courses, getCourse } from "@/lib/courses";

export const dynamicParams = false;
export const generateStaticParams = () => courses.map((c) => ({ course: c.slug }));

export const metadata: Metadata = {
  title: "Certificate | Mamrex Learn",
  robots: { index: false, follow: false },
};

export default function CertificatePage({ params }: { params: { course: string } }) {
  const c = getCourse(params.course);
  if (!c) notFound();
  return <CertificateView course={c} />;
}
