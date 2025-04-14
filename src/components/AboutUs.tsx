// import React from 'react'
import HeroImg from "../assets/Images/About-img.jpeg"

const AboutUs = () => {
  return (
    <section className="p-10" id="about">
      <h1 className="text-3xl text-center pb-10">About Us</h1>
      <div className="flex flex-col items-center md:flex-row gap-5">
        <aside className="flex-1">
          <img
            src={HeroImg}
            alt="About us image"
            className="rounded-xl w-full"
          />
        </aside>
        <aside className="flex-1 p-5 bg-[#7c74ee] rounded-xl block h-full">
          <p className="text-white">
            Achieve your goals with Goal Tracking and Progress Monitoring. Our
            solution empowers individuals and teams to set clear objectives,
            monitor progress, and stay accountable. Effortlessly define SMART
            goals, track milestones, and visualize progress in real-time on our
            user-friendly platform. Gain valuable insights, identify obstacles,
            and make data-driven adjustments for success. Whether you're an
            individual professional or a team leader, our tool will keep you
            focused, motivated, and on the path to accomplishing your goals.
          </p>
        </aside>
      </div>
    </section>
  )
}

export default AboutUs
