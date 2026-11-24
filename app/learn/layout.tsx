import type { ReactNode } from "react";
import LearnProvider from "@/components/learn/LearnProvider";
import PreviewBanner from "@/components/learn/PreviewBanner";

export default function LearnLayout({ children }: { children: ReactNode }) {
  return (
    <LearnProvider>
      <PreviewBanner />
      {children}
    </LearnProvider>
  );
}
