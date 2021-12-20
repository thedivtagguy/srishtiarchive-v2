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
    <div  id="hero" className="py-6 mx-auto mb-1 lg:py-12 lg:mb-4">

      <div class="flex justify-center  flex-col lg:rounded-lg  pt-12 items-center">
        <div class="bg-white lg:w-1/4 w-2/3">
          <p class="text-black rounded-sm py-1 lg:rounded-lg    font-ibm-mono font-bold lg:px-4 text-center lg:py-2 lg:text-lg text-sm">
            A permanent gallery of projects{" "}
            <br class="hidden lg:block md:block"></br> by students at Srishti
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 px-8 py-4 mx-auto bg-transparent lg:bg-white lg:mt-12">
          {/* Create a list of heroButtons */}
          {site.data.heroButtons.map((link, key) => (
            <Link
              key={`hero_button_${key}`}
              to={link.link}
              className="px-8 font-bold text-black bg-white border-2 border-black rounded-md shadow-small-shadow font-ibm-mono hover:bg-black hover:text-white"
            >
              {link.text}
            </Link>
          ))}
        </div>
       

      </div>
    </div>
  )
}

export default Hero
