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
    <div className="w-full px-8 mx-auto bg-transparent lg:px-16 max-w-7xl ">
      <div className="flex items-center justify-between py-4 lg:px-6 ">
        <Link to="/">
          <div className="flex items-center space-x-4">
          <img alt="Logo" className="w-12 md:w-20"  src="/black-logo.png" />
          <h1 className="w-1/2 font-bold leading-none text-black font-ibm-serif text-lg md:text-2xl">
            Srishti Archive
          </h1>
          </div>
        </Link>

        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars className="w-auto h-6 -mt-1 text-black fill-current" />
        </button>

        <div className="hidden lg:block">
          {site.data.menu.map((link, key) => (
            <Link
              key={`menu_desktop_link${key}`}
              to={link.to}
              // For every link other than the last one, add these styles
              // Otherwise, add the last link styles
              className={`${
                key === site.data.menu.length - 1
                  ? "px-2 py-1 bg-black text-white hover:bg-white border-2 border-black hover:text-black rounded-md font-ibm-mono"
                  : "font-ibm-mono font-medium px-4 hover:underline"
              }`}
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
