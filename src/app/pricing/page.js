"use client";
import React from "react";
import { TiTick } from "react-icons/ti";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";

// JSON data for pricing plans
const pricingData = [
  {
    title: "Free",
    description: "For anyone to get started",
    price: {
      monthly: 0,
      yearly: 0,
    },
    features: [
      "1 Website",
      "1 Contributor",
      "Sub-domain (on *.softr.io)",
      "All Building Blocks",
      "SSL Security",
    ],
  },
  {
    title: "Startup",
    description: "For solopreneurs, bootstrappers, early stage startups",
    price: {
      monthly: 25,
      yearly: 25,
    },
    features: [
      "5 Websites",
      "3 Contributors",
      "Custom Domain",
      "All Building Blocks",
      "SSL Security",
      "Custom Code",
      "Payment Integration (Stripe)",
      "Email Lists",
    ],
  },
  {
    title: "Enterprise",
    description: "For established businesses",
    price: {
      monthly: 70,
      yearly: 70,
    },
    features: [
      "Website",
      "Contributor",
      "Sub-domain (on *.softr.io)",
      "All Building Blocks",
      "SSL Security",
    ],
  },
];

function Page(props) {
  return (
    <div className="flex flex-col justify-center items-center gap-8 p-4 py-20 bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl leading-8 font-medium text-[#152237]">
          &quot;Unlock Your Potential: Affordable Learning, Unlimited Growth!&quot;
        </p>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap gap-4 w-full max-w-6xl justify-center">
        {pricingData.map((plan, index) => (
          <Card
            key={index}
            className="w-full sm:w-[90%] md:w-[60%] lg:w-[30%] flex flex-col gap-6 sm:gap-8 shadow-lg md:shadow-2xl"
          >
            <CardHeader className="flex flex-col items-center text-center">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-[#152237]">
                {plan.title}
              </CardTitle>
              <CardDescription className="text-sm sm:text-base md:text-lg text-[#152237]">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <div className="flex justify-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#152237]">
                ${plan.price.yearly}
                <span className="text-sm sm:text-base text-[#152237]">/month</span>
              </p>
            </div>
            <CardContent className="flex flex-col gap-2 sm:gap-4 flex-grow">
              {plan.features.map((feature, index) => (
                <div
                  key={index}
                  className="text-sm sm:text-base text-[#152237] flex items-center gap-2"
                >
                  <TiTick className="text-yellow-500 text-lg" /> {feature}
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex justify-center items-center">
              <Button
                className="w-40 border-2 border-[#152237] text-white bg-[#22577A] hover:bg-[#22577A] rounded-full"
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Page;
