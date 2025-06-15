"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to Jingle Holiday Bazar Pvt Ltd.",
      subtitle: "The Badrinath",
      image: "https://jingleholidaybazar.com/images/badrinath-banner.webp",
    },
    {
      title: "Welcome to Jingle Holiday Bazar Pvt Ltd.",
      subtitle: "Rameshwaram",
      image: "https://jingleholidaybazar.com/images/rameshwarm-banner.webp",
    },
    {
      title: "Welcome to Jingle Holiday Bazar Pvt Ltd.",
      subtitle: "The Pink City Of jaipur",
      image: "https://jingleholidaybazar.com/images/jaipur.webp",
    },
    {
      title: "Welcome to Jingle Holiday Bazar Pvt Ltd.  ",
      subtitle: "Himalayas Mountain range in Asia",
      image:
        "https://jingleholidaybazar.com/images/himalay.webp",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      {/* Hero Section with Sliding Window */}
      <section id="home" className="relative pt-16">
        <div className="relative md:h-[41rem] h-[46rem] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slides[currentSlide].image})`,
              }}
            >
              <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
                <div className="text-center px-4">
                  <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-3xl md:text-6xl font-bold text-white md:mb-4 mb-16"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-xl md:text-2xl text-white mb-8"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-8 py-3 rounded-full text-lg">
                      Contact Us
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-white" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Manual Navigation Arrows */}
          <button
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + slides.length) % slides.length
              )
            }
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % slides.length)
            }
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
