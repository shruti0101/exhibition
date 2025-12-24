"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/Data/data";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hideTop, setHideTop] = useState(false);


useEffect(() => {
  let lastY = window.scrollY;

  const handleScroll = () => {
    const currentY = window.scrollY;
    const diff = currentY - lastY;

    // Ignore tiny scrolls (prevents jitter)
    if (Math.abs(diff) < 10) return;

    if (diff > 0 && currentY > 80) {
      // scrolling DOWN
      setHideTop(true);
    } else {
      // scrolling UP
      setHideTop(false);
    }

    lastY = currentY;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const closeMenu = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  return (
 <header className="relative z-50 w-full">


      {/* 🔹 TOP BAR */}
    <motion.div
  className="fixed top-0 left-0 right-0 z-50 cursor-pointer"
  animate={{
    y: hideTop ? -100 : 0,
    opacity: hideTop ? 0 : 1,
  }}
  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
>

        <div className="bg-white backdrop-blur-xl border-b border-white/10">
          <div className="mx-auto  flex h-16 max-w-7xl items-center justify-between px-6">
<div className="flex flex-row mt-2 items-center  gap-3">
 <Link href="/" className="">
              <Image src="/logo1.png" alt="Logo" width={130} height={70} priority />
            </Link>

             <Link href="/" className="">
              <Image src="/logo2.png" alt="Logo" width={110} height={70} priority />
            </Link>
</div>
           

            <nav className="hidden lg:flex items-center gap-10 text-[13px]  font-semibold tracking-widest text-black uppercase ">
              {["Home", "About", "Services","Portfolio","Clients", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}-us`}
                  className="relative hover:text-[#039C98] transition hover:scale-105"
                >
                  {item}
                </Link>
              ))}

              <a
                href="https://wa.me/9999402424"
                target="_blank"
                className="rounded-full border border-white p-2.5 text-white bg-[#039C98]  transition"
              >
                <FaWhatsapp size={18} />
              </a>
            </nav>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white">
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* 🔹 CATEGORY BAR */}
   <div
  className={`fixed w-full z-40 bg-white/90 backdrop-blur-xl border-b border-black ${
    hideTop ? "top-0" : "top-[64px]"
  }`}
  onMouseLeave={() => setActiveMenu(null)}
>
        <div className=" flex h-14  w-full items-center justify-center gap-2 lg:text-[14px] uppercase ">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onMouseEnter={() => setActiveMenu(cat.id)}
              className="relative group flex items-center gap-1 text-black hover:text-[#039C98]"
            >
              {cat.name}
              <ChevronDown size={13} />
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#039C98] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

  {/* 🔹 MEGA MENU : IMAGE LEFT | CONTENT RIGHT */}
<AnimatePresence>
  {activeMenu && (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
className={`fixed left-0 right-0 bg-white transition-all duration-300 ${
  hideTop ? "top-[52px]" : "top-[56px]"
}`}
    >
      {categories
        .filter((c) => c.id === activeMenu)
        .map((service) => (
          <div
            key={service.id}
            className="mx-auto max-w-7xl px-6 py-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* 🔹 LEFT : IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative h-[400px] overflow-hidden bg-gray-100"
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />
              </motion.div>

              {/* 🔹 RIGHT : CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                <p className="mb-4 text-xs tracking-[0.4em] uppercase text-gray-400">
                  Service
                </p>

                <h2 className="text-3xl font-medium tracking-wide text-black">
                  {service.name}
                </h2>

                <p className="mt-6 text-base text-gray-600 leading-relaxed max-w-xl">
                  {service.desc}
                </p>

                <Link
                  href={`/services/${service.id}`}
                  onClick={closeMenu}
                  className="inline-flex items-center gap-3 mt-10 text-sm tracking-[0.25em] uppercase text-[#039C98] group"
                >
                  View Service
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              </motion.div>

            </div>
          </div>
        ))}
    </motion.div>
  )}
</AnimatePresence>


      </div>

      {/* 🔹 MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-xl"
          >
            <div className="px-6 py-6 space-y-4 text-sm font-semibold uppercase">
              <Link href="/" onClick={closeMenu}>Home</Link>
              <Link href="/about-us" onClick={closeMenu}>About</Link>
              <Link href="/projects" onClick={closeMenu}>Projects</Link>
              <Link href="/contact-us" onClick={closeMenu}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
