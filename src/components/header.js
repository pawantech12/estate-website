"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "Services", href: "/services" },
  { name: "Agents", href: "/agents" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white px-10">
      <nav className="flex h-16 items-center justify-between">
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 text-2xl font-bold text-teal-700"
          >
            EstateEase
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-teal-700",
                pathname === item.href ? "text-teal-700" : "text-gray-700"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Link href="/login">
            <Button variant="outline" className={"text-base cursor-pointer"}>
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-teal-700 hover:bg-teal-800 text-base cursor-pointer">
              Sign up
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white px-10 py-5">
          <div className="flex h-16 items-center justify-between">
            <div className="flex flex-1">
              <Link
                href="/"
                className="-m-1.5 p-1.5 text-2xl font-bold text-teal-700"
              >
                EstateEase
              </Link>
            </div>
            <div className="flex">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50",
                      pathname === item.href ? "text-teal-700" : "text-gray-900"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4 py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="-mx-3 block rounded-lg bg-teal-700 px-3 py-2.5 text-center text-base font-semibold leading-7 text-white hover:bg-teal-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
