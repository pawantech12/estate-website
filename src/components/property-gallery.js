"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

const images = [
  "/home2.jpg",
  "/home3.jpg",
  "/home4.jpg",
  "/home6.jpg",
  "/home7.jpg",
];

export default function PropertyGallery() {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Main Gallery */}
      <div className="relative overflow-hidden rounded-xl">
        {/* Main Image */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
          <Image
            src={images[0]}
            alt="Main property image"
            fill
            className="object-cover rounded-xl transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>

        {/* Secondary Images */}
        <div className="mt-4 hidden md:grid grid-cols-2 lg:grid-cols-4 gap-3">
          {images.slice(1, 5).map((img, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-xl"
            >
              <Image
                src={img}
                alt={`Gallery image ${index + 2}`}
                fill
                className="object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Open Modal Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => setOpen(true)}
          className="absolute bottom-4 right-4 z-10 rounded-full bg-white/90 hover:bg-white transition shadow-md backdrop-blur-sm hover:scale-105 cursor-pointer"
        >
          <Maximize2 className="w-5 h-5 text-gray-700" />
          <span className="sr-only">View full gallery</span>
        </Button>
      </div>

      {/* Fullscreen Dialog Gallery */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-0 bg-black">
          <div className="relative h-screen w-full">
            <Image
              src={images[currentImageIndex]}
              alt={`Gallery full image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
            />

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 rounded-full backdrop-blur-sm hover:scale-110 cursor-pointer"
              onClick={prevImage}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 rounded-full backdrop-blur-sm hover:scale-110 cursor-pointer"
              onClick={nextImage}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Close Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/80 rounded-full backdrop-blur-sm hover:scale-110 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="bg-black/70 text-white text-sm rounded-full px-3 py-1">
                {currentImageIndex + 1} / {images.length}
              </span>
            </div>

            {/* Thumbnails */}
            <div className="absolute bottom-16 left-0 right-0 px-4">
              <div className="mx-auto flex max-w-md gap-2 overflow-x-auto">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative h-16 w-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                      currentImageIndex === idx
                        ? "border-teal-500"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
