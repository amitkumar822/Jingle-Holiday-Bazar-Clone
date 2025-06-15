import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './page/home/Navbar'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import PopularDestinationsIndia from './page/home/PopularDestinationsIndia';
import PopularDestinationsInternational from './page/home/PopularDestinationsInternational';
import Gallery from './page/home/Gallery';
import FeaturedTours from './components/FeaturedTours';
import Footer from './page/home/Footer';
import Contact from './page/Contact';
import CurosrPointer from './utils/CurosrPointer';
import AboutUs from './page/AboutUs';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      {/* <HeroSection />
      <Services />
      <PopularDestinationsIndia />
      <PopularDestinationsInternational />
      <Gallery />
      <FeaturedTours /> */}

      {/* <Contact /> */}
      <AboutUs />
      <CurosrPointer />
      <Footer />
    </div>
  )
}

export default App