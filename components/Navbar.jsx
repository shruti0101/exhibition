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
  const [hideCategory, setHideCategory] = useState(false);

  /* 🔹 SCROLL DIRECTION LOGIC */
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 120) {
        // scrolling DOWN
        setHideCategory(true);
      } else {
        // scrolling UP
        setHideCategory(false);
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
      {/* 🔹 TOP NAVBAR (ALWAYS VISIBLE) */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50"
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="bg-white backdrop-blur-xl border-b border-black/10">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
            {/* LOGOS */}
            <div className="flex items-center gap-3">
              <Link href="/">
                <Image
                  src="/logo1.png"
                  alt="Logo"
                  width={130}
                  height={70}
                  priority
                />
              </Link>
              <Link href="/">
                <Image
                  src="/logo2.png"
                  alt="Logo"
                  width={110}
                  height={70}
                  priority
                />
              </Link>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-7 text-[15px] font-semibold uppercase text-black">
              {["Home", "About", "Services", "Portfolio", "Clients", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-[#039C98] transition"
                  >
                    {item}
                  </Link>
                )
              )}

              <a
                href="https://wa.me/9999402424"
                target="_blank"
                className="rounded-full bg-[#039C98] p-2.5 text-white"
              >
                <FaWhatsapp size={18} />
              </a>
            </nav>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* 🔹 CATEGORY BAR (HIDE ON SCROLL DOWN) */}
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: hideCategory ? -80 : 0,
          opacity: hideCategory ? 0 : 1,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed top-[64px] z-40 w-full bg-white/90 backdrop-blur-xl border-b border-black"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="flex h-14 items-center justify-center gap-4 text-[17px] uppercase font-semibold">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onMouseEnter={() => setActiveMenu(cat.id)}
              className="group relative flex items-center gap-2 hover:text-[#039C98]"
            >
              {cat.name}
              <ChevronDown size={12} />
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#039C98] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* 🔹 MEGA MENU */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed left-0 right-0 bg-white"
            >
              {categories
                .filter((c) => c.id === activeMenu)
                .map((service) => (
                  <div
                    key={service.id}
                    className="mx-auto max-w-7xl px-6 py-16"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                      {/* IMAGE */}
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] bg-gray-100"
                      >
                        <Image
                          src={service.image}
                          alt={service.name}
                          fill
                          className="object-cover"
                        />
                      </motion.div>

                      {/* CONTENT */}
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        <p className="mb-4 text-sm tracking-[0.4em] uppercase text-teal-600">
                          Service
                        </p>
                        <h2 className="text-3xl font-medium text-black">
                          {service.name}
                        </h2>
                        <p className="mt-6 max-w-xl text-black leading-snug">
                          {service.desc}
                        </p>

                        <Link
                          href={`/${service.id}`}
                          onClick={closeMenu}
                          className="mt-10 inline-flex items-center gap-3 uppercase tracking-widest text-red-600"
                        >
                          View Service →
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 🔹 MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-16 left-0 right-0 bg-white shadow-xl z-40"
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
