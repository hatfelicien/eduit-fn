import React, { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { CiSearch } from "react-icons/ci"
import GettingStarted from "../components/Docs/GettingStarted"
import ManagingOrganizations from "../components/Docs/ManagingOrganizations"

const Documentation = () => {
  const [isAtLoginPage, setIsAtLoginPage] = useState(true)

  const [isGettingStarted, setIsGettingStarted] = useState(false)
  const [isManagingOrganizations, setIsManagingOrganizations] = useState(false)
  const [isTrackingGoals, setIsTrackingGoals] = useState(false)
  const [isIntegrations, setIsIntegrations] = useState(false)
  const [isFAQs, setFAQs] = useState(false)
  const [isAPIReference, setIsAPIReference] = useState(false)

  const buttonStyle =
    "bg-[#060b2e] text-white px-5 py-2 font-semibold rounded-xl border-2 border-[#060b2e] hover:bg-transparent hover:text-[#060b2e] cursor-pointer duration-300"
  return (
    <section>
      <section id="docs">
        <div className="bg-[#060b2e] px-10 py-3">
          <Header isAtLoginPage={isAtLoginPage} />
        </div>

        <div className="text-[#060b2e] flex flex-col items-center justify-center min-h-[350px] max-w-[700px] mx-auto">
          <h1 className="text-xl md:text-5xl my-5 font-bold text-center">
            Documentation
          </h1>
          <p className="my-10">
            Everything you need to integrate and use EduIT effectively.
          </p>
          <button className={`${buttonStyle}`}>Get started</button>
          <form className="mb-5 mt-10 relative flex items-center gap-1">
            <CiSearch className="absolute left-3 top-3.5 text-gray-500" />
            <input
              type="text"
              className="w-full max-w-[600px] border-2 border-[#060b2e] rounded-lg py-2 pr-5 pl-10"
              placeholder="Search Documentation"
            />
            <button className={`${buttonStyle}`}>Search</button>
          </form>
        </div>

        <section className="flex flex-col md:flex-row h-[500px] relative">
          <article className="bg-red-200 flex-1 absolute top-0 bottom-0 left-0 w-1/4">
            <ul>
              <li>Getting started</li>
              <li>Managing organizations</li>
              <li>Tracking Goals</li>
              <li>Integrations</li>
              <li>FAQs</li>
              <li>API Reference</li>
            </ul>
          </article>
          <article className="bg-blue-200 flex-3 absolute top-0 bottom-0 right-0 w-3/4 overflow-scroll">
            <GettingStarted />
            <ManagingOrganizations />
          </article>
        </section>

        <Footer />
      </section>
    </section>
  )
}

export default Documentation
