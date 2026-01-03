"use client";

import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Cta from "@/components/Cta";
import "swiper/css";

const About = () => {
  const locations = [
    { name: "India", image: "/location/india.jpg" },
    { name: "France", image: "/location/france.avif" },
    // { name: "Netherlands", image: "/location/netherlands.jpg" },
    // { name: "Switzerland", image: "/location/switzerland.webp" },

    { name: "Spain", image: "/location/spain.avif" },
    { name: "USA", image: "/location/usa.png" },
    { name: "UAE", image: "/location/uae.webp" },
    { name: "UK", image: "/location/uk.jpg" },
    { name: "China", image: "/location/china.webp" },
    { name: "Thailand", image: "/location/thailand.jpg" },
    { name: "Germany", image: "/location/germany.avif" },
  ];

  // portfolio
  const port = [
    {
      id: 1,
      image: "/domestic-image/DONGSHENGINTERNATIONAL.jpg",
      title: "DONGSHENG INTERNATIONAL",
      location: "STONA 2025 - Bengaluru",
    },
    {
      id: 2,
      image: "/domestic-image/EGARRMARBLE.jpg",
      title: "EGARR MARBLE",
      location: "STONA 2025 - Bengaluru",
    },
    {
      id: 3,
      image: "/domestic-image/OERLIKON.jpg",
      title: "OERLIKON",
      location: "AERO INDIA 2025 - BENGALURU",
    },

    {
      id: 4,
      image: "/internation-image/ACCURUB.jpg",
      title: "ACCURUB",
      location: "IAA 2022 - HANNOVER, GERMANY",
    },

    {
      id: 5,
      image: "/internation-image/INNOVARUBBERSVIR.jpg",
      title: "INNOVA RUBBERS , VIR",
      location: "AUTOMECHANIKA 2024 - FRANKFURT, GERMANY",
    },

    {
      id: 6,
      image: "/internation-image/ACCURUB1.jpg",
      title: "FRESH DESK",
      location: "CCW - BERLIN, GERMANY",
    },
  ];

  // reasons

  const reasons = [
    {
      title: "Creative Design Excellence",
      desc: "Innovative exhibition stall designs that attract, engage, and elevate brand presence on the show floor.",
      image: "/whychoose1.png",
    },
    {
      title: "In-House Fabrication",
      desc: "Complete fabrication handled in-house ensuring quality control, faster execution, and flawless finishes.",
      image: "/whychoose2.jpg",
    },
    {
      title: "Premium Build Quality",
      desc: "We use high-grade materials, advanced techniques, and precision engineering for durable structures.",
      image: "/whychoose3.png",
    },
    {
      title: "Global Exhibition Experience",
      desc: "Proven experience across India and international exhibitions, delivering consistent excellence worldwide.",
      image: "/whychoose4.jpg",
    },
  ];
  return (
    <>
      {/* about us */}
      <section className="relative w-full bg-white py-15 ">
        <div className="mx-auto px-8 md:px-16 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* 🔹 LEFT : IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative h-[520px] overflow-hidden bg-gray-100"
            >
              <Image
                src="/newabout.jpg"
                alt="Exhibition Stall Design"
                fill
                className="object-cover scale-105"
              />
            </motion.div>

            {/* 🔹 RIGHT : CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="mb-4 text-sm tracking-[0.45em] uppercase text-[#039C98]">
                About Us
              </p>

              <h2 className="text-lg md:text-3xl  font-bold  text-black">
                Specialists in Exhibition <br /> Stand Design & Construction
              </h2>

              <p className="mt-3 text-lg text-black  text-justify">
                We are a leading Exhibition Stall Design, Stand Construction,
                and Raw Space Design company based in Delhi, India. With over
                <strong> 25 years of industry experience</strong>, we have been
                part of some of the most prominent exhibitions across India and
                around the world.
              </p>

              <p className="mt-3 text-lg text-black  text-justify">
                Backed by a highly skilled team of designers, engineers, and
                fabricators, we deliver innovative and impactful exhibition
                environments that strengthen brand presence and leave a lasting
                impression.
              </p>
              <p className="text-lg text-black text-justify ">
                Our track record proves our expertise and dedication in the
                industry. We have broadened our client base while emphasizing
                the unique requirements of business firms, resulting in
                tailor-made solutions. If you are looking forward to
                collaborating with the best exhibition stall designer in India,
                please don't hesitate to reach out to us.
              </p>

              {/* 🔹 CTA */}

              <div className="mt-6 flex item-center gap-3 ">
                <button className="group cursor-pointer relative inline-flex items-center gap-2 rounded-full border-2 border-[#039C98] px-8 py-2.5 text-sm font-medium uppercase tracking-wide text-[#039C98] transition-all duration-300 hover:bg-[#039C98] hover:text-white">
                  Call Us
                  <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-6" />
                </button>

                <button className="group relative cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-[#039C98] px-8 py-2.5 text-sm font-medium uppercase tracking-wide text-[#039C98] transition-all duration-300 hover:bg-[#039C98] hover:text-white">
                  Email Us
                  <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-6" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* count up */}

      <section className="bg-gray-100 py-10">
        <div className="mx-auto w-full px-8 md:px-16">
          {/* TOP CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-lg md:text-3xl  font-bold text-black leading-tight">
                What makes Strides Design Studio the best exhibition stall
                design company in India?
              </h2>

              <p className="mt-3 text-lg text-black text-justify">
                What sets us apart is our unwavering dedication to customer
                satisfaction. We prioritize our clients' needs and work closely
                with them throughout the entire stall design process, ensuring
                that their vision is brought to life. From conceptualization to
                execution, we maintain open lines of communication, providing
                regular updates and seeking feedback to ensure that the final
                product exceeds expectations.
              </p>

              <p className="mt-3 text-lg text-justify">
                Furthermore, our extensive experience and industry knowledge
                enable us to stay ahead of the curve when it comes to emerging
                trends and technologies. We continuously invest in our team's
                professional development and stay updated with the latest tools
                and techniques to deliver cutting-edge designs.
              </p>

              <p className=" text-lg text-justify">
                When you choose us as your exhibition stall design partner, you
                can expect nothing but the best. Our passion for design,
                combined with our expertise and commitment to excellence, makes
                us the preferred choice for businesses looking to make a strong
                impact at trade shows, exhibitions, and events.
              </p>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative h-[420px] w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/Whatmakesstridesbest.....webp" // replace with your image
                  alt="Exhibition Stall"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* why choose */}
      <section className="relative bg-black/80 bg-center bg-cover  py-13">
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
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-14">
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

      <section className="my-20 bg-white">
        <div className="mx-auto w-full px-8 md:px-16">
          {/* Heading */}
          <div className="mb-14 flex items-center justify-center gap-6">
            <span className="h-[2px] w-20 bg-[#039C98]" />
            <h2 className="text-3xl lg:text-4xl font-semibold text-black text-center">
              Our Stand Services Around The World
            </h2>
            <span className="h-[2px] w-20 bg-[#039C98]" />
          </div>

          {/* Slider */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 6 },
            }}
          >
            {locations.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="overflow-hidden border border-gray-200 shadow-sm">
                  {/* Image */}
                  <div className="relative h-[130px] w-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />

                    {/* Pin */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white/90 rounded-full p-2 shadow">
                      <MapPin size={18} className="text-black" />
                    </div>
                  </div>

                  {/* Country Name */}
                  <div className="bg-[#039C98] py-2 text-center">
                    <span className="text-sm font-semibold uppercase text-white">
                      {item.name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Cta></Cta>

      {/* portfolio */}

      <section className="relative bg-white py-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs tracking-[0.35em] uppercase text-[#039C98]">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Recent Portfolio
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#039C98] to-[#039C98]" />
        </motion.div>

        {/* Cards Grid */}
        <div className="mx-auto  w-full grid px-8 md:px-16 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {port.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-xl shadow-xl group bg-white"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Bottom Glass Content */}
              <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md  bg-white/60  px-5 py-4 transition-all duration-300 group-hover:bg-white">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-black">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <button className="group relative inline-flex items-center gap-3 rounded-full border-2 border-[#039C98] px-8 py-3 text-sm font-medium uppercase tracking-wide text-[#039C98] transition-all duration-300 hover:bg-[#039C98] hover:text-white">
            View All Projects
            <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-6" />
          </button>
        </div>
      </section>

      {/* clientele */}

      <section className="relative w-full overflow-hidden bg-[#f5f8fe] py-14">
        <div className="mx-auto flex px-8 md:px-16 items-center gap-14">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                  staggerChildren: 0.15,
                },
              },
            }}
            className="flex w-[calc(100%-520px)] flex-col"
          >
            <motion.span
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="mb-3 text-xs font-semibold tracking-[0.35em] uppercase text-red-500"
            >
              Our Clients
            </motion.span>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-2xl md:text-4xl font-bold  text-black"
            >
              Trusted by Leading Brands Across Exhibitions & Trade Shows
            </motion.h2>

            <motion.div
              variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
              className="mt-5 mb-8 h-[3px] w-10 origin-left rounded-full bg-red-500"
            />

            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="text-lg leading-relaxed text-black"
            >
              From global corporates to fast-growing brands, we partner with
              businesses that want to make a bold impact on the exhibition
              floor. Our custom-designed exhibition stalls are crafted to
              attract, engage, and convert visitors into lasting connections.
            </motion.p>

            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="mt-3 text-lg  text-black"
            >
              With in-house design, fabrication, and execution, we deliver
              seamless exhibition experiences that reflect your brand’s vision
              and elevate your presence across trade shows, expos, and events.
            </motion.p>

            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="mt-6 text-md  text-red-600 animate-pulse"
            >
              500+ Exhibitions Delivered • Pan-India & International Experience
            </motion.p>
          </motion.div>

          {/* RIGHT LOGO SCROLLER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-[700px] overflow-hidden rounded-xl  "
          >
            {/* TOP FADE */}
            <div className="pointer-events-none absolute top-0 z-20 h-28 w-full bg-gradient-to-b from-[#f5f8fe] to-transparent" />

            {/* MOVING LOGOS (CSS animation stays) */}
            <div className="absolute left-0 top-0 flex w-full flex-col animate-scrollUp">
              <Image
                src="/clients.png"
                alt="Our Esteemed Clients"
                width={1000}
                height={1000}
                className="w-full companies-wrapper"
              />
            </div>

            {/* BOTTOM FADE */}
            <div className="pointer-events-none absolute bottom-0 z-20 h-28 w-full bg-gradient-to-t from-[#f5f8fe] to-transparent" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
