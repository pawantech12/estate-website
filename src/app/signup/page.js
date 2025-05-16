import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export const metadata = {
  title: "Sign Up | EstateEase",
  description: "Create a new EstateEase account",
};

export default function SignUpPage() {
  return (
    <main className="flex-1">
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="mx-auto w-full max-w-md space-y-6 rounded-lg border bg-white p-6 shadow-sm">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-muted-foreground">
              Enter your information to get started
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="first-name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  First name
                </label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="last-name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Last name
                </label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>
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
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Password
              </label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="confirm-password"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Confirm Password
              </label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                className="data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600 cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <Link
                  href="/terms-conditions"
                  className="text-teal-700 hover:underline"
                >
                  terms and conditions
                </Link>
              </label>
            </div>
            <Button
              type="submit"
              className="w-full bg-teal-700 hover:bg-teal-800 cursor-pointer"
            >
              Create Account
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-teal-700 hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
