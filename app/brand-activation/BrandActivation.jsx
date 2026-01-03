"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import GallerySection from "@/components/Galley";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { useState } from "react";

const BrandActivation = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are brand activation services?",
      answer:
        "Brand activation services involve creating immersive, engaging experiences for your target audience, including product launches, experiential marketing campaigns, roadshows, retail activations, and promotional events designed to strengthen brand awareness and engagement.",
    },
    {
      question:
        "Why should I invest in brand activation for my brand?",
      answer:
        "Professional brand activation ensures your brand stands out, engages the audience effectively, builds emotional connections, and drives measurable marketing results.",
    },
    {
      question: "What types of brand activation campaigns do you offer?",
      answer:
        "We provide product launches, experiential marketing campaigns, roadshows, retail activations, promotional campaigns, and interactive experiences, all tailored to your brand objectives.",
    },
    {
      question:
        "Do you offer multi-city or international brand activation services?",
      answer:
        "Yes. Our brand activation services are scalable and can be executed across multiple cities in India as well as international locations, ensuring consistent brand impact.",
    },
    {
      question:
        "Can brand activation campaigns be integrated with digital marketing?",
      answer:
        "Absolutely. We combine offline activations with online strategies, social media promotions, and digital engagement to maximize reach and ROI.",
    },
    {
      question:
        "How can I get started with your brand activation services?",
      answer:
        "Contact us at +91-9810119546 or info@stridesdezine.com. Our team will discuss your objectives and create a tailored brand activation services plan to engage your audience and strengthen your brand.",
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
            src="/domestic-image/JAYEM.jpg"
            alt="Brand Activation Services"
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
              Brand Activation Services
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
            Brand Activation – Strides Design Studio
          </h2>

          <p className="mt-8 text-lg text-black max-w-5xl mx-auto leading-relaxed">
            At Strides Design Studio, we specialize in brand activation and brand activation services that help businesses create memorable, engaging experiences for their target audience. From product launches, roadshows, and experiential marketing campaigns to in-store activations and promotional events, we design strategies that amplify your brand visibility and foster meaningful customer engagement.
          </p>
          <p className="mt-8 text-lg text-black max-w-5xl mx-auto leading-relaxed">
            Our expert team works across India and internationally, delivering end-to-end solutions that reflect your brand identity, engage your audience, and drive measurable results.
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
              src="/internation-image/INNOVARUBBERSVIR.jpg"
              alt="Brand Activation Services"
              width={400}
              height={400}
              className="rounded-sm w-full object-cover h-[300px]"
            />

            <div className="max-w-xl">
              <p className="mb-3 text-sm uppercase tracking-wide text-teal-600">
                What We Do
              </p>

              <h3 className="mb-6 font-serif text-3xl md:text-4xl text-black">
                Expert Brand Activation Services
              </h3>

              <p className="text-black leading-7 text-justify">
                At <strong>Strides Design Studio</strong>, we specialize in brand activation and brand activation services, helping businesses create immersive and memorable experiences for their target audience. From product launches, experiential marketing campaigns, and retail activations to roadshows and promotional events, our strategies are designed to amplify brand visibility and engage consumers effectively.
              </p>
              <p className="text-black leading-7 text-justify">
                Every brand activation campaign we execute combines creativity, strategic planning, and flawless execution to ensure your brand makes a lasting impression, drives engagement, and achieves measurable results.
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
                Launch Your Brand Activation Campaign Today!
              </h3>
              <p className="text-black leading-7">
                Take your brand to the next level with professional brand activation and brand activation services from Strides Design Studio. Whether it’s a product launch, experiential marketing campaign, roadshow, or retail activation, we create immersive experiences that captivate your audience, strengthen your brand, and leave a lasting impression.
              </p>
              <p className="text-black leading-7 mt-4">
                Why Choose Us? Our team delivers brand activation services that are creative, impactful, and tailored to your brand identity, ensuring every campaign engages your audience and drives measurable results.
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
                    Event / Campaign Name
                  </label>
                  <input
                    type="text"
                    id="event"
                    className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-[#039C98] transition"
                    placeholder="Event / Campaign Name"
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
                  End-to-End Brand Activation Solutions
                </p>

                <ul className="space-y-3 text-black">
                  <li>
                    <strong>• Campaign Concept & Creative Strategy:</strong>{" "}
                    Developing innovative and strategic activation concepts tailored to your brand objectives.
                  </li>
                  <li>
                    <strong>• Event & Experiential Planning:</strong>{" "}
                    Planning and organizing product launches, roadshows, retail activations, and experiential marketing campaigns.
                  </li>
                  <li>
                    <strong>• On-Ground Execution & Staffing:</strong>{" "}
                    Seamless on-site management, including trained staff, logistics, and event coordination for flawless delivery.
                  </li>
                  <li>
                    <strong>• Audio-Visual & Interactive Experiences:</strong>{" "}
                    High-quality AV setups, interactive displays, and experiential elements to engage audiences effectively.
                  </li>
                  <li>
                    <strong>• Branding & Visual Merchandising:</strong>
                    Designing impactful branding materials, signage, and displays to ensure consistent brand visibility.
                  </li>
                  <li>
                    <strong>• Multi-City & Scalable Campaigns:</strong>
                    Flexible brand activation services suitable for multi-city campaigns and large-scale events, ensuring consistent execution.
                  </li>
                </ul>
              </div>

              <Image
                src="/internation-image/GOA.jpg"
                alt="Brand Activation Services"
                width={400}
                height={400}
                className="order-1 lg:order-2 w-full object-cover rounded-sm h-[300px]"
              />
            </motion.div>
            <p className="text-justify text-sm my-5 bg-[#039C98]/10 p-4 rounded-lg">
              With Strides Design Studio, your brand activation campaign is handled end-to-end—from concept and planning to execution and post-event analysis—delivering immersive experiences that strengthen your brand and leave a lasting impression.
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
              Our Workflow – Brand Activation Process
            </h2>
            <p className="text-black max-w-4xl mx-auto leading-relaxed">
              At Strides Design Studio, we follow a structured workflow to ensure every brand activation campaign is delivered on time, exceeds expectations, and perfectly represents your brand.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Understanding Your Objectives",
                desc: "We begin by discussing your brand goals, target audience, campaign objectives, and key messaging. This ensures your brand activation services align perfectly with your marketing strategy.",
              },
              {
                step: "02",
                title: "Concept & Campaign Design",
                desc: "Our creative team develops innovative concepts, themes, and layouts, allowing you to visualize the activation experience before execution.",
              },
              {
                step: "03",
                title: "Planning & Coordination",
                desc: "We manage all logistics, vendor coordination, staffing, and promotional materials, ensuring a seamless plan from start to finish.",
              },
              {
                step: "04",
                title: "On-Ground Execution",
                desc: "Our team oversees every detail on-site, including event setup, interactive experiences, audience engagement, and real-time troubleshooting to guarantee flawless execution.",
              },
              {
                step: "05",
                title: "Post-Event Analysis & Feedback",
                desc: "After the campaign, we gather data, feedback, and measurable insights to assess success and identify opportunities for future activations.",
              },
              {
                step: "06",
                title: "Follow-Up & Future Planning",
                desc: "We provide recommendations for follow-up campaigns, long-term engagement strategies, or reusable activations to maximize ROI and brand impact.",
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
              Frequently Asked Questions – Brand Activation Services
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
              Brand Activation Services
            </h2>
            <p className="text-black leading-relaxed mb-6">
              At Strides Design Studio, we specialize in brand activation, helping businesses across India and internationally create impactful, engaging, and memorable experiences. From product launches and experiential marketing campaigns to roadshows, retail activations, and promotional events, our expert team delivers tailored brand activation services that reflect your brand identity, captivate your audience, and maximize engagement.
            </p>
            <p className="text-black leading-relaxed">
              Our approach combines creativity, strategy, and end-to-end solutions. From concept development and campaign design to on-ground execution, staffing, and post-event analysis, our brand activation services are designed to meet your objectives, budget, and multi-city campaign needs—ensuring your brand leaves a lasting impression.
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
              Transform Your Brand Presence with Strides Design Studio
            </h2>
            <p className="text-black leading-relaxed mb-8">
              Take your marketing campaigns to the next level with professional brand activation and brand activation services from Strides Design Studio. Our expert team creates immersive campaigns that engage your audience, showcase your brand, and leave a lasting impression—whether it’s a product launch, roadshow, retail activation, or experiential marketing campaign across India and internationally.
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



export default BrandActivation