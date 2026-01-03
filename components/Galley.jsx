"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ZoomIn, Link2 } from "lucide-react";

const galleryItems = [
  {
    src: "/domestic-image/AURBINDO.jpg",
    title: "AUROBINDO",
    category: "PEDICON 2025 - HYDERABAD",
  },
  { src: "/domestic-image/EGARRMARBLE.jpg", title: "EGARR MARBLE", category: "STONA 2025 - Bengaluru" },
  {
    src: "/domestic-image/GARDEX.jpg",
    title: "GARDEX",
    category: "IHF 2024 - NEW DELHI",
  },
  {
    src: "/domestic-image/KLMLABORATORIESPVT.LTD..jpg",
    title: "KLM LABORATORIES PVT.LTD.",
    category: "PEDICON 2025 - HYDERABAD",
  },
  {
    src: "/domestic-image/PARACOAT.jpg",
    title: "PARACOAT",
    category: "BHARAT MOBILITY 2025 - NEW DELHI",
  },
  {
    src: "/internation-image/BEXIMCOPHARMA.jpg",
    title: "BEXIMCO PHARMA",
    category: "CPHI WORLDWIDE 2024 - SPAIN",
  },
  {
    src: "/internation-image/SINOGNSS.jpg",
    title: "SINOGNSS",
    category: "INTER GEO 2018 - GERMANY",
  },
  {
    src: "/internation-image/GOA.jpg",
    title: "GOA",
    category: "ITB - BERLIN , GERMANY",
  },
  {
    src: "/internation-image/_ESCORTSKUBOTALIMITED.jpg",
    title: "ESCORTS KUBOTA LIMITED",
    category: "INNOTRANS 2024 - BERLIN, GERMANY!",
  },
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
                  {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800">
                    <ZoomIn size={18} />
                  </div> */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800">
                    <Link2 size={18} />
                  </div>
                </div>

                {/* TEXT */}
                <h4 className="font-serif text-lg text-white">{item.title}</h4>
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
