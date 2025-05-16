import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Phone, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Our Agents | EstateEase",
  description: "Meet our team of experienced real estate professionals",
};

const agents = [
  {
    id: 1,
    name: "John Smith",
    role: "Senior Real Estate Agent",
    specialization: "Residential Properties",
    experience: "10+ years",
    email: "john@estateease.com",
    phone: "(123) 456-7890",
    image: "/agent1.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Commercial Property Specialist",
    specialization: "Office & Retail Spaces",
    experience: "8 years",
    email: "sarah@estateease.com",
    phone: "(123) 456-7891",
    image: "/agent1.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Luxury Home Specialist",
    specialization: "High-end Properties",
    experience: "12 years",
    email: "michael@estateease.com",
    phone: "(123) 456-7892",
    image: "/agent1.jpg",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "First-time Buyer Specialist",
    specialization: "Affordable Housing",
    experience: "5 years",
    email: "emily@estateease.com",
    phone: "(123) 456-7893",
    image: "/agent1.jpg",
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Investment Property Advisor",
    specialization: "Rental Properties",
    experience: "15 years",
    email: "david@estateease.com",
    phone: "(123) 456-7894",
    image: "/agent1.jpg",
  },
  {
    id: 6,
    name: "Jessica Lee",
    role: "Property Manager",
    specialization: "Residential Rentals",
    experience: "7 years",
    email: "jessica@estateease.com",
    phone: "(123) 456-7895",
    image: "/agent1.jpg",
  },
  {
    id: 7,
    name: "Robert Taylor",
    role: "Commercial Leasing Specialist",
    specialization: "Industrial Properties",
    experience: "9 years",
    email: "robert@estateease.com",
    phone: "(123) 456-7896",
    image: "/agent1.jpg",
  },
  {
    id: 8,
    name: "Amanda Garcia",
    role: "Relocation Specialist",
    specialization: "International Clients",
    experience: "6 years",
    email: "amanda@estateease.com",
    phone: "(123) 456-7897",
    image: "/agent1.jpg",
  },
];

const features = [
  {
    title: "Local Market Knowledge",
    desc: "Deep insights into neighborhoods, property values, and market trends.",
  },
  {
    title: "Negotiation Skills",
    desc: "Our agents negotiate the best possible deal on your behalf.",
  },
  {
    title: "Professional Network",
    desc: "Connections with trusted lenders, inspectors, and contractors.",
  },
  {
    title: "Personalized Service",
    desc: "Every plan is tailored to match your unique needs and preferences.",
  },
];

export default function AgentsPage() {
  return (
    <main className="flex-1">
      <section className="bg-teal-700 py-16 md:py-24 px-10">
        <div className="">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Meet Our Agents
            </h1>
            <p className="mt-6 text-xl text-teal-100">
              Our team of experienced professionals is here to help you with all
              your real estate needs
            </p>
          </div>
        </div>
      </section>

      <section className=" py-16 px-10">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="text-2xl font-bold">Our Real Estate Experts</h2>
            <p className="text-muted-foreground">
              Find the right agent to guide you through your real estate journey
            </p>
          </div>
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search agents" className="pl-9" />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {agents.map((agent) => (
            <Card
              key={agent.id}
              className="overflow-hidden transition-all hover:shadow-md p-0"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={agent.image || "/placeholder.svg"}
                  alt={agent.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="px-4 text-center">
                <h3 className="text-lg font-bold">{agent.name}</h3>
                <p className="text-sm text-muted-foreground">{agent.role}</p>
                <div className="mt-2 flex justify-center space-x-3">
                  <Link
                    href="#"
                    className="rounded-full bg-gray-100 p-1.5 text-gray-600 transition-colors hover:bg-teal-100 hover:text-teal-700"
                  >
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="rounded-full bg-gray-100 p-1.5 text-gray-600 transition-colors hover:bg-teal-100 hover:text-teal-700"
                  >
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="rounded-full bg-gray-100 p-1.5 text-gray-600 transition-colors hover:bg-teal-100 hover:text-teal-700"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center border-t p-4">
                <Button
                  variant="outline"
                  className="w-full gap-2 cursor-pointer"
                >
                  <Phone className="h-4 w-4" />
                  Contact
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24 px-10">
        <div className="">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Join Our Team</h2>
            <p className="mt-4 text-muted-foreground">
              Are you a real estate professional looking to take your career to
              the next level? EstateEase offers a supportive environment,
              cutting-edge tools, and excellent commission structures.
            </p>
            <div className="mt-8">
              <Link href="/careers">
                <Button className="bg-teal-700 hover:bg-teal-800 text-base cursor-pointer">
                  View Career Opportunities
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-10">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          {/* Text Section */}
          <div>
            <Badge variant="outline" className="mb-4 text-sm tracking-wider">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight leading-tight">
              Work With Trusted Real Estate Experts
            </h2>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed">
              Our agents are handpicked for their industry expertise, strong
              work ethic, and dedication to delivering exceptional client
              experiences. Here’s what you gain:
            </p>

            <ul className="mt-6 space-y-5">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 text-teal-600">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span className="text-base">
                    <strong className="text-foreground">{item.title}:</strong>{" "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/feature-img.jpg" // Replace with your actual image
              alt="Real estate agent with client"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-teal-700 py-16 text-white md:py-24 px-10">
        <div className="">
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Work With Our Agents?
              </h2>
              <p className="mt-4 text-teal-100">
                Contact us today to get matched with the perfect agent for your
                needs.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-teal-700 hover:bg-teal-50 cursor-pointer"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/properties">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-transparent cursor-pointer"
                >
                  Browse Properties
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
