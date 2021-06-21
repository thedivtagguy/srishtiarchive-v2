import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  Hits,
  Highlight,
  connectStateResults,
  SearchBox,
  RefinementList,
  PoweredBy,
} from "react-instantsearch-dom"
import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

//Error Handling
const Results = connectStateResults(
  ({ searchState, searchResults, children }) =>
    searchResults && searchResults.nbHits !== 0 ? (
      children
    ) : (
      <div class="mx-auto flex justify-center items-center flex-col">
        {" "}
        <h1 class="text-4xl py-8 font-bold uppercase w-1/2 text-lime text-center">
          I literally don't know what you mean by {searchState.query}. <br></br>{" "}
          <span class="text-xs">you good my dude?</span>
        </h1>
        <img
          src="https://media.giphy.com/media/ghuvaCOI6GOoTX0RmH/giphy.gif"
          alt="Not Found"
        ></img>
      </div>
    )
)

//Search Grid

const SearchGrid = () => {
  return (

    <div className="bg-gray-900 pattern">
    <div>
    </div>
    <InstantSearch searchClient={searchClient} indexName="archives">

    <div class="font-sans  antialiased lg:h-screen flex">
      <div class="bg-gray-800 border-r-4 border-saffron flex-none pl-4 py-4 w-64 pb-6 hidden md:block">
        <div class="text-mint-cream mb-2 mt-3 px-4 flex justify-between">
          <div class="flex-auto">
            <h1 class="font-semibold text-lime text-xl leading-tight mb-1 truncate">
              Filters
            </h1>
          </div>
        </div>
        <div class="mb-8">
          <div class="px-4 mb-2 text-white flex justify-between items-center">
          <RefinementList attribute="major" />
          </div>
          <div class="bg-teal-dark py-1 px-4 text-white"><RefinementList attribute="year" />
</div>
        </div>
        <div>
          <div class="px-4 mb-2 text-white flex justify-between items-center">
            <div class="opacity-75">Majors</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full bg-transparent">
      <div>
      <div className="container">
          <div class="flex-row flex">
            <div class="flex-1">
              <SearchBox
                className="search"
                translations={{
                  placeholder: "Start Typing...",
                }}
              />
            </div>
            <div
              id="power"
              class="px-4 flex-grow-0	 bg-mint-cream shadow-orange"
            >
              <PoweredBy />
            </div>
          </div>

          <Results>
            <div class="py-8">
              <Hits hitComponent={Hit} />
            </div>
          </Results>
      </div>
    </div>
      </div>
    </div>
    </InstantSearch>

  </div>

    
  )
}

function Hit(props) {
  return (
    <div clas="flex flex-row ">
      <Link to={`/${props.hit.slug}`}>
        <div className="bg-gray-800 h-full rounded-sm overflow-hidden group">
          <div className="group-hover:opacity-75 transition duration-150 ease-in-out"></div>
          <div className="p-4 sm:p-5">
            <p class="uppercase tracking-wide text-sm font-bold text-lime"></p>
            <h1 className="text-xl text-mint-cream font-bold">
              {" "}
              <Highlight attribute="name" hit={props.hit} />
            </h1>
            <p className="text-mint-cream h-20 line-clamp-4 text-sm">
              <Highlight attribute="description.description" hit={props.hit} />
            </p>
          </div>
          <div class="flex p-4 border-t border-gray-900 text-gray-600">
            <div class="flex-1 inline-flex items-center">
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
              <p class="text-xs text-lime font-semi-bold pr-1">
                {" "}
                <Highlight attribute="year" hit={props.hit} />
              </p>
            </div>
            <div class="flex-1 inline-flex items-center">
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

              <p class="text-xs whitespace-normal pl-1">
                <span class="text-lime font-semibold">
                  <Highlight attribute="tools" hit={props.hit} />
                </span>
              </p>
            </div>
          </div>
          <div class="px-4 pt-3 pb-4 border-t border-gray-900 bg-gray-700">
            <div class="text-xs uppercase font-bold text-gray-500 tracking-wide">
              Made By
            </div>
            <div class="flex items-center">
              <div>
                <p class="font-bold text-md text-gray-300">
                  {" "}
                  <Highlight attribute="author" hit={props.hit} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
Hit.propTypes = {
  hit: PropTypes.object.isRequired,
}

export default SearchGrid
