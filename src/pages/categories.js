import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import kebabCase from "lodash/kebabCase"
const _ = require("lodash") 

export default props => {
    const majorNodes = props.data.portfolio.nodes
    let categories = []
    let category = []
    majorNodes.map(majorNode => categories.push(majorNode.category))
    categories = categories.concat(category)
    const x = categories.reduce(
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
  
    let emojis = ["๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐" ,"๐งท" ,"๐", "๐"]
    

  return (
    <Layout>
    <SiteMetadata title="Categories" description="List of Categories" />
    <body class="lg:px-40">
    <div class="flex justify-center flex-col items-center">
        <h1 className="mb-1 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Categories
        </h1>
        <div class="grid grid-cols-2 px-6 py-4 lg:grid-cols-3 gap-3 ">
      {sortable.map((tag, i) => [
        <Link to={`/categories/${kebabCase(tag[0])}/`}>
          <div class=" rounded-xl">
            <div class="flex flex-col items-center justify-center col-span-1 px-12 py-6 space-y-2 border-3 border-black border-dashed border-opacity-30 hover:bg-black group rounded-xl">
              <div class="w-8 h-8 pt-1 text-center text-white bg-blue-500 rounded-full">
                {emojis[Math.floor(Math.random() * emojis.length)]}
              </div>
              <h4 class="font-bold text-center lg:text-2xl h-12 lg:h-20 tracking-wide  text-xs group-hover:text-white    rounded-md  px-4">
                {tag[0]}
              </h4>
              <h5 class="font-semibold text-center lg:text-base   tracking-wide  text-mxs group-hover:text-white  rounded-md">
                      {tag[1] > 1 ? (
                        <span class="group-hover:text-white ">{tag[1]} Projects</span>
                      ) : (
                        <span class="group-hover:text-white ">{tag[1]} Project</span>
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

export const query = graphql` {
    portfolio: allContentfulPortfolio {
        nodes {
          category
        }
  }
}
`