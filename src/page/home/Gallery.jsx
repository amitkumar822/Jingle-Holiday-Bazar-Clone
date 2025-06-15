import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [activeRegion, setActiveRegion] = useState("EAST INDIA");

  const animationVariants = useMemo(
    () => ({
      fadeUp: {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
        }),
      },
      zoomIn: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (i) => ({
          opacity: 1,
          scale: 1,
          transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
        }),
      },
      slideLeft: {
        hidden: { opacity: 0, x: 50 },
        visible: (i) => ({
          opacity: 1,
          x: 0,
          transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
        }),
      },
    }),
    []
  );

  const getAnimationType = (index) => {
    const types = ["fadeUp", "zoomIn", "slideLeft"];
    return types[index % types.length];
  };

  return (
    <div className="relative px-6 py-16 min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] overflow-hidden">

      {/* Animated SVG Background */}
      <svg
        className="absolute -top-20 left-0 w-full opacity-10 animate-pulse"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          fill="#90cdf4"
          fillOpacity="1"
          d="M0,160L80,165.3C160,171,320,181,480,165.3C640,149,800,107,960,106.7C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>

      {/* Title & Description */}
      <div className="text-center z-10 relative mb-10">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 drop-shadow-md mb-2">
          Gallery
        </h2>
        <p className="text-md italic text-gray-500">
          At Jingle Holiday Bazar - All Over India Destination Gallery
        </p>
      </div>

      {/* Region Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 z-10 relative">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            className={`px-5 py-1 cursor-pointer rounded-full border transition-all duration-300 text-sm font-semibold ${
              activeRegion === region
                ? "bg-blue-100 text-blue-600 border-blue-300 shadow-sm"
                : "text-gray-500 border-gray-300 hover:text-blue-400 hover:border-blue-400"
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeRegion}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 z-10 relative"
        >
          {(dummyData[activeRegion] || []).map((item, index) => {
            const animationType = getAnimationType(index);
            const variants = animationVariants[animationType];

            return (
              <motion.div
                key={index}
                custom={index}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ scale: 1.04 }}
                className="rounded-2xl shadow-lg overflow-hidden bg-white backdrop-blur-sm bg-opacity-60 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative group">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    className="h-60 w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-2 font-semibold">
                    {item.title}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}


const regions = ["NORTH INDIA", "EAST INDIA", "WEST INDIA", "SOUTH INDIA"];

const dummyData = {
  "NORTH INDIA": [
    {
      title: "New Delhi",
      image: "https://jingleholidaybazar.com/images/Red-Fort.jpg",
    },
    {
      title: "Shimla",
      image: "https://jingleholidaybazar.com/images/Shimla1.jpg",
    },
    {
      title: "Agra",
      image: "https://jingleholidaybazar.com/images/Taj-mahal.jpg",
    },
    {
      title: "Kullu and Manali",
      image: "https://jingleholidaybazar.com/images/Manali1-1.jpg",
    },
    {
      title: "Mussoorie and Dehradun",
      image: "https://jingleholidaybazar.com/images/Mussoorie1.jpg",
    },
    {
      title: "Dalhousie",
      image: "https://jingleholidaybazar.com/images/Khajjiar.jpg",
    },
    {
      title: "Jim Corbett National Park",
      image: "https://jingleholidaybazar.com/images/Jim-Corbett.jpg",
    },
    {
      title: "Amritsar",
      image:
        "https://jingleholidaybazar.com/images/Jallianwala-Bagh_1000X650_220618.jpg",
    },
  ],
  "EAST INDIA": [
    {
      title: "Kaziranga National Park",
      image: "https://jingleholidaybazar.com/images/Kaziranga.jpg",
    },
    {
      title: "Tsomgo Lake",
      image: "https://jingleholidaybazar.com/images/Tsomgo-Lake.jpg",
    },
    {
      title: "Zero Valley",
      image: "https://jingleholidaybazar.com/images/Ziro-Valley.jpg",
    },
    {
      title: "Goechal",
      image: "https://jingleholidaybazar.com/images/Goechala.jpg",
    },
    {
      title: "Cherrapunji",
      image: "https://jingleholidaybazar.com/images/Cherrapunji.jpg",
    },
    {
      title: "Pelling",
      image: "https://jingleholidaybazar.com/images/Pelling.jpg",
    },
    {
      title: "Gangtok",
      image: "https://jingleholidaybazar.com/images/Gangtok.jpg",
    },
    {
      title: "Gorichen Peak",
      image: "https://jingleholidaybazar.com/images/Gorichen-Peak.jpg",
    },
  ],
  "WEST INDIA": [
    {
      title: "Goa",
      image: "https://jingleholidaybazar.com/images/Goa-beaches.jpg",
    },
    {
      title: "Mumbai",
      image: "https://jingleholidaybazar.com/images/2021006-1895800595.jpg",
    },
    {
      title: "Mahabaleshwar",
      image:
        "https://jingleholidaybazar.com/images/1539784236_1514009275_mahabaleshwar.jpg",
    },
    {
      title: "Panchgani",
      image:
        "https://jingleholidaybazar.com/images/Sydney_point_panchghani.jpg",
    },
    {
      title: "Khandal",
      image: "https://jingleholidaybazar.com/images/Karla-Caves.jpg",
    },
    {
      title: "Lonavala",
      image:
        "https://jingleholidaybazar.com/images/rajmachi-fort-trek-lonavala.jpg",
    },
    {
      title: "Dandeli National Park",
      image: "https://jingleholidaybazar.com/images/dandeli-wildlife.jpg",
    },
    {
      title: "Shirdi",
      image: "https://jingleholidaybazar.com/images/SHIRDI.jpg",
    },
  ],
  "SOUTH INDIA": [
    {
      title: "Bangalore",
      image: "https://jingleholidaybazar.com/images/Bangalore-Karnataka-1.jpg",
    },
    {
      title: "Coorg",
      image: "https://jingleholidaybazar.com/images/Coorg-1.jpg",
    },
    {
      title: "Chennai",
      image: "https://jingleholidaybazar.com/images/Chennai-1.jpg",
    },
    {
      title: "Gokarma",
      image: "https://jingleholidaybazar.com/images/Gokarna-1.jpg",
    },
    {
      title: "Hampi",
      image: "https://jingleholidaybazar.com/images/Hampi-1.jpg",
    },
    {
      title: "Pondicherry",
      image: "https://jingleholidaybazar.com/images/Pondicherry-1.jpg",
    },
    {
      title: "Munnar",
      image: "https://jingleholidaybazar.com/images/Munnar-Kerala-1.jpg",
    },
    {
      title: "Kanyakumari",
      image: "https://jingleholidaybazar.com/images/Kanyakumari-1.jpg",
    },
  ],
};
