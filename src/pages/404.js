import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import { StaticImage } from "gatsby-plugin-image"

const ErrorPage = () => (
  <Layout>
    <SiteMetadata title="Error 404" description="The page doesn't exists" />

    <div >
      <div className="max-w-7xl flex flex-wrap lg:flex-nowrap justify-around items-start mx-auto  px-8 lg:px-24 py-12">
        <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
          <h1 className="text-3xl leading-tight pb-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Wapas aa gaye, <br></br> woh bhi khaali haat?
          </h1>

          <h2 className="text-xl leading-tight font-semibold tracking-tight text-srishti-red sm:text-2xl">
            Looks like we don't have anything at this address. <br></br>This is a booboo. <br></br> Please look away. <br></br> I swear I thought this wouldn't happen.
            <br></br>
            Ugh. 
            <br></br>
            <br></br>
            Arey yaar mat dekh idhar.
          </h2>
        </div>
        <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
          <StaticImage src="../images/lost.png" alt="404" width="500" quality="100"/>
        </div>
      </div>
    </div>
  </Layout>
)

export default ErrorPage
