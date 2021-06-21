import { graphql } from "gatsby"
import React from "react"
import Hero from "../components/Hero"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import SearchGrid from "../components/search/search"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Home" description="Srishti Archives" />

      <Hero />
     <SearchGrid></SearchGrid>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    portfolio: allContentfulPortfolio {
      nodes {
        ...PortfolioCard
      }
    }
  }
`