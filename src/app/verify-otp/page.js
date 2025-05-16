import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Verify OTP | EstateEase",
  description: "Verify your account with a one-time password",
};

export default function VerifyOTPPage() {
  return (
    <main className="flex-1">
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="mx-auto w-full max-w-md space-y-6 rounded-lg border bg-white p-6 shadow-sm">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Verify Your Email</h1>
            <p className="text-muted-foreground">
              We&apos;ve sent a verification code to your email address. Please
              enter it below.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="otp"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Verification Code
              </label>
              <div className="flex justify-between gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Input
                    key={i}
                    className="h-12 text-center text-lg"
                    maxLength={1}
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                ))}
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-teal-700 hover:bg-teal-800 cursor-pointer"
            >
              Verify
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Didn&apos;t receive a code?{" "}
            <button className="font-medium text-teal-700 hover:underline">
              Resend
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
