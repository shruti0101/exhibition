"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { portfolioItems } from "@/Data/data";

export default function Portfolio3D() {
  return (
    <section className="relative py-16 bg-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <p className="mb-3 text-xs tracking-[0.35em] uppercase text-red-600">
          Our Work
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Recent Portfolio
        </h2>
        <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-gradient-to-r from-red-500 to-red-700" />
      </motion.div>

      {/* Slider */}
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={1.2}
        spaceBetween={40}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mx-auto max-w-6xl portfolio-swiper"
      >
        {portfolioItems.map((item) => (
          <SwiperSlide
            key={item.id}
            className="w-[280px] sm:w-[360px] md:w-[420px]"
          >
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl bg-white "
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 p-5 text-white">
                <h3 className="text-lg font-semibold tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-200">
                  {item.location}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CTA */}
      <div className="mt-12 flex justify-center">
        <button className="group relative inline-flex items-center gap-2 rounded-full border-2 border-red-600 px-8 py-2.5 text-sm font-medium uppercase tracking-wide text-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white">
          View All Projects
          <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-6" />
        </button>
      </div>
    </section>
  );
}
