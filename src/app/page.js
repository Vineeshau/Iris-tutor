"use client";
import React from "react";
import HeroOne from "../Components/hero_one/page";
import HeroTwo from "../Components/hero_two/page";
import HeroThree from "../Components/hero_three/page";
import HeroFour from "../Components/hero_four/page";

export default function Home() {
  return (
    <div>
      <HeroOne/>
      <HeroThree />
      <HeroTwo />
      <HeroFour />
    </div>
  );
}
