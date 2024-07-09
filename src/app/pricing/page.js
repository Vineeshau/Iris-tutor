"use client";
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { Switch } from "@/Components/ui/switch";
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
      yearly: 29,
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
      yearly: 79,
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
  const [toggle, setToggle] = useState(false);

  const toggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4 py-20 bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <p className="text-4xl leading-8 font-medium text-[#152237]">
          Pricing that fits every stage
        </p>
        <p className="text-xl text-[#152237]">
          Whether you are just starting or have a growing startup
        </p>
        <div className="w-8 h-4 flex flex-row items-center justify-center gap-4">
          <p
            className={
              toggle ? "font-normal text-[#152237]" : "font-bold text-[#152237]"
            }
          >
            Yearly
          </p>
          <Switch onClick={toggleChange} />
          <p
            className={
              toggle ? "font-bold text-[#152237]" : "font-normal text-[#152237]"
            }
          >
            Monthly
          </p>
        </div>
        <p>(Get 1 week free)</p>
      </div>
      <div
        className={
          props.price
            ? "flex flex-col items-center gap-4 w-full max-w-6xl"
            : "flex flex-col lg:flex-row gap-4 w-full max-w-6xl"
        }
      >
        {pricingData.map((plan, index) => (
          <Card
            key={index}
            className="w-full lg:w-[54%] flex flex-col gap-8 shadow-2xl"
          >
            <CardHeader className="flex justify-center items-center">
              <CardTitle className="text-2xl text-[#152237]">
                {plan.title}
              </CardTitle>
              <CardDescription className="text-base text-[#152237]">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <div className="flex justify-center">
              <p className="text-4xl font-medium text-[#152237]">
                {toggle ? `$${plan.price.yearly}` : `$${plan.price.monthly}`}
                <span className="text-sm text-[#152237]">/week</span>
              </p>
            </div>
            <CardContent className="flex flex-col gap-4 flex-grow">
              {plan.features.map((feature, index) => (
                <div
                  key={index}
                  className="text-sm text-[#152237] flex items-center gap-2"
                >
                  <TiTick className="text-yellow-500 text-lg" /> {feature}
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full border-2 border-[#152237] text-white bg-[#3278FF] hover:bg-blue`}
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
