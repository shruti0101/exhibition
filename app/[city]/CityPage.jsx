"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import {
  Building2,
  Laptop2,
  Globe,
  Rocket,
  Users,
  Briefcase,
  Landmark,
  MapPin,
  Users2,
  Factory,
  Cpu,
} from "lucide-react";
import CitySection from "@/components/CitySection";
import Link from "next/link";
import { categories } from "@/Data/data";
import RecentPorfolio from "@/components/RecentPorfolio";
import { FaWhatsapp } from "react-icons/fa";


export default function CityPage() {
  const params = useParams();

  const cityName = params?.city?.includes("-in-")
    ? params.city
        .split("-in-")[1]
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "India";

  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundImage: "url('/servicebg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="py-30 relative z-10"
      >
        <div className="absolute inset-0 bg-gray-900/60" />

        <h1 className="text-center font-serif leading-snug relative font-bold text-white text-2xl px-5 md:py-14 capitalize md:text-6xl">
          Exhibition Stall Designing Services in {cityName}
        </h1>
      </section>

      {/* main */}
      <section className="mx-auto lg:px-15 px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Exhibition Stall Designer in {cityName}
            </h1>

            <p className="text-black mb-4">
              <strong>Strides Design Studio</strong> is a creative and reliable{" "}
              <strong>
                <Link href={"/"}>Exhibition Stall Designing</Link> Service
                Provider in {cityName},
              </strong>{" "}
              delivering innovative, visually striking, and brand-focused
              exhibition stall solutions for trade shows, expos, exhibitions,
              and corporate events across {cityName}.
            </p>

            <p className="text-black mb-4">
              We specialize in{" "}
              <strong>
                custom exhibition stall design, fabrication, and execution,
              </strong>{" "}
              helping brands stand out on the exhibition floor, attract maximum
              footfall, and create memorable brand experiences. Our designs
              combine creativity, functionality, and strategic space planning to
              ensure strong brand visibility and audience engagement.
            </p>

            <p className="text-black">
              From startups and SMEs to large corporates and international
              brands, Strides Design Studio offers end-to-end exhibition stall
              solutions that reflect brand identity, marketing objectives, and
              exhibition goals—making us a preferred exhibition stall designer
              in {cityName}.
            </p>
          </div>

          <div className="w-full h-full">
            <img
              src="/Whatmakesstridesbest.....webp"
              alt="Office Workstation"
              className="w-full h-[30rem] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
        <div className="mb-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-2xl border border-gray-200 p-6 flex flex-col
                         bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-300 group"
            >
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-[#039C98] mb-2">
                  {item.name}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed flex-grow">
                  {item.desc}
                </p>
                <div className="pt-2 mt-auto">
                  <a
                    href={`https://wa.me/+919999402424?text=Hi, I want to enquire about ${item.name}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-1 font-bold text-base  text-white bg-[#039C98] px-2 py-3 rounded-full transition"
                  >
                    WhatsApp
                    <span className="ml-2 text-white"><FaWhatsapp size={20} /></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <RecentPorfolio />

      {/* why us */}
      <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-5">
          Why Choose Strides Design Studio for Exhibition Stall Designing in{" "}
          {cityName}?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-3">
              One-Stop Exhibition Stall Solution
            </h3>
            <p className="text-black text-sm">
              We provide complete exhibition stall services including concept
              design, 3D visualization, fabrication, installation, dismantling,
              and on-site support, ensuring a hassle-free exhibition experience
              for our clients.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-3">
              Custom & Creative Stall Designs
            </h3>
            <p className="text-black text-sm">
              Our exhibition stalls are custom-designed based on brand theme,
              product display requirements, target audience, and exhibition
              guidelines. We create unique designs for island stalls, peninsula
              stalls, corner stalls, and linear booths.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-3">
              Cost-Effective & Transparent Pricing
            </h3>
            <p className="text-black text-sm">
              As a professional exhibition stall designing company, Strides
              Design Studio offers competitive pricing with transparent
              costing—ideal for startups, corporates, and exhibitors looking for
              high-impact designs within budget.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-3">
              Expert Project Management
            </h3>
            <p className="text-black text-sm">
              Our experienced team handles end-to-end project coordination,
              timelines, approvals, and venue regulations, ensuring smooth
              execution without last-minute issues.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-3">
              Trusted by Brands Across Industries
            </h3>
            <p className="text-black text-sm">
              We have successfully delivered exhibition stall projects for
              clients across {cityName}, earning trust through creativity,
              quality craftsmanship, and timely delivery
            </p>
          </div>
        </div>
      </section>

      {/* office */}
      <section className="mx-auto lg:px-15 px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Exhibition Stall Designing Services in {cityName}, India
            </h2>

            <p className="text-black mb-4 leading-relaxed text-lg">
              Strides Design Studio is among the leading exhibition stall
              designers and fabricators in {cityName}, delivering
              premium-quality exhibition booths that align with modern branding
              and marketing standards.
            </p>

            <p className="text-black mb-4 leading-relaxed text-lg">
              With years of industry experience, we design and build durable,
              eye-catching, and functional exhibition stalls using high-quality
              materials, modern lighting, graphics, and display elements. Each
              stall is designed to maximize visitor engagement and brand recall.
            </p>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-5 text-gray-800">
                Our exhibition stall designing services are ideal for:
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 text-gray-800">
                {/* Trade fairs & expos */}
                <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition">
                  <div className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-100">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium">Trade fairs & expos</span>
                </li>

                {/* Corporate exhibitions */}
                <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition">
                  <div className="w-11 h-11 flex items-center justify-center rounded-full bg-indigo-100">
                    <Building2 className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="font-medium">Corporate exhibitions</span>
                </li>

                {/* Product launches */}
                <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition">
                  <div className="w-11 h-11 flex items-center justify-center rounded-full bg-green-100">
                    <Rocket className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium">Product launches</span>
                </li>

                {/* Industry-specific exhibitions */}
                <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition">
                  <div className="w-11 h-11 flex items-center justify-center rounded-full bg-orange-100">
                    <Factory className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="font-medium">
                    Industry-specific exhibitions
                  </span>
                </li>

                {/* B2B & B2C events */}
                <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition">
                  <div className="w-11 h-11 flex items-center justify-center rounded-full bg-purple-100">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="font-medium">B2B & B2C events</span>
                </li>
              </ul>
              <p className="text-black mb-4 leading-relaxed">
                Every project undergoes detailed planning, design approval, and
                quality checks to ensure flawless execution at the exhibition
                venue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workstation  */}
      <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-3">
          Exhibition Stall Types We Offer
        </h2>
        <p className="text-center text-black mb-4 text-lg">
          Exhibition Stall Design Solutions
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">
              Custom Exhibition Stalls
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Unique, brand-specific designs tailored to your exhibition goals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">
              Modular Exhibition Stalls
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Reusable, cost-effective stalls with quick installation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">
              Island Exhibition Stalls
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Four-side open stalls designed for maximum visibility.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">
              Corner & Peninsula Stalls
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Strategically designed to attract visitors from multiple aisles.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">
              Double Decker Exhibition Stalls
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Premium multi-level stalls for high-impact brand presence.
            </p>
          </div>
        </div>
      </section>

      {/* Key features  */}
      <section className="mx-auto lg:px-15 px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <img
              src="/whychoose4.jpg"
              alt="Key Features"
              className="w-full h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: "50% 70%" }}
            />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Key Features of Strides Design Studio Exhibition Stalls
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>Creative and brand-focused stall designs</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>High-quality fabrication and finishing</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>Optimized space utilization</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>Professional lighting and graphics integration</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>Timely installation and dismantling</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>Compliance with exhibition venue guidelines</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-5">
          Industries & Clients We Serve
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-600 transition">
                <Building2 className="w-7 h-7 text-blue-600 group-hover:text-white transition" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Corporate & Brands
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Customized exhibition stalls reflecting brand identity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 group-hover:bg-green-600 transition">
                <Rocket className="w-7 h-7 text-green-600 group-hover:text-white transition" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Startups & SMEs
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cost-effective stalls designed for maximum impact.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-600 transition">
                <Factory className="w-7 h-7 text-orange-600 group-hover:text-white transition" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Manufacturing & Industrial
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Product-focused display and demonstration stalls.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-600 transition">
                <Cpu className="w-7 h-7 text-purple-600 group-hover:text-white transition" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              IT, Tech & Services
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Modern, interactive, and technology-driven stall designs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-600 transition">
                <Briefcase className="w-7 h-7 text-indigo-600 group-hover:text-white transition" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Event & Marketing Agencies
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Reliable stall design and execution support.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Card */}
      <section className="mx-auto lg:px-15 px-5 py-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Case Study: Exhibition Stall Design for {cityName} Trade Expo
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-3">
              <div>
                <span className="text-sm uppercase tracking-wide text-gray-500">
                  Client
                </span>
                <p className="text-lg font-semibold">FMCG Brand</p>
              </div>
              <div>
                <span className="text-sm uppercase tracking-wide text-gray-500">
                  Location
                </span>
                <p className="text-lg font-semibold">{cityName}</p>
              </div>
              <div>
                <span className="text-sm uppercase tracking-wide text-gray-500">
                  Event
                </span>
                <p className="text-lg font-semibold">National Trade Expo</p>
              </div>

              <div className="pt-">
                <p className="text-black leading-relaxed">
                  This project highlights{" "}
                  <strong>Strides Design Studio’s</strong> expertise as a
                  trusted <Link href={"/"}>Exhibition Stall Designing</Link>{" "}
                  Service Provider in {cityName}.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-sm uppercase tracking-wide text-gray-500">
                  Scope
                </span>
                <ul className="list-disc list-inside text-black space-y-1">
                  <li>Custom exhibition stall design & 3D visualization</li>
                  <li>Fabrication and on-site installation</li>
                  <li>Lighting, graphics, and branding support</li>
                </ul>
              </div>
              <div>
                <span className="text-sm uppercase tracking-wide text-gray-500">
                  Results
                </span>
                <ul className="list-disc list-inside text-black space-y-1">
                  <li>Increased visitor engagement</li>
                  <li>Strong brand visibility</li>
                  <li>Positive client and visitor feedback</li>
                  <li>Successful lead generation during the event</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#039C98]  text-white py-5">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="md:text-left text-center">
            <Link href={"/"} className="text-lg font-semibold">
              Exhibition Stall Designing Services in {cityName}
            </Link>
            <p className="md:text-6xl text-4xl font-semibold">+91 9953686374</p>
            <p className="text-base text-white">
              For More Details Contact Us Now!
            </p>
          </div>

          <div>
            <a
              href="tel:+919953686374"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Connect Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-5">
          Exhibition Stall Designing Services – FAQs
        </h2>

        <div className="space-y-4">
          <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-lg">
              What services do you offer for exhibition stalls?
              <span className="transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              We provide complete exhibition stall design, fabrication,
              installation, and dismantling services.
            </p>
          </details>

          <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-lg">
              Do you offer custom exhibition stall designs?
              <span className="transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Yes, all our designs are customized according to brand
              requirements and exhibition objectives.
            </p>
          </details>

          <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-lg">
              Do you handle exhibitions outside {cityName}?
              <span className="transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Yes, we offer pan-India exhibition stall designing and execution
              services.
            </p>
          </details>

          <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-lg">
              Can you manage urgent or short-deadline projects?
              <span className="transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Yes, subject to feasibility and approvals, we can handle
              fast-track exhibition projects.
            </p>
          </details>

          <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-lg">
              Do you provide end-to-end support during exhibitions?
              <span className="transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Yes, our team provides on-site support throughout the event.
            </p>
          </details>
        </div>
      </section>

      {/* about */}
      <section className="mx-auto lg:px-15 px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <img
              src="/domestic-image/MITSUBA.jpg"
              alt="Best"
              className="w-full h-[28rem] object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Looking for the Best Exhibition Stall Designing Services in{" "}
              {cityName}?
            </h2>

            <p className="text-black mb-4 leading-relaxed text-lg">
              Contact Strides Design Studio today for creative concepts, 3D
              designs, pricing, or complete exhibition stall solutions. We help
              you create impactful exhibition stalls that attract visitors,
              enhance brand presence, and deliver measurable results—perfectly
              suited for exhibitions and trade shows across {cityName}.
            </p>
          </div>
        </div>
      </section>

      <CitySection></CitySection>
    </>
  );
}
