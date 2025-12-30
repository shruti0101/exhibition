"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Rajiv Mehta",
    role: "Marketing Head",
    company: "Pharma Expo India",
    quote:
      "The stall design completely transformed our brand presence. Footfall increased dramatically and the execution was flawless from concept to installation.",
  },
  {
    name: "Ananya Verma",
    role: "Brand Manager",
    company: "Global Electronics",
    quote:
      "Exceptional creativity and professionalism. The team delivered a premium exhibition experience that aligned perfectly with our global brand identity.",
  },
  {
    name: "Saurabh Jain",
    role: "Founder",
    company: "Startup Pavilion",
    quote:
      "From design to fabrication, everything was handled in-house with precision. We received incredible feedback from visitors and partners.",
  },
  {
    name: "Neha Kapoor",
    role: "Events Lead",
    company: "Retail Trade Expo",
    quote:
      "One of the best exhibition stall agencies we’ve worked with. The detailing and lighting truly stood out.",
  },
  {
    name: "Amit Khanna",
    role: "Director",
    company: "Auto Expo",
    quote:
      "Highly professional team. Their stall design helped us attract serious buyers and partners.",
  },
];

const VISIBLE_COUNT = 3;

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Get visible testimonials
  const visibleTestimonials = Array.from({ length: VISIBLE_COUNT }).map(
    (_, i) => testimonials[(startIndex + i) % testimonials.length]
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 py-20">
      {/* Soft glow */}
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="relative mx-auto w-full px-8 md:px-16 ">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm tracking-[0.35em] uppercase text-[#039C98]">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-5 h-[3px] w-12 rounded-full bg-[#039C98]" />
        </motion.div>

        {/* Animated Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((item, index) => (
              <motion.div
                key={`${item.name}-${startIndex}-${index}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative rounded-2xl bg-white/70 backdrop-blur-xl p-8 shadow-xl"
              >
                <Quote className="mb-5 h-8 w-8 text-[#039C98] opacity-80" />

                <p className="text-base leading-relaxed text-gray-700">
                  “{item.quote}”
                </p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-black">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#039C98]">
                    {item.role} ·{" "}
                    <span className="text-[#039C98]">{item.company}</span>
                  </p>
                </div>

                {/* Accent */}
                <span className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#039C98] to-[#039C98]" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
