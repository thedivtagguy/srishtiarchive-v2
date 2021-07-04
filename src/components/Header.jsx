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
    <div className="w-full px-8 mx-auto bg-transparent lg:px-16 max-w-7xl pattern">
      <div className="flex items-center justify-between py-8 lg:px-6 ">
        <Link to="/">
          <img alt="Logo" className="w-16 md:w-16" width="64px" src="/white-logo.png" />
        </Link>

        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars className="w-auto h-6 -mt-1 fill-current text-lime" />
        </button>

        <div className="hidden lg:block">
          {site.data.menu.map((link, key) => (
            <Link
              key={`menu_desktop_link${key}`}
              className="px-4 py-2 m-2 text-sm font-semibold tracking-wide text-center transition duration-150 ease-in-out rounded-md text-light-gray bg-accent-gray hover:bg-yellow-700"
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
