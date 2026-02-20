import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

export default function RecentPorfolio() {
    const port = [
        {
            id: 1,
            image: "/RecentSwastik.jpg",
            title: "Swastik",
            location: "Plast India 2026, Delhi",
        },
        {
            id: 2,
            image: "/RecentFastTrack.jpg",
            title: "Fastrack",
            location: "Plast India 2026, Delhi",
        },
        {
            id: 3,
            image: "/RecentParamat.jpg",
            title: "Paramat",
            location: "Automechanika India, Delhi",
        },
        {
            id: 4,
            image: "/RecentApeda.jpg",
            title: "APEDA",
            location: "IEMl Greater Noida",
        },
        {
            id: 5,
            image: "/RecentBharti.jpg",
            title: "BHARATI",
            location: "IEMl Greater Noida",
        },
        {
            id: 6,
            image: "/RecentMofpi.jpg",
            title: "MOFPI (Ministry of Food Processing Industries) ",
            location: "Pavilion IEMl Greater Noida",
        },
        {
            id: 7,
            image: "/RecentTurkey.jpg",
            title: "Turkey",
            location: "Stonemart India, Jaipur",
        },
        {
            id: 8,
            image: "/RecentMobelchem.jpg",
            title: "Mobelchem",
            location: "Plast India 2026, Delhi",
        },
        {
            id: 9,
            image: "/RecentMegnus.jpg",
            title: "Megnus",
            location: "Plast India 2026, Delhi",
        },
        {
            id: 10,
            image: "/RecentMeyle.jpg",
            title: "Meyle",
            location: "Automechanika India, Delhi",
        },
        {
            id: 11,
            image: "/RecentTVS.jpg",
            title: "TVS Group – Sundaram Clayton",
            location: "Nuremberg, Germany",
        },
        {
            id: 12,
            image: "/RecentRockman.jpg",
            title: "Rockman Industries",
            location: "Nuremberg, Germany",
        },
    ];

    return (<section className="relative bg-white py-8">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-8 text-center"
        >
            <p className="mb-3 text-xs tracking-[0.35em] uppercase text-[#039C98]">
                Our Work
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Recent Portfolio
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#039C98] to-[#039C98]" />
        </motion.div>

        <div className="mx-auto  w-full grid px-8 md:px-16 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {port.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="relative overflow-hidden rounded-xl shadow-xl group bg-white"
                >
                    {/* Image */}
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Bottom Glass Content */}
                    <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md  bg-white/60  px-5 py-4 transition-all duration-300 group-hover:bg-white">
                        <h3 className="text-lg font-semibold text-gray-900">
                            {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-black">{item.location}</p>
                    </div>
                </motion.div>
            ))}
        </div>

        <div className="mt-8 flex justify-center">
            <Link
                href="/domestic-portfolio"
                className="group relative inline-flex items-center gap-3 rounded-full border-2 border-[#039C98] px-8 py-3 text-sm font-medium uppercase tracking-wide text-[#039C98] transition-all duration-300 hover:bg-[#039C98] hover:text-white"
            >
                View All Projects
                <span className="block h-px w-0 bg-white transition-all duration-300 group-hover:w-6" />
            </Link>
        </div>
    </section>)
}
