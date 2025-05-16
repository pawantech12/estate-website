import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="py-12 md:py-16 px-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">EstateEase</h3>
            <p className="mb-4">
              Your trusted partner in finding the perfect property. We make real
              estate simple and accessible for everyone.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-teal-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-teal-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-teal-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-teal-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Properties", href: "/properties" },
                { name: "Services", href: "/services" },
                { name: "Agents", href: "/agents" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-teal-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-teal-400" />
                <span>123 Real Estate Ave, Property City, 12345</span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-teal-400" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-teal-400" />
                <span>info@estateease.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Newsletter
            </h3>
            <p className="mb-4">
              Subscribe to our newsletter for the latest property listings and
              real estate news.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="bg-teal-700 hover:bg-teal-600 cursor-pointer">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <p>
              &copy; {new Date().getFullYear()} EstateEase. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-teal-400">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-teal-400">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
