import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Card = props => {
  const { major, tools, items = tools.slice(0, 2), name, author, year, slug, description, thumbnail } = props
  return (
    <div class="h">
    <Link to={`/${slug}`}>
      <div className="bg-accent-gray pt-4 rounded-lg overflow-hidden group">
        <div className="group-hover:opacity-75 transition duration-150 ease-in-out"></div>
        <div className="p-4 h-54 sm:p-5">
          <p class="uppercase tracking-wide px-4 text-sm font-bold text-lime">{major}
</p>
          <h1 className="text-xl px-4 bg-clip-text text-transparent bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 font-extrabold">
            {name}
          </h1>
          <p className="text-light-gray px-4 py-4 h-24 line-clamp-4 text-sm">
            {description.description}
          </p>
        </div>
        <div class="flex p-4 px-4 border-t mt-2 border-gray-900 text-gray-600">
          <div class="flex-1 pl-4 inline-flex items-center">
            <svg
              class="h-5 w-5 mr-3 text-gray-200"
              fill="#F1FFFA"
              aria-hidden="true"
              focusable="false"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 16 16"
            >
              <g>
                <path d="M6 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6zm-5 6s-1 0-1-1s1-4 6-4s6 3 6 4s-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
              </g>
              <rect
                x="0"
                y="0"
                width="16"
                height="16"
                fill="rgba(0, 0, 0, 0)"
              />
            </svg>
            <p class="text-xs text-lime font-semibold pr-1">
              {year}
            </p>
          </div>
          <div class="flex-1 pr-4 inline-flex items-center">
            <svg
              class="h-5 w-5 mr-2 text-gray-200"
              fill="#F1FFFA"
              aria-hidden="true"
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                stroke-width="1"
                d="M29.415 21.666l-6.335-6.335l6.334-6.334a2 2 0 0 0 .001-2.829l-.001-.002l-3.58-3.58a2 2 0 0 0-2.829-.001l-.001.001L16.67 8.92l-6.335-6.335a2.004 2.004 0 0 0-2.828 0L2.585 7.506a2.001 2.001 0 0 0 0 2.829l6.334 6.334L2 23.59V30h6.41l6.92-6.92l6.335 6.337a2.008 2.008 0 0 0 2.83 0l4.92-4.922a2.001 2.001 0 0 0 0-2.829zm-5.002-17.67l3.59 3.59l-6.333 6.334l-3.59-3.59zM8 28H4v-3.591l6.33-6.329l3.676 3.678zm15.08.004L4 8.92L8.922 4l3.788 3.787l-2.252 2.253l1.415 1.414l2.251-2.252l4.13 4.13L16 15.582l1.416 1.414l2.252-2.252l4.13 4.13l-2.252 2.251l1.414 1.415l2.252-2.251l2.79 2.791z"
              />
              <rect
                stroke-width="1"
                x="0"
                y="0"
                width="32"
                height="32"
                fill="rgba(0, 0, 0, 0)"
              />
            </svg>
            {items.map((tag, i) => [
              <p class="text-xs whitespace-normal pl-1" key={i}>
                <span class="text-lime font-semibold">{tag}</span>
                {i < items.length - 1 ? ", " : ""}
              </p>,
            ])}
          </div>
        </div>
        <div class="px-4 pt-3 pb-4 border-t border-gray-900 bg-accent-gray">
        
          <div class="flex items-center">
            <div>
              <p class="font-bold px-4 text-md text-light-gray">
                {" "}
               {author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>


  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    localFile: PropTypes.object,
  }),
}

export default Card

export const query = graphql`
  fragment PortfolioCard on ContentfulPortfolio {
    id
    name
    slug
    major
    year
    author
    tools
    description {
      description
    }
    thumbnail {
      localFile {
        childImageSharp {
          fluid(maxWidth: 444, maxHeight: 342, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    summary
  }
`
