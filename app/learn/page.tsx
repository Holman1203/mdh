import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FeatureTile from "@/components/FeatureTile";
import AuthButtons from "@/components/learn/AuthButtons";
import CourseCard from "@/components/learn/CourseCard";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Mamrex Learn | Free online courses",
  description:
    "Register free and learn at your own pace. Practical courses in AI, digital skills, startups, remote work, networking and community from Mamrex Digital Hub.",
  alternates: { canonical: "/learn/" },
};

const steps = [
  { icon: "User", title: "Register free", text: "Create an account with your name, email and a password. It takes a minute." },
  { icon: "GraduationCap", title: "Enrol in a course", text: "Pick any course and start. You can take as many as you like." },
  { icon: "Zap", title: "Learn at your pace", text: "Short lessons with a quick check at the end. Stop and continue whenever you want." },
  { icon: "Award", title: "Get your certificate", text: "Finish every lesson to unlock a certificate of completion you can print or save." },
];

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Mamrex Learn"
        title="Learn new skills, free and at your own pace"
        intro="Practical online courses built around our six pillars, starting with AI. Register once, enrol in a course and learn on your phone or laptop whenever it suits you."
      >
        <AuthButtons />
      </PageHero>

      <Section id="courses">
        <SectionHeading
          eyebrow="Free courses"
          title="Pick a course and start today"
          intro="One course for each Mamrex pillar. Every course is free, self-paced and written in plain language."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <SectionHeading eyebrow="How it works" title="From sign-up to certificate" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <FeatureTile key={s.title} {...s} />
          ))}
        </div>
      </Section>
    </>
  );
}
