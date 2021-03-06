import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="Why?" description="Why build an archive at all?" />

    <section class=" lg:py-20 h-full max-w-6xl px-6 mx-auto">
      <div class="flex flex-col lg:flex-row gap-5 justify-center items-center">
        <div class="flex justify-center items-start flex-col text-left">
          <h2 class="text-4xl font-extrabold w-4/5   border-0 pb-6  border-gray-300 lg:text-5xl md:text-2xl">
            I don't know about you, but I know 3 things:
          </h2>
          <p class="w-4/5 text-base text-left  sm:text-sm lg:text-xl  md:max-w-3xl md:text-left">
            1. We do a lot of work for each course.
          </p>
          <p class="w-full  text-base text-left  sm:text-sm lg:text-xl md:max-w-3xl md:text-left">
            2. The work lives for 5 weeks, after which it sits on our computers.
          </p>
          <p class="w-full  text-base text-left  sm:text-sm lg:text-xl md:max-w-3xl md:text-left">
            3. I love seeing what other people have done.
          </p>
          <p class="w-full  text-base text-left pt-4  sm:text-sm lg:text-xl md:max-w-xl md:text-left">
            An institution have a longer memory than just a few weeks. Your work
            is valuable and people should have a chance to see it. If you feel
            the same, the Archive is for you.<br></br> <br></br>A permanant
            online exhibition for your projects that you put so much work into,
            a common pool of knowledge across disciplines and years.<br></br>
            <br /> A happier place than your hard-drive.
            <span class="py-2 block"> Don't let your projects die.</span>
          </p>
        </div>
        <div>
          <div class="flex flex-col items-center col-span-10 w-full overflow-hidden border-1 border-accent-gray shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
            <a href="https://submit.srishtiarchive.com" class="block">
              <img class="mx-auto shadow-sm h-56" src="/social.png" />
            </a>
            <a href="https://submit.srishtiarchive.com">
              <div class="relative flex flex-col items-start px-6  py-4  transition duration-150 ease-in-out ">
                <h2 class="font-bold tracking-wide text-left lg:text-2xl text-sm  ">
                  <a href="https://submit.srishtiarchive.com">
                    Submit your Project
                  </a>
                </h2>
                <p class="mt-2 text-sm text-gray-500">
                  Help preserve work for future students. Free good karma, eh?
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage
