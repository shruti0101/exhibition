"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ZoomIn, Link2 } from "lucide-react";

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
  return (
    <section className="bg-white py-9">
      <div className="mx-auto w-full">

        <div className="mb-14 flex items-center justify-center gap-6">
          <span className="h-[2px] w-20 bg-[#039C98]" />
          <h2 className="text-3xl lg:text-4xl font-semibold text-black text-center">
          Glimpse of our work
          </h2>
          <span className="h-[2px] w-20 bg-[#039C98]" />
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden"
            >
        
              <Image
                src={item.src}
                alt={item.title}
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />

              {/* GOLD OVERLAY */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#039C98]/60 opacity-0 transition duration-500 group-hover:opacity-100">

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
        </div>
      </div>
    </section>
  );
}
