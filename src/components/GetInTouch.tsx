// import React from "react"
import { FaRegEnvelope } from "react-icons/fa"
import { FiPhone } from "react-icons/fi"
import HeroImg from "../assets/Images/GetInTouch-img.jpeg"

const GetInTouch = () => {
  return (
    <section className="px-10 pb-20 relative overflow-hidden">
      <img
        src={HeroImg}
        className="absolute inset-0 w-full h-full -z-10 object-cover"
      />
      <h1 className="text-5xl text-center my-10">Get In Touch</h1>

      <div className="flex flex-col md:flex-row md:justify-evenly gap-10">
        <aside
          className="flex flex-col gap-3 items-start justify-center bg-gray-100 
                            w-fit md:max-w-[350px] rounded-3xl p-5"
        >
          <div className="mx-auto bg-[#2196f3] rounded-full p-5">
            <FiPhone className="text-5xl text-white" />
          </div>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            ipsam velit nihil voluptate maiores veniam saepe aperiam quae nam
            deserunt, reprehenderit explicabo. Et ut nulla nobis qui dolores,
            vero deserunt?
          </article>
          <p>
            <span className="font-semibold">Phone:</span> +1234567890
          </p>
        </aside>

        <aside
          className="flex flex-col gap-3 items-start justify-center bg-gray-100 
                            w-fit md:max-w-[350px] rounded-3xl p-5"
        >
          <div className="mx-auto bg-[#2196f3] rounded-full p-5">
            <FaRegEnvelope className="text-5xl text-white" />
          </div>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            ipsam velit nihil voluptate maiores veniam saepe aperiam quae nam
            deserunt, reprehenderit explicabo. Et ut nulla nobis qui dolores,
            vero deserunt?
          </article>
          <p>
            <span className="font-semibold">Email:</span> example@email.com
          </p>
        </aside>
      </div>
    </section>
  )
}

export default GetInTouch
