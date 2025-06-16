import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";


const destinations = [
  {
    title: "Goa",
    description:
      "Goa is India's smallest state by area and is known for its beautiful beaches, vibrant nightlife, and Portuguese heritage.",
    popularPlaces: [
      "Baga Beach",
      "Fort Aguada",
      "Anjuna Beach",
      "Dudhsagar Falls",
    ],
    image:
      "https://img.freepik.com/free-photo/pretty-hipster-woman-walking-beach-dancing-listening-music-headphones-stylish-colorful-outfit-sunny-summer-tropical-vacation-wearing-accessories-cap-sunglasses-smiling-having-fun_285396-4159.jpg?t=st=1749993828~exp=1749997428~hmac=fdb483185f8801b3a616063bc68473e685d5a85b8e34fb7e85004105fb0482c1&w=1380",
  },
  {
    title: "Manali",
    description:
      "Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state, known for adventure sports and breathtaking scenery.",
    popularPlaces: [
      "Solang Valley",
      "Rohtang Pass",
      "Old Manali",
      "Hidimba Temple",
    ],
    image:
      "https://img.freepik.com/free-photo/young-woman-hiker-taking-photo-with-smartphone-mountains-peak-winter_335224-427.jpg?t=st=1749993916~exp=1749997516~hmac=48fc9efc3ee0b1cb089d295731c3928fe883163e51d580bb4effd69e1162cfc7&w=1800",
  },
  {
    title: "Rajasthan",
    description:
      "Rajasthan is famous for its majestic forts, vibrant culture, desert landscapes, and royal palaces.",
    popularPlaces: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
    image:
      "https://img.freepik.com/free-photo/group-people-sitting-top-dune_23-2148194015.jpg?ga=GA1.1.739997743.1749990154&semt=ais_hybrid&w=740",
  },
  {
    title: "Jammu & Kashmir",
    description:
      "Often referred to as 'Heaven on Earth', Kashmir offers picturesque valleys, serene lakes, and snow-capped mountains.",
    popularPlaces: ["Srinagar", "Gulmarg", "Pahalgam", "Dal Lake"],
    image:
      "https://img.freepik.com/free-photo/tourists-taking-photos-beautiful-scenery-skiing-around-deogyusan_335224-426.jpg?ga=GA1.1.739997743.1749990154&semt=ais_hybrid&w=740",
  },
  {
    title: "Kerala",
    description:
      "Known as 'God's Own Country', Kerala is famous for its tranquil backwaters, lush greenery, and rich cultural heritage.",
    popularPlaces: ["Alleppey", "Munnar", "Kochi", "Wayanad"],
    image:
      "https://img.freepik.com/free-photo/photorealistic-scene-wild-elephants_23-2151436891.jpg?ga=GA1.1.739997743.1749990154&semt=ais_hybrid&w=740",
  },
  {
    title: "Andaman & Nicobar Islands",
    description:
      "A group of islands known for their pristine beaches, coral reefs, and tropical rainforests, perfect for nature lovers and divers.",
    popularPlaces: ["Havelock Island", "Neil Island", "Cellular Jail", "Radhanagar Beach"],
    image:
      "https://img.freepik.com/premium-photo/aerial-drone-view-beautiful-caribbean-tropical-island-cayo-levantado-beach-with-palms-bacardi-island-dominican-republic-vacation-background_136401-3215.jpg?ga=GA1.1.739997743.1749990154&semt=ais_hybrid&w=740",
  },
];


const DomesticTravel = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-sky-100 via-indigo-100 to-purple-100 text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative w-full h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          className="relative z-10 text-white text-center px-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover India
          </h1>
          <p className="text-lg max-w-xl mx-auto">
            Travel through diverse cultures, landscapes, and experiences across
            the Indian subcontinent.
          </p>
        </motion.div>
      </div>

      {/* Explore Domestic Section */}
      {/* <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore India's Top Destinations
        </motion.h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          India is a treasure trove of travel experiences – from tranquil
          beaches and mighty mountains to historic monuments and spiritual
          getaways. Each region offers a unique story waiting to be explored.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              className="bg-white rounded-xl shadow-md overflow-hidden group relative border border-gray-200 hover:shadow-2xl"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-indigo-700">
                  {dest.title}
                </h3>
                <p className="text-gray-600 mb-4 italic">{dest.description}</p>
                <div className="text-sm">
                  <strong className="text-gray-700">Popular Places:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                    {dest.popularPlaces.map((place, i) => (
                      <li key={i}>{place}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
            </motion.div>
          ))}
        </div>
      </div> */}

      <div className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-[#e0f7fa] via-[#f3e5f5] to-[#fce4ec]">
        {/* SVG Wave Background */}
        <svg
          className="absolute top-0 left-0 w-full h-40 -z-10"
          viewBox="0 0 1440 320"
        >
          <path
            fill="url(#gradient)"
            fillOpacity="1"
            d="M0,96L60,122.7C120,149,240,203,360,202.7C480,203,600,149,720,144C840,139,960,181,1080,170.7C1200,160,1320,96,1380,64L1440,32V0H0Z"
          ></path>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#6a11cb" />
              <stop offset="100%" stopColor="#2575fc" />
            </linearGradient>
          </defs>
        </svg>

        {/* Section Title */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 mb-4 tracking-wide"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="wave-animation inline-block">
            Explore India's Top Destinations
          </span>
        </motion.h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-16 text-lg">
          From snow-capped mountains to serene backwaters, India offers travel
          experiences like no other. Discover the top places to make your
          journey unforgettable.
        </p>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              className="relative rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl hover:scale-105 transition-transform duration-500"
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
                  <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
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

        {/* Bottom Wave */}
        <svg
          className="absolute bottom-0 left-0 w-full h-40 -z-10 rotate-180"
          viewBox="0 0 1440 320"
        >
          <path
            fill="url(#gradient)"
            fillOpacity="1"
            d="M0,160L80,176C160,192,320,224,480,202.7C640,181,800,107,960,117.3C1120,128,1280,224,1360,266.7L1440,320V0H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default DomesticTravel;
