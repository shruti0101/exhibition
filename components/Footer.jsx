"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  Facebook,
  Linkedin,
  MapPin,
  Star,
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
              <Phone size={14} /> (011) 4571-9352
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} /> +91 9953686374, 9810119546
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} /> info@stridesdezine.com
            </span>

            <div className="flex items-center gap-3">
              <Facebook size={16} className="hover:text-[#039C98]" />
              <Linkedin size={16} className="hover:text-[#039C98]" />
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
              {[
                "Home",
                "About us",
                "Services",
            "Portfolio",
           
                "Careers",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-[#039C98]"
                  >
                    {item}
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
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-1" />
                (011) 4571-9352
              </li>
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-1" />
                +91 9953686374, 9810119546
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-1" />
                info@stridesdezine.com
              </li>
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
          49C, JD Block, Rohini, Pitampura, Delhi 110034
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
          Amsterdam, Netherlands
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
      <div className="py-4 text-center text-sm text-white">
        © 2025 Strides Dezine. All rights reserved.
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
