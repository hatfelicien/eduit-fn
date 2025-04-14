// import React from "react"
import { FaBars } from "react-icons/fa6"
import { IoCloseOutline } from "react-icons/io5"
// import { Link } from "react-scroll"
import { Link } from "react-scroll"
import LoginButton from "./LoginButton"
import { useEffect, useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen && window.scrollY > 50) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMenuOpen])

  const linkStyle = "font-semibold hover:text-white cursor-pointer duration-300"
  const responsiveLiStyle =
    "block w-full font-semibold text-lg hover:text-white cursor-pointer duration-300"
  const responsiveLinkStyle = "block w-full py-2 px-5 hover:pl-7 duration-300"

  return (
    <header className={`flex items-center justify-between md:pt-5`}>
      <nav className="h-full w-full">
        <nav className="w-full flex items-center justify-between">
          <a href="#" className="text-4xl md:text-5xl font-bold text-white">
            EduIT
          </a>

          <ul className="hidden md:flex items-center justify-center gap-5 text-sm">
            <li className={`${linkStyle}`}>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className={`${linkStyle}`}>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className={`${linkStyle}`}>
              <Link to="about" smooth={true} duration={500}>
                Docs
              </Link>
            </li>
            <li className={`${linkStyle}`}>
              <Link to="about" smooth={true} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>

          <FaBars
            className={` ${
              isMenuOpen ? "hidden transition-all" : "block"
            } block md:hidden text-[#060b2e] text-3xl hover:text-white duration-500 cursor-pointer`}
            onClick={() => {
              setIsMenuOpen((prev) => !prev)
            }}
          />

          <div className="hidden md:block">
            <LoginButton />
          </div>
        </nav>

        <ul
          className={` ${
            isMenuOpen ? "translate-x-[0%]" : "translate-x-[100%]"
          } fixed top-0 right-0 w-[50%] max-w-[350px] h-full bg-black/50 flex md:hidden duration-700 flex-col items-center text-sm pt-20`}
        >
          <IoCloseOutline
            className="text-[#060b2e] text-5xl absolute top-3 right-3 hover:text-white duration-500 cursor-pointer"
            onClick={() => {
              setIsMenuOpen(false)
            }}
          />

          <li className={`${responsiveLiStyle}`}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className={`${responsiveLinkStyle}`}
            >
              Home
            </Link>
          </li>
          <li className={`${responsiveLiStyle}`}>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className={`${responsiveLinkStyle}`}
              onClick={() => {
                setIsMenuOpen(false)
              }}
            >
              About
            </Link>
          </li>
          <li className={`${responsiveLiStyle}`}>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className={`${responsiveLinkStyle}`}
            >
              Docs
            </Link>
          </li>
          <li className={`${responsiveLiStyle}`}>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className={`${responsiveLinkStyle}`}
            >
              Pricing
            </Link>
          </li>

          <div
            className="flex justify-center my-2 absolute bottom-16"
            onClick={() => {
              setIsMenuOpen(false)
            }}
          >
            <LoginButton />
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header
