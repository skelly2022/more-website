"use client";

import Hero from "../components/home/Hero";
import Testimonials from "../components/home/Testimonials";
import Zigzag from "../components/home/Zigzag";
import Newsletter from "../components/home/Newsletter";
// import AosWrap from "../(default)/AosWrap";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Zigzag />
      <Testimonials />
      <Newsletter/>
    </>
  );
};

export default HomePage;
