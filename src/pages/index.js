import { graphql, Link } from "gatsby"
import React from "react"
import Hero from "../components/Hero"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import Cards from "../components/Cards"
import Top from "../components/TopTools"
import Category from "../components/TopCategories"
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Home" description="Srishti Archives" />
      <Hero />

      <section class="lg:px-8">
        <div class="lg:pb-4 pb-2 flex lg:flex-row flex-col justify-between items-center">
          <h2 className="px-8 pb-2 text-xl font-extrabold leading-tight tracking-tight text-transparent lg:pb-4 bg-clip-text bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 sm:text-4xl">
            Featured Projects <span class="text-white">🎉</span>
          </h2>
          <div class="lg:block md:block hidden">
            <Link
              className="px-12 py-2 m-2 mx-8 text-sm font-semibold tracking-wide text-center transition duration-150 ease-in-out rounded-md text-light-gray bg-accent-gray hover:bg-yellow-700"
              to="/all">
              See All Projects ➡️
            </Link>
          </div>
        </div>
        {data.portfolio && data.portfolio.nodes.length > 0 ? (
          <Cards no="4" items={data.portfolio.nodes} />
        ) : (
          <div className="container">No projects found.</div>
        )}
        <div class="flex items-center justify-center pb-4 lg:hidden md:hidden">
          <Link
            className="w-full px-4 py-2 mx-8 text-sm font-semibold tracking-wide text-center text-white transition duration-150 ease-in-out bg-purple-700 rounded-md hover:bg-yellow-700"
            to="/all">
            See All Projects ➡️
          </Link>
        </div>

        <div class="grid lg:grid-cols-2 py-8  px-4 gap-8">
          
          <div class="flex flex-col px-4">
            <div class="lg:pb-4 pb-2 flex lg:flex-row flex-col justify-between items-center">
              <h2 className="pb-2 text-xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 sm:text-4xl">
                Popular Tools <span class="text-white ">🧰</span>
              </h2>
              <div class="lg:block md:block hidden">
                <Link
                  className="px-12 py-2 text-sm font-semibold tracking-wide text-center transition duration-150 ease-in-out rounded-md text-light-gray bg-accent-gray hover:bg-yellow-700"
                  to="/tools">
                  See All Tools ➡️
                </Link>
              </div>
            </div>
            <Top/>
          </div>

          <div class="flex flex-col px-4">
            <div class="lg:pb-4 pb-2 flex lg:flex-row flex-col justify-between items-center">
              <h2 className="pb-2 text-xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 sm:text-4xl">
              Categories <span class="text-white ">📋</span>
              </h2>
              <div class="lg:block md:block hidden">
                <Link
                  className="px-12 py-2 text-sm font-semibold tracking-wide text-center transition duration-150 ease-in-out rounded-md text-light-gray bg-accent-gray hover:bg-yellow-700"
                  to="/categories">
                  See All Categories ➡️
                </Link>
              </div>
            </div>
            <Category/>
          </div>        
        </div>
        

        <div class="flex lg:py-20 px-8 flex-col items-center justify-center leading-7 text-gray-900 border-0 border-gray-200 lg:items-start lg:flex-row">
            <Link to="/all" className="inline-flex items-center justify-start w-full px-5 py-2 mt-6 ml-0 font-sans text-base font-bold leading-none text-white no-underline bg-purple-700 border border-purple-700 border-solid rounded-lg cursor-pointer lg:py-4 md:w-auto lg:mt-0 hover:bg-purple-800 hover:border-purple-800 hover:text-white focus-within:bg-indigo-700 focus-within:border-indigo-700 lg:text-2xl focus-within:text-white lg:ml-6 md:text-base">
               View Full Projects Archive
                <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-8 lg:h-8 w-5 h-5 ml-2 lg:mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </Link>
        </div>
 

      </section>

    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Home {
    portfolio: allContentfulPortfolio(filter: { featured: { eq: true } }) {
      nodes {
        ...PortfolioCard
      }
    }
  }
`
