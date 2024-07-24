import React from "react";
import HeroOne from "../Components/landing_page/hero_one";
import HeroTwo from "../Components/landing_page/hero_two";
import HeroThree from "../Components/landing_page/hero_three";
import HeroFour from "../Components/landing_page/hero_four";
import Testimonials from "../Components/landing_page/testimonials";

function page() {
  return (
    <div>
      <HeroOne />
      <HeroThree />
      <HeroTwo />
      <HeroFour />
      <Testimonials />
    </div>
  );
}

export default page;
