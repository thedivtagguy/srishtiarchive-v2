import React from "react"
import Layout from "../layouts/Layout"
import Cards from "../components/Cards"
import { graphql, Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
const _ = require("lodash")

const Tags = ({ pageContext, data }) => {
  const { a } = pageContext
  const { totalCount } = data.portfolio

  const toolNodes = data.portfolio.nodes
  let tags = []
  let tools = []
  toolNodes.map(toolNode => tags.push(...toolNode.tools))
  tags = tags.concat(tools)
  const x = tags.reduce(
    (acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
    {}
  )
  let sortable = []
  for (let tool in x) {
    sortable.push([tool, x[tool]])
  }
  sortable = sortable.sort(function(a, b) {
    return b[1] - a[1]
  })
  let toptools = sortable.slice(0, 3)
  return (
    <Layout>
      <div className="mx-auto overflow-hidden max-w-7xl pattern">
        <div class="flex flex-col justify-center items-start w-full px-6 py-4 lg:mx-20 sm:py-4 md:py-8 md:px-10 max-w-7xl">
          <h1 class="text-4xl font-extrabold leading-snug  lg:text-3xl xl:text-5xl">
            {a}{" "}
          </h1>
          <p class="text-lg font-medium text-gray-500 sm:text-2xl">
            {totalCount} Projects
          </p>
          <p class="text-sm font-medium text-gray-500 sm:text-lg">
            Top Tools:{" "}
            {toptools.map((tag, i) => [
              <Link to={`/tools/${kebabCase(tag[0])}/`}>
                <span class="text-xs whitespace-normal  px-2 py-1 rounded-md border-1 border-opacity-40 border-dashed border-black">
                  {" "}
                  {tag[0]}
                </span>
                {i < toptools.length - 1 ? " " : ""}
              </Link>,
            ])}
          </p>
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
  )
}

export default Tags

export const query = graphql`  

  query Author($a: String!) {
    portfolio: allContentfulPortfolio(
      filter: { 
        author: { in: [$a] }      }
      sort: { fields: [featured, createdAt], order: [ASC, DESC] }
    ) {
      nodes {
        ...PortfolioCard
        tools
      }
      totalCount
    }
  }


`
