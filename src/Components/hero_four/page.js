import React from "react";
import Image from "next/image";
import testimonials from "@/data/testimonials"; // Adjust path as per your project structure
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
    <div className="flex flex-col py-1">
      <div className="flex-1 p-4 py-10 flex items-center justify-center">
        <h3 className="text-2xl lg:text-5xl font-bold text-black max-w-xs lg:max-w-none text-center">
          What People Say
        </h3>
      </div>
      <div className="flex-1 p-4 py-3">
        <p className="text-gray-700 mb-1 text-center text-lg">
          Join <span className="font-bold">10,000</span> happy customers
          worldwide who are already using our amazing product.
        </p>
      </div>
      <div className="flex-1 p-4">
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
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="border-0 shadow-none">
                        <CardContent className="flex items-center justify-center p-6">
                          <div className="flex flex-col items-center">
                            <Image
                              src={testimonial.image}
                              width={65}
                              height={50}
                              alt={`Image ${testimonial.id}`}
                              className="mx-auto mb-4"
                            />
                            <p className="text-gray-700 mb-2 text-center">
                              {testimonial.quote}
                            </p>
                            <h3 className="text-lg font-semibold mb-2 text-center">
                              {testimonial.author}
                            </h3>
                            <p className="text-gray-700 mb-2 text-center">
                              {testimonial.role}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
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
