"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

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
      "One of the best exhibition stall agencies we’ve worked with. The detailing, lighting, and layout truly stood out on the show floor.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 py-10 overflow-hidden">
      {/* Background Glow */}
     <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="relative mx-auto w-11/12 max-w-[1100px] text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="mb-3 text-xs tracking-[0.35em] uppercase text-red-500">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            What Our Clients Say About Us
          </h2>
          <div className="mx-auto mt-5 h-[3px] w-12 rounded-full bg-red-500" />
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative max-w-[780px] rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-10 py-12 shadow-2xl"
            >
              <Quote className="mx-auto mb-6 h-10 w-10 text-red-500 opacity-80" />

              <p className="text-lg leading-relaxed text-black">
                “{testimonials[index].quote}”
              </p>

              <div className="mt-8">
                <h4 className="text-base font-semibold text-black">
                  {testimonials[index].name}
                </h4>
                <p className="text-sm text-red-600">
                  {testimonials[index].role} ·{" "}
                  <span className="text-red-400">
                    {testimonials[index].company}
                  </span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === i
                  ? "bg-red-500 scale-125"
                  : "bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
