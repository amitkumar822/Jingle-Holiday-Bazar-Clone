import HeroSection from '@/components/HeroSection'
import Services from '@/components/Services'
import React from 'react'
import PopularDestinationsIndia from './PopularDestinationsIndia'
import PopularDestinationsInternational from './PopularDestinationsInternational'
import Gallery from './Gallery'
import FeaturedTours from '@/components/FeaturedTours'

function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <PopularDestinationsIndia />
      <PopularDestinationsInternational />
      <Gallery />
      <FeaturedTours />
    </div>
  )
}

export default Home