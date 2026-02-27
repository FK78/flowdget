import Link from "next/link";
import { Wallet, TrendingUp, PieChart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <header className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Wallet className="h-5 w-5" />
          <span>MoneyScope</span>
        </div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Take control of your{" "}
          <span className="text-emerald-500">personal finances</span>
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground">
          Track budgets, manage accounts, categorise transactions, and gain
          real-time spending insights — all in one place.
        </p>
        <div className="flex gap-3">
          <Button asChild size="lg">
            <Link href="/auth/sign-up">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/auth/login">Sign In</Link>
          </Button>
        </div>
      </header>

      {/* Features */}
      <section className="border-t bg-muted/40 px-6 py-20">
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
              <TrendingUp className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="font-semibold">Budget Tracking</h3>
            <p className="text-sm text-muted-foreground">
              Set monthly or weekly budgets per category and see real-time
              progress with visual indicators.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
              <PieChart className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="font-semibold">Spending Insights</h3>
            <p className="text-sm text-muted-foreground">
              Categorise every transaction and understand exactly where your
              money goes each month.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/10">
              <Shield className="h-6 w-6 text-violet-500" />
            </div>
            <h3 className="font-semibold">Multi-Account</h3>
            <p className="text-sm text-muted-foreground">
              Manage current accounts, savings, credit cards, and investments with a
              clear assets-vs-liabilities view.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 py-6 text-center text-xs text-muted-foreground">
        MoneyScope &mdash; Built with Next.js, Supabase &amp; Drizzle ORM
      </footer>
    </div>
  );
}
