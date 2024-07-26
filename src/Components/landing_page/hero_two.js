import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";

function Page() {
  const testimonials = [
    {
      id: 1,
      image: "img1.svg",
      subject: "Python",
    },
    {
      id: 2,
      image: "img2.svg",
      subject: "Machine Learning",
    },
    {
      id: 3,
      image: "img3.svg",
      subject: "Statistics",
    },
    {
      id: 4,
      image: "img4.svg",
      subject: "UI/UX Design",
    },
    {
      id: 5,
      image: "img4.svg",
      subject: "UI/UX Design",
    },
  ];

  return (
    <div className="flex flex-col py-10 lg:py-20 items-center bg-[#F5F5F5]">
      <div className="max-w-7xl w-full mx-auto text-center">
        <h3 className="text-3xl lg:text-5xl font-medium text-gray-900 text-center py-10">
          Explore Courses
        </h3>
      </div>

      <div className="w-full max-w-[80%] mx-auto relative">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 p-4 flex items-center justify-center"
              >
                <Card className="relative overflow-hidden w-full max-w-[400px] h-[300px]">
                  <Image
                    src={testimonial.image}
                    alt={`Image ${testimonial.id}`}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                  />
                  <CardContent className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                    <h3 className="text-base sm:text-lg font-semibold text-center">
                      {testimonial.subject}
                    </h3>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-6 xl:-left-20 absolute top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="right-0 xl:-right-20 absolute top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>

      <div className="mt-10">
        <Button
          variant="outline"
          className="bg-[#68B0AB] hover:bg-[#68B0AB] rounded-2xl text-black hover:text-black text-sm lg:text-base font-bold w-full sm:w-80 lg:w-60 h-11 px-4"
        >
          Explore More
        </Button>
      </div>
    </div>
  );
}

export default Page;
