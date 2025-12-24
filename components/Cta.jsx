"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative   overflow-hidden  bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 px-8 py-14 md:px-16"
    >
      {/* subtle background glow */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        {/* Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
            Get a Free Quote for Your Next Exhibition Stall
          </h2>
          <p className="mt-2 max-w-xl text-sm md:text-lg text-black">
            Custom-designed exhibition stalls that elevate your brand presence
            and attract the right audience.
          </p>
        </div>

        {/* CTA Button */}
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-red-600 cursor-pointer px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-xl"
          >
            {/* shine effect */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            Enquire Now
            <motion.span
              className="inline-block"
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
}
