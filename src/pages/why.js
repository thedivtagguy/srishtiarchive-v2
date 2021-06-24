import { graphql } from "gatsby"
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />




<section class="px-2 lg:py-20 h-full md:px-0">
    <div class="flex justify-center items-center flex-col max-w-6xl px-5 mx-auto space-y-6 text-center">
    <h2 class="m-0 text-4xl font-extrabold w-4/5 leading-tight border-0 highlight-text mx-auto border-gray-300 lg:text-5xl md:text-2xl">
                I don't know about you, <br></br>but I know 3 things:
            </h2>
        <p class="w-full mx-auto text-base text-left text-light-gray sm:text-sm lg:text-xl md:max-w-3xl md:text-center">
            1. I do a lot of work for each course.
        </p>
        <p class="w-full mx-auto text-base text-left text-light-gray sm:text-sm lg:text-xl md:max-w-3xl md:text-center">
            2. The work lives for 5 weeks, after which it rots on my computer.
        </p>
        <p class="w-full mx-auto text-base text-left text-light-gray sm:text-sm lg:text-xl md:max-w-3xl md:text-center">
            3. I love seeing what other people have done. 
        </p>

        <p class="w-full mx-auto text-base text-left pt-4 text-light-gray sm:text-sm lg:text-xl md:max-w-3xl md:text-center">
            If you feel the same, the Archive is for you.<br></br> A permanant online exhibition for your projects that you put so much work into.<br></br> A happier place than your hard-drive.<span class="py-12 block"> Don't let your projects die.</span>
        </p>
        <div class=" flex flex-col justify-center md:flex-row md:space-x-4">
            <a href="https://submission-form.herokuapp.com" class="font-bold text-center text-sm lg:text-3xl border-2 border-black rounded-sm shadow-shadow-yellow py-2 px-2  hover:bg-yellow focus:outline-none hover:bg-blue-purple bg-yellow-400">
                ✨Submit Your Project (Free Good Karma)✨
            </a>
        </div>
    </div>
    
</section>

  </Layout>
)

export default AboutPage
