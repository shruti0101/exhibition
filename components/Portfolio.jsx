"use client";

import { motion } from "framer-motion";
import { portfolioItems } from "@/Data/data";

export default function PortfolioGrid() {
  return (
    <section className="relative bg-white py-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="mb-3 text-xs tracking-[0.35em] uppercase text-red-600">
          Our Work
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Recent Portfolio
        </h2>
        <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-gradient-to-r from-red-500 to-red-700" />
      </motion.div>

      {/* Cards Grid */}
      <div className="mx-auto grid w-11/12 max-w-[1200px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-xl"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* TOP → BOTTOM SLIDING OVERLAY */}
            <div
              className="
                absolute inset-0
                -translate-y-full
                bg-gradient-to-b from-red-600/95 via-red-600/90 to-red-700/95
                transition-transform duration-500 ease-out
                group-hover:translate-y-0
                flex items-center justify-center
              "
            >
              {/* Overlay Content */}
              <div
                className="
                  px-6 text-center
                  opacity-0 translate-y-4
                  transition-all duration-500 delay-150
                  group-hover:opacity-100 group-hover:translate-y-0
                "
              >
                <h3 className="text-xl font-semibold text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/90">
                  {item.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 flex justify-center">
        <button className="group relative inline-flex items-center gap-3 rounded-full border-2 border-red-600 px-8 py-3 text-sm font-medium uppercase tracking-wide text-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white">
          View All Projects
          <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-6" />
        </button>
      </div>
    </section>
  );
}
