// import React from "react"
import Header from "../components/Header"
import Img from "../assets/Images/Login-page-img.png"
import Footer from "../components/Footer"
import { useState } from "react"

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false)
  return (
    <main>
      <div className="px-10 bg-[#161a35] text-white">
        <Header />
      </div>
      <section className="flex flex-col md:flex-row p-10">
        <aside className="flex-1">
          <h1 className="text-5xl font-bold">
            Boost your organizations productivity with Pluse.
          </h1>

          <img src={Img} alt="" className="my-10" />
        </aside>
        <aside className="flex-1">
          <form className="bg-[#d9d9d9] py-5 px-10 rounded-2xl">
            <h1 className="text-2xl font-bold capitalize text-center">
              Sign in to your organization
            </h1>
            <h1 className="text-md font-bold capitalize my-5 text-center">
              Enter your organization's name
            </h1>
            <div className="flex flex-col gap-5">
              {isRegistering ? (
                <label htmlFor="orgName" className="font-semibold">
                  Organizations name:
                </label>
              ) : null}
              <input
                type="text"
                required
                className="bg-white py-2 px-5 block w-full"
              />
              {isRegistering && (
                <section>
                  <label htmlFor="" className="block leading-5 font-semibold">
                    Email:
                  </label>
                  <br />
                  <input
                    type="email"
                    id="orgName"
                    name="orgName"
                    required
                    className="bg-white py-2 px-5 block w-full"
                  />
                  <div>
                    <label
                      htmlFor="description"
                      className="block leading-5 mt-5 font-semibold"
                    >
                      Organization description:
                    </label>
                    <br />
                    <textarea
                      name="description"
                      id="description"
                      //   cols={32}
                      rows={5}
                      required
                      className="bg-white py-2 px-5 block w-full border border-none focus:border-red-500 focus:outline-gray-500"
                    />
                  </div>
                </section>
              )}
              <button
                className="border-2 border-[#060b2e] bg-[#060b2e] text-white font-semibold py-2 
                            hover:bg-transparent hover:text-[#060b2e] cursor-pointer block w-full
                            duration-300"
              >
                Continue
              </button>
            </div>
            <p
              className="text-md font-bold capitalize my-5 text-center hover:underline cursor-pointer"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              Looking to register an organization instead? Register a new
              organization
            </p>
          </form>
        </aside>
      </section>
      <Footer />
    </main>
  )
}

export default Login
