import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"

const trial = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />
<div class="font-sans antialiased h-screen flex">
   
    <div class="bg-gray-900 text-purple-lighter flex-none w-64 pb-6 hidden md:block">
        <div class="text-white mb-2 mt-3 px-4 flex justify-between">
            <div class="flex-auto">
                <h1 class="font-semibold text-xl leading-tight mb-1 truncate">Filters</h1>
               
            </div>
            
        </div>
        <div class="mb-8">
            <div class="px-4 mb-2 text-white flex justify-between items-center">
                <div class="opacity-75">Channels</div>
               
            </div>
            <div class="bg-teal-dark py-1 px-4 text-white"># general</div>
        </div>
       
        <div>
            <div class="px-4 mb-2 text-white flex justify-between items-center">
                <div class="opacity-75">Apps</div>
              
            </div>
        </div>
    </div>
    <div class="flex-1 flex flex-col bg-white overflow-hidden">
        
</div>
</div>      
  </Layout>
)

export default trial

export const query = graphql`
  query Q {
    portfolio: allContentfulPortfolio {
      nodes {
        ...PortfolioCard
      }
    }
  }
`

