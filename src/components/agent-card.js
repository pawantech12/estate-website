import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";

export default function AgentCard() {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md p-0">
      <div className="relative h-64 w-full">
        <Image
          src="/agent1.jpg"
          alt="Real estate agent"
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="text-lg font-bold">John Smith</h3>
        <p className="text-sm text-muted-foreground">
          Senior Real Estate Agent
        </p>
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
        <Button variant="outline" className="w-full gap-2 cursor-pointer">
          <Phone className="h-4 w-4" />
          Contact
        </Button>
      </CardFooter>
    </Card>
  );
}
