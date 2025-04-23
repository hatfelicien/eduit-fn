import React from "react"
import { FaBars } from "react-icons/fa6"
import { IoCloseOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import LoginButton from "./LoginButton"
import { useEffect, useState } from "react"
import Icon from "./Icon"
import { FaRegEnvelope } from "react-icons/fa"
import { FiPhone } from "react-icons/fi"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"
import AboutLink from "./links/AboutLink"

interface HeaderProps {
  isAtLoginPage?: boolean
  isAtHomePage?: boolean
}

const Header: React.FC<HeaderProps> = ({ isAtLoginPage, isAtHomePage }) => {
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
          <Icon />

          <ul className="hidden md:flex items-center justify-center gap-5 text-sm">
            <li className={`${linkStyle}`}>
              <Link to="/">Home</Link>
            </li>
            {isAtHomePage && (
              <li className={`${linkStyle}`}>
                <AboutLink />
              </li>
            )}
            <li className={`${linkStyle}`}>
              <Link to="/docs">Docs</Link>
            </li>
            <li className={`${linkStyle}`}>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>

          <FaBars
            className={` ${isMenuOpen ? "hidden transition-all" : "block"} ${
              isAtLoginPage ? "text-white hover:scale-130" : "text-[#060b2e]"
            } block md:hidden text-3xl hover:text-white duration-500 cursor-pointer`}
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
          } fixed top-0 right-0 w-fit min-w-[50%] max-w-[400px] h-full bg-black/50 flex md:hidden duration-700 flex-col items-center text-sm px-3 pt-20`}
        >
          <IoCloseOutline
            className={`${
              isAtLoginPage ? "text-white hover:scale-130" : "text-[#060b2e]"
            } text-5xl absolute top-3 right-3 hover:text-white duration-500 cursor-pointer`}
            onClick={() => {
              setIsMenuOpen(false)
            }}
          />

          <li className={`${responsiveLiStyle}`}>
            <Link to="/" className={`${responsiveLinkStyle}`}>
              Home
            </Link>
          </li>
          {isAtHomePage && (
            <li className={`${responsiveLiStyle}`}>
              <span
                className={`${responsiveLinkStyle}`}
                onClick={() => {
                  setIsMenuOpen(false)
                }}
              >
                <AboutLink />
              </span>
            </li>
          )}
          <li className={`${responsiveLiStyle}`}>
            <Link to="/docs" className={`${responsiveLinkStyle}`}>
              Docs
            </Link>
          </li>
          <li className={`${responsiveLiStyle}`}>
            <Link to="/pricing" className={`${responsiveLinkStyle}`}>
              Pricing
            </Link>
          </li>

          <div
            className="flex justify-center my-8"
            onClick={() => {
              setIsMenuOpen(false)
            }}
          >
            <LoginButton />
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <div className="bg-[#060b2e] rounded-full p-3 my-2">
                <FaRegEnvelope className="text-xl text-white" />
              </div>
              <p className="text-white">
                <span className="font-semibold">Email:</span> example@email.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#060b2e] rounded-full p-3 my-2">
                <FiPhone className="text-xl text-white" />
              </div>
              <p className="text-white">
                <span className="font-semibold">Phone:</span> +1234567890
              </p>
            </div>
          </div>

          <div className="flex gap-2 my-10">
            <FaFacebookF className="text-white text-xl" />
            <FaTwitter className="text-white text-xl" />
            <FaInstagram className="text-white text-xl" />
            <FaLinkedin className="text-white text-xl" />
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header
