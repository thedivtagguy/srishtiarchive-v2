import { graphql } from "gatsby"
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="Guidelines" description="Srishti Archive Submission Guidelines" />




<section class="px-2 lg:pt-20 lg:pb-12 h-full md:px-0">
    <div class="flex justify-center items-center flex-col max-w-6xl px-5 mx-auto space-y-6 text-center">
    <h2 class="m-0 text-4xl font-extrabold w-4/5 leading-tight border-0 highlight-text mx-auto border-gray-300 lg:text-6xl md:text-2xl">
                Submission Checklist
            </h2>
    </div>
    
</section>
<section class="w-full pt-7 pb-7  md:pb-24">
    <div class="box-border flex flex-col items-center content-center py-12  px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

        <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src="/files.svg" width="500" class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "></img>
        </div>

        <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 class="m-0 text-4xl font-extrabold leading-tight border-0 highlight-text mx-auto border-gray-300 lg:text-5xl md:text-2xl">
                Collect your files
            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-light-gray border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
            <span class="px-1 py-1  text-base rounded text-white  bg-yellow-600 font-medium"> Files</span> are anything that make up <span class="px-1 py-1  text-base rounded text-white  bg-yellow-600 font-medium">your output</span>. They can be <span class="px-1 py-1  text-base rounded text-white  bg-yellow-600 font-medium">reflections, PDFs, videos, soundclips, code, images</span>; stuff that shows us what you made and adds context. Stuff you've already submitted also works,<span class="px-1 py-1  text-base rounded text-white  bg-yellow-600 font-medium">no need to create new files</span>. These are limited to only <span class="px-1 py-1  text-base rounded text-white  bg-yellow-600 font-medium">5 per entry</span>
            </p>
            
        </div>
    </div>
    <div class="box-border flex flex-col items-center content-center px-8 lg:py-16 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

        <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
        <h2 class="m-0 text-4xl font-extrabold leading-tight border-0 highlight-text mx-auto border-gray-300 lg:text-5xl md:text-2xl">
                Write a Description
            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-light-gray border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                Since we don't know what you've made, each entry comes with a <span class="px-1 py-1  text-base rounded text-white  bg-yellow-600 font-medium">short description of the project</span>. This should explain what the project is and doesn't need to be longer than <span class="px-1 py-1  text-base rounded text-white  bg-yellow-600 font-medium"> 300 characters</span>. You should aim to <span class="px-1 py-1  text-base rounded text-white  bg-yellow-600 font-medium"> explain it like we're five</span>.
            </p>
        </div>

        <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
        <img src="/write.svg" width="500" class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "></img>
        </div>
    </div>
    <div class="box-border flex flex-col items-center content-center px-8 lg:py-12 py-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

        <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src="/done.svg" width="500" class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "></img>
        </div>

        <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 class="m-0 text-4xl font-extrabold leading-tight border-0 highlight-text mx-auto border-gray-300 lg:text-5xl md:text-2xl">
                Thatsssssss it
            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-light-gray border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                Once you have these things read, <span class="px-1 py-1  text-base rounded text-white  bg-yellow-600 font-medium">head over to the form</span> and submit it! You'll get an <span class="px-1 py-1  text-base rounded text-white  bg-yellow-600 font-medium">email confirmation</span> once we get it. Once it is reviewed and approved, it'll be <span class="px-1 py-1  text-base rounded text-white  bg-yellow-600 font-medium">published on the website within 2-3 days</span>. 
            </p>
        </div>
    </div>
    <div class=" flex flex-col justify-center md:flex-row p-8 md:space-x-4">
            <a href="http://submit.srishtiarchive.com" class="font-bold text-center text-sm lg:text-3xl border-2 border-black rounded-sm shadow-shadow-yellow py-4 px-4  hover:bg-yellow focus:outline-none hover:bg-blue-purple bg-yellow-400">
                Cool cool cool, I'm ready to submit.
            </a>
        </div>
</section>

  </Layout>
)

export default AboutPage

