"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/Data/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* NAVBAR SHELL */}
      <div className="bg-white/80 backdrop-blur-2xl border-b border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
        <div className="mx-auto flex h-20 w-full px-5 items-center justify-between ">

          {/* LOGOS */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image src="/logo1.png" alt="Logo" width={135} height={60} priority />
            </Link>
         
            <Link href="/">
              <Image src="/logo2.png" alt="Logo" width={110} height={60} priority />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-6 text-[15px] font-semibold uppercase tracking-wider text-black">
            {["Home", "About" ].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#039C98] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 relative group">
                SERVICES
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#039C98] transition-all duration-300 group-hover:w-full" />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute left-0 top-full mt-6 w-72 rounded-2xl bg-white shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-black/5 overflow-hidden"
                  >
                    <ul className="py-3">
                      {categories.map((service) => (
                        <li key={service.id}>
                          <Link
                            href={`/${service.id}`}
                            onClick={closeAll}
                            className="flex items-center justify-between px-6 py-3 text-xs tracking-wide text-black hover:bg-gray-50 hover:text-[#039C98] transition"
                          >
                            {service.name}
                            <span className="opacity-0 group-hover:opacity-100 transition">
                              →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {["Portfolio", "Contact","Career"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#039C98] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* WHATSAPP CTA */}
            <a
              href="https://wa.me/9999402424"
              target="_blank"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-[#039C98] px-5 py-2 text-white text-xs tracking-widest hover:shadow-lg hover:scale-[1.03] transition"
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </a>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-black"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white shadow-xl"
          >
            <div className="px-6 py-8 space-y-5 text-sm font-semibold uppercase tracking-wider flex flex-col">
              <Link href="/" onClick={closeAll}>Home</Link>
              <Link href="/about" onClick={closeAll}>About</Link>

              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between text-[17px]"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="ml-4 space-y-3">
                  {categories.map((service) => (
                    <Link
                      key={service.id}
                      href={`/${service.id}`}
                      onClick={closeAll}
                      className="block text-xs text-gray-700"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/portfolio" onClick={closeAll}>Portfolio</Link>
                <Link href="/about" onClick={closeAll}>Career</Link>
              <Link href="/contact" onClick={closeAll}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
