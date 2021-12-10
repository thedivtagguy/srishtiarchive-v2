import React from 'react';
import Layout from "../layouts/Layout"
import Cards from "../components/Cards"
import { graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const {y } = pageContext;
  const { totalCount } = data.portfolio;
  return (
    <Layout>
  <div className="mx-auto overflow-hidden  pattern">
    <div class="flex flex-col justify-start items-start w-full px-10 py-4 lg:mx-20 sm:py-4 md:py-8 md:px-10 max-w-7xl">

<h1 class="text-4xl font-extrabold leading-snug  lg:text-3xl xl:text-5xl">Projects by {y} students</h1>
<p class="text-lg font-medium text-gray-500 sm:text-2xl">{totalCount} Projects</p>
</div>
<div class="px-2 lg:px-24">
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
query Years($y: String!) {
  portfolio: allContentfulPortfolio(filter: {year: { in: [$y]}},  sort: { fields: [featured, createdAt], order: [ASC, DESC] }) {
    nodes {
      ...PortfolioCard
      year
    }
    totalCount
  }
}
`
