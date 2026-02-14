import About from "@/components/About";
import Hero from "@/components/Hero";

import Testimonials from "@/components/Testimonial";
import GallerySection from "@/components/Galley";
import CitySection from "@/components/CitySection";

export const metadata = {
  title:
    "Exhibition Stall Designing Services | Custom Trade Show Booth Designers India",
  description:
    "Professional exhibition stall designing services in India offering custom, modular, and turnkey trade show booth designs to attract, engage, and convert visitors.",
  keywords: "exhibition stall designing services",
};

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Testimonials />
      <GallerySection />
      <CitySection/>
    </div>
  );
};

export default page;
