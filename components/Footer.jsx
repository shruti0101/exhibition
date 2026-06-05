"use client";

import Link from "next/link";
import { Phone, Mail, Facebook, Linkedin, MapPin, Star } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Instagram } from "lucide-react";
import { usePathname } from "next/navigation";
export default function Footer() {
  const date = new Date();
  const usefulLinks = [
    
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services/domestic-exhibition-stall-designing-services/" },
    { name: "Portfolio", href: "/domestic-portfolio/" },
    { name: "Careers", href: "/career" },
    { name: "Contact Us", href: "/contact" },
    { name: "Inquiry", href: "/inquiry" },
    { name: "Sitemap", href: "/sitemap" },
  ]

  const pathname = usePathname();
  const adminLayout = pathname.startsWith("/admin")
  if (adminLayout) return null;

  return (
    <footer className="relative mx-auto bg-[#000000cc] text-white">
      {/* TOP CONTACT BAR */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex w-11/12 max-w-[1400px] flex-wrap items-center justify-between gap-4 py-4 text-sm">
          <div className="font-semibold text-white">Quick Contact</div>

          <div className="flex flex-wrap items-center gap-6 text-white">
            <a href="tel:+0114571-9352" className="flex items-center gap-2">
              <Phone size={14} /> (011) 4571-9352
            </a>
            <a href="tel:+919810119546" className="flex items-center gap-2">
              <Phone size={14} /> +91 9953686374, 9810119546
            </a>
            <a href="mailto:info@stridesdesign.com" className="flex items-center gap-2">
              <Mail size={14} /> info@stridesdesign.com
            </a>

            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/stridesdesignstudio" target="_blank" rel="noopener noreferrer">
                <Facebook size={16} className="hover:text-[#039C98]" />
              </a>
              <a href="https://www.instagram.com/strides_designstudio/" target="_blank" rel="noopener noreferrer">
                <Instagram size={16} className="hover:text-[#039C98]" />
              </a>
              <a href="https://www.linkedin.com/company/strides-designstudio/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} className="hover:text-[#039C98]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER INFO */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid w-11/12 max-w-[1400px] grid-cols-1 gap-10 py-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
          {/* USEFUL LINKS */}
          <div>
            <h4 className="mb-4 font-semibold uppercase tracking-wider">
              Useful Links
            </h4>
            <ul className="space-y-2 text-white/80">
              {usefulLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#039C98]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT DETAILS */}
          <div>
            <h4 className="mb-4 font-semibold uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-white/80">
              <a href="tel:+0114571-9352" className="flex items-start gap-2">
                <Phone size={14} className="mt-1" />
                (011) 4571-9352
              </a>
              <a href="tel:+919953686374" className="flex items-start gap-2">
                <Phone size={14} className="mt-1" />
                +91 9953686374, 9810119546
              </a>
              <a href="mailto:info@stridesdesign.com" className="flex items-start gap-2">
                <Mail size={14} className="mt-1" />
                info@stridesdesign.com
              </a>
            </ul>
          </div>

          {/* LOCATION */}
          {/* LOCATIONS */}
          <div>
            <h4 className="mb-4 font-semibold uppercase tracking-wider">
              Our Locations
            </h4>

            <div className="space-y-4 text-white/80 text-sm">
              {/* DELHI */}
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 text-[#039C98]" />
                <div>
                  <p className="font-semibold text-white">India (Delhi)</p>
                  <p className="leading-relaxed">
                    49C, Block JD, Dakshini Pitampura, Delhi, 110034
                  </p>
                </div>
              </div>

              {/* NETHERLANDS */}
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 text-[#039C98]" />
                <div>
                  <p className="font-semibold text-white">Netherlands</p>
                  <p className="leading-relaxed">
                    {/* Replace with exact address if you want */}
                    Henriette Bosmansplein 119 3122 CC SCHIEDAM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* GOOGLE REVIEW */}
          <div>
            <h4 className="mb-4 font-semibold uppercase tracking-wider">
              Review Us
            </h4>
            <a
              href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x390d03c364cc7eeb:0xabe849dd2636c4c!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2"
              target="_blank"
              className="inline-flex animate-pulse items-center gap-2 rounded-md border  px-4 py-2 text-sm border-[#039C98] text-[#039C98]"
            >
              <Star size={16} />
              Review us on Google
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="py-4 text-center text-sm text-white flex flex-col md:flex-row justify-between md:px-10">
        <span> © {date.getFullYear()} Strides design. All rights reserved. </span>
        <span>
            Website Designed By   Inquiry Bazaar Pvt. Ltd.  {" "}
        <a
          target="_blank"
          href="https://inquirybazaar.com/"
          className="text-[#FAAC18] hover:underline"
        >
           B2B Marketplace
        </a>
          </span>
      </div>

      {/* FLOATING CALLBACK */}
      <a href="https://wa.me/+919999402424" className="fixed bottom-6 md:hidden left-6 z-50 flex items-center gap-2 rounded-full bg-green-500 md:px-5 md:py-3 p-4 text-md font-semibold text-white shadow-lg hover:bg-green-600">
        <FaWhatsapp size={22} />
      </a>

      {/* FLOATING CALLBACK */}
      <a href="tel:+919810119546" className="fixed bottom-10 right-6 z-50 flex items-center gap-2 rounded-full bg-red-500 md:px-5 md:py-3 p-4 text-md font-semibold text-white shadow-lg hover:bg-red-600">
        <PhoneCall size={20} /> <span className="hidden md:block">Arrange Callback</span>
      </a>
    </footer>
  );
}

/* DATA */

const cities = [
  {
    name: "Mumbai",
    address:
      "24, Apurva Estate, Makwana Road, Andheri Kurla Road, Near Marol Naka, Andheri (E), Mumbai, Maharashtra – 400059",
  },
  {
    name: "Bengaluru",
    address:
      "Muniyappa Compound, NH-4, Tumkur Road, 19 km, Madanayakanahalli, Near Total Gas Pump, Bangalore – 562162",
  },
  {
    name: "Hyderabad",
    address:
      "Medchal Check Post, Medchal, Secunderabad, Telangana, Hyderabad – 501401",
  },
  {
    name: "Pune",
    address:
      "Vista Residency, C-401, Samarth Colony, Survey No.33, Near Shil Serenity, Pune, Maharashtra – 411045",
  },
  {
    name: "Chennai",
    address:
      "No.4/4a, Kandasamy Nagar, Ganapathy Nagar, Annax Vannagaram, Chennai, Tamil Nadu – 600095",
  },
  {
    name: "Delhi",
    address:
      "Pipeline Road, Near NTPC, Murad Nagar, Ghaziabad, Uttar Pradesh – 201206",
  },
];

const seoColumns = [
  [
    "Exhibition Design Agency",
    "Expo Booth Makers",
    "Expo Stand Contractors",
    "Stand Contractors",
    "Exhibition Stand Designer",
    "Stall Design Company",
    "Exhibition Design Company",
    "Exhibition Stall Makers",
    "Jewellery Stall Designer",
    "Expo Stall Manufacturer",
    "Stall Fabricators Pune",
    "Stall Fabricators Mumbai",
    "Pharma Stall Designer",
    "Stall Design Company Bangalore",
    "Stall Fabricators Chennai",
  ],
  [
    "Kiosk Designer",
    "Booth Designers",
    "Exhibition Booth Design Agency",
    "Creative Stall Concepts",
    "Designer For Exhibition Stand",
    "Exhibition Booth Designer",
    "Exhibition Stall Design Company",
    "Exhibition Booth Contractors",
    "Expo Stall Contractor",
    "Stall Design Agency",
    "Unique Stall Design Concepts",
    "Innovative Stall Designer",
    "Stall Design Company Mumbai",
    "Stall Fabricators Hyderabad",
  ],
  [
    "Booth Maker",
    "Expo Designer",
    "Customized Expo Stalls",
    "Stall Design Agencies",
    "Customized Stall Designer",
    "Stall Agencies",
    "Best Exhibition Designer",
    "Expo Booth Designer",
    "Exhibition Designers",
    "Creative Booth Designer",
    "Exhibition Design Agency",
    "Stall By Industries",
    "Stall Design Company Hyderabad",
    "Stall Fabricators Bangalore",
  ],
  [
    "Stand Designer",
    "Kiosk Makers",
    "Booth Fabricators",
    "Booth Design Agency",
    "Exhibition Stall Agencies",
    "Expo Stall Design Agency",
    "Exhibition Stall Design Agency",
    "Kiosk Designers",
    "Tradeshow Booth Designers",
    "Stall Design Company Delhi",
    "Display Stand Fabricator",
    "Stall Fabricators Ahmedabad",
    "Stall Fabricators Delhi",
    "Stall Fabricators Kolkata",
  ],
  ["Home", "About", "portfolio", "services", "clients", "contact us"],
];
