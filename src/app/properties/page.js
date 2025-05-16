import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Heart,
  Search,
  SlidersHorizontal,
} from "lucide-react";

export const metadata = {
  title: "Properties | EstateEase",
  description:
    "Browse our extensive collection of properties for sale and rent",
};

const properties = [
  {
    id: 1,
    title: "Modern Apartment with Ocean View",
    price: "$450,000",
    location: "Miami Beach, FL",
    beds: 2,
    baths: 2,
    area: 1200,
    image: "/home1.avif",
    type: "For Sale",
  },
  {
    id: 2,
    title: "Luxury Villa with Private Pool",
    price: "$1,250,000",
    location: "Beverly Hills, CA",
    beds: 5,
    baths: 4,
    area: 3500,
    image: "/home2.jpg",
    type: "For Sale",
  },
  {
    id: 3,
    title: "Cozy Downtown Loft",
    price: "$2,800/mo",
    location: "New York, NY",
    beds: 1,
    baths: 1,
    area: 850,
    image: "/home3.jpg",
    type: "For Rent",
  },
  {
    id: 4,
    title: "Family Home with Garden",
    price: "$685,000",
    location: "Austin, TX",
    beds: 4,
    baths: 3,
    area: 2200,
    image: "/home4.jpg",
    type: "For Sale",
  },
  {
    id: 5,
    title: "Penthouse with City Skyline View",
    price: "$3,500/mo",
    location: "Chicago, IL",
    beds: 3,
    baths: 2,
    area: 1800,
    image: "/home5.webp",
    type: "For Rent",
  },
  {
    id: 6,
    title: "Renovated Historic Townhouse",
    price: "$875,000",
    location: "Boston, MA",
    beds: 3,
    baths: 2.5,
    area: 2400,
    image: "/home6.jpg",
    type: "For Sale",
  },
  {
    id: 7,
    title: "Waterfront Cottage",
    price: "$2,200/mo",
    location: "Seattle, WA",
    beds: 2,
    baths: 1,
    area: 1100,
    image: "/home7.jpg",
    type: "For Rent",
  },
  {
    id: 8,
    title: "Modern Suburban Home",
    price: "$520,000",
    location: "Denver, CO",
    beds: 4,
    baths: 3,
    area: 2600,
    image: "/home8.jpg",
    type: "For Sale",
  },
];

export default function PropertiesPage() {
  return (
    <main className="flex-1">
      <section className="bg-teal-700 py-12 md:py-16">
        <div>
          <div className="mx-auto max-w-2xl text-center text-white">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Find Your Perfect Property
            </h1>
            <p className="mt-4 text-teal-100">
              Browse our extensive collection of properties for sale and rent
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 px-10">
        <div className="rounded-lg bg-white p-4 shadow-md md:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Search Properties</h2>
            <Button variant="ghost" size="sm" className="gap-2 cursor-pointer">
              <SlidersHorizontal className="h-4 w-4" />
              Advanced Filters
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Location, keyword, or property ID"
                className="pl-9 w-full"
              />
            </div>
            <Select>
              <SelectTrigger className={"w-full cursor-pointer"}>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="land">Land</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className={"w-full cursor-pointer"}>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Price</SelectItem>
                <SelectItem value="100k-300k">$100k - $300k</SelectItem>
                <SelectItem value="300k-500k">$300k - $500k</SelectItem>
                <SelectItem value="500k-750k">$500k - $750k</SelectItem>
                <SelectItem value="750k-1m">$750k - $1M</SelectItem>
                <SelectItem value="1m+">$1M+</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-teal-700 hover:bg-teal-800">Search</Button>
          </div>
        </div>
      </section>

      <section className="py-8 px-10">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold">Available Properties</h2>
            <p className="text-muted-foreground">
              Showing {properties.length} properties
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px] cursor-pointer">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="beds-desc">Most Bedrooms</SelectItem>
                <SelectItem value="area-desc">Largest Area</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {properties.map((property) => (
            <Link key={property.id} href={`/properties/${property.id}`}>
              <Card className="h-full overflow-hidden transition-all hover:shadow-md p-0">
                <div className="relative">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    width={500}
                    height={300}
                    className="h-[200px] w-full object-cover"
                  />
                  <Badge
                    className={`absolute left-3 top-3 ${
                      property.type === "For Rent"
                        ? "bg-blue-600"
                        : "bg-teal-700"
                    }`}
                  >
                    {property.type}
                  </Badge>
                  <button
                    className="absolute right-3 top-3 rounded-full bg-white/80 p-1.5 text-gray-700 backdrop-blur-sm transition-colors hover:bg-white hover:text-rose-500"
                    aria-label="Add to favorites"
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
                <CardContent className="px-4">
                  <h3 className="line-clamp-1 text-lg font-bold">
                    {property.title}
                  </h3>
                  <p className="mt-1 text-xl font-semibold text-teal-700">
                    {property.price}
                  </p>
                  <div className="mt-2 flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    {property.location}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Bed className="h-4 w-4" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Bath className="h-4 w-4" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Square className="h-4 w-4" />
                    <span>{property.area} sqft</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex gap-2">
            <Button variant="outline" size="icon" disabled>
              &lt;
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-teal-700 text-white hover:bg-teal-800"
            >
              1
            </Button>
            <Button variant="outline" size="icon">
              2
            </Button>
            <Button variant="outline" size="icon">
              3
            </Button>
            <Button variant="outline" size="icon">
              &gt;
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
