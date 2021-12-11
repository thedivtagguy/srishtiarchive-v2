import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Card = props => {
  const {
    major,
    tools,
    thumbnailUrl,
    featured,
    groupmembers,
    category,
    items = tools.slice(0, 1),
    name,
    author,
    year,
    slug,
    description,
  } = props
  return (
    <div class=" max-w-sm">
      <Link to={`/${slug}`}>
        <div className="h-full overflow-hidden transition duration-300 ease-in-out border-black rounded-xl border-3 group">
          <div className="h-56 transition duration-150 ease-in-out group-hover:opacity-75">
            {thumbnailUrl ? (
              <img
                style={{ width: "444px" }}
                className="object-cover h-56"
                src={thumbnailUrl}
                alt="Project Thumbnail"
              />
            ) : (
              <img
                style={{ width: "444px" }}
                className="object-cover h-56"
                src="/social.png"
                alt="Thumbnail for Project"
              />
            )}
          </div>

          <div className="p-4 sm:p-5">
            <div class="flex flex-row justify-between">
              <p class="uppercase tracking-wide mx-2 mb-1 font-medium text-sm text-gray-800">
                {major}
              </p>
              <p class="uppercase">
                {" "}
                {featured && (
                  <span class="text-xs px-4 text-srishti-red font-bold">
                    Featured
                  </span>
                )}
              </p>
            </div>
            <div class="h-16">
            <h1 className="px-2 text-xl font-extrabold ">{name}</h1>
            </div>
          </div>
          <div class="">
          <p className="px-6 text-sm font-semibold tracking-wider">
              <span class="text-gray-800 rounded-md px-1 py-1">
                {author} {groupmembers && <span class="text-xs">et al.</span>}
              </span>
            </p>
            <p class="text-xs font-bold pl-6 mx-1 py-2  text-gray-700">{category}</p>
           
          </div>

          <div class="flex-1 pr-4 pb-4 mx-1 inline-flex items-center">
            {items.map((tag, i) => [
              <p
                class="text-xs whitespace-normal ml-6 px-2 rounded-md border-2 border-black"
                key={i}
              >
                <span class="text-black tracking-wider font-semibold">
                  {tag}
                </span>
                {i < items.length - 1 ? ", " : ""}
              </p>,
            ])}
          </div>
        </div>
      </Link>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default Card

export const query = graphql`
  fragment PortfolioCard on ContentfulPortfolio {
    id
    name
    slug
    major
    year
    category
    featured
    thumbnailUrl
    groupmembers
    author
    tools
    description {
      description
    }
  }
`
