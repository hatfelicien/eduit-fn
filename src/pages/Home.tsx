// import React from 'react'
import { useState } from "react"
import AboutUs from "../components/AboutUs"
import BackToTop from "../components/BackToTop"
import Footer from "../components/Footer"
import GetInTouch from "../components/GetInTouch"
import Hero from "../components/Hero"
import OurPartners from "../components/OurPartners"

const Home = () => {
  const [isAtHomePage, setIsAtHomePage] = useState(true)

  return (
    <main>
      <Hero isAtHomePage={isAtHomePage} />
      <AboutUs />
      <OurPartners />
      <GetInTouch />
      <Footer />
      <BackToTop />
    </main>
  )
}

export default Home
