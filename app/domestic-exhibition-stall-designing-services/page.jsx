"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import GallerySection from "@/components/Galley";
import {
  Building2,
  Calendar,
  Globe,
  Layers,
  Factory,
  Handshake,
  Plus,
  Minus,
} from "lucide-react";

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are domestic exhibition stall designing services?",
      answer:
        "Domestic exhibition stall designing services involve creating custom exhibition stall designs for trade shows, expos, and corporate events within India, tailored to reflect your brand and engage visitors.",
    },
    {
      question:
        "Why should I choose domestic exhibition stall design for my event?",
      answer:
        "A professional domestic exhibition stall design ensures your brand stands out at local trade shows, attracts more visitors, and communicates your message effectively.",
    },
    {
      question: "What types of domestic exhibition stalls do you offer?",
      answer:
        "We provide custom stalls, two-storey stalls, country pavilion stalls, outdoor stalls, and portable exhibition stall designs, all tailored for domestic trade shows and events across India.",
    },
    {
      question:
        "Do you offer 3D visualization for domestic exhibition stall design?",
      answer:
        "Yes. We provide realistic 3D mockups of your domestic exhibition stall design, allowing you to approve layouts, branding, and design features before fabrication.",
    },
    {
      question:
        "Can domestic exhibition stall designs be reused for multiple events?",
      answer:
        "Absolutely. Our portable and modular domestic exhibition stall designs are reusable and easy to transport for multi-city trade shows and exhibitions.",
    },
    {
      question:
        "How can I get started with your domestic exhibition stall designing services?",
      answer:
        "Contact us at +91-9810119546 or info@stridesdezine.com. Our team will discuss your requirements and create a tailored exhibition stall design solution for your domestic events.",
    },
  ];

  return (
    <main className="bg-white">
      {/* ================= HERO WITH PARALLAX ================= */}
      <section className="relative h-[50vh] md:h-screen overflow-hidden">
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

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/45 to-black/40" />

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
              className="mx-auto mb-6 h-[3px] bg-[#039C98] rounded-full"
            />

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Domestic Exhibition Stall Designing Services
            </h1>
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
            Domestic Exhibition Stall Designing Services - Strides Design Studio
          </h2>

          <p className="mt-8 text-lg text-black max-w-5xl mx-auto leading-relaxed">
            Strides Design Studio presents its domestic exhibition stall design
            services all over India including <strong>Delhi</strong>,{" "}
            <strong>Mumbai</strong>, <strong>Bangalore</strong>,{" "}
            <strong>Hyderabad</strong>, and other important cities. Our capable
            team designs each unique exhibition stall based on your brand
            identity, helps attract the right visitors, and gives trade shows,
            expos, and corporate events with a strong impact.
          </p>
          <p className="mt-8 text-lg text-black max-w-5xl mx-auto leading-relaxed">
            Our methodology is based on creativity, usability and industry
            know-how to get the amazing and the attractive, and the exhibition
            stall designs. We are there from the very beginning with concept
            development and 3D visualization through to fabrication,
            installation, and on-site support. We offer complete solutions that
            ensure your domestic <strong>exhibition stall design</strong> is not
            only noticeable but also leads to significant outcomes.
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
              src="/domestic-image/JAYEM.jpg"
              alt="Domestic Exhibition Stall Design"
              width={400}
              height={400}
              className="rounded-sm w-full object-cover h-[300px]"
            />

            <div className="max-w-xl">
              <p className="mb-3 text-sm uppercase tracking-wide text-teal-600">
                What We Do
              </p>

              <h3 className="mb-6 font-serif text-3xl md:text-4xl text-black">
                Expert Domestic Exhibition Stall Design
              </h3>

              <p className="text-black leading-7">
                At Strides Design Studio, we specialize in creating and
                fabricating custom <strong>exhibition stall designs</strong> for
                domestic trade fairs, expos, and corporate events across India.
                Our designs are tailored to reflect your brand identity,
                optimize space, and maximize visitor engagement. Every
                exhibition stall design we deliver combines creativity,
                functionality, and professionalism to ensure your brand makes a
                lasting impression.
              </p>
            </div>
          </motion.div>

          {/* ctn block  */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid items-start gap-12 lg:grid-cols-2 bg-gray-50 p-8 md:p-10 rounded-sm border border-gray-100"
          >
            <div>
              <p className="mb-3 text-sm uppercase tracking-wide text-teal-600">
                Get Started
              </p>
              <h3 className="mb-6 font-serif text-3xl md:text-4xl text-black">
                Get Your Custom Exhibition Stall Design Today!
              </h3>
              <p className="text-black leading-7">
                Take your brand to the next level with a bespoke exhibition
                stall design from Strides Design Studio. Whether it’s a domestic
                trade fair, expo, or corporate event, we create stalls that
                attract attention, engage visitors, and leave a lasting
                impression.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 shadow-sm border border-gray-200 rounded-sm">
              <form action="" className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-[#039C98] transition"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-[#039C98] transition"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-[#039C98] transition"
                    placeholder="Your Phone"
                  />
                </div>
                <div>
                  <label
                    htmlFor="requirements"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Requirements
                  </label>
                  <textarea
                    id="requirements"
                    rows={3}
                    className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-[#039C98] transition resize-none"
                    placeholder="Your Requirements"
                  ></textarea>
                </div>
                <button className="w-full bg-green-600 py-3 text-sm uppercase tracking-wide text-white hover:bg-black transition font-medium">
                  Submit
                </button>
              </form>
            </div>
          </motion.div>

          {/* BLOCK 2 */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="grid items-center gap-16 lg:grid-cols-2"
            >
              <div className="order-2 lg:order-1 max-w-xl">
                <h2 className="mb-3 text-sm uppercase tracking-wide text-teal-600">
                  Our Capabilities
                </h2>

                <p className="mb-6 font-serif text-3xl md:text-4xl text-black">
                  End-to-End Domestic Exhibition Stall Design Solutions
                </p>

                <ul className="space-y-3 text-black">
                  <li>
                    <strong>• Concept Design & 3D Visualization:</strong>{" "}
                    Bringing your vision to life with innovative and realistic
                    exhibition stall designs.
                  </li>
                  <li>
                    <strong>• In-House Fabrication & Graphics:</strong>{" "}
                    High-quality construction and branding to ensure every
                    detail of your exhibition stall design stands out.
                  </li>
                  <li>
                    <strong>• Stall Installation & Dismantling:</strong>{" "}
                    Seamless setup and removal for a hassle-free exhibition
                    experience.
                  </li>
                  <li>
                    <strong>• Retail Kiosks & Custom Booths:</strong> Flexible,
                    custom exhibition stall designs tailored to your space and
                    event goals.
                  </li>
                  <li>
                    <strong>• Compliance with Indian Exhibition Norms:</strong>
                    Ensuring all exhibition stall designs meet local regulations
                    and safety standards.
                  </li>
                </ul>
              </div>

              <Image
                src="/domestic-image/RAMSONS.jpg"
                alt="Exhibition Fabrication"
                width={400}
                height={400}
                className="order-1 lg:order-2 w-full object-cover rounded-sm h-[300px]"
              />
            </motion.div>
            <p className="text-justify text-sm my-5 bg-[#039C98]/10 p-4 rounded-lg">
              With <strong>Strides Design Studio</strong>, your domestic
              exhibition presence is handled end-to-end, from creative design to
              flawless execution, delivering a standout exhibition stall design
              that engages visitors and elevates your brand.
            </p>
          </div>

          {/* BLOCK 3 */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="grid items-center gap-16 lg:grid-cols-2"
            >
              <Image
                src="/domestic-image/KLMLABORATORIESPVT.LTD..jpg"
                alt="Pan India Exhibition Services"
                width={400}
                height={400}
                className="rounded-sm w-full object-cover h-[300px]"
              />

              <div className="max-w-xl">
                <p className="mb-3 text-sm uppercase tracking-wide text-teal-600">
                  Pan-India Execution
                </p>

                <h3 className="mb-6 font-serif text-3xl md:text-4xl text-black">
                  Strides Design Studio for Your Domestic Exhibition Stall
                  Design?
                </h3>

                <p className="text-black leading-7">
                  At Strides Design Studio, we specialize in delivering Domestic
                  Exhibition Stall Design that combine creativity,
                  functionality, and impact. Our clients choose us because we go
                  beyond standard stall construction to create memorable brand
                  experiences
                </p>

                <ul className="space-y-3 text-black">
                  <li>
                    <strong>• Custom & Brand-Aligned Designs:</strong> Every
                    exhibition stall design is tailored to reflect your brand
                    identity and meet your event objectives.
                  </li>
                  <li>
                    <strong>• Creative & Innovative Concepts:</strong> Our team
                    stays ahead of design trends, delivering stalls that
                    captivate visitors and leave a lasting impression.
                  </li>
                  <li>
                    <strong>• End-to-End Solutions:</strong> From concept and 3D
                    visualization to fabrication, installation, and on-site
                    support, we handle your exhibition stall design seamlessly.
                  </li>
                  <li>
                    <strong>• Budget-Friendly & Efficient:</strong> We optimize
                    costs without compromising on quality, ensuring high-impact
                    exhibition stall designs within your budget.
                  </li>
                  <li>
                    <strong>• Multi-City & Portable Options:</strong> Flexible
                    Domestic Exhibition Stall Design suitable for domestic trade
                    shows across India, allowing reuse and easy transport.
                  </li>
                  <li>
                    <strong>• Professional Project Management:</strong> Timely
                    delivery, meticulous attention to detail, and flawless
                    execution for every exhibition stall design project.
                  </li>
                </ul>
              </div>
            </motion.div>

            <p className="text-justify text-sm my-5 bg-[#039C98]/10 p-4 rounded-lg">
              Partner with <strong>Strides Design Studio</strong> to transform
              your trade show presence with{" "}
              <strong>exhibition stall designs</strong> that attract attention,
              engage visitors, and strengthen your brand.
            </p>
          </div>

          {/* BLOCK 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid items-center gap-16 lg:grid-cols-2"
          >
            <div className="order-2 lg:order-1 max-w-xl">
              <p className="mb-3 text-sm uppercase tracking-wide text-teal-600">
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
              src="/domestic-image/EGARRMARBLE.jpg"
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

            <button className="mt-8 bg-green-600 px-10 py-4 text-sm uppercase tracking-wide text-white hover:bg-black transition">
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
                Strides Design is a trusted name in{" "}
                <strong className="text-[#039C98]">
                  Domestic / International Exhibition Stall Designing Services
                </strong>
                , offering complete design, fabrication, and execution solutions
                for exhibitions and trade fairs across India. With over{" "}
                <strong className="text-[#039C98]">
                  25 years of experience
                </strong>
                , we help brands create impactful exhibition spaces that
                attract, engage, and convert.
              </p>

              <p className="mt-4 text-black leading-8">
                Established in 2004, our approach is driven by creativity,
                technical expertise, and transparent execution—ensuring
                world-class exhibition stalls tailored for the Indian market.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                ["25+", "Years in Domestic Exhibitions"],
                ["2000", "Established"],
                ["Pan-India", "Execution Capability"],
                ["100%", "Client Satisfaction Focus"],
              ].map(([num, label], i) => (
                <div
                  key={i}
                  className="border border-[#039C98] p-6 text-center"
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
                  className="group border border-[#039C98] bg-white p-8 transition-shadow duration-300 hover:shadow-xl"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mb-4 text-[#039C98]"
                  >
                    {item.icon}
                  </motion.div>

                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-black leading-7">{item.desc}</p>
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
                  variants={{
                    rest: { color: "#111827" },
                    hover: { color: "#ffffff" },
                  }}
                  transition={{ duration: 0.3 }}
                  className="font-serif text-3xl mb-4"
                >
                  Infrastructure & Team
                </motion.h3>

                <motion.p
                  variants={{
                    rest: { color: "#000000" },
                    hover: { color: "#e5e7eb" },
                  }}
                  transition={{ duration: 0.3 }}
                  className="leading-8"
                >
                  Our in-house design studios, fabrication units, and
                  experienced project teams ensure flawless execution of
                  domestic exhibition stalls—from concept approval to on-site
                  installation anywhere in India.
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
                className="absolute inset-0 bg-[#039C98] z-0"
              />

              <div className="relative z-10">
                <motion.h3
                  variants={{
                    rest: { color: "#111827" },
                    hover: { color: "#ffffff" },
                  }}
                  transition={{ duration: 0.3 }}
                  className="font-serif text-3xl mb-4"
                >
                  Trusted Across India
                </motion.h3>

                <motion.p
                  variants={{
                    rest: { color: "#000000" },
                    hover: { color: "#e5e7eb" },
                  }}
                  transition={{ duration: 0.3 }}
                  className="leading-8"
                >
                  Our domestic exhibition stall designing services are trusted
                  by leading brands, institutions, and organizations
                  participating in India’s biggest trade fairs, expos, and
                  industry exhibitions.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <GallerySection></GallerySection>

      {/* ================= WORKFLOW ================= */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
              Our Workflow – Domestic Exhibition Stall Design Process
            </h2>
            <p className="text-black max-w-4xl mx-auto leading-relaxed">
              At Strides Design Studio, we follow a structured workflow to
              ensure every Domestic Exhibition Stall Design is delivered on
              time, exceeds expectations, and perfectly represents your brand.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Understanding Your Requirements",
                desc: "We begin by discussing your exhibition goals, brand message, and design preferences. This ensures your Domestic Exhibition Stall Design aligns perfectly with your objectives.",
              },
              {
                step: "02",
                title: "Concept & 3D Design",
                desc: "Our creative team develops innovative concepts and 3D visualizations, allowing you to see your exhibition stall design before fabrication.",
              },
              {
                step: "03",
                title: "Production & Fabrication",
                desc: "Using premium materials and advanced technology, we transform your approved concept into a tangible, high-quality Domestic Exhibition Stall Design.",
              },
              {
                step: "04",
                title: "Installation & Setup",
                desc: "Our team handles seamless installation, ensuring your exhibition stall design is ready for your event without any hassle.",
              },
              {
                step: "05",
                title: "On-Site Support",
                desc: "During the exhibition, we provide on-site assistance for adjustments, technical issues, or additional support, ensuring a smooth experience.",
              },
              {
                step: "06",
                title: "Dismantling & Storage",
                desc: "After the event, we safely dismantle your stall and can store it for future use, making your Domestic Exhibition Stall Design reusable and convenient.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <span className="text-6xl font-serif text-gray-100 font-bold absolute -top-2 -right-2 select-none">
                  {item.step}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
              Frequently Asked Questions – Domestic Exhibition Stall Designing
              Services
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="flex items-center justify-between w-full p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-lg text-black pr-8">
                    {faq.question}
                  </span>
                  <span className="text-[#039C98] flex-shrink-0">
                    {activeIndex === index ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-5 bg-white text-gray-700 leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ADDITIONAL INFO ================= */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 text-center space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
              Domestic Exhibition Stall Designing Services
            </h2>
            <p className="text-black leading-relaxed mb-6">
              At Strides Design Studio, we specialize in domestic exhibition
              stall design, helping businesses across India create impactful and
              memorable trade show experiences. From Delhi and Mumbai to
              Bangalore, Hyderabad, and beyond, our expert team delivers custom
              exhibition stall designs that reflect your brand identity, engage
              visitors, and maximize ROI.
            </p>
            <p className="text-black leading-relaxed">
              Our approach combines creativity, functionality, and end-to-end
              solutions. From concept development and 3D visualization to
              fabrication, installation, and on-site support, our domestic
              exhibition stall designs are tailored to meet your objectives,
              budget, and multi-city exhibition needs, ensuring your brand makes
              a lasting impression.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#039C98]/5 p-10 rounded-lg border border-[#039C98]/20"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
              Transform Your Trade Show Presence with Strides Design Studio
            </h2>
            <p className="text-black leading-relaxed mb-8">
              Take your brand to the next level with a custom domestic
              exhibition stall design from Strides Design Studio. Our expert
              team creates exhibition stall designs that captivate visitors,
              showcase your products, and leave a lasting impression at trade
              shows, expos, and corporate events across India.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-lg font-medium text-black">
              <a
                href="tel:+919810119546"
                className="hover:text-[#039C98] transition-colors"
              >
                Call us today: +91-9810119546
              </a>
              <a
                href="mailto:info@stridesdezine.com"
                className="hover:text-[#039C98] transition-colors"
              >
                Email us: info@stridesdezine.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/*  */}
    </main>
  );
}
