import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import MenuMobile from "./MenuMobile"
import { FaBars } from "react-icons/fa"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { site } = useStaticQuery(graphql`
    query {
      site {
        data: siteMetadata {
          menu {
            name
            to
          }
        }
      }
    }
  `)

  return (
    <div className="container bg-transparent pattern">
      <div className="flex justify-between py-8 items-center">
        <Link to="/">
          <img alt="Logo" className="w-16 md:w-16" width="64px" src="/white-logo.png" />
        </Link>

        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars className="h-6 w-auto text-lime fill-current -mt-1" />
        </button>

        <div className="hidden sm:block">
          {site.data.menu.map((link, key) => (
            <Link
              key={`menu_desktop_link${key}`}
              className="ml-6 sm:ml-8 text-sm sm:text-base font-medium border-b-5 pb-2 border-transparent text-black hover:text-gray-800 hover:border-gray-600 transition duration-150 ease-in-out"
              activeClassName="border-blue-600 text-sienna hover:border-blue-600"
              to={link.to}
            >
             <span className="font-bold text-center text-sm border-2 border-black rounded-sm shadow-shadow-yellow py-2 px-2  hover:bg-yellow focus:outline-none hover:bg-blue-purple bg-yellow-400">{link.name}</span> 
            </Link>
          ))}
        </div>
      </div>
      <MenuMobile
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        links={site.data.menu}
      />
    </div>
  )
}

export default Header
