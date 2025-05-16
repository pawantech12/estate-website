import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export const metadata = {
  title: "Login | EstateEase",
  description: "Log in to your EstateEase account",
};

export default function LoginPage() {
  return (
    <main className="flex-1">
      <div className="flex h-screen  flex-col items-center justify-center">
        <div className="mx-auto w-full max-w-md space-y-6 rounded-lg border bg-white p-6 shadow-sm">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground">
              Enter your credentials to access your account
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
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-teal-700 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                className="data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600 cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none  "
              >
                Remember me
              </label>
            </div>
            <Button
              type="submit"
              className="w-full bg-teal-700 hover:bg-teal-800 cursor-pointer"
            >
              Sign In
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-teal-700 hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
