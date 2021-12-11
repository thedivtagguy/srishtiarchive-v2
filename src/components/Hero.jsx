import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
const Hero = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        data: siteMetadata {
          heroButtons {
            text
            link
          }
        }
      }
    }
  `)

  return (
    <div className="container bg-transparent lg:py-12">
      <div class="flex justify-center flex-col items-center">
        <p class="text-black font-ibm-mono font-bold px-4 text-center py-4  lg:text-lg text-sm">
          A permanent gallery of projects{" "}
          <br class="hidden lg:block md:block"></br> by students at Srishti
        </p>
        <div id="cow" className="flex items-center justify-center mt-12 space-x-4">
          {/* Create a list of heroButtons */}
          {site.data.heroButtons.map((link, key) => (
            <Link
              key={`hero_button_${key}`}
              to={link.link}
              className="px-8 font-bold border-2 border-black rounded-md shadow-small-shadow font-ibm-mono hover:bg-black hover:text-white"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <p className = "px-4 py-4 text-sm font-medium text-center text-black font-ibm-mono lg:text-md">
            or browse more 👇
            </p>
          </div>

      </div>
    </div>
  )
}

export default Hero
