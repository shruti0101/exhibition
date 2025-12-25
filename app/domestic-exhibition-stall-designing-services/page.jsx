"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  Globe,
  Layers,
  Factory,
  Handshake,
} from "lucide-react";

export default function Page() {
  return (
    <main className="bg-white">

      {/* ================= HERO WITH PARALLAX ================= */}
      <section className="relative h-[50vh] md:h-[90vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.4 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/aboutbg.jpg"
            alt="Domestic Exhibition Stall Designing Services"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="max-w-5xl"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mx-auto mb-6 h-[3px] bg-red-600 rounded-full"
            />

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Domestic Exhibition Stall Designing Services
            </h1>

            <p className="mt-6 text-base md:text-lg text-black max-w-3xl mx-auto">
              Custom-designed exhibition stalls for trade fairs, expos and
              corporate events across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="py-12"
      >
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-black">
            Domestic Exhibition Stalls That Drive Results
          </h2>

          <p className="mt-8 text-lg text-black max-w-5xl mx-auto leading-relaxed">
            We specialize in Domestic Exhibition Stall Designing Services,
            delivering end-to-end solutions for exhibitions across India.
            With over <strong>25 years of experience</strong>, we help brands
            create engaging, functional, and visually striking exhibition
            spaces.
          </p>
        </div>
      </motion.section>

      {/* ================= CONTENT BLOCKS ================= */}
      <section className="py-7">
        <div className="mx-auto max-w-7xl px-6 space-y-16">

          {/* BLOCK 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid items-center gap-16 lg:grid-cols-2"
          >
            <Image
              src="/portfolio/test2.jpg"
              alt="Domestic Exhibition Stall Design"
              width={400}
              height={400}
              className="rounded-sm w-full object-cover h-[300px]"
            />

            <div className="max-w-xl">
              <p className="mb-3 text-sm uppercase tracking-wide text-red-600">
                What We Do
              </p>

              <h3 className="mb-6 font-serif text-3xl md:text-4xl text-black">
                Custom Domestic Exhibition Stall Design
              </h3>

              <p className="text-black leading-7">
                We design and fabricate exhibition stalls for domestic trade
                fairs, expos, and corporate events across India. Our designs
                focus on brand identity, space optimization, and visitor
                engagement.
              </p>
            </div>
          </motion.div>

          {/* BLOCK 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid items-center gap-16 lg:grid-cols-2"
          >
            <div className="order-2 lg:order-1 max-w-xl">
              <p className="mb-3 text-sm uppercase tracking-wide text-red-600">
                Our Capabilities
              </p>

              <h3 className="mb-6 font-serif text-3xl md:text-4xl text-black">
                End-to-End Domestic Exhibition Solutions
              </h3>

              <ul className="space-y-3 text-black">
                <li>• Concept design & 3D visualization</li>
                <li>• In-house fabrication & graphics</li>
                <li>• Stall installation & dismantling</li>
                <li>• Retail kiosks & custom booths</li>
                <li>• Compliance with Indian exhibition norms</li>
              </ul>
            </div>

            <Image
              src="/portfolio/test3.jpg"
              alt="Exhibition Fabrication"
              width={400}
              height={400}
              className="order-1 lg:order-2 w-full object-cover rounded-sm h-[300px]"
            />
          </motion.div>

          {/* BLOCK 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid items-center gap-16 lg:grid-cols-2"
          >
            <Image
              src="/portfolio/test2.jpg"
              alt="Pan India Exhibition Services"
              width={400}
              height={400}
              className="rounded-sm w-full object-cover h-[300px]"
            />

            <div className="max-w-xl">
              <p className="mb-3 text-sm uppercase tracking-wide text-red-600">
                Pan-India Execution
              </p>

              <h3 className="mb-6 font-serif text-3xl md:text-4xl text-black">
                Seamless Stall Execution Across India
              </h3>

              <p className="text-black leading-7">
                We execute domestic exhibition stalls across major Indian cities
                including Delhi, Mumbai, Bengaluru, Chennai, Hyderabad,
                Ahmedabad, and more, ensuring timely delivery and smooth
                coordination.
              </p>
            </div>
          </motion.div>

          {/* BLOCK 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid items-center gap-16 lg:grid-cols-2"
          >
            <div className="order-2 lg:order-1 max-w-xl">
              <p className="mb-3 text-sm uppercase tracking-wide text-red-600">
                Client Commitment
              </p>

              <h3 className="mb-6 font-serif text-3xl md:text-4xl text-black">
                Trusted Partner for Domestic Exhibitions
              </h3>

              <p className="text-black leading-7">
                Our domestic exhibition stall designing services are trusted by
                brands for their reliability, cost efficiency, and consistent
                quality. We focus on long-term partnerships and measurable
                results.
              </p>
            </div>

            <Image
              src="/portfolio/test3.jpg"
              alt="Client Commitment"
              width={400}
              height={400}
              className="order-1 lg:order-2 w-full object-cover rounded-sm h-[300px]"
            />
          </motion.div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="relative h-[65vh] bg-center bg-fixed bg-cover overflow-hidden"
        style={{ backgroundImage: "url('/servicebg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex h-full items-center justify-center text-center px-6"
        >
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Let’s Design Your Next Exhibition Stall
            </h2>

            <button className="mt-8 bg-red-600 px-10 py-4 text-sm uppercase tracking-wide text-white hover:bg-black transition">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </section>








      <section className="bg-white py-20 relative">
  <div className="mx-auto max-w-7xl px-6 space-y-20">

    {/* ================= HERO CARD ================= */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid gap-12 lg:grid-cols-2 items-center"
    >
      <div>
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900">
          About Strides Design
        </h2>

        <p className="mt-6 text-black leading-8">
          Strides Design is a trusted name in <strong>Domestic Exhibition Stall
          Designing Services</strong>, offering complete design, fabrication,
          and execution solutions for exhibitions and trade fairs across India.
          With over <strong>25 years of experience</strong>, we help brands
          create impactful exhibition spaces that attract, engage, and convert.
        </p>

        <p className="mt-4 text-black leading-8">
          Established in 2004, our approach is driven by creativity, technical
          expertise, and transparent execution—ensuring world-class exhibition
          stalls tailored for the Indian market.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-6">
        {[
          ["25+", "Years in Domestic Exhibitions"],
          ["2004", "Established"],
          ["Pan-India", "Execution Capability"],
          ["100%", "Client Satisfaction Focus"],
        ].map(([num, label], i) => (
          <div
            key={i}
            className="border border-red-700 p-6 text-center"
          >
            <h3 className="text-3xl font-bold text-gray-900">{num}</h3>
            <p className="mt-2 text-sm uppercase tracking-wide text-gray-500">
              {label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>

    {/* ================= ADVANTAGES GRID ================= */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Image
        className="absolute top-0 left-0"
        width={110}
        height={100}
        src="/flame.png"
        alt=""
      />

      <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-10">
        Why Choose Us for Domestic Exhibition Stalls
      </h3>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: <Layers />,
            title: "Complete Domestic Solutions",
            desc: "End-to-end exhibition stall design, fabrication, and execution across India.",
          },
          {
            icon: <Factory />,
            title: "In-house Fabrication",
            desc: "Controlled quality, faster timelines, and cost-effective domestic execution.",
          },
          {
            icon: <Building2 />,
            title: "Custom Stall Designs",
            desc: "Brand-focused, space-optimized stall designs for Indian exhibitions.",
          },
          {
            icon: <Calendar />,
            title: "On-time Delivery",
            desc: "Strict adherence to domestic exhibition schedules and venue timelines.",
          },
          {
            icon: <Handshake />,
            title: "Client-First Approach",
            desc: "Tailored solutions aligned with marketing goals and ROI.",
          },
          {
            icon: <Globe />,
            title: "Pan-India Presence",
            desc: "Execution support across all major Indian exhibition cities.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group border border-red-600 bg-white p-8 transition-shadow duration-300 hover:shadow-xl"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mb-4 text-red-600"
            >
              {item.icon}
            </motion.div>

            <h4 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h4>

            <p className="mt-2 text-black leading-7">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* ================= INFRA + GLOBAL ================= */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid gap-16 lg:grid-cols-2"
    >
      <Image
        className="absolute bottom-0 right-0"
        width={130}
        height={130}
        src="/flame2.png"
        alt=""
      />

      {/* BOX 1 */}
      <motion.div
        whileHover="hover"
        initial="rest"
        animate="rest"
        className="relative overflow-hidden border border-gray-200 p-7"
      >
        <motion.div
          variants={{ rest: { x: "-100%" }, hover: { x: 0 } }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-black z-0"
        />

        <div className="relative z-10">
          <motion.h3
            variants={{ rest: { color: "#111827" }, hover: { color: "#ffffff" } }}
            transition={{ duration: 0.3 }}
            className="font-serif text-3xl mb-4"
          >
            Infrastructure & Team
          </motion.h3>

          <motion.p
            variants={{ rest: { color: "#000000" }, hover: { color: "#e5e7eb" } }}
            transition={{ duration: 0.3 }}
            className="leading-8"
          >
            Our in-house design studios, fabrication units, and experienced
            project teams ensure flawless execution of domestic exhibition
            stalls—from concept approval to on-site installation anywhere in India.
          </motion.p>
        </div>
      </motion.div>

      {/* BOX 2 */}
      <motion.div
        whileHover="hover"
        initial="rest"
        animate="rest"
        className="relative overflow-hidden border border-gray-300 p-7"
      >
        <motion.div
          variants={{ rest: { x: "-100%" }, hover: { x: 0 } }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-red-700 z-0"
        />

        <div className="relative z-10">
          <motion.h3
            variants={{ rest: { color: "#111827" }, hover: { color: "#ffffff" } }}
            transition={{ duration: 0.3 }}
            className="font-serif text-3xl mb-4"
          >
            Trusted Across India
          </motion.h3>

          <motion.p
            variants={{ rest: { color: "#000000" }, hover: { color: "#e5e7eb" } }}
            transition={{ duration: 0.3 }}
            className="leading-8"
          >
            Our domestic exhibition stall designing services are trusted by
            leading brands, institutions, and organizations participating in
            India’s biggest trade fairs, expos, and industry exhibitions.
          </motion.p>
        </div>
      </motion.div>
    </motion.div>

  </div>
</section>


    </main>
  );
}
