// import React from "react"
import HeroImg from "../assets/Images/Hero-img.jpeg"
import Header from "./Header"

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex flex-col justify-between p-10 md:pt-0 overflow-hidden">
      <img
        src={HeroImg}
        className="absolute inset-0 w-full h-full -z-10 object-cover"
      />
      <Header />
      <div className="bg-gray-100 w-full md:w-[90%] mx-auto flex flex-col gap-10 p-10">
        <h1 className="text-xl md:text-3xl font-bold italic">
          Education is the most powerful weapon that you can use to change the
          world.
        </h1>
        <button
          className="italic font-semibold border-2 border-[#060b2e] bg-[#060b2e] text-white py-2 px-7 rounded-xl cursor-pointer
                        hover:bg-transparent hover:text-[#060b2e] duration-300 block mx-auto"
        >
          Get Started
        </button>
      </div>
    </section>
  )
}

export default Hero
