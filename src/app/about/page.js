import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Users,
  Award,
  Clock,
  Building,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "About Us | EstateEase",
  description:
    "Learn more about EstateEase and our mission to simplify real estate",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="bg-teal-700 py-16 md:py-24 px-10">
        <div className="">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              About EstateEase
            </h1>
            <p className="mt-6 text-xl text-teal-100">
              We&apos;re on a mission to make real estate simple, accessible,
              and stress-free for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                EstateEase was founded in 2015 with a simple vision: to
                transform the complex and often stressful process of buying,
                selling, and renting properties into a seamless, enjoyable
                experience.
              </p>
              <p>
                Our founders, experienced real estate professionals, recognized
                the need for a more transparent, efficient, and client-focused
                approach to real estate. They combined their industry expertise
                with innovative technology to create a platform that puts
                clients first.
              </p>
              <p>
                Today, EstateEase has grown into a trusted real estate partner,
                serving thousands of clients across the country. We&apos;ve
                maintained our commitment to personalized service while
                leveraging cutting-edge technology to streamline every aspect of
                the real estate process.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="/team.jpeg"
              alt="EstateEase team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24 px-10">
        <div className="">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Our Mission & Values
            </h2>
            <p className="mt-4 text-muted-foreground">
              At EstateEase, we&apos;re guided by a set of core principles that
              define who we are and how we work.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Client-Centered Approach",
                description:
                  "We put our clients' needs first, providing personalized service and guidance throughout the entire real estate journey.",
              },
              {
                icon: CheckCircle2,
                title: "Integrity & Transparency",
                description:
                  "We believe in honest communication and full transparency in every transaction and interaction.",
              },
              {
                icon: Award,
                title: "Excellence & Expertise",
                description:
                  "We strive for excellence in everything we do, continuously improving our knowledge and skills to better serve our clients.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-full bg-teal-100 p-3 text-teal-700">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" py-16 md:py-24 px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Why Choose EstateEase
          </h2>
          <p className="mt-4 text-muted-foreground">
            We combine industry expertise with innovative technology to provide
            an unmatched real estate experience.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Clock,
              title: "Time-Saving Process",
              description:
                "Our streamlined approach saves you time at every step of your real estate journey.",
            },
            {
              icon: Building,
              title: "Extensive Property Selection",
              description:
                "Access thousands of listings that match your specific criteria and preferences.",
            },
            {
              icon: Users,
              title: "Expert Agents",
              description:
                "Work with experienced professionals who know the market inside and out.",
            },
            {
              icon: MapPin,
              title: "Local Market Knowledge",
              description:
                "Benefit from our deep understanding of local real estate trends and neighborhoods.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border bg-white p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex rounded-full bg-teal-100 p-3 text-teal-700">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-teal-700 py-16 text-white md:py-24 px-10">
        <div className="">
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Find Your Dream Home?
              </h2>
              <p className="mt-4 text-teal-100">
                Let our team of experts guide you through the process.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/properties">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-transparent cursor-pointer"
                >
                  Browse Properties
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-teal-700 hover:bg-teal-50 cursor-pointer"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
