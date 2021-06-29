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
    categories = _.uniq(categories)
    let emojis = ["📓", "📔", "📒", "📕", "📗", "📘", "📙", "📚", "📖", "🔖" ,"🧷" ,"🔗", "📎"]
    

  return (
    <Layout>
    <SiteMetadata title="Categories" description="List of Categories" />
    <body class="lg:px-40">
    <div class="flex justify-center flex-col items-center">
        <h1 className="text-4xl leading-tight font-extrabold tracking-tight  bg-clip-text text-transparent bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500  sm:text-6xl mb-1">
          Categories
        </h1>
        <div class="flex justify-center py-20 mx-auto max-w-6xl items-center">
            <div class="flex lg:flex-wrap flex-col justify-center items-center lg:flex-row ">
                      {categories.map((tag, i) => [
                                            <div class="mb-12">

                        <Link to={`/categories/${kebabCase(tag)}/`}>
                                     <span className="font-bold mb-20 mx-8 w-full md:w-6/12 lg:w-3/12 text-center lg:text-4xl border-2  tracking-wide  text-sm  text-light-gray rounded-md py-2 px-4 highlight-border">{emojis[Math.floor(Math.random()*emojis.length)]}{tag}</span>
                        </Link>
                        </div>

                      ])}
            </div>
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