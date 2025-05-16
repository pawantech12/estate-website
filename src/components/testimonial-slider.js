"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "EstateEase made finding our dream home so simple. Our agent was knowledgeable, responsive, and truly understood what we were looking for. We couldn't be happier with our new home!",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor",
    content:
      "As a real estate investor, I've worked with many agencies, but EstateEase stands out for their market knowledge and professionalism. They've helped me find multiple profitable investment properties.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "First-time Buyer",
    content:
      "Being a first-time homebuyer was intimidating, but EstateEase guided me through every step of the process. They found me a beautiful condo within my budget and made the closing process smooth.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative">
      <div className="mx-auto max-w-3xl">
        <Card className="border-none shadow-none">
          <CardContent className="p-6 text-center">
            <div className="mb-6 flex justify-center">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-teal-100">
                <Image
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mb-4 flex justify-center">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-gray-300" />
              ))}
            </div>
            <p className="mb-6 text-lg italic text-gray-700">
              &quot;{testimonials[currentIndex].content}&quot;
            </p>
            <h3 className="text-xl font-bold">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {testimonials[currentIndex].role}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 justify-between px-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-gray-200 bg-white/80 backdrop-blur-sm"
          onClick={prevTestimonial}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-gray-200 bg-white/80 backdrop-blur-sm"
          onClick={nextTestimonial}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-teal-700" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
