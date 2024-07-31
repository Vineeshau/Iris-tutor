"use client";
import React, { useState, useEffect } from "react";
import testimonialsData from "@/data/testimonials.json";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, []);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsPerPage >= testimonials.length
        ? 0
        : prevIndex + itemsPerPage
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? testimonials.length - itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="w-full py-8">
      <div className="max-w-7xl w-full mx-auto text-center px-4 md:px-8 lg:px-16">
        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 py-4 md:py-8 lg:py-10 whitespace-nowrap">
          Success stories with <span className="text-[#22577A]">Iris</span>
          <span className="text-[#22577A] mt-2 md:mt-4"> Tutor</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl w-full mx-auto py-8">
        {currentTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative p-6 rounded-lg shadow-xl"
            style={{ backgroundColor: "rgba(34, 87, 122, 0.43)" }}
          >
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <img
                src={testimonial.imgSrc}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <div className="mt-12 flex flex-col items-center">
              <h3 className="text-xl font-bold">
                {testimonial.name} - {testimonial.title}
              </h3>
              <p className="mt-4 text-gray-700 text-center">
                {testimonial.quote}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        <button onClick={handlePrev}>
          <CircleArrowLeft />
        </button>
        <button onClick={handleNext}>
          <CircleArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
