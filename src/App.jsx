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
import Contact from './page/ContactUs';
import CurosrPointer from './utils/CurosrPointer';
import { Outlet } from 'react-router-dom';
import ScrollToTopButton from './utils/ScrollToTopButton';
import ScrollToTop from './utils/ScrollToTopOnMount';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <CurosrPointer />
      <Footer />

       
      <ScrollToTopButton />
      <ScrollToTop />
    </div>
  )
}

export default App