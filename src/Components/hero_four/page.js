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
    <div className="flex flex-col py-10 lg:py-20 items-center">
      <div className="flex-1 p-4 py-10 flex items-center justify-center">
        <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 text-center">
          What People Say
        </h3>
      </div>
      <div className="flex-1 p-4 py-3">
        <p className="text-gray-700 mb-6 text-center text-xl lg:text-2xl">
          Join <span className="font-bold text-gray-900">10,000</span> happy
          customers worldwide who are already using our amazing product.
        </p>
      </div>
      
      <div className="w-[90%] relative">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className=""
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/3 lg:basis-1/3 p-4">
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <Image
                      src={testimonial.image}
                      width={65}
                      height={65}
                      alt={`Image ${testimonial.id}`}
                      className="mx-auto mb-4 rounded-full"
                    />
                    <p className="text-gray-700 mb-4 text-center text-lg">
                      "{testimonial.quote}"
                    </p>
                    <h3 className="text-lg font-semibold mb-2 text-center text-gray-900">
                      {testimonial.author}
                    </h3>
                    <p className="text-gray-500 text-center">
                      {testimonial.role}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-6 xl:-left-20 absolute top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="right-0 xl:-right-20 absolute top-1/2 transform -translate-y-1/2" />
        </Carousel>
        
      </div>
    </div>
  );
}

export default Page;
