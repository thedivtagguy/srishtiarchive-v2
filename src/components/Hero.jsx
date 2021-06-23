import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  const width = 420
  return (
    <div className="container lg:py-4  bg-transparent">
      <div class="flex justify-center flex-col items-center">
        <h1 className="text-4xl leading-tight font-extrabold tracking-tight  bg-clip-text text-transparent bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500  sm:text-6xl mb-1">
          Srishti Archive
        </h1>
        <h1 className="text-xs leading-tight font-extrabold tracking-tight  bg-clip-text text-transparent bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500  sm:text-sm mb-1">
          _______________
        </h1>
        <p class="text-light-gray px-4 text-center py-4  lg:text-base text-sm">
          A crowdsourced structured and searchable <br></br> library of projects by students at Srishti.
        </p>
      </div>
      
    </div>
  )
}

export default Hero
