"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight,ChevronLeft } from "lucide-react";
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

  const prevVideo = () => {
    setIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (

    <>
<section className="relative h-screen w-full overflow-hidden">

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
      className="absolute inset-0 h-full w-full object-cover"
    />
  </AnimatePresence>



  {/* 🔹 ARROWS (FIXED & VISIBLE) */}
  <div className="absolute bottom-10 right-10 z-30 flex items-center gap-4">

    {/* LEFT */}
    <button
      onClick={prevVideo}
      className="flex h-12 w-12 items-center justify-center 
                 rounded-full bg-black/60 backdrop-blur 
                 text-white hover:bg-white hover:text-black 
                 transition"
    >
      <ChevronLeft size={22} />
    </button>

    {/* RIGHT */}
    <button
      onClick={nextVideo}
      className="flex h-12 w-12 items-center justify-center 
                 rounded-full bg-black/60 backdrop-blur 
                 text-white hover:bg-white hover:text-black 
                 transition"
    >
      <ChevronRight size={22} />
    </button>

  </div>

</section>









    </>

  );
}
