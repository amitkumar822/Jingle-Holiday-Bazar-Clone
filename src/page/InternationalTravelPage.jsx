import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const internationalDestinations = [
  {
    title: "Paris, France",
    description:
      "Known as the City of Light, Paris is renowned for its art, fashion, gastronomy, and culture.",
    popularPlaces: ["Eiffel Tower", "Louvre Museum", "Notre-Dame", "Montmartre"],
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Tokyo, Japan",
    description:
      "Tokyo is a vibrant city blending ultramodern and traditional, from neon-lit skyscrapers to historic temples.",
    popularPlaces: ["Shibuya", "Tokyo Tower", "Asakusa Temple", "Mount Fuji"],
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "New York, USA",
    description:
      "The city that never sleeps, NYC offers iconic landmarks, diverse culture, and endless entertainment.",
    popularPlaces: ["Statue of Liberty", "Times Square", "Central Park", "Empire State Building"],
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Rome, Italy",
    description:
      "Rome is a sprawling city rich in history, architecture, and cuisine, home to the ancient Roman Empire.",
    popularPlaces: ["Colosseum", "Vatican City", "Trevi Fountain", "Pantheon"],
    image:
      "https://img.freepik.com/premium-photo/woman-outdoor-cafe-near-coliseum-rome-italy_506452-14276.jpg?ga=GA1.1.739997743.1749990154&semt=ais_hybrid&w=740",
  },
  {
    title: "Bali, Indonesia",
    description:
      "Bali is a tropical paradise known for its forested volcanic mountains, beaches, coral reefs, and temples.",
    popularPlaces: ["Ubud", "Seminyak", "Tanah Lot", "Tegallalang Rice Terrace"],
    image:
      "https://img.freepik.com/premium-photo/peaceful-atmosphere-early-morning-sunrise-pura-ulun-danu-temple-iconic-bali-lake-bratan-bali-indonesia_41775-547.jpg?ga=GA1.1.739997743.1749990154&semt=ais_hybrid&w=740",
  },
  {
    title: "Cape Town, South Africa",
    description:
      "Cape Town is a stunning coastal city known for its Table Mountain views, vibrant culture, and rich history.",
    popularPlaces: ["Table Mountain", "Robben Island", "Boulders Beach", "Cape Point"],
    image:
      "https://img.freepik.com/premium-photo/jupiter-inlet-lighthouse-from-across-water-jupiter-florida_1048944-29668177.jpg?ga=GA1.1.739997743.1749990154&semt=ais_hybrid&w=740",
  },
];


export default function InternationalTravel() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="relative bg-gradient-to-bl from-[#f0f8ff] via-[#ffe0f0] to-[#e0f7fa] text-gray-800 overflow-hidden">
      <div
        className="relative w-full h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/view-breathtaking-beach-nature-landscape_23-2151682888.jpg?ga=GA1.1.739997743.1749990154&semt=ais_hybrid&w=740')",
        }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]"></div>
        <motion.div
          className="relative z-10 text-white text-center px-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover the World
          </h1>
          <p className="text-lg max-w-xl mx-auto">
            Embark on unforgettable journeys to the most iconic and breathtaking destinations across the globe.
          </p>
        </motion.div>
      </div>

      <div className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-[#f0f9ff] via-[#fff0f5] to-[#fef9e7]">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500 mb-4 tracking-wide"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Explore International Destinations
        </motion.h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-16 text-lg">
          From romantic European cities to exotic Asian escapes, find your perfect destination and let your adventure begin.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {internationalDestinations.map((dest, index) => (
            <motion.div
              key={index}
              className="relative rounded-3xl p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="bg-white rounded-3xl h-full overflow-hidden backdrop-blur-lg">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-48 object-cover rounded-t-3xl"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                    {dest.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm italic">
                    {dest.description}
                  </p>
                  <div className="text-sm">
                    <strong className="text-gray-800">Popular Spots:</strong>
                    <ul className="list-disc pl-4 mt-2 text-gray-600 space-y-1">
                      {dest.popularPlaces.map((place, i) => (
                        <li key={i}>{place}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
