import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="relative bg-gradient-to-br from-[#e0eafc] via-[#cfdef3] to-[#f0f2f5] overflow-hidden text-gray-900">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb)`,
        }}
      >
        <div className="absolute inset-0 bg-opacity-30 bg-[rgba(0,0,0,0.3)]"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <div className="mt-2 text-lg">Home / About Us</div>
        </div>
      </div>

      {/* About Description */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">
          Jingle Holiday Bazar Pvt Ltd
        </h2>
        <p className="text-lg text-center text-gray-700 mb-6">
          <span className="text-red-500 font-bold">
            Jingle Holiday Bazar Pvt Ltd
          </span>{" "}
          is pleased to announce the opening of their first office in Ghaziabad.
          We specialize in hotel packages, pilgrimage tours, honeymoon trips,
          corporate tours, and more.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-800">
          <li>
            <FaCheckCircle className="inline mr-2 text-green-500" /> We offer
            daily tours
          </li>
          <li>
            <FaCheckCircle className="inline mr-2 text-green-500" /> Best price
            guarantee
          </li>
          <li>
            <FaCheckCircle className="inline mr-2 text-green-500" /> Never lose
            your deposit
          </li>
          <li>
            <FaCheckCircle className="inline mr-2 text-green-500" /> 5-star
            accommodations
          </li>
          <li>
            <FaCheckCircle className="inline mr-2 text-green-500" /> Handpicked
            hotels
          </li>
          <li>
            <FaCheckCircle className="inline mr-2 text-green-500" /> Special
            gifts & offers for you
          </li>
        </ul>
      </div>

      {/* Client Review Marquee */}
      <div className="relative py-12 bg-[#f9f9f9] overflow-hidden">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Client Reviews
        </h2>

        {/* Marquee Track */}
        <div className="relative w-full overflow-hidden group">
          <motion.div
            className="flex w-max space-x-6 px-4 animate-marquee group-hover:[animation-play-state:paused]"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...dummyClients, ...dummyClients].map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 2, rotateX: 2 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="group relative min-w-[250px] h-[17rem] max-w-xs overflow-hidden rounded-2xl shadow-2xl bg-white/10 backdrop-blur border border-white/20 hover:shadow-purple-300/30 hover:shadow-lg"
              >
                {/* Client Image */}
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-[14rem] object-cover z-10"
                />

                {/* Overlay Content */}
                <div className="absolute bottom-0 w-full p-4 bg-black/60 backdrop-blur-sm z-20 text-white">
                  <h3 className="text-lg font-bold">{client.name}</h3>
                  <p className="text-sm italic line-clamp-2">
                    {client.feedback}
                  </p>
                  <div className="flex gap-3 mt-3 text-white/70 group-hover:text-white text-sm">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                    <FaPinterestP />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const dummyClients = [
  {
    name: "Arvind Singh",
    feedback: "Professionalism, Quality, Responsiveness, Value",
    image: "https://jingleholidaybazar.com/images/Kamlesh%20Raval.jpeg",
  },
  {
    name: "Avadhesh Kumar Yadav",
    feedback: "Trip of Nainital arranged very well with minimum budget.",
    image: "https://jingleholidaybazar.com/images/arvind.jpeg",
  },
  {
    name: "Chandan Malhotra",
    feedback: "Great service and support during our family tour.",
    image: "https://jingleholidaybazar.com/images/Chandan%20Malhotra.jpeg",
  },
  {
    name: "Mukesh Kumar Jaiswal",
    feedback: "Good hotel selection and transparent pricing.",
    image: "https://jingleholidaybazar.com/images/Sandeep%20koli.jpeg",
  },
];
