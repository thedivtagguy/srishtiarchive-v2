import React from 'react';
import Layout from "../layouts/Layout"
import Cards from "../components/Cards"
import { graphql } from "gatsby"

const Tags = ({ data }) => {
  return (
    <Layout>
  
    <div className="bg-gray-100 py-12 lg:py-16">
      {data.portfolio && data.portfolio.nodes.length > 0 ? (
        <Cards items={data.portfolio.nodes} />
      ) : (
        <div className="container">No projects found.</div>
      )}
    </div>
  </Layout>
  );
};

export default Tags;

export const query = graphql`
query Years($year: String!) {
  portfolio: allContentfulPortfolio(filter: {year: { in: [$year]}}) {
    nodes {
      ...PortfolioCard
    }
  }
}
`
