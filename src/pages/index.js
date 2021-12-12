import { graphql, Link } from "gatsby"
import React from "react"
import Hero from "../components/Hero"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import Cards from "../components/Cards"
import SearchGrid2 from "../components/search/searchV2"
const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SiteMetadata title="Home" description="Srishti Archives" />
      <Hero />

      <section class="lg:px-6 w-full mx-auto max-w-7xl">     
      <SearchGrid2></SearchGrid2>


      </section>

    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Home {
    portfolio: allContentfulPortfolio(filter: {featured: {eq: true}}, sort: {order: DESC, fields: createdAt}) {
      nodes {
        ...PortfolioCard
      }
    }
  }
`
