import About from "@/components/About";
import Hero from "@/components/Hero";

import Testimonials from "@/components/Testimonial";
import GallerySection from "@/components/Galley";

import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Testimonials />
      <GallerySection />
    </div>
  );
};

export default page;
