"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/home/Hero";
import Testimonials from "../components/home/Testimonials";
import Zigzag from "../components/home/Zigzag";
import Newsletter from "../components/home/Newsletter";
// import AosWrap from "../(default)/AosWrap";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });
  return (
    <main className="grow font-inter antialiased bg-gray-900 text-gray-200 tracking-tight">
      <>
        <Hero />
        <Zigzag />
        <Testimonials />
        <Newsletter />
      </>
    </main>
  );
};

export default HomePage;
