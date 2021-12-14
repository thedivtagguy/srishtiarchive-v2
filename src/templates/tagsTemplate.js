import React from 'react';
import Layout from "../layouts/Layout"
import FilterSearch from '../components/search/filterSearch';
import { graphql } from "gatsby"

const Tags = ({ data, pageContext }) => {
  const {tag } = pageContext;
  const { totalCount } = data.portfolio;
  return (
    <Layout>
      <div className="mx-auto overflow-hidden  max-w-6xl ">
    <div class="flex flex-col justify-center items-center w-full  py-4 space-y-4 sm:py-4 md:py-8  max-w-6xl">
          <h1 class="text-4xl font-extrabold leading-snug  lg:text-3xl xl:text-5xl">
            Projects made with {tag}
          </h1>
         
          <p class="text-lg font-medium text-gray-500 sm:text-2xl">
            {totalCount} Projects
          </p>
        </div>
<div className="max-w-6xl mx-auto">
        <FilterSearch filter={tag} taxonomy="tools"/>
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
