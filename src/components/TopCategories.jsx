import { graphql, Link , useStaticQuery} from "gatsby"
import React from "react"
import kebabCase from "lodash/kebabCase"

const Category = () => {
  const data = useStaticQuery(graphql`
  query {
  allContentfulPortfolio {
    nodes {
      category
    }
  }
}
  `)
  const toolNodes = data.allContentfulPortfolio.nodes
  let tags = []
  let category = []
  toolNodes.map(toolNode => tags.push(toolNode.category))
  tags = tags.concat(category)
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
  sortable = sortable.slice(0, 3)
  let emojis = [
    "📁",
    "🧭",
    "📜",
    "📓",
    "📌",
    "✒️",
  ]
  return (
    <div class="grid grid-cols-1 gap-3 ">
      {sortable.map((tag, i) => [
        <Link to={`/categories/${kebabCase(tag[0])}/`}>
          <div class=" rounded-xl" key={i}>
            <div class="flex flex-row items-center justify-center col-span-1 px-2 py-4 bg-accent-gray hover:bg-purple-600 rounded-xl">
              <div class="w-8 h-8 pt-1 text-center text-white bg-blue-500 rounded-full">
                {emojis[Math.floor(Math.random() * emojis.length)]}
              </div>
              <h4 class="font-bold text-center lg:text-xl  tracking-wide  text-sm  text-light-gray rounded-md py-2 px-4">
                {tag[0]}
              </h4>
            </div>
          </div>
        </Link>,
      ])}
    </div>
  )
}

export default Category;
