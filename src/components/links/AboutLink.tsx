import React from "react"
import { Link } from "react-scroll"

const AboutLink = () => {
  return (
    <Link
      to="about"
      smooth={true}
      duration={1000}
      className="block h-full w-full"
    >
      About
    </Link>
  )
}

export default AboutLink
