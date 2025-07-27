import { DashboardLayout, DashboardWrapper } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is Dashboard",
};

export default function DashboardLayoutMain({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <DashboardLayout>
        <DashboardWrapper>{children}</DashboardWrapper>
      </DashboardLayout>
    </main>
  );
}
