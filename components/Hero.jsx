"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
const videos = [
  {
    id: "exhibition",
    src: "https://res.cloudinary.com/dzbkxqqo9/video/upload/v1766493871/herovideo_qynqha.mp4",
    label: "Exhibition Stalls",
  },
  {
    id: "interior",
    src: "https://res.cloudinary.com/dzbkxqqo9/video/upload/v1766491989/herovideo2_uclxcp.mp4",
    label: "Interior Design",
  },
];

// why  choose

export default function HeroVideo() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <section className="relative h-[70vh] md:h-screen w-full overflow-hidden">
        {/* 🔹 VIDEO */}
        <AnimatePresence mode="wait">
          <motion.video
            key={videos[index].id}
            src={videos[index].src}
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 h-[50vh] md:h-full w-full object-cover mt-20"
          />
        </AnimatePresence>

        {/* 🔹 OVERLAY */}
        <div className="absolute inset-0 z-10 bg-black/50" />

        {/* 🔹 CENTER TEXT */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-5xl md:text-6xl lg:text-6xl drop-shadow-lg">
            25+ years of proven excellence in <br /> exhibition stand construction
          </h1>
        </div>
      </section>
    </>
  );
}
