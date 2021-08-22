import React from "react"

const Hero = () => {
  return (
    <div className="container bg-transparent lg:py-12">
      <div class="flex justify-center flex-col items-center">
        <h1 className="mb-1 text-4xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 sm:text-6xl">
          Srishti Archive
        </h1>
        <h1 className="mb-1 text-xs font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 sm:text-sm">
          _______________
        </h1>
        <p class="text-light-gray px-4 text-center py-4  lg:text-base text-sm">
          A crowdsourced structured and searchable <br class="hidden lg:block md:block"></br> open-source library of projects by students at Srishti
        </p>

      </div>
      
    </div>
  )
}

export default Hero
