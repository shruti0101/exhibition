"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import GallerySection from "@/components/Galley";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { useState } from "react";

const CorporateEventManagement = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are corporate event management services?",
      answer:
        "Corporate event management services involve planning, organizing, and executing professional business events, including conferences, product launches, award ceremonies, team-building programs, and corporate celebrations. These services are tailored to reflect your brand, engage attendees, and achieve your business objectives.",
    },
    {
      question:
        "Why should I hire corporate event management services for my event?",
      answer:
        "Professional corporate event management ensures your event stands out, runs smoothly, engages participants, and communicates your brand effectively—whether it’s a small in-house program or a large-scale international conference.",
    },
    {
      question: "What types of corporate events do you manage?",
      answer:
        "We manage conferences, seminars, product launches, award ceremonies, team-building events, gala dinners, corporate celebrations, and international corporate events—fully customized to your requirements.",
    },
    {
      question:
        "Do you provide event concept and theme development?",
      answer:
        "Yes. Our corporate event planning services include innovative concept creation, theme design, and layout planning to ensure every event is unique, memorable, and aligned with your brand.",
    },
    {
      question:
        "Can you manage events across multiple cities or internationally?",
      answer:
        "Absolutely. Our team provides corporate event management solutions for multi-city events across India and international locations, ensuring seamless execution and consistent brand experience.",
    },
    {
      question:
        "How can I get started with your corporate event management services?",
      answer:
        "Contact us at +91-9810119546 or info@stridesdezine.com. Our team will discuss your event requirements and create a tailored corporate event planning services solution that meets your objectives, budget, and audience expectations.",
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
            src="/domestic-image/DONGSHENGINTERNATIONAL.jpg"
            alt="Corporate Event Management"
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
              Corporate Event Management
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
            Corporate Event Management – Strides Design Studio
          </h2>

          <p className="mt-8 text-lg text-black max-w-5xl mx-auto leading-relaxed">
            At Strides Design Studio, we specialize in corporate event management, helping businesses plan and execute seamless, memorable, and impactful events. From conferences, product launches, and award ceremonies to team-building events, gala dinners, and corporate celebrations, we handle every aspect of event planning and execution with professionalism and creativity.
          </p>
          <p className="mt-8 text-lg text-black max-w-5xl mx-auto leading-relaxed">
            Our expert team works across India and internationally, ensuring every corporate event reflects your brand identity, engages your audience, and delivers measurable results. From conceptualization and venue selection to on-site management and post-event analysis, our end-to-end solutions guarantee a flawless experience.
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
              src="/domestic-image/ITA.jpg"
              alt="Corporate Event Management"
              width={400}
              height={400}
              className="rounded-sm w-full object-cover h-[300px]"
            />

            <div className="max-w-xl">
              <p className="mb-3 text-sm uppercase tracking-wide text-teal-600">
                What We Do
              </p>

              <h3 className="mb-6 font-serif text-3xl md:text-4xl text-black">
                Expert Corporate Event Management
              </h3>

              <p className="text-black leading-7 text-justify">
                At <strong>Strides Design Studio</strong>, we specialize in corporate event management and corporate event planning services, helping businesses plan, organize, and execute events that leave a lasting impression. From conferences and product launches to award ceremonies, team-building programs, and corporate celebrations, our services are designed to reflect your brand identity, engage your audience, and achieve your business objectives.
              </p>
              <p className="text-black leading-7 text-justify">
                Every event we manage combines creativity, precision, and seamless execution to ensure a professional, impactful, and memorable experience for all attendees. Our corporate event planning services cover everything from conceptualization and logistics to on-site management and post-event analysis, delivering results that exceed expectations.
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
                Plan Your Next Corporate Event Today!
              </h3>
              <p className="text-black leading-7">
                Take your business events to the next level with professional corporate event management and corporate event planning services from Strides Design Studio. Whether it’s a conference, product launch, award ceremony, or team-building program, we create events that captivate your audience, strengthen your brand, and leave a lasting impression.
              </p>
              <p className="text-black leading-7 mt-4">
                Why Choose Us? Our team delivers corporate event management and corporate event planning services that are creative, professional, and tailored to your brand, ensuring every event is seamless, impactful, and memorable.
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
                    Event Name / Type
                  </label>
                  <input
                    type="text"
                    id="event"
                    className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-[#039C98] transition"
                    placeholder="Event Name / Type"
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
                  End-to-End Corporate Event Management Solutions
                </p>

                <ul className="space-y-3 text-black">
                  <li>
                    <strong>• Event Concept & Theme Development:</strong>{" "}
                    Crafting creative and innovative event concepts tailored to your brand and objectives.
                  </li>
                  <li>
                    <strong>• Venue Selection & Logistics Management:</strong>{" "}
                    Finding the perfect venue and managing all logistics to ensure a seamless event experience.
                  </li>
                  <li>
                    <strong>• Audio-Visual & Stage Setup:</strong>{" "}
                    High-quality lighting, sound systems, and stage design to captivate your audience.
                  </li>
                  <li>
                    <strong>• Guest Management & Invitations:</strong> Coordinating invites, RSVPs, seating arrangements, and overall guest experience.
                  </li>
                  <li>
                    <strong>• Vendor Coordination & On-Site Execution:</strong>
                    Managing catering, decor, technical support, and third-party vendors for flawless event delivery.
                  </li>
                  <li>
                    <strong>• Compliance & Safety Management:</strong>
                    Ensuring all events meet local regulations, safety standards, and corporate guidelines.
                  </li>
                </ul>
              </div>

              <Image
                src="/internation-image/TUBEINVESTMENTSOFINDIALIMITED.jpg"
                alt="Corporate Event Management"
                width={400}
                height={400}
                className="order-1 lg:order-2 w-full object-cover rounded-sm h-[300px]"
              />
            </motion.div>
            <p className="text-justify text-sm my-5 bg-[#039C98]/10 p-4 rounded-lg">
              With Strides Design Studio, your corporate event is handled end-to-end—from concept and planning to execution and post-event follow-up—delivering a memorable and impactful experience that engages attendees and strengthens your brand.
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
                src="/internation-image/STYLAM.jpg"
                alt="Corporate Event Management"
                width={400}
                height={400}
                className="rounded-sm w-full object-cover h-75"
              />

              <div className="max-w-xl">
                <p className="mb-3 text-sm uppercase tracking-wide text-teal-600">
                  Why Choose
                </p>

                <h3 className="mb-6 font-serif text-3xl md:text-4xl text-black">
                  Why Choose Strides Design Studio for Your Corporate Event Management?
                </h3>

                <p className="text-black leading-7">
                  At Strides Design Studio, we specialize in delivering corporate event management and corporate event planning services that combine creativity, precision, and impact. Our clients choose us because we go beyond standard event organization to create memorable, engaging, and professional corporate experiences.
                </p>

                <ul className="space-y-3 text-black">
                  <li>
                    <strong>• Custom & Brand-Aligned Events:</strong> Every corporate event is tailored to reflect your brand identity and meet your business objectives.
                  </li>
                  <li>
                    <strong>• Creative & Innovative Concepts:</strong>{" "}
                    Our team designs unique event concepts that captivate attendees and leave a lasting impression.
                  </li>
                  <li>
                    <strong>• End-to-End Solutions:</strong> From concept and planning to execution, on-site management, and post-event reporting, we handle every aspect seamlessly.
                  </li>
                  <li>
                    <strong>• Budget-Friendly & Efficient:</strong> We optimize costs without compromising on quality, delivering high-impact events within your budget.
                  </li>
                  <li>
                    <strong>• Multi-City & International Options:</strong> Flexible corporate event solutions suitable for domestic and international venues, allowing scalability and easy coordination.
                  </li>
                  <li>
                    <strong>• Professional Project Management:</strong> Timely delivery, meticulous attention to detail, and flawless execution for every corporate event project.
                  </li>
                </ul>
              </div>
            </motion.div>

            <p className="text-justify text-sm my-5 bg-[#039C98]/10 p-4 rounded-lg">
              Partner with Strides Design Studio to elevate your corporate events with expert corporate event management and corporate event planning services that engage audiences, strengthen your brand, and create lasting memories.
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
              Our Workflow – Corporate Event Management Process
            </h2>
            <p className="text-black max-w-4xl mx-auto leading-relaxed">
              At Strides Design Studio, we follow a structured workflow to ensure every corporate event management project is delivered on time, exceeds expectations, and perfectly represents your brand.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Understanding Your Requirements",
                desc: "We begin by discussing your event objectives, audience, budget, and brand message. This ensures your corporate event planning services align perfectly with your goals and desired outcomes.",
              },
              {
                step: "02",
                title: "Concept & Theme Development",
                desc: "Our creative team develops innovative event concepts, themes, and layouts, allowing you to visualize the event experience before execution.",
              },
              {
                step: "03",
                title: "Planning & Coordination",
                desc: "We manage all aspects of event logistics, including venue selection, vendor coordination, catering, technical requirements, and schedules, ensuring a seamless plan from start to finish.",
              },
              {
                step: "04",
                title: "Execution & On-Site Management",
                desc: "Our team oversees every detail on the event day, including registration, stage setup, audio-visuals, guest management, and real-time troubleshooting, ensuring smooth and flawless execution.",
              },
              {
                step: "05",
                title: "Post-Event Support & Feedback",
                desc: "After the event, we collect attendee feedback, provide detailed post-event reporting, and assess ROI to measure success and inform future events.",
              },
              {
                step: "06",
                title: "Dismantling & Wrap-Up",
                desc: "For physical setups like stages or props, our team handles safe dismantling, storage, or disposal, ensuring convenience and reusability for future events.",
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
              Frequently Asked Questions – Corporate Event Management Services
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
              Corporate Event Management Services
            </h2>
            <p className="text-black leading-relaxed mb-6">
              At Strides Design Studio, we specialize in corporate event management, helping businesses across India and internationally plan and execute impactful, memorable, and engaging corporate events. From Delhi and Mumbai to Bangalore, Hyderabad, and major global business hubs, our expert team delivers tailored corporate event planning services that reflect your brand identity, captivate your audience, and achieve measurable results.
            </p>
            <p className="text-black leading-relaxed">
              Our approach combines creativity, precision, and end-to-end solutions. From event concept development and theme design to logistics, execution, and post-event analysis, our corporate event management services are designed to meet your objectives, budget, and multi-city requirements—ensuring every event leaves a lasting impression.
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
              Transform Your Corporate Events with Strides Design Studio
            </h2>
            <p className="text-black leading-relaxed mb-8">
              Take your business events to the next level with professional corporate event management and corporate event planning services from Strides Design Studio. Our expert team plans and executes corporate events that engage audiences, showcase your brand, and leave a lasting impression—whether it’s a conference, product launch, award ceremony, team-building program, or corporate celebration across India and internationally.
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




export default CorporateEventManagement