"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import GallerySection from "@/components/Galley";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { useState } from "react";

const InternationalExhibition = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is exhibition stall design?",
      answer:
        "Professional exhibition stall design involves creating custom stalls for trade shows, expos, and corporate events that reflect your brand and engage visitors globally.",
    },
    {
      question:
        "Why is the International Exhibition Stall Design Process important?",
      answer:
        "A structured International Exhibition Stall Design Process ensures your stall stands out, attracts the right audience, and communicates your brand effectively at international events.",
    },
    {
      question: "What types of exhibition stalls do you offer?",
      answer:
        "Custom stalls, two-storey stalls, country pavilion stalls, outdoor stalls, and modular designs for international exhibitions.",
    },
    {
      question:
        "Do you provide 3D visualization for exhibition stalls?",
      answer:
        "Yes, we provide realistic 3D mockups so you can approve layouts, branding, and design features before fabrication.",
    },
    {
      question:
        "Can international exhibition stalls be reused?",
      answer:
        "Absolutely. Modular and portable exhibition stall designs are reusable and easy to transport for multiple international events.",
    },
    {
      question:
        "How can I get started with your exhibition stall design services?",
      answer:
        "Contact us at +91-9810119546 or info@stridesdezine.com. Our team will discuss your requirements and create a tailored International Exhibition Stall Design Process for your event.",
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
            src="/internation-image/SINOGNSS.jpg"
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
              className="mx-auto mb-6 h-0.75 bg-[#039C98] rounded-full"
            />

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              International Exhibition Stall Designing Services
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
            International Exhibition Stall Design Services – Strides Design
            Studio
          </h2>

          <p className="mt-8 text-lg text-black max-w-5xl mx-auto leading-relaxed">
            Strides Design Studio offers professional exhibition stall design
            services for international trade shows, expos, and corporate events.
            We serve clients across major global hubs, including Dubai,
            Singapore, London, New York, Frankfurt, and more. Our expert team
            crafts unique international exhibition stall designs that showcase
            your brand identity, attract the right visitors, and leave a lasting
            impression on a global audience.
          </p>
          <p className="mt-8 text-lg text-black max-w-5xl mx-auto leading-relaxed">
            From concept development and 3D visualization to fabrication,
            installation, and on-site support, our end-to-end exhibition stall
            design solutions ensure your international presence is noticed and
            delivers measurable results.
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
              src="/internation-image/_ESCORTSKUBOTALIMITED.jpg"
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
                Expert International Exhibition Stall Design Process
              </h3>

              <p className="text-black leading-7 text-justify">
                At <strong>Strides Design Studio</strong>, we specialize in
                creating and fabricating custom exhibition stall designs for
                international trade fairs, expos, and corporate events. Each
                stall is designed to reflect your brand identity, optimize
                space, and maximize visitor engagement.
              </p>
              <p className="text-black leading-7 text-justify">
                Our International Exhibition Stall Design Process ensures every
                design combines innovation, functionality, and professionalism,
                giving your brand a global impact.
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
                Take your brand to the next level at international trade shows
                with a bespoke exhibition stall design. Our stalls captivate
                audiences, encourage engagement, and create memorable brand
                experiences worldwide.
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
                  End-to-End International Exhibition Stall Design Process
                </p>

                <ul className="space-y-3 text-black">
                  <li>
                    <strong>• Concept Design & 3D Visualization:</strong>{" "}
                    Bringing your vision to life with innovative and realistic
                    exhibition stall designs.
                  </li>
                  <li>
                    <strong>• In-House Fabrication & Graphics:</strong>{" "}
                    High-quality construction and branding for standout
                    international exhibition stalls.
                  </li>
                  <li>
                    <strong>• Stall Installation & Dismantling:</strong>{" "}
                    Seamless global setup and removal for a hassle-free
                    exhibition experience.
                  </li>
                  <li>
                    <strong>• Custom Booths & Modular Stalls:</strong> Flexible
                    designs tailored for indoor and outdoor international
                    events.
                  </li>
                  <li>
                    <strong>
                      •Compliance with International Exhibition Norms:
                    </strong>
                    Ensuring all exhibition stall designs meet local
                    regulations, safety standards, and venue requirements.
                  </li>
                </ul>
              </div>

              <Image
                src="/internation-image/ACCURUB.jpg"
                alt="Exhibition Fabrication"
                width={400}
                height={400}
                className="order-1 lg:order-2 w-full object-cover rounded-sm h-[300px]"
              />
            </motion.div>
            <p className="text-justify text-sm my-5 bg-[#039C98]/10 p-4 rounded-lg">
              Our complete{" "}
              <strong>International Exhibition Stall Design Process</strong>{" "}
              handles your international exhibition presence end-to-end,
              delivering a standout stall that engages visitors and strengthens
              your brand globally.
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
                src="/internation-image/BEXIMCOPHARMA.jpg"
                alt="Pan India Exhibition Services"
                width={400}
                height={400}
                className="rounded-sm w-full object-cover h-75"
              />

              <div className="max-w-xl">
                <p className="mb-3 text-sm uppercase tracking-wide text-teal-600">
                  Why Choose
                </p>

                <h3 className="mb-6 font-serif text-3xl md:text-4xl text-black">
                  Strides Design Studio for Your Exhibition Stall Design?
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
                    <strong>• Creative & Innovative Concepts:</strong>{" "}
                    Cutting-edge designs ensure your international stall
                    attracts maximum attention.
                  </li>
                  <li>
                    <strong>• End-to-End Solutions:</strong> From concept and 3D
                    visualization to fabrication, installation, and on-site
                    support, we manage your International Exhibition Stall
                    Design Process seamlessly.
                  </li>
                  <li>
                    <strong>• Budget-Friendly & Efficient:</strong> High-impact
                    exhibition stall design delivered within your budget without
                    compromising quality. Global & Portable Options: Modular and
                    portable stalls suitable for multi-city international trade
                    shows.
                  </li>
                  <li>
                    <strong>• Professional Project Management:</strong>Timely
                    delivery, attention to detail, and flawless execution of
                    every exhibition stall design project.
                  </li>
                </ul>
              </div>
            </motion.div>

            <p className="text-justify text-sm my-5 bg-[#039C98]/10 p-4 rounded-lg">
              Partner with Strides Design Studio to elevate your international
              trade show presence with <strong>exhibition stall design</strong>{" "}
              services that engage global audiences and strengthen your brand.
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
              Our Workflow – International Exhibition Stall Design Process
            </h2>
            <p className="text-black max-w-4xl mx-auto leading-relaxed">
              At Strides Design Studio, our structured{" "}
              <strong>International Exhibition Stall Design Process</strong>{" "}
              ensures every stall exceeds expectations and represents your brand
              perfectly.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Understanding Your Requirements",
                desc: "Discuss your international event goals, brand messaging, and design preferences to align your exhibition stall design with your objectives.",
              },
              {
                step: "02",
                title: "Concept & 3D Design",
                desc: "Our creative team develops innovative concepts and realistic 3D visualizations of your exhibition stall design, letting you preview it before fabrication.",
              },
              {
                step: "03",
                title: "Production & Fabrication",
                desc: "Using premium materials and advanced technology, we transform your approved concept into a high-quality exhibition stall design.",
              },
              {
                step: "04",
                title: "Installation & Setup",
                desc: "We handle smooth international installation, ensuring your exhibition stall design is ready for your event without any hassle.",
              },
              {
                step: "05",
                title: "On-Site Support",
                desc: "On-site assistance during exhibitions ensures your International Exhibition Stall Design Process runs smoothly, with technical and operational support.",
              },
              {
                step: "06",
                title: "Dismantling & Storage",
                desc: " After the event, your exhibition stall design is safely dismantled and can be stored for future use, making it reusable for multiple international exhibitions.",
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
              Frequently Asked Questions – International Exhibition Stall
              Designing Services
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
    </div>
  );
};

export default InternationalExhibition;
