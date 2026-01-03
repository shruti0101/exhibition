"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import GallerySection from "@/components/Galley";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { useState } from "react";

const ExhibitionFabricationService = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are exhibition fabrication services?",
      answer:
        "Exhibition fabrication services involve the construction and assembly of custom exhibition stalls, counters, kiosks, and displays based on approved designs. These services ensure high-quality, durable, and visually appealing stalls for trade shows, expos, and corporate events.",
    },
    {
      question:
        "Why should I choose professional exhibition fabrication?",
      answer:
        "Professional fabrication ensures your stall is structurally sound, visually impressive, and aligned with your brand identity. It also guarantees precision, durability, and compliance with safety standards for both domestic and international events.",
    },
    {
      question: "What types of exhibition stalls can you fabricate?",
      answer:
        "We fabricate a wide range of stalls including custom stalls, modular and portable stalls, two-storey structures, country pavilions, retail kiosks, and themed exhibition booths.",
    },
    {
      question:
        "Do you provide on-site installation and support?",
      answer:
        "Yes. Our exhibition fabrication services include delivery, on-site assembly, technical adjustments, and dismantling. Our team ensures a smooth setup and flawless functionality throughout the event.",
    },
    {
      question:
        "Can fabricated stalls be reused for multiple events?",
      answer:
        "Absolutely. We specialize in modular and portable fabrication solutions, allowing stalls to be reused across multiple events and locations, making them cost-effective and convenient for multi-city exhibitions.",
    },
    {
      question:
        "How can I get started with your exhibition fabrication services?",
      answer:
        "Simply contact us at +91-9810119546 or info@stridesdezine.com. Our team will discuss your requirements, recommend suitable fabrication solutions, and provide a customized plan to bring your exhibition stall to life.",
    },
  ];

  return (
    <div className="mt-20">
      {/* hero section  */}
      <section className="relative h-[50vh] md:h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.4 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/internation-image/_ESCORTSKUBOTALIMITED.jpg"
            alt="Exhibition Fabrication Services"
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
              className="mx-auto mb-6 h-0.75 bg-[#039C98] rounded-full"
            />

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Exhibition Fabrication Services
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
            Exhibition Fabrication Services – Strides Design Studio
          </h2>

          <p className="mt-8 text-lg text-black max-w-5xl mx-auto leading-relaxed">
            Strides Design Studio offers professional exhibition fabrication services for trade shows, expos, corporate events, and international exhibitions. We specialize in transforming your approved stall designs into high-quality, durable, and visually impactful exhibition stalls that reflect your brand identity and engage visitors.
          </p>
          <p className="mt-8 text-lg text-black max-w-5xl mx-auto leading-relaxed">
            Our team works across India and internationally, ensuring flawless execution—from concept approval to installation and post-event support. With our exhibition stall design, your stall will not only stand out visually but also be functional, reusable, and designed to maximize ROI.
          </p>
          <p className="mt-8 text-lg text-black max-w-5xl mx-auto leading-relaxed">
            We combine creativity, technical expertise, and premium materials to deliver exhibition structures that leave a lasting impression on your audience.
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
              src="/domestic-image/AURBINDO.jpg"
              alt="Exhibition Fabrication"
              width={400}
              height={400}
              className="rounded-sm w-full object-cover h-[300px]"
            />

            <div className="max-w-xl">
              <p className="mb-3 text-sm uppercase tracking-wide text-teal-600">
                What We Do
              </p>

              <h3 className="mb-6 font-serif text-3xl md:text-4xl text-black">
                Expert Exhibition Fabrication
              </h3>

              <p className="text-black leading-7 text-justify">
                At <strong>Strides Design Studio</strong>, we provide complete exhibition fabrication services, converting your approved exhibition stall designs into tangible, high-quality structures. Every element—from walls and counters to lighting, displays, and graphics—is fabricated with precision and attention to detail.
              </p>
              <p className="text-black leading-7 text-justify">
                With Strides Design Studio, your exhibition fabrication services are end-to-end, ensuring your stall is visually impressive, structurally sound, and optimized for visitor engagement.
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
                Get Your Custom Exhibition Fabrication Services Today!
              </h3>
              <p className="text-black leading-7">
                Take your brand to the next level with a bespoke exhibition stall design from Strides Design Studio. Whether it’s a domestic trade fair, expo, or corporate event, we create stalls that attract attention, engage visitors, and leave a lasting impression.
              </p>
              <p className="text-black leading-7 mt-4">
                Why Choose Us? Our team delivers exhibition stall designs that are creative, functional, and tailored to your brand, ensuring a memorable presence at every event.
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
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-[#039C98] transition"
                    placeholder="Your Company Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="event"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Event / Exhibition Name
                  </label>
                  <input
                    type="text"
                    id="event"
                    className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-[#039C98] transition"
                    placeholder="Event Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="requirements"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message / Requirements
                  </label>
                  <textarea
                    id="requirements"
                    rows={3}
                    className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-[#039C98] transition resize-none"
                    placeholder="Your Message / Requirements"
                  ></textarea>
                </div>
                <button className="w-full bg-green-600 py-3 text-sm uppercase tracking-wide text-white hover:bg-black transition font-medium">
                  Request a Free Quote
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
                  Comprehensive Exhibition Fabrication Solutions
                </p>

                <ul className="space-y-3 text-black">
                  <li>
                    <strong>• Concept Fabrication & Mockups:</strong>{" "}
                    Translate your approved design into 3D mockups and prototypes.
                  </li>
                  <li>
                    <strong>• Material Sourcing & Procurement:</strong>{" "}
                    Use premium materials for strength, aesthetics, and longevity.
                  </li>
                  <li>
                    <strong>• Modular & Portable Fabrication:</strong>{" "}
                    Create reusable stalls suitable for multiple venues and events.
                  </li>
                  <li>
                    <strong>• Custom Booths & Counters:</strong> Fabrication of counters, display units, kiosks, and other elements.
                  </li>
                  <li>
                    <strong>• Lighting & Electrical Integration:</strong>
                    Install exhibition-grade lighting, wiring, and technology seamlessly.
                  </li>
                  <li>
                    <strong>• Two-Storey & Themed Structures:</strong>
                    Fabrication for multi-level stalls, country pavilions, or thematic setups.
                  </li>
                  <li>
                    <strong>• Quality Inspection:</strong>
                    Rigorous checks for design accuracy, structural integrity, and brand alignment.
                  </li>
                  <li>
                    <strong>• Installation & Dismantling:</strong>
                    On-site support for seamless setup, adjustment, and removal post-event.
                  </li>
                  <li>
                    <strong>• Storage & Maintenance:</strong>
                    Safe storage options for modular stalls to be reused in future exhibitions.
                  </li>
                </ul>
              </div>

              <Image
                src="/internation-image/ACCURUB1.jpg"
                alt="Exhibition Fabrication"
                width={400}
                height={400}
                className="order-1 lg:order-2 w-full object-cover rounded-sm h-[300px]"
              />
            </motion.div>
            <p className="text-justify text-sm my-5 bg-[#039C98]/10 p-4 rounded-lg">
              Our expertise ensures your exhibition fabrication results in stalls that are visually striking, structurally robust, and optimized for visitor experience.
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
                src="/internation-image/FRESHWORKS.jpg"
                alt="Exhibition Fabrication Services"
                width={400}
                height={400}
                className="rounded-sm w-full object-cover h-75"
              />

              <div className="max-w-xl">
                <p className="mb-3 text-sm uppercase tracking-wide text-teal-600">
                  Why Choose
                </p>

                <h3 className="mb-6 font-serif text-3xl md:text-4xl text-black">
                  Why Choose Strides Design Studio for Your Exhibition Fabrication Services?
                </h3>

                <p className="text-black leading-7">
                  At Strides Design Studio, we specialize in delivering Exhibition Fabrication Services that combine precision, durability, and visual impact. Our clients choose us because we go beyond simple construction to create exhibition stalls that leave a lasting impression and elevate brand experiences.
                </p>

                <ul className="space-y-3 text-black">
                  <li>
                    <strong>• Custom & Brand-Aligned Fabrication:</strong> Every stall is fabricated to reflect your brand identity and align with your design objectives.
                  </li>
                  <li>
                    <strong>• High-Quality Materials & Craftsmanship:</strong>{" "}
                    We use premium materials and skilled artisans to ensure every component is built to last.
                  </li>
                  <li>
                    <strong>• End-to-End Fabrication Solutions:</strong> From material selection and production to installation and on-site support, we manage your project seamlessly.
                  </li>
                  <li>
                    <strong>• Budget-Friendly & Efficient:</strong> We optimize fabrication costs without compromising on quality, ensuring durable, high-impact stalls within your budget.
                  </li>
                  <li>
                    <strong>• Reusable & Portable Options:</strong> Modular and portable fabrication solutions allow your stalls to be reused across multiple events and locations.
                  </li>
                  <li>
                    <strong>• Professional Project Management:</strong> Timely delivery, meticulous attention to detail, and flawless execution for every fabrication project.
                  </li>
                </ul>
              </div>
            </motion.div>

            <p className="text-justify text-sm my-5 bg-[#039C98]/10 p-4 rounded-lg">
              Partner with Strides Design Studio to bring your exhibition stall designs to life with expert fabrication services that engage visitors, strengthen your brand presence, and make your trade show experience unforgettable.
            </p>
          </div>
        </div>
      </section>

      <GallerySection />

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
              Our Workflow – Exhibition Fabrication Process
            </h2>
            <p className="text-black max-w-4xl mx-auto leading-relaxed">
              At Strides Design Studio, we follow a structured Exhibition Fabrication Process to ensure every stall is fabricated on time, exceeds expectations, and perfectly represents your brand.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Understanding Your Requirements",
                desc: "We begin by discussing your event goals, brand identity, design specifications, and functional requirements. This ensures your exhibition fabrication aligns perfectly with your objectives.",
              },
              {
                step: "02",
                title: "Material Selection & Planning",
                desc: "Our team selects premium materials and finalizes fabrication methods to ensure durability, aesthetics, and functionality.",
              },
              {
                step: "03",
                title: "Production & Fabrication",
                desc: "Using advanced technology and skilled craftsmanship, we transform your approved stall design into a high-quality, structurally sound, and visually impressive exhibition stall.",
              },
              {
                step: "04",
                title: "Branding & Graphics Integration",
                desc: "Logos, graphics, product displays, and other branding elements are seamlessly incorporated into the fabricated stall for cohesive brand representation.",
              },
              {
                step: "05",
                title: "Installation & Setup",
                desc: "Our team handles the delivery, on-site assembly, and setup to ensure your stall is ready for the event without any hassle.",
              },
              {
                step: "06",
                title: "On-Site Support",
                desc: "During the exhibition, we provide technical assistance, adjustments, and troubleshooting to guarantee a smooth experience and flawless functionality.",
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
              Frequently Asked Questions – Exhibition Fabrication Services
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
                  <span className="text-[#039C98] shrink-0">
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
              Exhibition Fabrication Services
            </h2>
            <p className="text-black leading-relaxed mb-6">
              At Strides Design Studio, we specialize in exhibition fabrication services, helping businesses across India and internationally bring their stall designs to life with precision, quality, and impact. From Delhi and Mumbai to Bangalore, Hyderabad, and major global exhibition hubs, our skilled team delivers custom-fabricated stalls that reflect your brand identity, engage visitors, and enhance your trade show presence.
            </p>
            <p className="text-black leading-relaxed">
              Our approach combines craftsmanship, functionality, and end-to-end solutions. From material selection and production to installation, branding integration, and on-site support, our exhibition fabrication services are tailored to meet your objectives, budget, and multi-city exhibition needs, ensuring your brand makes a strong and lasting impression.
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
              Take your brand to the next level with a custom Exhibition Fabrication Services from Strides Design Studio. Our expert team creates Exhibition Fabrication Services that captivate visitors, showcase your products, and leave a lasting impression at trade shows, expos, and corporate events across India.
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
    </div>
  );
};




export default ExhibitionFabricationService