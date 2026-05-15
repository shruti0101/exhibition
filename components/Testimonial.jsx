"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
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
    (_, i) => testimonials[(startIndex + i) % testimonials.length],
  );

  return (
    <>
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

                  <p className="text-base leading-relaxed text-gray-700 text-justify">
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
      {/* Certificate Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-7 px-6 md:px-12">
         <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="text-4xl text-center md:text-5xl font-bold text-gray-900 leading-tight mb-4 md:mb-8"
            >
              OUR <span className="text-[#039c98]">CERTIFICATE</span>
            </motion.h2>
        {/* Background Blur */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-40"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-40"
        />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-14 items-center">
          
         

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
           

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className=" backdrop-blur-xl  rounded-3xl  p-6 md:p-10"
            >
              <p className="text-black leading-8 text-[17px] mb-6">
                This Certificate Verifies that STRIDES DESIGN STUDIO PRIVATE
                LIMITED having its registered office at FLAT NO-JD-49C, SF,
                PITAMPURA, NEW DELHI, NORTH WEST DELHI – 110034, has been
                independently audited and assessed for the scope of its business
                operations and management practices. Based on the audit
                findings, the organization has been found to be in compliance
                with the requirements of the applicable Management System
                Standards.
              </p>

              <p className="text-black leading-8 text-[17px] mb-6">
                This certification demonstrates the organization’s commitment
                towards professionalism, systematic business operations,
                continuous improvement, risk management, and delivering reliable
                services in accordance with internationally recognized
                management principles. The management system implemented by the
                organization supports consistent performanceprocess transparency, and enhanced business reliability.
                The audit confirms that the organization has established and implemented an effective management system aimed at maintaining high standards of quality, operational efficiency

              </p>

              <p className="text-black leading-8 text-[17px]">
                The certification is awarded subject to the organization
                maintaining continual compliance with the applicable standards
                and successful completion of periodic surveillance audits as
                required by the certification authority.
              </p>
            </motion.div>
          </motion.div>

           {/* Left Side - Certificate Image */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotate: -4 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              
              transition={{ type: "spring", stiffness: 180 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              

              <div className="relative bg-white rounded-3xl shadow-2xl p-5 border border-gray-200 overflow-hidden">
                
                {/* Shine Effect */}
                <motion.div
                  
                  className="absolute top-0 left-0 h-full w-20 bg-white/40 skew-x-12 blur-xl"
                />

                <Image
                  src="/certificate.webp"
                  alt="Certificate"
                  width={500}
                  height={700}
                  className="rounded-2xl object-cover w-full max-w-md"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
