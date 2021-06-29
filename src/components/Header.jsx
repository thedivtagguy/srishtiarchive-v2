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
      <div className="flex justify-between py-8 px-2 items-center">
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
              className="font-semibold m-2 tracking-wide text-center text-sm  text-light-gray rounded-md py-2 px-4 bg-accent-gray hover:bg-yellow-700 transition duration-150 ease-in-out"
              activeClassName="border-b-1 border-yellow-600"
              to={link.to}
            >
             {link.name}
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
