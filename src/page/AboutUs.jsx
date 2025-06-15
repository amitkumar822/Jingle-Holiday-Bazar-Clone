import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaStar,
} from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function AboutUs() {
  return (
    <div className="relative bg-gradient-to-br from-[#e0eafc] via-[#cfdef3] to-[#f0f2f5] overflow-hidden text-gray-900">
      {/* Hero Section with Parallax Effect */}
      <motion.div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          className="relative z-10 text-center text-white px-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <motion.div
            className="mt-2 text-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Home / About Us
          </motion.div>
        </motion.div>
      </motion.div>

      {/* About Description */}
      <motion.div
        className="max-w-5xl mx-auto px-6 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          variants={itemVariants}
        >
          Jingle Holiday Bazar Pvt Ltd
        </motion.h2>

        <motion.p
          className="text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          <span className="text-red-500 font-bold">
            Jingle Holiday Bazar Pvt Ltd
          </span>{" "}
          is pleased to announce the opening of their first office in Ghaziabad.
          We specialize in hotel packages, pilgrimage tours, honeymoon trips,
          corporate tours, and more.
        </motion.p>

        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg text-gray-800 max-w-4xl mx-auto"
          variants={containerVariants}
        >
          {[
            "We offer daily tours",
            "Best price guarantee",
            "Never lose your deposit",
            "5-star accommodations",
            "Handpicked hotels",
            "Special gifts & offers for you",
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <FaCheckCircle className="text-green-500 text-xl mr-3 flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Client Review Section */}

      {/* Client Review Section */}
      <div className="relative py-16 overflow-hidden">

        <motion.h2
          className="text-3xl font-bold text-center mb-12 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative w-full overflow-hidden py-6 z-10">
          <motion.div
            className="flex gap-8 px-4"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {[...dummyClients, ...dummyClients].map((client, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] max-w-sm"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <motion.div
                  className="relative h-full bg-white rounded-xl shadow-lg overflow-hidden group"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Client Image */}
                  <div className="h-48 overflow-hidden">
                    <motion.img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{client.name}</h3>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < client.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 italic">
                      "{client.feedback}"
                    </p>

                    <motion.div
                      className="flex space-x-4 text-gray-400"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.a
                        href="#"
                        whileHover={{ y: -2, color: "#3b5998" }}
                        className="transition-colors"
                      >
                        <FaFacebookF />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ y: -2, color: "#E1306C" }}
                        className="transition-colors"
                      >
                        <FaInstagram />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ y: -2, color: "#1DA1F2" }}
                        className="transition-colors"
                      >
                        <FaTwitter />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Decorative Element */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
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
