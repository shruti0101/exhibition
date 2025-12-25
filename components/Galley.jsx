"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, Link2 } from "lucide-react";

const tabs = [
  "All Projects",
  "Photography",
  "Art",
  "Museum",
  "Exhibition",
  "Sculpture",
  "History",
];

const galleryItems = [
  { src: "/portfolio/test3.jpg", title: "Modern Ancient Statue", category: "Photography" },
  { src: "/portfolio/test2.jpg", title: "Vintage Sculpture", category: "Art" },
  { src: "/portfolio/test4.jpg", title: "Classical Gallery", category: "Museum" },
  { src: "/portfolio/test5.jpg", title: "Ancient Hall", category: "Exhibition" },
  { src: "/portfolio/test6.jpg", title: "Marble Collection", category: "Sculpture" },
  { src: "/portfolio/test7.jpg", title: "Historic Artifacts", category: "History" },
  { src: "/portfolio/test8.jpg", title: "Historic Artifacts", category: "History" },
  { src: "/portfolio/test9.jpg", title: "Historic Artifacts", category: "History" },
  { src: "/portfolio/test10.jpg", title: "Historic Artifacts", category: "History" },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("All Projects");

  const filteredItems =
    activeTab === "All Projects"
      ? galleryItems
      : galleryItems.filter(item => item.category === activeTab);

  return (




    <section className="bg-white ">

     {/* Heading */}
        <div className="mb-14 flex items-center justify-center gap-6">
          <span className="h-[2px] w-20 bg-red-600" />
          <h2 className="text-3xl uppercase lg:text-4xl font-semibold text-black text-center">
            Glimpses of Our Work
          </h2>
          <span className="h-[2px] w-20 bg-red-600" />
        </div>


      <div className="mx-auto w-full ">

        {/* ================= FILTER TABS ================= */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-8 text-sm font-medium">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-1 transition ${
                activeTab === tab
                  ? "text-[#039C98]"
                  : "text-red-500 hover:text-[#039C98]"
              }`}
            >
              {tab}

              {/* ACTIVE UNDERLINE */}
              {activeTab === tab && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#039C98]"
                />
              )}
            </button>
          ))}
        </div>

        {/* ================= GALLERY GRID ================= */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group relative overflow-hidden"
              >
                {/* IMAGE */}
                <Image
                  src={item.src}
                  alt={item.title}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />

                {/* GOLD OVERLAY */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#039C98]/70 opacity-0 transition duration-500 group-hover:opacity-100">

                  {/* ICONS */}
                  <div className="mb-4 flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800">
                      <ZoomIn size={18} />
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800">
                      <Link2 size={18} />
                    </div>
                  </div>

                  {/* TEXT */}
                  <h4 className="font-serif text-lg text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm italic text-white/90">
                    {item.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
