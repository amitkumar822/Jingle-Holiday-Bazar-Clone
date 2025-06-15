// import { useEffect, useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import BackgroundCanvas from "@/components/3D_Animation/BackgroundCanvas.jsx";

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
  ],
};

// export default function Gallery() {
//   const [activeRegion, setActiveRegion] = useState("EAST INDIA");

//   // Animation variants
//   const animationVariants = {
//     fadeUp: {
//       hidden: { opacity: 0, y: 40 },
//       visible: (i) => ({
//         opacity: 1,
//         y: 0,
//         transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
//       }),
//     },
//     zoomIn: {
//       hidden: { opacity: 0, scale: 0.8 },
//       visible: (i) => ({
//         opacity: 1,
//         scale: 1,
//         transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
//       }),
//     },
//     slideLeft: {
//       hidden: { opacity: 0, x: 50 },
//       visible: (i) => ({
//         opacity: 1,
//         x: 0,
//         transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
//       }),
//     },
//   };

//   // Choose animation type per index
//   const getAnimationType = (index) => {
//     const types = ["fadeUp", "zoomIn", "slideLeft"];
//     return types[index % types.length]; // Rotate through animations
//   };

//   return (
//     <div className="relative px-4 py-10 overflow-hidden min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-gray-900 text-white">
//         {/* 3D Background */}
//     <BackgroundCanvas />


//       <h2 className="text-3xl font-bold text-center mb-1">Gallery</h2>
//       <p className="text-center italic text-gray-600 mb-6">
//         At Jingle Holiday Bazar All Over India Destination Gallery
//       </p>

//       {/* Region Tabs */}
//       <div className="flex justify-start space-x-4 mb-8 border-b pb-2">
//         {regions.map((region) => (
//           <button
//             key={region}
//             onClick={() => setActiveRegion(region)}
//             className={`px-4 py-1 rounded-t-md font-medium ${
//               activeRegion === region
//                 ? "text-blue-700 border-b-2 border-blue-700"
//                 : "text-gray-500"
//             }`}
//           >
//             {region}
//           </button>
//         ))}
//       </div>

//       {/* Card Grid */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeRegion}
//           initial="hidden"
//           animate="visible"
//           exit="hidden"
//           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//           {dummyData[activeRegion]?.map((item, index) => {
//             const animationType = getAnimationType(index);
//             const variants = animationVariants[animationType];

//             return (
//               <motion.div
//                 key={index}
//                 custom={index}
//                 variants={variants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="hidden"
//                 className="rounded-lg shadow overflow-hidden"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <div className="relative group">
//                   <motion.img
//                     src={item.image}
//                     alt={item.title}
//                     initial={{ scale: 1 }}
//                     whileHover={{ scale: 1.2 }}
//                     animate={{ scale: 1 }}
//                     transition={{ duration: 0.5, ease: "easeInOut" }}
//                     className="h-60 w-full object-cover"
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-teal-500 to-indigo-800 text-white text-center py-2 font-semibold">
//                     {item.title}
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }


import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import BackgroundCanvas from './BackgroundCanvas'; // Ensure this exists

export default function Gallery() {
  const [activeRegion, setActiveRegion] = useState("EAST INDIA");

  // Memoize animation variants
  const animationVariants = useMemo(() => ({
    fadeUp: {
      hidden: { opacity: 0, y: 40 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
      }),
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: (i) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
      }),
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
      }),
    },
  }), []);

  const getAnimationType = (index) => {
    const types = ["fadeUp", "zoomIn", "slideLeft"];
    return types[index % types.length];
  };

  return (
    <div className="relative px-4 py-10 overflow-hidden min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-gray-900 text-white">
      {/* <BackgroundCanvas /> */}

      <h2 className="text-3xl font-bold text-center mb-1">Gallery</h2>
      <p className="text-center italic text-gray-400 mb-6">
        At Jingle Holiday Bazar - All Over India Destination Gallery
      </p>

      {/* Region Tabs */}
      <div className="flex flex-wrap justify-start gap-2 sm:gap-4 mb-8 border-b pb-2" role="tablist">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            role="tab"
            aria-pressed={activeRegion === region}
            className={`px-4 py-1 rounded-t-md font-medium transition-all duration-300 ${
              activeRegion === region
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-400 hover:text-blue-400"
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
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
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
                className="rounded-lg shadow-lg overflow-hidden transition-transform"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative group">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="h-60 w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-teal-500 to-indigo-800 text-white text-center py-2 font-semibold">
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
