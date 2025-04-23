import React, { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { TiTick } from "react-icons/ti"

const Pricing = () => {
  const [isAtLoginPage, setIsAtLoginPage] = useState(true)

  const buttonStyle =
    "bg-[#060b2e] text-white px-5 py-2 font-semibold rounded-xl border-2 border-[#060b2e] hover:bg-transparent hover:text-[#060b2e] cursor-pointer duration-300"

  return (
    <section id="pricing">
      <div className="bg-[#060b2e] px-10 py-3">
        <Header isAtLoginPage={isAtLoginPage} />
      </div>

      <div className="text-[#060b2e] flex flex-col items-center justify-center min-h-[350px] max-w-[700px] mx-auto">
        <h1 className="text-xl md:text-5xl my-5 font-bold text-center">
          Choose the right Plan for your organization
        </h1>
        <p className="my-10">
          Flexible pricing to support your education goals
        </p>
        <button className={`${buttonStyle}`}>Get started</button>
      </div>

      <div className="flex flex-col flex-wrap md:flex-row items-center justify-evenly p-10 gap-5">
        <article className="flex flex-col items-center justify-center border-2 border-[#060b2e] rounded-xl py-5 px-10 my-5 w-[320px] h-[350px]">
          <h3 className="font-semibold text-5xl md:text-5xl text-center">
            Starter
          </h3>
          <h1 className="font-bold text-xl md:text-3xl text-center my-3">
            Free
          </h1>
          <ul>
            <li className="my-2 flex items-center gap-2">
              <TiTick className="text-green-500 text-2xl" />
              <span>1 Organization</span>
            </li>
            <li className="my-2 flex items-center gap-2">
              <TiTick className="text-green-500 text-2xl" />
              <span>Basic Tracking</span>
            </li>
            <li className="my-2 flex items-center gap-2">
              <TiTick className="text-green-500 text-2xl" />
              <span>E-mail Support</span>
            </li>
          </ul>
          <button className={`${buttonStyle} my-3`}>Get Started</button>
        </article>
        <article className="flex flex-col items-center justify-center border-2 border-[#060b2e] rounded-xl py-5 px-10 my-5 w-[320px] h-[350px]">
          <h3 className="font-semibold text-5xl md:text-5xl text-center">
            Professional
          </h3>
          <h1 className="font-bold text-xl md:text-3xl text-center my-3">
            $19<span className="text-sm font-normal">/month</span>
          </h1>
          <ul>
            <li className="my-2 flex items-center gap-2">
              <TiTick className="text-green-500 text-2xl" />
              <span>Up To 10 Organization</span>
            </li>
            <li className="my-2 flex items-center gap-2">
              <TiTick className="text-green-500 text-2xl" />
              <span>Advanced Progress Tracking</span>
            </li>
            <li className="my-2 flex items-center gap-2">
              <TiTick className="text-green-500 text-2xl" />
              <span>Priority E-mail Support</span>
            </li>
          </ul>
          <button className={`${buttonStyle} my-3`}>Upgrade Now</button>
        </article>
        <article className="flex flex-col items-center justify-center border-2 border-[#060b2e] rounded-xl py-5 px-10 my-5 w-[320px] h-[350px]">
          <h3 className="font-semibold text-5xl md:text-5xl text-center">
            Enterprise
          </h3>
          <h1 className="font-bold text-xl md:text-3xl text-center my-3">
            Custom
          </h1>
          <ul>
            <li className="my-2 flex items-center gap-2">
              <TiTick className="text-green-500 text-2xl" />
              <span>Unlimited Organizations</span>
            </li>
            <li className="my-2 flex items-center gap-2">
              <TiTick className="text-green-500 text-2xl" />
              <span>Full Analysis + Integrations</span>
            </li>
            <li className="my-2 flex items-center gap-2">
              <TiTick className="text-green-500 text-2xl" />
              <span>Dedicated Support Manager</span>
            </li>
          </ul>
          <button className={`${buttonStyle} my-3`}>Contact Sales</button>
        </article>
      </div>

      <div className="p-10">
        <table className="w-full border-collapse border border-[#060b2e] rounded-lg">
          <thead>
            <tr>
              <th className="border border-[#060b2e] p-2">Features</th>
              <th className="border border-[#060b2e] p-2">Goal Tracking</th>
              <th className="border border-[#060b2e] p-2">
                Progress Monitoring
              </th>
              <th className="border border-[#060b2e] p-2">First Steps</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#060b2e] text-center p-2">
                Goal Tracking
              </td>
              <td className="border border-[#060b2e] text-center p-2">
                <TiTick className="text-green-500 text-2xl" />
              </td>
              <td className="border border-[#060b2e] text-center p-2">
                <TiTick className="text-green-500 text-2xl" />
              </td>
              <td className="border border-[#060b2e] text-center p-2">
                <TiTick className="text-green-500 text-2xl" />
              </td>
            </tr>
            <tr>
              <td className="border border-[#060b2e] text-center p-2">
                Progress Monitoring
              </td>
              <td className="border border-[#060b2e] text-center p-2">
                <TiTick className="text-green-500 text-2xl" />
              </td>
              <td className="border border-[#060b2e] text-center p-2">
                <TiTick className="text-green-500 text-2xl" />
              </td>
              <td className="border border-[#060b2e] text-center p-2">
                <TiTick className="text-green-500 text-2xl" />
              </td>
            </tr>
            <tr>
              <td className="border border-[#060b2e] text-center p-2">
                Team Management
              </td>
              <td className="border border-[#060b2e] text-center p-2">
                <TiTick className="text-green-500 text-2xl" />
              </td>
              <td className="border border-[#060b2e] text-center p-2">
                <TiTick className="text-green-500 text-2xl" />
              </td>
              <td className="border border-[#060b2e] text-center p-2">
                <TiTick className="text-green-500 text-2xl" />
              </td>
            </tr>
            <tr>
              <td className="border border-[#060b2e] text-center p-2">
                Dedicated support
              </td>
              <td className="border border-[#060b2e] text-center p-2">
                <TiTick className="text-green-500 text-2xl" />
              </td>
              <td className="border border-[#060b2e] text-center p-2">
                <TiTick className="text-green-500 text-2xl" />
              </td>
              <td className="border border-[#060b2e] text-center p-2">
                <TiTick className="text-green-500 text-2xl" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </section>
  )
}

export default Pricing
