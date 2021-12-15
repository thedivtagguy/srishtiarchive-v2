import React from "react"
import Layout from "../layouts/Layout"
import Cards from "../components/Cards"
import { graphql } from "gatsby"
import FilterSearch from "../components/search/filterSearch"
const Tags = ({ pageContext, data }) => {
  const { m } = pageContext
  const { totalCount } = data.portfolio

  return (
    <Layout>
      <div className="mx-auto overflow-hidden px-6 max-w-6xl ">
        <div class="flex flex-col justify-center items-center w-full  py-4 space-y-4 sm:py-4 md:py-8  max-w-6xl">
          <h1 class="text-xl font-extrabold leading-snug text-center  lg:text-3xl xl:text-5xl">
            Projects by {m} students
          </h1>
         
          <p class="text-lg font-medium text-gray-500 sm:text-2xl">
            {totalCount} Projects
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
        <FilterSearch filter={m} taxonomy="major"/>
        </div>
        
      </div>
    </Layout>
  )
}

export default Tags

export const query = graphql`
  query Major($m: String!) {
    portfolio: allContentfulPortfolio(
      filter: { major: { in: [$m] } }
      sort: { fields: [featured, createdAt], order: [ASC, DESC] }
    ) {
      nodes {
        ...PortfolioCard
        major
      }
      totalCount
    }
  }
`
