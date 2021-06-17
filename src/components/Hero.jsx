import React from "react"

const Hero = () => (
  <div className="container py-4 lg:pb-16 bg-gray-900">
    <div class="flex flex-col w-full mb-8 text-left lg:text-center">
            <h1 className="my-4 font-extrabold uppercase text-orange-500 lg:text-5xl text-center">
                Srishti Archive
            </h1>
            <p class="px-8 lg:text-base text-sm text-center font-medium leading-relaxed text-gray-400 mx-auto lg:w-1/3">
                Crowdsourced repository of projects and assignments done by students of Srishti, searchable and tagged.
            </p>
    </div>
    <div class="flex justify-center items-start">
        <div class="mb-4">
                <a href="/submit">
                    <button class="px-8 py-4 font-semibold text-white transition duration-500 ease-in-out bg-red-600 rounded-lg hover:bg-red-800 lg:text-lg sm:text-sm">
                        Submit Your Project
                    </button>
                </a>
            </div>
         </div>
  </div>




)

export default Hero
