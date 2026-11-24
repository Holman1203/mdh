"use client";

import Button from "@/components/Button";
import { useLearn } from "./LearnProvider";

/** Hero buttons for the Learn pages: change when the visitor is signed in. */
export default function AuthButtons() {
  const { ready, user } = useLearn();
  if (ready && user) {
    return (
      <>
        <Button href="/learn/dashboard/">My learning</Button>
        <Button href="/learn/#courses" variant="light">
          Browse courses
        </Button>
      </>
    );
  }
  return (
    <>
      <Button href="/learn/register/">Register free</Button>
      <Button href="/learn/sign-in/" variant="light">
        Sign in
      </Button>
    </>
  );
}
