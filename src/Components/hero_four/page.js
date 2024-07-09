import React from "react";
import Image from "next/image";
import testimonials from "@/data/testimonials";
import { Card, CardContent } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
 
function Page() {
  return (
    <div className="flex flex-col py-10 lg:py-20">
      <div className="flex-1 p-4 py-10 flex items-center justify-center">
        <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 text-center">
          What People Say
        </h3>
      </div>
      <div className="flex-1 p-4 py-3">
        <p className="text-gray-700 mb-6 text-center text-xl lg:text-2xl">
          Join <span className="font-bold text-gray-900">10&quot;000</span> happy customers
          worldwide who are already using our amazing product.
        </p>
      </div>
      <div className="flex-1 p-4 lg:py-10">
        <div className="px-1 sm:px-20">
          <div className="flex flex-col sm:flex-row">
            <Carousel
              opts={{
                align: "start",
              }}
              className="carousel-wrapper"
              style={{ border: "none" }} // Remove border here if needed
            >
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.id}
                    className="md:basis-1/2 lg:basis-1/3 p-4"
                  >
                    <div className="p-4 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
                      <CardContent className="flex flex-col items-center p-6">
                        <Image
                          src={testimonial.image}
                          width={65}
                          height={65}
                          alt={`Image ${testimonial.id}`}
                          className="mx-auto mb-4 rounded-full"
                        />
                        <p className="text-gray-700 mb-4 text-center text-lg">
                        &rdquo;{testimonial.quote}&rdquo;
                        </p>
                        <h3 className="text-lg font-semibold mb-2 text-center text-gray-900">
                          {testimonial.author}
                        </h3>
                        <p className="text-gray-500 text-center">
                          {testimonial.role}
                        </p>
                      </CardContent>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Page;