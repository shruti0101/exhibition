import React from "react";

const portfolioItems = [
  {
    id: 1,
    src: "/domestic-image/DONGSHENGINTERNATIONAL.jpg",
    alt: "DONGSHENG INTERNATIONAL",
    title: "DONGSHENG INTERNATIONAL",
  },
  {
    id: 2,
    src: "/domestic-image/EGARRMARBLE.jpg",
    alt: "EGARR MARBLE",
    title: "EGARR MARBLE",
  },
  {
    id: 3,
    src: "/domestic-image/OERLIKON.jpg",
    alt: "OERLIKON",
    title: "OERLIKON",
  },
  {
    id: 4,
    src: "/domestic-image/SASMOS.jpg",
    alt: "SASMOS",
    title: "SASMOS",
  },

  {
    id: 5,
    src: "/domestic-image/JAYEM.jpg",
    alt: "JAYEM",
    title: "JAYEM",
  },
  {
    id: 6,
    src: "/domestic-image/MITSUBA.jpg",
    alt: "MITSUBA",
    title: "MITSUBA",
  },
  {
    id: 7,
    src: "/domestic-image/PARACOAT.jpg",
    alt: "PARACOAT",
    title: "PARACOAT",
  },
  {
    id: 8,
    src: "/domestic-image/VIRGROUP.jpg",
    alt: "VIR GROUP",
    title: "VIR GROUP",
  },


  {
    id: 9,
    src: "/domestic-image/AUTOLEK.jpg",
    alt: "AUTO LEK",
    title: "AUTO LEK",
  },
  {
    id: 10,
    src: "/domestic-image/MITSUBA.jpg",
    alt: "KLM LABORATORIES PVT.LTD.",
    title: "KLM LABORATORIES PVT.LTD.",
  },
  {
    id: 11,
    src: "/domestic-image/KLMLABORATORIESPVT.LTD..jpg",
    alt: "PARACOAT",
    title: "PARACOAT",
  },
  {
    id: 12,
    src: "/domestic-image/AURBINDO.jpg",
    alt: "AUROBINDO",
    title: "AUROBINDO",
  },


  {
    id: 13,
    src: "/domestic-image/GARDEX.jpg",
    alt: "GARDEX",
    title: "GARDEX",
  },
  {
    id: 14,
    src: "/domestic-image/SONACOMSTAR.jpg",
    alt: "SONA COMSTAR",
    title: "SONA COMSTAR",
  },
  {
    id: 15,
    src: "/domestic-image/CANON.jpg",
    alt: "CANON",
    title: "CANON",
  },
  {
    id: 16,
    src: "/domestic-image/RAMSONS.jpg",
    alt: "RAMSONS",
    title: "RAMSONS",
  },
  {
    id: 17,
    src: "/domestic-image/ITA.jpg",
    alt: "ITA",
    title: "ITA",
  },
  {
    id: 18,
    src: "/domestic-image/Ministry of Food Processing Industries.jpeg",
    alt: "Ministry of Food Processing Industries",
    title: "Ministry of Food Processing Industries",
  },
  {
    id: 19,
    src: "/domestic-image/apeda.jpeg",
    alt: "BHARATI",
    title: "BHARATI",
  },
  {
    id: 20,
    src: "/domestic-image/shiv-vilas.jpeg",
    alt: "IFEMA Madrid",
    title: "IFEMA Madrid",
  },

];

const DomesticPortfolio = () => {
  return (
    <div className="mt-28 container mx-auto px-4 pb-10">
      <h1 className="text-center font-bold text-3xl mb-8">
        All Domestic Portfolio Images
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DomesticPortfolio;
