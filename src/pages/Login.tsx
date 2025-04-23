// import React from "react"
import Header from "../components/Header"
import Img from "../assets/Images/Login-page-img.png"
import Footer from "../components/Footer"
import { useState } from "react"
import BackToTop from "../components/BackToTop"
import { Link } from "react-router-dom"

const Login = () => {
  const [isAtLoginPage, setIsAtLoginPage] = useState(true)

  return (
    <main>
      <div className="px-10 pb-5 pt-1 bg-[#161a35] text-white">
        <Header isAtLoginPage={isAtLoginPage} />
      </div>
      <section className="flex flex-col md:flex-row p-5 md:gap-10 min-h-[650px]">
        <aside className="flex-1 flex flex-col items-center justify-center min-h-[400px]">
          <h1 className="text-3xl max-md:text-center font-bold">
            Boost your organizations productivity with Pulse.
          </h1>

          <img src={Img} alt="Education for all" className="my-14" />
        </aside>
        <aside className="flex-1 flex flex-col items-center justify-center min-h-[400px]">
          <form className="bg-[#d9d9d9] p-5 rounded-2xl">
            <h1 className="text-2xl font-bold capitalize text-center">
              Sign in to your organization
            </h1>
            <h1 className="text-md font-bold capitalize my-5 text-center">
              Enter your organization's name
            </h1>
            <div className="flex flex-col gap-5">
              <input
                type="text"
                required
                className="bg-white py-2 px-5 block w-full"
              />

              <button
                className="border-2 border-[#060b2e] bg-[#060b2e] text-white font-semibold py-2 
                            hover:bg-transparent hover:text-[#060b2e] cursor-pointer block w-full
                            duration-300"
              >
                Continue
              </button>
            </div>
            <p className="text-md font-bold capitalize my-5 text-center">
              Looking to register an organization instead? {"  "}
              <Link to="/register" className="underline cursor-pointer">
                Register a new organization
              </Link>
            </p>
          </form>
        </aside>
      </section>
      <Footer />
      <BackToTop />
    </main>
  )
}

export default Login
