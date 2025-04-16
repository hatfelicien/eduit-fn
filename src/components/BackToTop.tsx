import React, { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"
import { animateScroll as scroll } from "react-scroll"

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <button
      onClick={() => scroll.scrollToTop()}
      className="w-10 h-10 fixed bottom-7 right-7 z-10 shadow-lg flex items-center justify-center 
                border-2 border-[#060b2e] rounded-md bg-[#060b2e] text-white 
                hover:bg-transparent hover:text-[#060b2e] duration-300 transition-all cursor-pointer"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  )
}

export default BackToTop
