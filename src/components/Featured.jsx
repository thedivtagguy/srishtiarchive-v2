import React from 'react';
import Layout from "../layouts/Layout"
import Cards from "../components/Cards"
import { graphql } from "gatsby"

const Featured = props => {
  return (
    <Layout>
      
    <section class="px-8">
      
      {props.portfolio && props.portfolio.nodes.length > 0 ? (
        <Cards no="4" items={props.portfolio.nodes} />
      ) : (
        <div className="container">No projects found.</div>
      )}
    </section>
  </Layout>
  )
}

export default Featured

export const query = graphql`
  query ome {
    portfolio: allContentfulPortfolio(filter: { featured: { eq: true } }) {
      nodes {
        ...PortfolioCard
      }
    }
  }
`