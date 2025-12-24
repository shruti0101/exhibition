"use client";

import { motion } from "framer-motion";
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
];

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 py-20 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-red-400/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="relative mx-auto w-11/12 max-w-[1200px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs tracking-[0.35em] uppercase text-red-500">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-5 h-[3px] w-12 rounded-full bg-red-500" />
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl bg-white/70 backdrop-blur-xl p-8 shadow-xl transition"
            >
              <Quote className="mb-5 h-8 w-8 text-red-500 opacity-80" />

              <p className="text-base leading-relaxed text-gray-700">
                “{item.quote}”
              </p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-black">
                  {item.name}
                </h4>
                <p className="text-xs text-red-600">
                  {item.role} ·{" "}
                  <span className="text-red-400">{item.company}</span>
                </p>
              </div>

              {/* Hover accent */}
              <span className="absolute inset-x-0 bottom-0 h-[3px] scale-x-0 bg-gradient-to-r from-red-500 to-red-700 transition-transform duration-300 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
