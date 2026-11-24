import type { Metadata } from "next";
import AdminView from "@/components/learn/AdminView";

export const metadata: Metadata = {
  title: "Admin | Mamrex Learn",
  robots: { index: false, follow: false },
  alternates: { canonical: "/learn/admin/" },
};

export default function AdminPage() {
  return <AdminView />;
}
