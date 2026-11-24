import type { Metadata } from "next";
import Section from "@/components/Section";
import AuthForm from "@/components/learn/AuthForm";

export const metadata: Metadata = {
  title: "Sign in | Mamrex Learn",
  description: "Sign in to continue your Mamrex Learn courses.",
  alternates: { canonical: "/learn/sign-in/" },
};

export default function SignInPage() {
  return (
    <Section>
      <h1 className="sr-only">Sign in to Mamrex Learn</h1>
      <AuthForm mode="sign-in" />
    </Section>
  );
}
