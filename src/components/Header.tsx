// import React from "react"

import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className={`flex items-center justify-between py-5`}>
      <h1 className="text-5xl font-bold text-white">EduIT</h1>

      <ul className="flex items-center justify-center gap-5 text-sm">
        <li>Home</li>
        <li>About</li>
        <li>Docs</li>
        <li>Pricing</li>
      </ul>

      <button
        className="italic font-semibold border-2 border-[#060b2e] bg-[#060b2e] text-white py-2 px-7 rounded-xl cursor-pointer
                        hover:bg-transparent hover:text-[#060b2e] duration-300"
      >
        <Link to="/login">Login</Link>
      </button>
    </header>
  )
}

export default Header
