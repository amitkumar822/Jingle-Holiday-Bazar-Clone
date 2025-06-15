import React from "react";
import { motion } from "framer-motion";
import WaveAnimatedSvg from "./3D_Animation/WaveAnimatedSvg";

function FeaturedTours() {
  return (
    <div className="relative bg-gradient-to-br from-[#e0f7fa] to-[#e1bee7] pb-24">
      {/* Animated SVG background */}
      <WaveAnimatedSvg />

      {/* Header Section */}
      {/* Header Section */}
<div className="flex flex-col justify-center items-center text-center px-6 pt-24">
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 drop-shadow-md mb-4 z-10"
  >
    FEATURED TOURS IN INDIA
  </motion.h1>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="text-lg md:text-xl text-gray-800 max-w-3xl z-10 font-light tracking-wide leading-relaxed"
  >
    India is a vibrant land of startling contrasts where both the traditional and modern worlds meet. 
    The world's seventh largest tourist nation by area and the second largest in terms of population.
  </motion.p>
</div>


      {/* Tour Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mt-16 px-6">
        {/* Large Left Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
        >
          <img
            className="h-[22rem] w-full object-cover"
            src={data[0].url}
            alt={data[0].title}
          />
          <div className="p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              {data[0].title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">{data[0].des}</p>
            <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
              {data[0].btn}
            </span>
          </div>
        </motion.div>

        {/* Right Smaller Cards */}
        <div className="flex flex-col gap-10">
          {data.slice(1).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col md:flex-row bg-white/90 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full md:w-[45%] h-64 object-cover"
              />
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.des}</p>
                </div>
                <span className="text-blue-600 font-medium cursor-pointer hover:underline mt-4">
                  {item.btn}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedTours;

const data = [
  {
    title: "Week At Thiksey Monastery",
    des: "This 12-storey complex hosts over 500 monks and is considered to be one of the most beautiful Buddhist monasteries in all of Ladakh. For Ladakh sightseeing, Thiksey Gompa will enlighten you with knowledge about some of the Buddhist culture, lifestyle, scriptures, statues and even paintings.",
    btn: "WhatsApp Now More Details",
    url: "https://jingleholidaybazar.com/images/Leh03.jpg",
  },
  {
    title: "Week At Solang Valley, Manali",
    des: "A mini valley located at about 8400 feet above sea level, Solang Nala is a short drive away from Manali. If you are looking for snow-based activities and sports, winters are the best time to visit",
    btn: "Contact",
    url: "https://jingleholidaybazar.com/images/Solang-Valley.jpg",
  },
  {
    title: "Week At Beach in Goa",
    des: "Goa is the smallest state in India, Goa is synonymous to many captivating things that are best showcase of a life without stress and worries. The multitude of beaches in Goa",
    btn: "Contact",
    url: "https://jingleholidaybazar.com/images/india-goa-best-beaches-vagator-beach.jpg",
  },
];
