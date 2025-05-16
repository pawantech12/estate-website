import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Square, MapPin, Heart, Trash2 } from "lucide-react";

export const metadata = {
  title: "My Favorites | EstateEase",
  description: "View and manage your favorite properties",
};

const favoriteProperties = [
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
    dateAdded: "May 5, 2025",
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
    dateAdded: "May 3, 2025",
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
    dateAdded: "April 28, 2025",
  },
];

export default function FavoritesPage() {
  return (
    <main className="flex-1">
      <section className="bg-teal-700 py-12 md:py-16 px-10">
        <div className="">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              My Favorites
            </h1>
            <p className="mt-4 text-teal-100">
              Manage your saved properties and quickly access them anytime
            </p>
          </div>
        </div>
      </section>

      <section className="px-10 py-12">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold">Saved Properties</h2>
            <p className="text-muted-foreground">
              You have {favoriteProperties.length} properties in your favorites
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="gap-2">
              <Heart className="h-4 w-4" />
              Compare
            </Button>
            <Button variant="outline" className="gap-2">
              <Trash2 className="h-4 w-4" />
              Clear All
            </Button>
          </div>
        </div>

        {favoriteProperties.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favoriteProperties.map((property) => (
              <Card
                key={property.id}
                className="overflow-hidden transition-all hover:shadow-md p-0"
              >
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
                    className="absolute right-3 top-3 rounded-full bg-white/80 p-1.5 text-rose-500 backdrop-blur-sm transition-colors hover:bg-white"
                    aria-label="Remove from favorites"
                  >
                    <Heart className="h-5 w-5 fill-current" />
                  </button>
                </div>
                <CardContent className="px-4">
                  <Link href={`/properties/${property.id}`}>
                    <h3 className="line-clamp-1 text-lg font-bold hover:text-teal-700">
                      {property.title}
                    </h3>
                  </Link>
                  <p className="mt-1 text-xl font-semibold text-teal-700">
                    {property.price}
                  </p>
                  <div className="mt-2 flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    {property.location}
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Added on {property.dateAdded}
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
            ))}
          </div>
        ) : (
          <div className="rounded-lg border bg-white p-12 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
              <Heart className="h-6 w-6 text-slate-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold">No Favorites Yet</h3>
            <p className="mb-6 text-muted-foreground">
              You haven&apos;t added any properties to your favorites list yet.
              Browse our listings and click the heart icon to save properties
              you&apos;re interested in.
            </p>
            <Link href="/properties">
              <Button className="bg-teal-700 hover:bg-teal-800">
                Browse Properties
              </Button>
            </Link>
          </div>
        )}
      </section>

      <section className="bg-slate-50 py-12 md:py-16 px-10">
        <div className="">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold">Recommended For You</h2>
            <p className="mt-2 text-muted-foreground">
              Based on your favorites, you might also like these properties
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
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
            ].map((property) => (
              <Card
                key={property.id}
                className="overflow-hidden transition-all hover:shadow-md p-0"
              >
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
                  <Link href={`/properties/${property.id}`}>
                    <h3 className="line-clamp-1 text-lg font-bold hover:text-teal-700">
                      {property.title}
                    </h3>
                  </Link>
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
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
