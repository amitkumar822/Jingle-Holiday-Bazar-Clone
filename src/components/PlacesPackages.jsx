import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiStar } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSectionPlacesPackages from "./3D_Animation/HeroSectionPlacesPackages";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const PlacesPackages = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Animation initialization
    const ctx = gsap.context(() => {
      // Section animations
      sectionRefs.current.forEach((el, index) => {
        if (el) {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.1,
            ease: "back.out(1.7)",
          });
        }
      });

      // Mark loading complete after slight delay
      const timer = setTimeout(() => setIsLoading(false), 500);
      return () => clearTimeout(timer);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-[#000428] to-[#004e92] text-white min-h-screen">
      <HeroSectionPlacesPackages />

      {/* Destinations Section */}
      <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-[#003671] to-[#004e92] text-white">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-16 relative inline-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Packages
            <svg
              className="absolute -bottom-2 left-0 w-full h-2 z-0"
              viewBox="0 0 200 20"
            >
              <path
                d="M0 10 Q 50 20, 100 10 T 200 10"
                fill="none"
                stroke="url(#underline-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="underline-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </motion.h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((place, index) => (
              <motion.div
                key={place.id}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-white/10"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center text-white">
                    <FiMapPin className="mr-1" />
                    <span>{place.location}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{place.name}</h3>
                  <p className="text-gray-300 mb-4">{place.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-yellow-400">
                      <FiStar className="mr-1" />
                      <span className="text-white font-medium">
                        {place.rating}
                      </span>
                    </div>
                    <div className="text-lg font-bold text-indigo-300">
                      ₹{place.price.toLocaleString()}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacesPackages;

const destinations = [
  {
    id: 1,
    name: "Golden Triangle Tour",
    location: "Delhi, Agra, Jaipur",
    description:
      "Explore India's most iconic landmarks including the Taj Mahal",
    rating: 4.9,
    price: 25000,
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
  },
  {
    id: 2,
    name: "Goa Beach Package",
    location: "Goa",
    description: "Relax on pristine beaches with luxury resorts",
    rating: 4.7,
    price: 18000,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
  },
  {
    id: 3,
    name: "Kerala Backwaters",
    location: "Alleppey",
    description: "Houseboat experience through serene backwaters",
    rating: 4.8,
    price: 22000,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
  },
  {
    id: 4,
    name: "Ladakh Adventure",
    location: "Leh, Ladakh",
    description: "Stunning mountains and monasteries in India's high desert",
    rating: 4.9,
    price: 30000,
    image:
      "https://img.freepik.com/free-photo/male-staring-breathtaking-view-snowy-carpathian-mountains-romania_181624-13603.jpg?ga=GA1.1.739997743.1749990154&semt=ais_hybrid&w=740",
  },
  {
    id: 5,
    name: "Andaman Islands",
    location: "Port Blair, Havelock",
    description: "Tropical island escape with crystal clear waters",
    rating: 4.8,
    price: 27000,
    image:
      "https://img.freepik.com/premium-photo/high-angle-view-woman-swimming-sea_1048944-6341280.jpg?ga=GA1.1.739997743.1749990154&semt=ais_hybrid&w=740",
  },
  {
    id: 6,
    name: "Rajasthan Heritage Tour",
    location: "Udaipur, Jodhpur, Jaisalmer",
    description: "Palaces, forts and desert safaris in royal Rajasthan",
    rating: 4.7,
    price: 24000,
    image:
      "https://img.freepik.com/premium-photo/yueyaquan-scenic-area-mingsha-mountain-dunhuang-city-gansu-province-china_224044-6.jpg?ga=GA1.1.739997743.1749990154&semt=ais_hybrid&w=740",
  },
  {
    id: 7,
    name: "Paris City Lights",
    location: "Paris, France",
    description: "Eiffel Tower, Seine River cruise and historic charm",
    rating: 4.9,
    price: 90000,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    id: 8,
    name: "Bali Island Escape",
    location: "Bali, Indonesia",
    description: "Tropical paradise with beaches, temples, and rice terraces",
    rating: 4.8,
    price: 75000,
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  },
  {
    id: 9,
    name: "Swiss Alps Tour",
    location: "Interlaken, Lucerne, Zurich",
    description: "Snowy mountains, lakes, and scenic train rides",
    rating: 4.9,
    price: 120000,
    image:
      "https://img.freepik.com/premium-photo/rear-view-woman-crouching-rock-while-holding-flag-by-lake-against-sky_1048944-26180754.jpg?ga=GA1.1.739997743.1749990154&semt=ais_hybrid&w=740",
  },
];
