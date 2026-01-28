import About from "@/components/About";
import Hero from "@/components/Hero";

import Testimonials from "@/components/Testimonial";
import GallerySection from "@/components/Galley";

export const metadata = {
  title:
    "Strides Design Studio | Exhibition Stand & Stall Design Company in India",
  description:
    "Strides Design Studio is a premier exhibition stand design and fabrication company in India, providing custom booth construction, raw space design, and high-impact exhibition displays for national and international events.",
  keywords: "Exhibition Stall Design",
};

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
