import React from "react"
import Layout from "../layouts/Layout"
import { graphql } from "gatsby"
import Search from "../components/search/SearchBox"
const Tags = ({ pageContext, data }) => {
  const { m } = pageContext
  const { totalCount } = data.portfolio
  const majorNames = {
    HCD: 'Human Centered Design',
    VCSB: 'Visual Communication and Strategic Branding',
    BSSD: 'Business Systems and Service Design',
    IADP: 'Industrial Arts and Design Practices',
    CAC: 'Creative and Applied Computation',
    CAP: 'Contemporary Art Practices',
    DMA: 'Digital Media Arts',
    IAIDP: 'Information Arts and Information Design Practices',
    PSD: 'Public Space Design',
    CE: 'Creative Education',
    CW: 'Creative Writing',
    FILM: 'Film'
  }

  return (
    <Layout>
      <div className="max-w-6xl px-6 mx-auto overflow-hidden ">
        <div class="flex flex-col justify-center items-center w-full  py-4 space-y-4 sm:py-4 md:py-8  max-w-6xl">
          <h1 class="text-xl font-extrabold leading-snug text-center  lg:text-3xl xl:text-5xl">
            Projects by {m} students
          </h1>
         <h2 class="font-sans font-bold text-lg">
           {/* Find the matching majorName */}
           {majorNames[m]}
           
         </h2>
          <p class="text-lg font-medium text-gray-500 sm:text-2xl">
            {totalCount} Projects
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
        <Search shouldHide={true} filter={m} taxonomy="major"/>

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
