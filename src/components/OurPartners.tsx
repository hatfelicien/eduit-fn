// import React from "react"
import Marquee from "react-fast-marquee"
import GHAImg from "../assets//Images/Marquee/GHA.png"
import REBImg from "../assets//Images/Marquee/REB.png"
import URImg from "../assets//Images/Marquee/UR.png"
import MineducImg from "../assets//Images/Marquee/Mineduc.jpeg"
import NesaImg from "../assets//Images/Marquee/Nesa.png"

const OurPartners = () => {
  return (
    <section className="p-5">
      <h1 className="text-3xl text-center pb-10">Our Partners</h1>
      <div className="py-10">
        <Marquee
          pauseOnClick={true}
          speed={20}
          gradient={true}
          gradientWidth={100}
        >
          <img src={NesaImg} className="mx-5 h-[100px] w-auto" />
          <img src={MineducImg} className="mx-5 h-[100px] w-auto" />
          <img src={URImg} className="mx-5 h-[100px] w-auto" />
          <img src={REBImg} className="mx-5 h-[100px] w-auto" />
          <img src={GHAImg} className="mx-5 h-[100px] w-auto" />
        </Marquee>
      </div>
    </section>
  )
}

export default OurPartners
