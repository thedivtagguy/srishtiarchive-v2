import { Link } from "gatsby"
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = () => (
  <Layout>
    <SiteMetadata title="FAQ" description="I have concerns..." />

<section class="relative min-w-screen animation-fade animation-delay">
    <div class="container flex flex-col justify-center items-center px-8 mx-auto sm:px-12 xl:px-5">
       
        <h3 class="mt-1 text-2xl font-extrabold text-left highlight-text sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center">
        Okay but...
        </h3>
        <Link to="/guidelines" className="px-4 py-2 m-auto mt-4 text-lg font-semibold tracking-wide text-center transition duration-150 ease-in-out border-yellow-600 rounded-md text-light-gray bg-accent-gray hover:bg-yellow-700 border-b-1">✔️ You might be looking for Submission Guidelines</Link>
        <div class="w-full px-6 py-6 mx-auto mt-10 bg-accent-gray  highlight-border rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
           <a href="#what-to-upload"> <h3 id="what-to-upload" class="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl hover:underline">Can I upload XYZ...?</h3></a>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                You can upload  any work done in your time at Srishti. This includes  studios, workshops, PoUs, charettes; anything! Just input the relevant unit name in the form. If it is a PoU or a charette project, enter 'Performance of Understanding' or 'Charette'.
            </p>
        </div>
        <div class="w-full px-6 py-6 mx-auto mt-10 bg-accent-gray  highlight-border rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
        <a href="#featured"><h3 id="featured" class="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl  hover:underline">What are Featured Projects?</h3></a>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
            Featured Projects are a curated selection of projects from the archive, selected by either the editorial or recommended for submission by a facilitator. This might be because the projects are well documented, contain enough information to convey the project's aim, demonstrate the use of a particular tool with a greater level of expertise and can b. This section is updated monthly.
            </p>
        </div>
        <div class="w-full px-6 py-6 mx-auto mt-10 bg-accent-gray  highlight-border rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
        <a href="#not-good-enough"><h3 id="not-good-enough" class="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl  hover:underline">I don't think I did anything good enough...</h3></a>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
             Wrong . There is no gold standard for projects uploaded here.  Any and all work you do is valuable . Do not overthink. See below.
            </p>
        </div>
        <div class="w-full px-6 py-6 mx-auto mt-10 bg-accent-gray  highlight-border rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
        <a href="#overthink"> <h3 id="overthink" class="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl hover:underline">Do I need to rework/revamp/redo/re-assemble/rethink my project?</h3></a>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
             This is not Behance . You do not need to worry about how your project looks,  we do not want to create extra work for you . As long as your files convey the purpose of your project, that's good enough. Don't overthink it. See above.
            </p>
        </div>
        <div class="w-full px-6 py-6 mx-auto mt-10 bg-accent-gray  highlight-border rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
        <a href="#ownership"><h3 id="ownership" class="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl hover:underline">Who owns my work?</h3></a>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                You do! There is no change in ownership, but your work will be shared under a CC-BY-NC-SA license, which allows people to build on it.  Your work is safely stored in a reliable server and not shared anywhere else other than this website. 
            </p>
        </div>
        <div class="w-full px-6 py-6 mx-auto mt-10 bg-accent-gray  highlight-border rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
        <a href="#terms"> <h3 id="terms" class="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl hover:underline">What are the terms of the CC-BY-NC-SA license?</h3></a>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                By putting your work under this license, you allow people to create a derivative work (work that builds on your own work), provided that they give you credit and do not use it for any commercial purposes. You can read about this license at <a class="highlight-text font-extrabold" href="https://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank">Creative Commons Website</a>.
            </p>
        </div>
        <div class="w-full px-6 py-6 mx-auto mt-10 bg-accent-gray  highlight-border rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
        <a href="#plagiarism"> <h3 id="plagiarism" class="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl hover:underline">What about plagiarism?</h3></a>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                Plagiarism is a valid concern. By using the Archive, students agree to adhere to <a href="http://srishtimanipalinstitute.in/policies/srishti-policy-on-ethical-conduct-and-practice" target="_blank" class="highlight-text font-extrabold">Srishti Manipal's Policy on Ethical Conduct and Practice</a>. The same penalties for violation apply.
            </p>
        </div>
        <div class="w-full px-6 py-6 mx-auto mt-10 bg-accent-gray  highlight-border rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
        <a href="#update">  <h3 id="update" class="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl hover:underline">Can I update or remove my work later?</h3></a>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                Of course! If you change your mind about keeping it up later, you can just email us with your entry ID and we'll take it down for you. If you want to update it later, the same process applies.
            </p>
        </div>
        <div class="w-full px-6 py-6 mx-auto mt-10 bg-accent-gray  highlight-border rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
        <a href="#melody">   <h3 id="melody" class="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl hover:underline">Melody itni chocolatey kyun hai?</h3></a>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                Melody khao, khud jaan jao.
            </p>
        </div>
    </div>
</section>

  </Layout>
)

export default AboutPage

