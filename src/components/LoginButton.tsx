// import React from 'react'
import { Link } from "react-router-dom"

const LoginButton = () => {
  return (
    <>
      <button
        className="italic font-semibold border-2 border-[#060b2e] bg-[#060b2e] text-white py-2 px-7 rounded-xl cursor-pointer
                  hover:bg-transparent hover:text-[#060b2e] duration-300"
      >
        <Link to="/login">Login</Link>
      </button>
    </>
  )
}

export default LoginButton
