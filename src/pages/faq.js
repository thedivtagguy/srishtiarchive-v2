import { graphql } from "gatsby"
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="FAQ" description="I have concerns..." />

<section class="relative min-w-screen animation-fade animation-delay">
    <div class="container px-8 mx-auto sm:px-12 xl:px-5">
       
        <h3 class="mt-1 text-2xl font-extrabold text-left highlight-text sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
        Okay but...
        </h3>
        <div class="w-full px-6 py-6 mx-auto mt-10 bg-accent-gray  highlight-border rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 class="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl">Who owns my work?</h3>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                You do! There is no change in ownership, but your work will be shared under a CC-BY-NC-SA license, which allows people to build on it. <span class="highlight-text block font-bold">Your work is safely stored in a reliable server and not shared anywhere else other than this website.</span>
            </p>
        </div>
        <div class="w-full px-6 py-6 mx-auto mt-10 bg-accent-gray  highlight-border rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 class="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl">What are the terms of the CC-BY-NC-SA license?</h3>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                By putting your work under this license, you allow people to create a derivative work (work that builds on your own work), provided that they give you credit and do not use it for any commercial purposes. You can read about this license at <a class="highlight-text font-extrabold" href="https://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank">Creative Commons Website</a>.
            </p>
        </div>
        <div class="w-full px-6 py-6 mx-auto mt-10 bg-accent-gray  highlight-border rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 class="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl">What about plagiarism?</h3>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                Plagiarism is a valid concern. By using the Archive, students agree to adhere to <a href="http://srishtimanipalinstitute.in/policies/srishti-policy-on-ethical-conduct-and-practice" target="_blank" class="highlight-text font-extrabold">Srishti Manipal's Policy on Ethical Conduct and Practice</a>. The same penalties for violation apply.
            </p>
        </div>
        <div class="w-full px-6 py-6 mx-auto mt-10 bg-accent-gray  highlight-border rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 class="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl">Can I update or remove my work later?</h3>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                Of course! If you change your mind about keeping it up later, you can just email us with your entry ID and we'll take it down for you. If you want to update it later, the same process applies.
            </p>
        </div>
        <div class="w-full px-6 py-6 mx-auto mt-10 bg-accent-gray  highlight-border rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 class="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl">Melody itni choclatey kyun hai?</h3>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                Melody khao, khud jaan jao.
            </p>
        </div>
    </div>
</section>

  </Layout>
)

export default AboutPage

