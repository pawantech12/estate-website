import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | EstateEase",
  description: "Get in touch with our team for any inquiries or assistance",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="bg-teal-700 py-16 md:py-24 px-10">
        <div className="">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-teal-100">
              We&apos;re here to help with all your real estate needs. Reach out
              to our team for personalized assistance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-10">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
            <p className="mt-4 text-muted-foreground">
              Fill out the form below, and one of our representatives will
              contact you shortly.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="first-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    First name
                  </label>
                  <Input
                    id="first-name"
                    placeholder="John"
                    className={"h-11"}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="last-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Last name
                  </label>
                  <Input id="last-name" placeholder="Doe" className={"h-11"} />
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
                  placeholder="john@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  className={"h-11"}
                  autoCorrect="off"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Phone
                </label>
                <Input
                  id="phone"
                  placeholder="(123) 456-7890"
                  type="tel"
                  className={"h-11"}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help you?"
                  className={"h-11"}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your inquiry..."
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-800 cursor-pointer py-6 text-base"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <p className="mt-2 text-muted-foreground">
                Reach out to us directly using the information below.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-teal-100 p-3 text-teal-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Office Address</h4>
                    <p className="text-muted-foreground">
                      123 Real Estate Avenue
                      <br />
                      Property City, State 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-teal-100 p-3 text-teal-700">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                    <p className="text-muted-foreground">
                      (987) 654-3210 (Toll-free)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-teal-100 p-3 text-teal-700">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">info@estateease.com</p>
                    <p className="text-muted-foreground">
                      support@estateease.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-teal-100 p-3 text-teal-700">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-muted-foreground">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 h-[300px] overflow-hidden rounded-lg border">
              {/* In a real implementation, you would embed a Google Map here */}
              <div className="flex h-full w-full items-center justify-center bg-slate-100 text-center text-muted-foreground">
                <div>
                  <MapPin className="mx-auto mb-2 h-8 w-8" />
                  <p>Interactive Map Would Be Embedded Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
