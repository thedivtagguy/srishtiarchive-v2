import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import kebabCase from "lodash/kebabCase"
const _ = require("lodash")

export default props => {
  const toolNodes = props.data.portfolio.nodes
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

  return (
    <Layout>
      <SiteMetadata title="Tools" description="List of Tools" />
      <body class="lg:px-40">
        <div class="flex justify-center flex-col items-center">
          <h1 className="mb-1 text-4xl font-extrabold leading-tight tracking-tight  sm:text-6xl">
            Tools
          </h1>
          <div class="grid grid-cols-2 px-6 py-4 lg:grid-cols-3 gap-3 ">
            {sortable.map((tag, i) => [
              <Link to={`/tools/${kebabCase(tag[0])}/`}>
                <div class=" rounded-xl">
                  <div class="flex flex-col items-center justify-center col-span-1 px-8 py-8 group space-y-4 border-dashed hover:bg-black border-3 border-opacity-30 border-black rounded-xl">
                    <h4 class="font-bold text-center lg:text-2xl   tracking-wide  text-xl group-hover:text-white   rounded-md px-4">
                      {tag[0]}
                    </h4>
                    <h5 class="font-semibold text-center lg:text-base   tracking-wide  text-xl  group-hover:text-white rounded-md">
                      {tag[1] > 1 ? (
                        <span class="group-hover:text-white">{tag[1]} Projects</span>
                      ) : (
                        <span class="group-hover:text-white">{tag[1]} Project</span>
                      )}
                    </h5>
                  </div>
                </div>
              </Link>
            ])}
          </div>
        </div>
      </body>
    </Layout>
  )
}

export const query = graphql`
  {
    portfolio: allContentfulPortfolio {
      nodes {
        tools
      }
    }
  }
`
