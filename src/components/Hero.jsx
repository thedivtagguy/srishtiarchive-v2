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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


  return (
    <div  id="hero" className="lg:py-12 lg:mb-4 mb-1 mx-auto">

      <div class="flex justify-center flex-col pt-12 items-center">
        <p class="text-black rounded-sm py-1 lg:rounded-lg bg-white font-ibm-mono font-bold lg:px-4 text-center lg:py-2 w-2/3 lg:text-lg text-sm">
          A permanent gallery of projects{" "}
          <br class="hidden lg:block md:block"></br> by students at Srishti
        </p>
        <div className="flex items-center lg:bg-white bg-transparent gap-2 py-4 px-8 flex-wrap justify-center lg:mt-12 space-x-4">
          {/* Create a list of heroButtons */}
          {site.data.heroButtons.map((link, key) => (
            <Link
              key={`hero_button_${key}`}
              to={link.link}
              className="px-8 font-bold border-2 bg-white text-black border-black rounded-md shadow-small-shadow font-ibm-mono hover:bg-black hover:text-white"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div  className="flex rounded-md bg-white justify-center mt-4">
          <p className = "px-4 py-2 text-sm underline decoration-wavy font-medium text-center text-black font-ibm-mono lg:text-md">
            or browse more 👇
            </p>
          </div>

      </div>
    </div>
  )
}

export default Hero
