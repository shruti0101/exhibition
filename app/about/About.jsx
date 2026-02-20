"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Target,
  Lightbulb,
  Users,
  Layers,
  Globe,
} from "lucide-react";

const AboutPage = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center bg-cover "
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/c8/cd/90/c8cd9002a6edbf84f1e42a182eb00797.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              About Us
            </h1>
          </motion.div>
        </div>
      </div>

      {/* ================= INTRODUCTION SECTION ================= */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Strides Design Studio – Leaders in Exhibition Stall Design
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
              At <strong>Strides Design Studio</strong>, we specialize in
              delivering exhibition stall designs that showcase your brand and
              create memorable experiences for your audience. Based in Delhi, we
              have over <strong>25 years of experience</strong> in designing,
              fabricating, and managing stalls for trade shows, expos, and
              corporate events across India and globally.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              Our team of skilled designers, fabricators, and project managers
              provides end-to-end solutions, from concept and 3D visualization
              to fabrication, installation, and on-site support. With a
              commitment to creativity, precision, and client satisfaction,
              <strong>Strides Design Studio</strong> transforms exhibition
              spaces into visually striking platforms that leave a lasting
              impression.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://i.pinimg.com/736x/e6/d0/a4/e6d0a4e40986e701f55ac9d4c3e4b19f.jpg"
              alt="Exhibition Stall Design"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= JOURNEY SECTION ================= */}
      <section className="py-20 bg-gray-50 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
          >
            <Image
              src="https://i.pinimg.com/1200x/4f/b0/04/4fb004a70775904ecbd46e553a48e198.jpg"
              alt="Our Journey"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-1 lg:order-2"
          >
            <span className="text-[#039C98] font-bold tracking-widest uppercase mb-2 block">
              Our journey 
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pioneers in Exhibition Stall Design
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
              Founded with a vision to redefine exhibition stall design in
              India, Strides Design Studio has grown into a trusted name in the
              industry. Over the past 25 years, we have participated in leading
              trade shows and exhibitions across India and globally, delivering
              innovative and creative stalls that cater to diverse business
              requirements.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              Our journey has been marked by continuous learning, staying ahead
              of emerging design trends, and embracing advanced technologies to
              provide cutting-edge exhibition stall design solutions. This
              commitment to innovation and quality has helped us consistently
              deliver stalls that engage visitors, enhance brand presence, and
              leave a lasting impression.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#039C98] hover:shadow-xl transition-shadow"
          >
            <div className="w-14 h-14 bg-[#039C98]/10 rounded-full flex items-center justify-center mb-6">
              <Target className="text-[#039C98] w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-justify">
              To be India’s most trusted and innovative exhibition stall design
              company, delivering creative and high-impact stalls that enhance
              brand presence. We aim to set global standards in design quality,
              client satisfaction, and project execution.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#039C98] mt-1 shrink-0" />
                <span className="text-gray-700">
                  Embracing innovation with latest trends.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#039C98] mt-1 shrink-0" />
                <span className="text-gray-700">
                  Creating sustainable, eco-friendly solutions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#039C98] mt-1 shrink-0" />
                <span className="text-gray-700">
                  Delivering memorable visitor experiences.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-[#039C98] p-8 rounded-2xl shadow-lg text-white hover:shadow-xl transition-shadow"
          >
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-white/90 mb-6 leading-relaxed text-justify">
              To provide comprehensive exhibition stall design solutions that
              combine creativity, functionality, and brand storytelling. We
              ensure every stall meets client objectives through seamless
              execution.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center mt-1 shrink-0">
                  ✓
                </div>
                <span className="text-white/90">
                  Custom designs reflecting brand identity.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center mt-1 shrink-0">
                  ✓
                </div>
                <span className="text-white/90">
                  Maximizing engagement and ROI.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center mt-1 shrink-0">
                  ✓
                </div>
                <span className="text-white/90">
                  Quality, safety, and compliance.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center mt-1 shrink-0">
                  ✓
                </div>
                <span className="text-white/90">
                  Reliable project management.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20  text-black px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#039C98] font-bold tracking-widest uppercase mb-2 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose Strides Design Studio?
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We specialize in delivering high-impact exhibition stall designs
              that elevate your brand presence and engage visitors.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Tailor-Made Designs",
                desc: "Every exhibition stall design is customized to reflect your brand identity, event objectives, and target audience.",
                icon: <Lightbulb className="w-8 h-8 text-white" />,
              },
              {
                title: "End-to-End Services",
                desc: "From concept development and 3D visualization to fabrication, installation, and on-site support.",
                icon: <Layers className="w-8 h-8 text-white" />,
              },
              {
                title: "Innovation & Creativity",
                desc: "Our team creates visually stunning, functional, and interactive exhibition stall designs that captivate visitors.",
                icon: <Target className="w-8 h-8 text-white" />,
              },
              {
                title: "Multi-City Expertise",
                desc: "Portable and modular exhibition stall designs perfect for businesses participating in multiple trade shows.",
                icon: <Globe className="w-8 h-8 text-white" />,
              },
              {
                title: "Experienced Team",
                desc: "With over 25 years of experience, we ensure professional execution, timely delivery, and exceptional quality.",
                icon: <Users className="w-8 h-8 text-white" />,
              },
              {
                title: "Quality Assurance",
                desc: "We maintain strict quality control at every stage, using premium materials to ensure a flawless finish for your stall.",
                icon: <CheckCircle className="w-8 h-8 text-white" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#039C98] p-8 rounded-xl hover:bg-[#08c4bd] transition-colors duration-300 border border-gray-700 hover:border-[#039C98]"
              >
                <div className="mb-4 ">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-white leading-relaxed text-justify">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
