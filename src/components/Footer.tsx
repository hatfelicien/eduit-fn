// import React from "react"

const Footer = () => {
  return (
    <footer className="bg-[#060b2e] p-5 md:p-10 flex flex-col md:flex-row items-start md:items-center md:justify-between">
      <section className="text-white">
        <h1 className="font-semibold text-xl my-3">About</h1>
        <ul>
          <li className="underline">About us</li>
          <li className="underline">Leadership Team</li>
          <li className="underline">Financial</li>
          <li className="underline">FAQ</li>
        </ul>
      </section>
      <section className="text-white">
        <h1 className="font-semibold text-xl my-3">About</h1>
        <ul>
          <li className="underline">About us</li>
          <li className="underline">Leadership Team</li>
          <li className="underline">Financial</li>
          <li className="underline">FAQ</li>
        </ul>
      </section>
      <section className="text-white">
        <h1 className="font-semibold text-xl my-3">About</h1>
        <ul>
          <li className="underline">About us</li>
          <li className="underline">Leadership Team</li>
          <li className="underline">Financial</li>
          <li className="underline">FAQ</li>
        </ul>
      </section>
      <section className="flex flex-col items-start">
        <h1 className="font-semibold text-xl my-3 text-white">Email:</h1>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="bg-gray-100 p-2"
          />
          <button
            type="submit"
            className="bg-white py-2 px-5 mx-2 font-semibold cursor-pointer hover:opacity-70 duration-300 
                            focus:border focus:border-white text-[#060b2e]"
          >
            Subscribe
          </button>
        </form>
      </section>
    </footer>
  )
}

export default Footer
