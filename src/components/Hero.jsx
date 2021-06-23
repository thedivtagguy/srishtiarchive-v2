import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  const width = 420
  return (
  <div className="container lg:py-4  bg-transparent">
   <div class="flex justify-center items-center">
       <StaticImage src="../images/header.svg" alt="Hero Header" width={width} quality="100" layout="fixed" placeholder="tracedSVG"/>
    </div>
    <div class="mx-auto py-4 flex flex-col justify-center items-center">
     
      <div class="flex flex-col justify-center space-y-4 py-4 items-center">
        
      </div>
    </div>


  </div>
  )
  }

export default Hero
