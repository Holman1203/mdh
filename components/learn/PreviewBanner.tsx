"use client";

import { useLearn } from "./LearnProvider";

/** Shown only until Supabase keys are added: tells the team that accounts are not saved online yet. */
export default function PreviewBanner() {
  const { preview } = useLearn();
  if (!preview) return null;
  return (
    <div role="note" className="bg-accent px-4 py-2 text-center text-sm font-bold text-navy">
      Preview mode: accounts and progress are saved only in this browser until the learning platform is connected.
    </div>
  );
}
