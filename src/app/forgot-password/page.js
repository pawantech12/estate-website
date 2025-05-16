import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Forgot Password | EstateEase",
  description: "Reset your EstateEase account password",
};

export default function ForgotPasswordPage() {
  return (
    <main className="flex-1">
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="mx-auto w-full max-w-md space-y-6 rounded-lg border bg-white p-6 shadow-sm">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Forgot Password</h1>
            <p className="text-muted-foreground">
              Enter your email address and we&apos;ll send you a link to reset
              your password
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
              <Input
                id="email"
                placeholder="m@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-teal-700 hover:bg-teal-800 cursor-pointer"
            >
              Send Reset Link
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Remember your password?{" "}
            <Link
              href="/login"
              className="font-medium text-teal-700 hover:underline"
            >
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
