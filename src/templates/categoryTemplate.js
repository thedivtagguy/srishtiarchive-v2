import React from 'react';
import Layout from "../layouts/Layout"
import Cards from "../components/Cards"
import { graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
    const {c } = pageContext;
    const { totalCount } = data.portfolio;
  return (
    <Layout>
 
    <div className="mx-auto overflow-hidden bg-gray-900 pattern">
    <div class="flex flex-col justify-start items-start w-full px-12 py-4 lg:mx-20 sm:py-4 md:py-8 md:px-10 max-w-7xl">

<h1 class="text-4xl font-extrabold leading-snug text-lime lg:text-3xl xl:text-5xl">{c} </h1>
<p class="text-lg font-medium text-gray-500 sm:text-2xl">{totalCount} Projects</p>
</div>
<div class="px-4 lg:px-24">
 
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
query Category($c: String!) {
  portfolio: allContentfulPortfolio(filter: {category: { in: [$c]}},  sort: { fields: [featured, createdAt], order: [ASC, DESC] }) {
    nodes {
      ...PortfolioCard
      category
    }
    totalCount
  }
}
`
