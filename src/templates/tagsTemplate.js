import React from 'react';
import Layout from "../layouts/Layout"
import Cards from "../components/Cards"
import { graphql } from "gatsby"

const Tags = ({ data, pageContext }) => {
  const {tag } = pageContext;
  const { totalCount } = data.portfolio;
  return (
    <Layout>
    <div className="mx-auto overflow-hidden  pattern">
    <div class="flex flex-col justify-start items-start w-full px-6 py-4 lg:mx-20 sm:py-4 md:py-8 md:px-10 max-w-7xl">

<h1 class="text-4xl font-extrabold leading-snug  lg:text-3xl xl:text-5xl">Projects made with {tag}</h1>
<p class="text-lg font-medium text-gray-500 sm:text-2xl">{totalCount} Projects</p>
</div>
<div class="lg:px-24">
      {data.portfolio && data.portfolio.nodes.length > 0 ? (
        <Cards items={data.portfolio.nodes} />
      ) : (
        <div className="container">No projects found.</div>
      )}
      </div>
    </div>
  </Layout>
  );
};

export default Tags;

export const query = graphql`
query Tags($tag: String!) {
  portfolio: allContentfulPortfolio(filter: {tools: { in: [$tag]}}, sort: { fields: [featured, createdAt], order: [ASC, DESC] }) {
    nodes {
      ...PortfolioCard
    }
    totalCount
  }
}
`
