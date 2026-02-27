import Link from "next/link";
import { Suspense } from "react";
import { DashboardNav } from "@/components/DashboardNav";
import { AuthButton } from "@/components/AuthButton";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <nav className="border-border sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-6 px-6 md:px-10">
          <div className="flex items-center gap-6">
            <Link
              href="/dashboard"
              className="text-lg font-bold tracking-tight"
            >
              MoneyScope
            </Link>
            <DashboardNav />
          </div>
            <Suspense>
              <AuthButton />
            </Suspense>
        </div>
      </nav>
      {children}
    </div>
  );
}
