import { graphql, Link , useStaticQuery} from "gatsby"
import React from "react"
import kebabCase from "lodash/kebabCase"

const Top = () => {
  const data = useStaticQuery(graphql`
  query {
  allContentfulPortfolio {
    nodes {
      tools
    }
  }
}
  `)
  const toolNodes = data.allContentfulPortfolio.nodes
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
  sortable = sortable.slice(0, 6)
  let emojis = [
    "📓",
    "📔",
    "📒",
    "📕",
    "📗",
    "📘",
    "📙",
    "📚",
    "📖",
    "🔖",
    "🧷",
    "🔗",
    "📎",
  ]
  return (
    <div class="grid grid-cols-3 lg:grid-cols-3 gap-3 ">
      {sortable.map((tag, i) => [
        <Link to={`/tools/${kebabCase(tag[0])}/`}>
          <div class=" rounded-xl">
            <div class="flex flex-col items-center justify-center col-span-1 px-2 py-4 space-y-4 hover:bg-purple-600 bg-accent-gray rounded-xl">
              <div class="w-8 h-8 pt-1 text-center text-white bg-blue-500 rounded-full">
                {emojis[Math.floor(Math.random() * emojis.length)]}
              </div>
              <h4 class="font-bold text-center lg:text-xl   tracking-wide  text-xs  text-light-gray rounded-md py-2 px-4">
                {tag[0]}
              </h4>
            </div>
          </div>
        </Link>,
      ])}
    </div>
  )
}

export default Top;
