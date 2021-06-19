import React from "react"


const Hero = () => (
    
  <div className="container py-4 lg:pb-16 bg-transparent">
    <div class="flex flex-col lg:flex-row justify-around items-center">
        <div class="flex flex-col lg:justify-start lg:items-start justify-center items-center mb-8 text-left">
                <h1 className="my-2 font-extrabold uppercase text-high-yellow lg:text-5xl text-4xl text-center">
                    Srishti Archive
                </h1>
                <p class="lg:text-base text-sm lg:text-left text-center capitalize font-medium leading-relaxed text-mint-cream ">
                    Structured and searchable crowdsourced <br></br>repository of projects done at Srishti.
                </p>
        </div>
       <div class="flex flex-row justify-center items-center">
           <div>
           <span class="text-4xl lg:-mt-4 px-2">👉</span>
           </div>
           <div>
               <a href="https://submission-form.herokuapp.com">
           <span className="font-bold text-mint-cream uppercase lg:text-center lg:text-2xl border-2 hover:text-black border-black rounded-sm shadow-orange py-2 px-1 lg:px-8 bg-blaze-orange focus:outline-none hover:bg-blue-purple">📨 Submit Your Own</span> 
           </a>
           </div>
        </div>
    </div>
    <div class="mx-auto flex flex-col justify-center items-center">
        <p class="lg:text-xl  text-sm text-gray-700 font-bold py-4">...or browse projects</p>
    <div class="flex flex-col justify-center space-y-4 items-center">
    
        <div class="max-w-4xl mx-8">
        <input type="text" class=" text-sm  appearance-none shadow-orange w-full py-2 px-16 text-center bg-mint-cream text-gray-700 placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder ="Search Projects..." />
        </div>
    <div>
    <span className="font-bold text-center text-sm border-2 border-black rounded-sm shadow-shadow-yellow lg:py-3 px-6 py-1  hover:bg-yellow focus:outline-none hover:bg-blue-purple mx-4 bg-yellow-400">Search</span> 

    </div>
    </div>
    </div>
  </div>




)

export default Hero
