import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import DotDotBubaleAnimation from "./3D_Animation/DotDotBubaleAnimation";

const PopularDestinations = ({destinations, title, content}) => {

  const imageHoverVariants = {
    hover: {
      scale: 1.5,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative bg-gradient-to-b from-indigo-100 via-white to-pink-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background SVG Animation */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#c7d2fe"
          fillOpacity="0.3"
          d="M0,64L48,58.7C96,53,192,43,288,64C384,85,480,139,576,165.3C672,192,768,192,864,176C960,160,1056,128,1152,101.3C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>

      <div className="relative max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.8,
          }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500">
              {title}
            </span>
          </h2>
          <p className="text-lg md:text-xl italic text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {content}
          </p>
        </motion.div>

        {/* Image Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-stretch">
          {/* Left Large Image */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg group h-[550px]"
            whileHover="hover"
          >
            <motion.img
              src={destinations[0].image}
              alt={destinations[0].name}
              className="w-full h-full object-cover"
              variants={imageHoverVariants}
              initial={{ scale: 1 }}
              whileHover={{scale: 1.5}}
              animate={{scale: 1}}
              transition={{duration: 0.5, ease: 'easeInOut'}}
            />
            <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-10">
              {destinations[0].name}
            </h3>
          </motion.div>

          {/* Right Two Smaller Images */}
          <div className="flex flex-col justify-between">
            {[destinations[1], destinations[2]].map((item, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg group h-[270px]"
                whileHover="hover"
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-10">
                  {item.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <DotDotBubaleAnimation />
    </div>
  );
};

export default PopularDestinations;
