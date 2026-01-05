import React from "react";

const portfolioItems = [
  {
    id: 1,
    src: "/internation-image/INNOVARUBBERSVIR.jpg",
    alt: "INNOVA RUBBERS , VIR",
    title: "INNOVA RUBBERS , VIR",
  },
  {
    id: 2,
    src: "/Whatmakesstridesbest.....webp",
    alt: "TVS SUNDARAM CLAYTON",
    title: "TVS SUNDARAM CLAYTON",
  },
  {
    id: 3,
    src: "/internation-image/BEXIMCOPHARMA.jpg",
    alt: "BEXIMCO PHARMA",
    title: "BEXIMCO PHARMA",
  },
  {
    id: 4,
    src: "/internation-image/TUBEINVESTMENTSOFINDIALIMITED.jpg",
    alt: "TUBE INVESTMENTS OF INDIA LIMITED",
    title: "TUBE INVESTMENTS OF INDIA LIMITED",
  },

  {
    id: 5,
    src: "/internation-image/_ESCORTSKUBOTALIMITED.jpg",
    alt: "ESCORTS KUBOTA LIMITED ",
    title: "ESCORTS KUBOTA LIMITED ",
  },
  {
    id: 6,
    src: "/internation-image/ACCURUB.jpg",
    alt: "ACCURUB",
    title: "ACCURUB",
  },
  {
    id: 7,
    src: "/internation-image/STYLAM.jpg",
    alt: "STYLAM",
    title: "STYLAM",
  },
  {
    id: 8,
    src: "/internation-image/ACCURUB.jpg",
    alt: "FRESH DESK",
    title: "FRESH DESK",
  },

  {
    id: 9,
    src: "/internation-image/GOA.jpg",
    alt: "GOA",
    title: "GOA",
  },
];

const InternationalPortfolio = () => {
  return (
    <div className="mt-28 container mx-auto px-4 pb-10">
      <h1 className="text-center font-bold text-3xl mb-8">
        All International Portfolio Images
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

export default InternationalPortfolio;
