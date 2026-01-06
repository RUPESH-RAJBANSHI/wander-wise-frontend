import React from 'react'
import Navbar from '../components/landingComponents/Navbar'
import Hero from '../components/landingComponents/Hero'
import Features from '../components/landingComponents/Features'
import Contact from '../components/landingComponents/Contact'
import Footer from '../components/landingComponents/Footer'
import Banner from '../components/landingComponents/Banner'
import FamousTrips from '../components/landingComponents/FamousTrips'
import About from '../components/landingComponents/About'
import Reviews from '../components/landingComponents/Review'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <FamousTrips />
      <About />
      <Reviews />
      <Features />
      <Contact />
      <Footer />
    </div>
  )
}

export default LandingPage