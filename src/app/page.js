"use client"
import React, { useState, useRef } from "react";
import HeroOne from "../Components/hero_one/page";
import HeroTwo from "../Components/hero_two/page";
import HeroThree from "../Components/hero_three/page";
import HeroFour from "../Components/hero_four/page";

export default function Home() {
  const [showHeroTwo, setShowHeroTwo] = useState(false);
  const heroTwoRef = useRef(null);

  const handleGetStarted = () => {
    setShowHeroTwo(true);
    // Scroll to HeroTwo section
    heroTwoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <HeroOne onGetStarted={handleGetStarted} />
      <div ref={heroTwoRef}>
        {showHeroTwo && <HeroTwo />}
      </div>
      {showHeroTwo ? "" : <HeroTwo/>}
      <HeroThree />
      <HeroFour />
    </div>
  );
}
