"use client";

import Image from "next/image";
import {
  Phone,
  Mail,
  Facebook,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mx-auto bg-[#1b1b1b] text-white">
      {/* TOP CONTACT BAR */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex w-11/12 max-w-[1400px] flex-wrap items-center justify-between gap-4 py-4 text-sm">
          <div className="font-semibold text-white">Quick Contact</div>

          <div className="flex flex-wrap items-center gap-6 text-white">
            <span className="flex items-center gap-2">
              <Phone size={14} /> +91 96197 35550
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} /> +91 79779 08853
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} /> +91 22 2529-4907 / 2528-4907
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} /> sales@accordexhibit.com
            </span>

            <div className="flex items-center gap-3">
              <Facebook size={16} />
              <Linkedin size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* CITY ADDRESSES */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid w-11/12 max-w-[1400px] grid-cols-1 gap-8 py-10 text-sm sm:grid-cols-2 lg:grid-cols-6">
          {cities.map((city) => (
            <div key={city.name}>
              <h4 className="mb-3 font-semibold text-white">
                {city.name}
              </h4>
              <p className="leading-relaxed  text-white">
                {city.address}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SEO KEYWORD BLOCKS */}
      <div className="border-b border-white/10 cursor-pointer">
        <div className="mx-auto grid w-11/13 max-w-[1400px] grid-cols-1 gap-6 py-10 text-sm sm:grid-cols-2 lg:grid-cols-5">
          {seoColumns.map((col, i) => (
            <ul key={i} className="space-y-1 text-white">
              {col.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="py-4 text-center text-sm text-white">
        Copyright © 2025 Design by Accord Exhibit. All rights reserved.
      </div>

      {/* FLOATING CALLBACK */}
      <button className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-600">
        Arrange Callback
      </button>
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
  [
    "Home",
    "About",
    "portfolio",
    "services",
    "clients",
    "contact us"
  ]
];
