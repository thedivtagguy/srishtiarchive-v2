import React from "react"

const Hero = () => (
  <div className="container lg:py-4  bg-transparent">
   <div class="flex justify-start items-center">
       <img src="/header.svg" class="mx-auto lg:w-2/5 w-full px-2"></img>
    </div>
    <div class="mx-auto py-4 flex flex-col justify-center items-center">
     
      <div class="flex flex-col justify-center space-y-4 items-center">
        <div class="max-w-4xl mx-8">
          <input
            type="text"
            class=" text-sm  appearance-none shadow-orange w-full py-2 px-16 text-center bg-mint-cream text-gray-700 placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Search Projects..."
          />
        </div>
        <div>
          <span className="font-bold text-center text-sm border-2 border-black rounded-sm shadow-shadow-yellow lg:py-3 px-6 py-1  hover:bg-yellow focus:outline-none hover:bg-blue-purple mx-4 bg-yellow-400">
            Search
          </span>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
