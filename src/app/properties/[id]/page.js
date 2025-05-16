import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Calendar,
  Heart,
  Share2,
  Phone,
  Mail,
  CheckCircle2,
  Home,
  Ruler,
  Car,
  Wifi,
  Thermometer,
  Lock,
  TreePine,
} from "lucide-react";
import MortgageCalculator from "@/components/mortgage-calculator";
import PropertyGallery from "@/components/property-gallery";
import ScheduleTour from "@/components/schedule-tour";
import Link from "next/link";

export const metadata = {
  title: "Property Details | EstateEase",
  description: "View detailed information about this property",
};

export default async function PropertyDetailsPage({ params }) {
  const { id } = await params;
  // In a real app, you would fetch the property data based on the ID
  const property = {
    id: id,
    title: "Luxury Villa with Private Pool",
    description:
      "This stunning luxury villa offers the perfect blend of elegant design and modern comfort. Featuring spacious living areas, high ceilings, and floor-to-ceiling windows that flood the home with natural light. The gourmet kitchen is equipped with top-of-the-line appliances and opens to a beautiful dining area. The primary suite is a true retreat with a spa-like bathroom and walk-in closet. Outside, enjoy the private pool, landscaped garden, and covered patio perfect for entertaining. Located in a prestigious neighborhood with easy access to shopping, dining, and schools.",
    price: "$1,250,000",
    location: "123 Luxury Lane, Beverly Hills, CA 90210",
    beds: 5,
    baths: 4,
    area: 3500,
    yearBuilt: 2018,
    lotSize: "0.5 acres",
    garage: "2-car attached",
    type: "For Sale",
    features: [
      "Private Pool",
      "Gourmet Kitchen",
      "Home Office",
      "Walk-in Closets",
      "Hardwood Floors",
      "Central Air",
      "Smart Home System",
      "Fireplace",
      "Outdoor Kitchen",
      "Garden",
      "Security System",
      "Wine Cellar",
    ],
    agent: {
      name: "Sarah Johnson",
      phone: "(123) 456-7890",
      email: "sarah@estateease.com",
      image: "/agent1.jpg",
    },
  };

  return (
    <main className="flex-1">
      <section className="relative bg-slate-50 p-10">
        <PropertyGallery />
        <div className="mt-4 flex gap-2">
          <Badge className="bg-teal-700">{property.type}</Badge>
          <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
            Property ID: {property.id}
          </Badge>
        </div>
      </section>

      <div className=" px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-6 rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">
                    {property.title}
                  </h1>
                  <div className="mt-2 flex items-center text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    {property.location}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-teal-700">
                    {property.price}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ${(1250000 / 3500).toFixed(2)}/sqft
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8 grid grid-cols-3 gap-4 rounded-lg border bg-white p-6 shadow-sm sm:flex sm:justify-between">
              <div className="flex flex-col items-center rounded-lg bg-slate-50 p-3 transition-all hover:bg-teal-50">
                <Bed className="mb-1 h-5 w-5 text-teal-700" />
                <span className="text-lg font-semibold">{property.beds}</span>
                <span className="text-xs text-muted-foreground">Bedrooms</span>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-slate-50 p-3 transition-all hover:bg-teal-50">
                <Bath className="mb-1 h-5 w-5 text-teal-700" />
                <span className="text-lg font-semibold">{property.baths}</span>
                <span className="text-xs text-muted-foreground">Bathrooms</span>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-slate-50 p-3 transition-all hover:bg-teal-50">
                <Square className="mb-1 h-5 w-5 text-teal-700" />
                <span className="text-lg font-semibold">{property.area}</span>
                <span className="text-xs text-muted-foreground">Sq Ft</span>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-slate-50 p-3 transition-all hover:bg-teal-50">
                <Calendar className="mb-1 h-5 w-5 text-teal-700" />
                <span className="text-lg font-semibold">
                  {property.yearBuilt}
                </span>
                <span className="text-xs text-muted-foreground">
                  Year Built
                </span>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-slate-50 p-3 transition-all hover:bg-teal-50">
                <Ruler className="mb-1 h-5 w-5 text-teal-700" />
                <span className="text-lg font-semibold">
                  {property.lotSize}
                </span>
                <span className="text-xs text-muted-foreground">Lot Size</span>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-slate-50 p-3 transition-all hover:bg-teal-50">
                <Car className="mb-1 h-5 w-5 text-teal-700" />
                <span className="text-lg font-semibold">{property.garage}</span>
                <span className="text-xs text-muted-foreground">Garage</span>
              </div>
            </div>

            <div className="mb-8 flex flex-wrap gap-3">
              <Button
                variant="outline"
                className="gap-2 rounded-full transition-all hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200"
              >
                <Heart className="h-4 w-4" />
                Save
              </Button>
              <Button
                variant="outline"
                className="gap-2 rounded-full transition-all hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button
                variant="outline"
                className="gap-2 rounded-full transition-all hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200"
              >
                <Calendar className="h-4 w-4" />
                Schedule Tour
              </Button>
            </div>

            <Tabs
              defaultValue="details"
              className="rounded-lg border bg-white p-6 shadow-sm"
            >
              <TabsList className="w-full justify-start grid grid-cols-2 sm:grid-cols-4 gap-2 h-11">
                <TabsTrigger
                  value="details"
                  className="cursor-pointer data-[state=active]:bg-teal-600 data-[state=active]:text-white "
                >
                  Details
                </TabsTrigger>
                <TabsTrigger
                  value="features"
                  className="cursor-pointer data-[state=active]:bg-teal-600 data-[state=active]:text-white "
                >
                  Features
                </TabsTrigger>
                <TabsTrigger
                  value="calculator"
                  className="cursor-pointer data-[state=active]:bg-teal-600 data-[state=active]:text-white "
                >
                  Mortgage Calculator
                </TabsTrigger>
                <TabsTrigger
                  value="schedule"
                  className="cursor-pointer data-[state=active]:bg-teal-600 data-[state=active]:text-white "
                >
                  Schedule Tour
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="mt-6 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Property Description</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>

                  <div className="my-6 h-px bg-slate-200"></div>

                  <h3 className="text-xl font-bold">Property Details</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 transition-all hover:bg-teal-50">
                      <Home className="h-5 w-5 text-teal-700" />
                      <div>
                        <span className="font-medium">Property Type:</span>
                        <p className="text-muted-foreground">Villa</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 transition-all hover:bg-teal-50">
                      <Bed className="h-5 w-5 text-teal-700" />
                      <div>
                        <span className="font-medium">Bedrooms:</span>
                        <p className="text-muted-foreground">{property.beds}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 transition-all hover:bg-teal-50">
                      <Bath className="h-5 w-5 text-teal-700" />
                      <div>
                        <span className="font-medium">Bathrooms:</span>
                        <p className="text-muted-foreground">
                          {property.baths}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 transition-all hover:bg-teal-50">
                      <Square className="h-5 w-5 text-teal-700" />
                      <div>
                        <span className="font-medium">Area:</span>
                        <p className="text-muted-foreground">
                          {property.area} sq ft
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 transition-all hover:bg-teal-50">
                      <Calendar className="h-5 w-5 text-teal-700" />
                      <div>
                        <span className="font-medium">Year Built:</span>
                        <p className="text-muted-foreground">
                          {property.yearBuilt}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 transition-all hover:bg-teal-50">
                      <Ruler className="h-5 w-5 text-teal-700" />
                      <div>
                        <span className="font-medium">Lot Size:</span>
                        <p className="text-muted-foreground">
                          {property.lotSize}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 transition-all hover:bg-teal-50">
                      <Car className="h-5 w-5 text-teal-700" />
                      <div>
                        <span className="font-medium">Garage:</span>
                        <p className="text-muted-foreground">
                          {property.garage}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 transition-all hover:bg-teal-50">
                      <TreePine className="h-5 w-5 text-teal-700" />
                      <div>
                        <span className="font-medium">Outdoor:</span>
                        <p className="text-muted-foreground">
                          Pool, Garden, Patio
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="features" className="mt-6 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Property Features</h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {property.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 transition-all hover:bg-teal-50"
                      >
                        <CheckCircle2 className="h-5 w-5 text-teal-700" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="my-6 h-px bg-slate-200"></div>

                  <h3 className="mt-8 text-xl font-bold">Interior Features</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 transition-all hover:bg-teal-50">
                      <Wifi className="h-5 w-5 text-teal-700" />
                      <span>High-Speed Internet</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 transition-all hover:bg-teal-50">
                      <Thermometer className="h-5 w-5 text-teal-700" />
                      <span>Central Heating & Cooling</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 transition-all hover:bg-teal-50">
                      <Lock className="h-5 w-5 text-teal-700" />
                      <span>Security System</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="calculator" className="mt-6">
                <MortgageCalculator propertyPrice={1250000} />
              </TabsContent>
              <TabsContent value="schedule" className="mt-6">
                <ScheduleTour />
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <div className="sticky top-20 space-y-6">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-teal-100">
                    <Image
                      src={property.agent.image || "/placeholder.svg"}
                      alt={property.agent.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{property.agent.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Real Estate Agent
                    </p>
                    <div className="mt-1 flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2 transition-all hover:bg-teal-50">
                    <Phone className="h-4 w-4 text-teal-700" />
                    <span>{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2 transition-all hover:bg-teal-50">
                    <Mail className="h-4 w-4 text-teal-700" />
                    <span>{property.agent.email}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button className="w-full gap-2 cursor-pointer bg-teal-700 hover:bg-teal-800">
                    <Phone className="h-4 w-4" /> Contact Agent
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full gap-2 cursor-pointer"
                  >
                    <Mail className="h-4 w-4" /> Email Agent
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold">Request Information</h3>
                <form className="space-y-4">
                  <div className="grid gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="I'm interested in this property..."
                      ></textarea>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-teal-700 hover:bg-teal-800"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="rounded-lg border bg-gradient-to-br from-teal-50 to-teal-100 p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-bold text-teal-800">
                  Similar Properties
                </h3>
                <p className="mb-4 text-sm text-teal-700">
                  You might also be interested in these properties
                </p>
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <Link
                      href={`/properties/${item}`}
                      key={item}
                      className="flex gap-3 rounded-lg bg-white p-2 transition-all hover:shadow-md"
                    >
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src="/home1.avif"
                          alt="Similar property"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="line-clamp-1 font-medium">
                          Modern Apartment with View
                        </h4>
                        <p className="text-sm font-semibold text-teal-700">
                          $450,000
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>3 beds</span>
                          <span>•</span>
                          <span>2 baths</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
