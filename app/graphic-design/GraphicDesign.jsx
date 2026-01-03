"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import GallerySection from "@/components/Galley";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { useState } from "react";

const GraphicDesign = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are product launch services?",
      answer:
        "Product launch services involve planning, organizing, and executing events or campaigns to introduce a new product to the market, tailored to engage your target audience and create maximum impact.",
    },
    {
      question: "Why should I choose professional product launch services?",
      answer:
        "Professional product launch services ensure your product makes a strong market entry, attracts the right audience, generates buzz, and communicates your brand message effectively.",
    },
    {
      question: "What types of product launches do you offer?",
      answer:
        "We provide end-to-end product launch solutions, including experiential launches, media-driven events, roadshows, retail activations, and corporate launch events across India.",
    },
    {
      question:
        "Do you offer creative concepts and campaign design for product launches?",
      answer:
        "Yes. Our team develops innovative concepts, detailed campaign designs, and visualizations to showcase your product before the event, ensuring a fully tailored experience.",
    },
    {
      question:
        "Can product launch campaigns be executed across multiple cities?",
      answer:
        "Absolutely. Our product launch services are scalable and flexible, allowing seamless execution across multiple cities while maintaining a consistent brand experience.",
    },
    {
      question: "How can I get started with your product launch services?",
      answer:
        "Contact us at +91-9810119546 or info@stridesdezine.com. Our team will discuss your product, objectives, and target audience to create a tailored product launch campaign that delivers measurable results.",
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
            src="/domestic-image/OERLIKON.jpg"
            alt="Product Launch Services"
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
              Product Launch Services
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
            Product Launch Services – Strides Design Studio
          </h2>

          <p className="mt-8 text-lg text-black max-w-5xl mx-auto leading-relaxed">
            Strides Design Studio offers professional product launch services
            across India, including Delhi, Mumbai, Bangalore, Hyderabad, and
            other major cities. Our experienced team designs each product launch
            campaign based on your brand identity and product objectives,
            ensuring a memorable market introduction that engages your target
            audience and generates excitement.
          </p>
          <p className="mt-8 text-lg text-black max-w-5xl mx-auto leading-relaxed">
            Our methodology combines creativity, strategy, and industry
            expertise to deliver impactful product launches. From concept
            development and event planning to on-ground execution, interactive
            experiences, media coordination, and post-launch analysis, we
            provide end-to-end product launch services that not only capture
            attention but also drive measurable results for your brand.
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
              src="/internation-image/SINOGNSS.jpg"
              alt="Product Launch Services"
              width={400}
              height={400}
              className="rounded-sm w-full object-cover h-[300px]"
            />

            <div className="max-w-xl">
              <p className="mb-3 text-sm uppercase tracking-wide text-teal-600">
                What We Do
              </p>

              <h3 className="mb-6 font-serif text-3xl md:text-4xl text-black">
                Expert Product Launch Services
              </h3>

              <p className="text-black leading-7 text-justify">
                At <strong>Strides Design Studio</strong>, we specialize in
                planning and executing end-to-end product launch events and
                product launch services for businesses across India. From
                innovative product introductions and experiential launch
                campaigns to media-driven events, roadshows, and retail
                activations, our services are designed to ensure your product
                makes a strong market entry.
              </p>
              <p className="text-black leading-7 text-justify">
                Every product launch campaign we deliver combines creativity,
                strategy, and meticulous execution to ensure your product
                attracts attention, engages your target audience, and generates
                measurable results.
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
                Launch Your Product with Strides Design Studio Today!
              </h3>
              <p className="text-black leading-7">
                Take your product to the next level with professional product
                launch and product launch services from Strides Design Studio.
                Whether it’s a market introduction, experiential launch event,
                roadshow, or retail activation, we create campaigns that attract
                attention, engage your audience, and leave a lasting impression.
              </p>
              <p className="text-black leading-7 mt-4">
                Why Choose Us? Our team delivers product launch services that
                are creative, strategic, and tailored to your brand, ensuring
                every launch generates excitement, engagement, and measurable
                results.
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
                    Product / Event Name
                  </label>
                  <input
                    type="text"
                    id="event"
                    className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-[#039C98] transition"
                    placeholder="Product / Event Name"
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
                  End-to-End Product Launch Services
                </p>

                <ul className="space-y-3 text-black">
                  <li>
                    <strong>• Concept & Campaign Design:</strong> Creating
                    innovative, tailored concepts that reflect your product’s
                    unique value and brand identity.
                  </li>
                  <li>
                    <strong>• Event Planning & Logistics:</strong> Complete
                    management of venues, decor, audio-visual setups, staffing,
                    and coordination for a seamless launch.
                  </li>
                  <li>
                    <strong>• Experiential Product Demonstrations:</strong>{" "}
                    Engaging the audience with interactive demos and hands-on
                    experiences.
                  </li>
                  <li>
                    <strong>• Media & Influencer Coordination:</strong> Managing
                    press coverage, influencer outreach, and social media
                    integration to maximize visibility.
                  </li>
                  <li>
                    <strong>• Digital Integration:</strong>
                    Combining offline launch events with online campaigns, live
                    streaming, and social media promotions to extend reach.
                  </li>
                  <li>
                    <strong>• Multi-City & Scalable Launches:</strong>
                    Delivering consistent, high-impact product launches across
                    multiple cities or locations.
                  </li>
                </ul>
              </div>

              <Image
                src="/domestic-image/PARACOAT.jpg"
                alt="Product Launch Services"
                width={400}
                height={400}
                className="order-1 lg:order-2 w-full object-cover rounded-sm h-[300px]"
              />
            </motion.div>
            <p className="text-justify text-sm my-5 bg-[#039C98]/10 p-4 rounded-lg">
              With Strides Design Studio, your product launch is handled
              end-to-end—from creative concept to flawless execution—ensuring a
              memorable launch that captivates your audience and drives
              measurable results.
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
                src="/domestic-image/SASMOS.jpg"
                alt="Product Launch Services"
                width={400}
                height={400}
                className="rounded-sm w-full object-cover h-75"
              />

              <div className="max-w-xl">
                <p className="mb-3 text-sm uppercase tracking-wide text-teal-600">
                  Why Choose
                </p>

                <h3 className="mb-6 font-serif text-3xl md:text-4xl text-black">
                  Why Choose Strides Design Studio for Your Product Launch?
                </h3>

                <p className="text-black leading-7">
                  At Strides Design Studio, we specialize in delivering product
                  launch services that combine creativity, strategy, and
                  measurable impact. Our clients choose us because we go beyond
                  standard event management to create unforgettable launch
                  experiences that truly showcase your product.
                </p>

                <ul className="space-y-3 text-black">
                  <li>
                    <strong>• Custom & Brand-Aligned Launches:</strong> Every
                    product launch campaign is tailored to reflect your brand
                    identity and product objectives.
                  </li>
                  <li>
                    <strong>• Creative & Innovative Concepts:</strong> Our team
                    develops unique, trend-setting launch ideas that captivate
                    audiences and leave a lasting impression.
                  </li>
                  <li>
                    <strong>• End-to-End Solutions:</strong> From concept and
                    design to execution, media coverage, and post-launch
                    analysis, we handle your product launch seamlessly.
                  </li>
                  <li>
                    <strong>• Budget-Friendly & Efficient:</strong> We optimize
                    costs without compromising on quality, delivering
                    high-impact product launches within your budget.
                  </li>
                  <li>
                    <strong>• Multi-City & Scalable Options:</strong> Flexible
                    product launch services suitable for multiple cities or
                    locations, ensuring consistent impact and easy coordination.
                  </li>
                  <li>
                    <strong>• Professional Project Management:</strong> Timely
                    delivery, meticulous attention to detail, and flawless
                    execution for every product launch project.
                  </li>
                </ul>
              </div>
            </motion.div>

            <p className="text-justify text-sm my-5 bg-[#039C98]/10 p-4 rounded-lg">
              Partner with Strides Design Studio to make your product launch an
              event that attracts attention, engages your audience, and
              strengthens your brand’s market presence.
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
              Our Workflow – Product Launch Process
            </h2>
            <p className="text-black max-w-4xl mx-auto leading-relaxed">
              At Strides Design Studio, we follow a structured workflow to
              ensure every product launch is delivered on time, exceeds
              expectations, and perfectly represents your brand and product.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Understanding Your Product & Goals",
                desc: "We begin by discussing your product features, target audience, launch objectives, and marketing strategy. This ensures your product launch services align perfectly with your goals.",
              },
              {
                step: "02",
                title: "Concept & Campaign Design",
                desc: "Our creative team develops innovative concepts and campaign designs, allowing you to visualize your product launch before execution.",
              },
              {
                step: "03",
                title: "Planning & Coordination",
                desc: "We handle venue selection, logistics, décor, audio-visual setups, staffing, and promotional materials for a seamless launch experience.",
              },
              {
                step: "04",
                title: "On-Ground Execution",
                desc: "Our team manages the entire event, including interactive demonstrations, audience engagement, media coordination, and troubleshooting.",
              },
              {
                step: "05",
                title: "Media & Digital Integration",
                desc: "Live coverage, social media promotion, influencer engagement, and online campaigns amplify your launch and expand its reach.",
              },
              {
                step: "06",
                title: "Post-Launch Analysis & Follow-Up",
                desc: "After the launch, we provide performance metrics, attendee feedback, and recommendations for follow-up campaigns, ensuring measurable impact from your product launch services.",
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
              Frequently Asked Questions – Product Launch Services
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
              Product Launch Services
            </h2>
            <p className="text-black leading-relaxed mb-6">
              At Strides Design Studio, we specialize in product launch planning
              and execution, helping businesses across India introduce new
              products with maximum impact. From Delhi and Mumbai to Bangalore,
              Hyderabad, and beyond, our expert team delivers custom product
              launch services that reflect your brand identity, engage your
              target audience, and generate measurable results.
            </p>
            <p className="text-black leading-relaxed">
              Our approach combines creativity, strategy, and end-to-end
              solutions. From concept development and campaign design to
              on-ground execution, media coordination, and post-launch analysis,
              our product launch services are tailored to meet your objectives,
              budget, and multi-city launch requirements, ensuring your product
              makes a strong market entry.
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
              Make Your Product Launch Unforgettable with Strides Design Studio
            </h2>
            <p className="text-black leading-relaxed mb-8">
              Take your product to the next level with professional product
              launch services from Strides Design Studio. Our expert team
              creates product launch campaigns that captivate your audience,
              showcase your product’s unique features, and leave a lasting
              impression at launch events, roadshows, retail activations, and
              corporate events across India.
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



export default GraphicDesign