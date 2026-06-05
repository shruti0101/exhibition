"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import GallerySection from "@/components/Galley";
import PortfolioGrid from "@/components/Portfolio";
import Testimonials from "@/components/Testimonial";
import { createContactForm } from "@/service/axiosInstance";
import toast from "react-hot-toast";
import { reasons } from "@/Data/data";
import axios from "axios";
import Popup from "@/components/Popup";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/utils/firebase";

export default function InquiryPage() {
  
  const [status, setstatus] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [thankyou, setThankyou] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
const [showOtp, setShowOtp] = useState(false);
const [confirmationResult, setConfirmationResult] = useState(null);
const [isVerified, setIsVerified] = useState(false);

  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

useEffect(() => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
      }
    );

    window.recaptchaVerifier.render();
  }
}, []);



 const sendOTP = async () => {
  try {
    setLoading(true);

    const appVerifier = window.recaptchaVerifier;

    const result = await signInWithPhoneNumber(
      auth,
      "+91" + formData.phone,
      appVerifier
    );

    setConfirmationResult(result);
    setShowOtp(true);

    toast.success("OTP sent");
  } catch (err) {
    console.log(err);
    toast.error("OTP failed");
  } finally {
    setLoading(false);
  }
};

// ---------------- VERIFY OTP ----------------
const verifyOTP = async () => {
  try {
    setLoading(true);

    await confirmationResult.confirm(otp);

    toast.success("Phone verified");

    await submitForm(); // ✅ submit after OTP success
  } catch (err) {
    console.log(err);
    toast.error("Invalid OTP");
  } finally {
    setLoading(false);
  }
};

// ---------------- MAIN SUBMIT ----------------
const submitForm = async () => {
  try {
    setLoading(true);

    const payload = {
      platform: "Strides design studio",
      platformEmail: "info@stridesdesign.com",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      product: "NA",
      place: "NA",
      message: formData.message,
    };

    const { data } = await axios.post(
      "https://brandbnalo.com/api/form/add",
      payload
    );

    if (data.success) {
      toast.success("Message sent!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setOtp("");
      setShowOtp(false);
    }
  } catch (err) {
    console.log(err);
    toast.error("Server error");
  } finally {
    setLoading(false);
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!showOtp) {
    await sendOTP();   // STEP 1
    return;
  }

  await verifyOTP();   // STEP 2
};

// ---------------- AUTO OPEN ----------------
useEffect(() => {
  setTimeout(() => {
    setOpen(true);
  }, 600);
}, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* NAVBAR SHELL */}
        <div className="bg-white/80 backdrop-blur-2xl border-b border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <div className="mx-auto flex h-20 w-full px-5 items-center justify-between ">
            {/* LOGOS */}
            <div className="flex items-center gap-2">
              <Link href="/">
                <Image
                  src="/logo1.png"
                  alt="Logo"
                  width={145}
                  height={70}
                  priority
                />
              </Link>

              <Link href="/">
                <Image
                  src="/logo2.png"
                  alt="Logo"
                  width={90}
                  height={40}
                  priority
                />
              </Link>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-6 text-[15px] font-semibold uppercase tracking-wider text-black">
              <Link href="#top" className="relative group">
                Home
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#039C98] transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link href="#aboutUs" className="relative group">
                About
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#039C98] transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link href="#services" className="relative group">
                Services
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#039C98] transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link href="#portfolio" className="relative group">
                Portfolio
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#039C98] transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link href="#contact" className="relative group">
                Contact
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#039C98] transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* WHATSAPP CTA */}
              <a
                href="https://wa.me/+919999402424"
                target="_blank"
                className="ml-2 inline-flex items-center gap-2 rounded-full bg-[#039C98] px-5 py-2 text-white text-xs tracking-widest hover:shadow-lg hover:scale-[1.03] transition"
              >
                <FaWhatsapp size={16} />
                WhatsApp
              </a>
            </nav>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-black"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white shadow-xl"
            >
              <div className="px-6 py-8 space-y-5 text-sm font-semibold uppercase tracking-wider flex flex-col">
                <Link href="#top" className="relative group">
                  Home
                  <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#039C98] transition-all duration-300 group-hover:w-full" />
                </Link>

                <Link href="#aboutUs" className="relative group">
                  About
                  <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#039C98] transition-all duration-300 group-hover:w-full" />
                </Link>

                <Link href="#services" className="relative group">
                  Services
                  <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#039C98] transition-all duration-300 group-hover:w-full" />
                </Link>

                <Link href="#portfolio" className="relative group">
                  Portfolio
                  <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#039C98] transition-all duration-300 group-hover:w-full" />
                </Link>

                <Link href="#contact" className="relative group">
                  Contact
                  <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#039C98] transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className='mt-20 container mx-auto pb-4 flex flex-col'>
        {/* hero */}
        <div className="relative bg-[#f5fbfb] border-b border-gray-300">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/ctabg.jpg)" }}
          ></div>

          <div className="absolute inset-0 bg-black opacity-45"></div>

          <div className="relative container mx-auto px-2 lg:py-15 py-4">
            <div className="grid grid-cols-1 items-center md:gap-12 gap-5 lg:grid-cols-2">
              <div className='lg:pl-8 flex flex-col justify-center lg:justify-start'>
                <h1 className="mb-4 lg:text-4xl text-xl font-extrabold text-white">
                  Make Your Brand Stand Out at Every Event & Exhibition
                </h1>

                <p className="mb-2 text-white lg:text-xl font-semibold">
                  Strides Design Studio specializes in Exhibition Stalls, Corporate Events, Event Management, and Creative Design across Delhi NCR & Pan India. We don’t just build stalls—we create experiences that attract, engage & convert.
                </p>

                <ul className="list-disc list-inside text-white space-y-1 max-w-xl font-semibold lg:text-xl text-base">
                  <li>Custom Exhibition Stall Designs</li>
                  <li>3D Visualization Before Fabrication</li>
                  <li>Complete Design to Execution Solutions</li>
                  <li>Pan-India Fabrication & Installation Support</li>
                </ul>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
                  <a href='tel:+919810119546' className="group relative inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-red-600 hover:border-red-700 bg-red-600 px-8 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-red-700">
                    Call Us
                    <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-6" />
                  </a>

                  <a href="https://wa.me/+919999402424" className="group relative inline-flex cursor-pointer items-center gap-2 rounded-full border-2 bg-[#039C98] border-[#039C98] px-8 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300">
                    Whatsapp
                    <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-6" />
                  </a>
                </div>
              </div>

              <div className="lg:px-10 lg:block hidden">
                <div className="rounded-xl bg-gray-50 p-4 shadow-xl">
                  <div className="mb-4">
                    <p className="text-2xl font-semibold text-gray-900 text-center">
                      Get a Custom Quote for Your Exhibition Stall
                    </p>
                  </div>

                   <div id="recaptcha-container"></div>

      <form className="md:space-y-6 space-y-2" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
          className="w-full border rounded-md border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email Address"
          className="w-full border rounded-md border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Phone Number"
          className="w-full border rounded-md border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your project..."
          rows={2}
          className="w-full border rounded-md border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
        />

        {/* OTP INPUT */}
        {showOtp && !isVerified && (
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full border rounded-md border-green-500 px-4 py-3 text-sm outline-none"
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full rounded-lg cursor-pointer items-center justify-center bg-[#039C98] px-10 py-4 text-xs tracking-widest uppercase text-white transition hover:bg-[#027a76]"
        >
          {loading
  ? "Processing..."
  : !showOtp
  ? "Send OTP"
  : "Verify OTP"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-sm font-semibold">
            Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 text-sm font-semibold">
            Something went wrong
          </p>
        )}
      </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* clients banner */}
        <section className="relative w-full overflow-hidden bg-gray-100">
          <div className="w-full overflow-hidden py-2">
            <motion.div
              className="flex"
              animate={{ x: "-50%" }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{ width: "fit-content" }}
            >
              {[1, 2].map((index) => (
                <Image
                  key={index}
                  src={"/Stride.png"}
                  width={2000}
                  height={2000}
                  alt="Clients Banner"
                  className="h-30 w-[340vw] md:w-[200vw] lg:w-[150vw] max-w-none"
                />
              ))}
            </motion.div>
          </div>
        </section>

        <GallerySection />

        {/* about us */}
        <section className="relative bg-white pb-2 pt-6" id="aboutUs">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl md:text-4xl font-bold text-gray-900">
                  About Strides Design
                </h2>

                <p className="mb-4 text-gray-700 leading-relaxed font-bold text-lg">
                  We design exhibition spaces that make brands stand out.
                </p>

                <p className="mb-6 text-gray-600 leading-relaxed">
                  Strides Design is a leading exhibition stall design and
                  fabrication company specializing in custom exhibition stall
                  design, exhibition stand fabrication, and exhibition stand
                  construction for trade shows, expos, and corporate events. As
                  a trusted Exhibition Design Agency, we help brands create
                  high-impact exhibition spaces that attract visitors, enhance
                  brand visibility, and generate real business opportunities.
                </p>

                <a
                  href="https://wa.me/+919999402424"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-[#039C98] px-6 py-3 text-white text-xs tracking-widest uppercase hover:shadow-lg hover:scale-[1.03] transition"
                >
                  <FaWhatsapp size={16} />
                  WhatsApp
                </a>
              </div>

              <div className="relative h-[360px] md:h-[420px] w-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/about.jpg"
                  alt="About Us"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <div className="bg-[#c4fdfd] py-10 my-5 rounded-md">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">

              {/* STAT */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#039C98]">25+</h2>
                <p className="mt-2 text-sm font-medium text-gray-700">
                  Years in Domestic Exhibitions
                </p>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#039C98]">100+</h2>
                <p className="mt-2 text-sm font-medium text-gray-700">
                  Happy Customers
                </p>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#039C98]">2000</h2>
                <p className="mt-2 text-sm font-medium text-gray-700">
                  Year Established
                </p>
              </div>

              {/* <div className="text-center">
                            <h2 className="text-3xl font-bold text-[#039C98]">Pan-India</h2>
                            <p className="mt-2 text-sm font-medium text-gray-700">
                                Execution Capability
                            </p>
                        </div> */}

              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#039C98]">100%</h2>
                <p className="mt-2 text-sm font-medium text-gray-700">
                  Client Satisfaction Focus
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why us */}
        <section className="relative bg-black/80 bg-center bg-cover py-13">
          <div className="mx-auto px-8 md:px-16">
            {/* Heading */}
            <div className="mb-10 text-center">
              <p className="mb-4 text-sm tracking-[0.4em] uppercase text-[#039C98]">
                Why Choose Us
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                What Sets Us Apart
              </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden  rounded-xl border-2 border-[#039c98]"
                >
                  {/* Image */}
                  <div className="relative h-[330px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#039c98]/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <div className="px-6 text-center">
                      <h3 className="text-2xl font-medium text-white">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-lg text-white leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* services */}
        <section className="relative bg-white py-8" id="services">
          <div className="mx-auto max-w-7xl px-6 md:px-4">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="relative h-[360px] md:h-[420px] w-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/whychoose4.jpg"
                  alt="Our Services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div>
                <h2 className="mb-6 text-3xl md:text-4xl font-bold text-gray-900">
                  Our Services
                </h2>

                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 h-2 w-3 rounded-full bg-[#039C98]" />
                    <span>
                      <strong className="text-lg">
                        Domestic Exhibition Stall Designing:
                      </strong>{" "}
                      Creative and high-impact exhibition stall designs tailored
                      for brands across India.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 h-2 w-3 rounded-full bg-[#039C98]" />
                    <span>
                      <strong className="text-lg">
                        Exhibition Fabrication Services:
                      </strong>{" "}
                      High-quality stand fabrication with precision, durability,
                      and premium finishing.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 h-2 w-3 rounded-full bg-[#039C98]" />
                    <span>
                      <strong className="text-lg">
                        Corporate Event Management:
                      </strong>{" "}
                      End-to-end planning and execution of conferences,
                      meetings, and corporate gatherings.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 h-2 w-3 rounded-full bg-[#039C98]" />
                    <span>
                      <strong className="text-lg">Brand Activation:</strong>{" "}
                      Innovative activation strategies to engage audiences and
                      boost brand visibility.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 h-2 w-3 rounded-full bg-[#039C98]" />
                    <span>
                      <strong className="text-lg">Product Launch:</strong>{" "}
                      Strategic and visually powerful product launch events that
                      create lasting market impact.
                    </span>
                  </li>
                </ul>

                <a href='tel:+919810119546' className="mt-4 group relative inline-flex cursor-pointer items-center gap-2 rounded-full border-2 bg-[#039C98] px-8 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#027a76]">
                  Connect with us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div
          className="relative flex flex-col mx-4 items-start mt-5 justify-between gap-8 rounded-2xl bg-[#039C98] px-8 py-10 md:flex-row md:items-center"
          id="contact"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Looking for a top-tier Exhibition Stall Design Agency?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-white/90 md:text-lg">
              Partner with Strides Design to create custom exhibition stands
              that attract, engage, and convert visitors into customers.
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap items-center gap-4">

            {/* ENQUIRE BUTTON */}
            <a href="https://wa.me/9999402424" className="md:block hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-wide text-[#039C98] shadow-xl"
              >
                {/* shine */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#039C98]/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Enquire Now
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>
            </a>

            {/* CALL BUTTON */}
            <button onClick={() => setOpen(true)}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 text-nowrap rounded-full border-2 border-white px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-[#039C98]"
              >
                Request a Free Consultation
              </motion.button>
            </button>
          </div>
        </div>

        <PortfolioGrid connect={true} />

        <Testimonials />

        {/* Form */}
        <div className="container mx-auto lg:px-4 lg:py-6 p-2">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/Whatmakesstridesbest.....webp"
                alt="Exhibition Stall"
                fill
                className="object-cover"
              />
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                Get Connected With Us
              </h3>
              <p className="mb-6 text-sm text-gray-600">
                Share your requirements and our team will contact you shortly.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
  <div id="recaptcha-container"></div>

  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
    placeholder="Your Name"
    className="w-full border rounded-md border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
  />

  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
    placeholder="Email Address"
    className="w-full border rounded-md border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
  />

  <input
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    required
    placeholder="Phone Number"
    className="w-full border rounded-md border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
  />

  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    required
    placeholder="Tell us about your project..."
    rows={2}
    className="w-full border rounded-md border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
  />

  {/* OTP INPUT */}
  {showOtp && (
    <input
      type="text"
      value={otp}
      onChange={(e) => setOtp(e.target.value)}
      placeholder="Enter OTP"
      className="w-full border rounded-md border-green-500 px-4 py-3 text-sm outline-none"
    />
  )}

  {/* BUTTON */}
  <button
    type="submit"
    disabled={loading}
    className="w-full bg-[#039C98] px-6 py-4 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#027a76]"
  >
    {loading
      ? "Processing..."
      : !showOtp
      ? "Send OTP"
      : "Verify OTP"}
  </button>
</form>
            </div>
          </div>
        </div>
      </div>

      <Popup
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Contact Us"
      >
         <div id="recaptcha-container"></div>

      {/* YOUR EXACT FORM (NO DESIGN CHANGE) */}
      <form className="space-y-2" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
          className="w-full border rounded-md border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email Address"
          className="w-full border rounded-md border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Phone Number"
          className="w-full border rounded-md border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
        />

        {/* OTP INPUT (ONLY WHEN REQUIRED) */}
        {showOtp && !isVerified && (
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full border rounded-md border-green-500 px-4 py-3 text-sm outline-none"
          />
        )}

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your project..."
          rows={2}
          className="w-full border rounded-md border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#039C98] px-6 py-4 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#027a76]"
        >
          {loading
            ? "Sending..."
            : !showOtp
            ? "Send OTP"
            : !isVerified
            ? "Verify OTP"
            : "Submit Message"}
        </button>
      </form>
      </Popup>

      <Popup
        isOpen={thankyou}
        onClose={() => setThankyou(false)}
        title="Thank You!"
      >
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Thank You for Reaching Out!</h2>
          <p className="text-gray-700">We appreciate you contacting Strides Design. One of our colleagues will get back in touch with you soon! Have a great day!</p>
        </div>
      </Popup>
    </>
  );
}
