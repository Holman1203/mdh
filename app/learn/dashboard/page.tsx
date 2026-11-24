import type { Metadata } from "next";
import DashboardView from "@/components/learn/DashboardView";

export const metadata: Metadata = {
  title: "My learning | Mamrex Learn",
  robots: { index: false, follow: false },
  alternates: { canonical: "/learn/dashboard/" },
};

export default function DashboardPage() {
  return <DashboardView />;
}
