import { SignUpForm } from "@/components/SignUpForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  return (
    <div className="relative flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Button asChild variant="ghost" size="sm" className="absolute left-6 top-6 md:left-10 md:top-10">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
      </Button>
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  );
}
