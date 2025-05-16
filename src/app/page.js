import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Home, Building, ArrowRight } from "lucide-react";
import FeaturedProperties from "@/components/featured-properties";
import TestimonialSlider from "@/components/testimonial-slider";
import AgentCard from "@/components/agent-card";

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <Image
          src="/home-exterior-hero-bg.jpg"
          alt="Modern home exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className=" relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find Your Dream Home With Ease
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            Discover the perfect property that matches your lifestyle and
            preferences with our extensive listings and expert guidance.
          </p>
          <div className="mt-10 w-full max-w-4xl rounded-lg bg-white p-4 shadow-lg">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <div className="relative flex items-center w-full">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by location, property type, or keyword"
                  className="pl-10 h-11"
                />
              </div>
              <Button
                size="lg"
                className="bg-teal-700 cursor-pointer text-base hover:bg-teal-800"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 md:py-24 px-10">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Featured Properties
            </h2>
            <p className="mt-2 text-muted-foreground">
              Explore our handpicked selection of premium properties
            </p>
          </div>
          <Link href="/properties">
            <Button variant="outline" className="gap-2">
              View All Properties
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <FeaturedProperties />
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-16 md:py-24 px-10">
        <div>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We provide comprehensive real estate services to help you buy,
              sell, or rent properties with confidence
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Home,
                title: "Property Sales",
                description:
                  "Find your dream home or sell your property at the best market value with our expert guidance.",
              },
              {
                icon: Building,
                title: "Property Management",
                description:
                  "Let us handle the day-to-day operations of your investment properties with our comprehensive management services.",
              },
              {
                icon: MapPin,
                title: "Property Valuation",
                description:
                  "Get an accurate assessment of your property's worth with our professional valuation services.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-full bg-teal-100 p-3 text-teal-700">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button className="bg-teal-700 hover:bg-teal-800 cursor-pointer text-base">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Hear from our satisfied clients about their experience working with
            us
          </p>
        </div>
        <div className="mt-12">
          <TestimonialSlider />
        </div>
      </section>

      {/* Featured Agents */}
      <section className="bg-slate-50 py-16 md:py-24 px-10">
        <div className="">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Meet Our Agents
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Our team of experienced real estate professionals is here to help
              you every step of the way
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((agent) => (
              <AgentCard key={agent} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/agents">
              <Button
                variant="outline"
                className="gap-2 text-base cursor-pointer"
              >
                View All Agents
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-700 py-16 text-white md:py-24 px-10">
        <div className="">
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Find Your Dream Home?
              </h2>
              <p className="mt-4 text-teal-100">
                Contact us today to schedule a consultation with one of our
                expert agents.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white text-teal-700 hover:bg-teal-50 text-base cursor-pointer"
              >
                Browse Properties
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border border-white text-white bg-transparent hover:bg-white hover:text-teal-700 text-base cursor-pointer"
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
