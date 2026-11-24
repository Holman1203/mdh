import type { Metadata } from "next";
import Section from "@/components/Section";
import AuthForm from "@/components/learn/AuthForm";

export const metadata: Metadata = {
  title: "Register free | Mamrex Learn",
  description: "Create a free Mamrex Learn account to enrol in self-paced courses.",
  alternates: { canonical: "/learn/register/" },
};

export default function RegisterPage() {
  return (
    <Section>
      <h1 className="sr-only">Register for Mamrex Learn</h1>
      <AuthForm mode="register" />
    </Section>
  );
}
