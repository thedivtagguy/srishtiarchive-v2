import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  Hits,
  Highlight,
  connectStateResults,
  SearchBox,
  RefinementList,
  PoweredBy,
  ClearRefinements,
  MenuSelect,
  ToggleRefinement,
} from "react-instantsearch-dom"
import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import Mobilebar from "./mobilefilter"
import TextLoop from "react-text-loop"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

//Search Grid
const SearchGrid = () => {
  return (
    <div id="search-box" className="mx-auto bg-transparent pattern max-w-7xl">
      <div class="search-box-contents">
        <div class="sticky top-0 ">
          <InstantSearch searchClient={searchClient} indexName="archives">
            {/* <Mobilebar/> */}
            <div class="flex sticky top-0">
              <div class="bg-accent-gray h-screen  rounded-tr-xl rounded-br-xl sticky top-0 pl-4 w-3/12 pb-6 hidden md:block">
                <div class="sticky top-0 pt-2">
                  <div class="py-2 mt-4 w-2/3 flex justify-start items-center mx-4">
                    <ClearRefinements />
                  </div>
                  <div class="px-4 pt-2">
                    <h1 class="font-bold bg-clip-text text-transparent text-lime tracking-wide text-sm leading-tight mb-1 truncate">
                      Featured Projects
                    </h1>
                  </div>
                  <div>
                    <div class="mb-2 text-white flex justify-between items-center">
                      <div class="bg-teal-dark py-1 px-4  text-sm text-black">
                      <RefinementList attribute="featured" className="pb-2 featurelist" transformItems={items =>
                        items.map(item => ({
                          ...item,
                          label: item.label.replace("true", "Featured Projects Only"),
                        }))
                      } />
                      </div>
                    </div>
                  </div>
                  <div class="text-mint-cream mb-2 mt-3 px-4 flex justify-between">
                    
                    <div class="flex flex-col">
                      <h1 class="font-bold pb-2  tracking-wide text-lime text-sm leading-tight mb-1 truncate">
                        Major
                      </h1>
                      <div class="mb-2  w-2/3 text-black text-sm font-semibold">
                        <MenuSelect attribute="major"></MenuSelect>
                      </div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <div class="px-4 pt-2">
                      <h1 class="font-bold tracking-wide  text-lime text-sm leading-tight mb-1 truncate">
                        Category
                      </h1>
                    </div>
                    <div class="bg-teal-dark py-1 px-4  text-white">
                      <RefinementList
                        attribute="category"
                        className="categoryList"
                      />
                    </div>
                  </div>
                  <div class="mb-2">
                    <div class="px-4 pt-2">
                      <h1 class="font-bold  tracking-wide text-lime text-sm leading-tight mb-1 truncate">
                        Year
                      </h1>
                    </div>
                    <div class="bg-teal-dark py-1 px-4 text-white">
                      <RefinementList attribute="year" className="yearlist" />
                    </div>
                  </div>
                  <div class="px-4 pt-2">
                    <h1 class="font-bold bg-clip-text text-transparent text-lime tracking-wide text-sm leading-tight mb-1 truncate">
                      Tools
                    </h1>
                  </div>
                  <div>
                    <div class="mb-2 text-white flex justify-between items-center">
                      <div class="bg-teal-dark py-1 px-4 w-2/3 text-sm text-black">
                        <MenuSelect limit={15} attribute="tools"></MenuSelect>
                      </div>
                    </div>
                  </div>
            
                </div>
              </div>
              <div class="w-full">
                <div class="h-full">
                  <div className="container w-full">
                    <div class="mx-auto lg:flex-row flex-col lg:flex justify-start items-center gap-2 md:hidden hidden">
                      <div class="flex-none">
                        <h2 class="font-semibold w-full tracking-wide text-center text-lg  text-light-gray">
                          Search for anything, like{" "}
                        </h2>
                      </div>
                      <div class="flex-grow-0">
                        <TextLoop
                          springConfig={{ stiffness: 180, damping: 15 }}
                        >
                          <span class="font-semibold w-full tracking-wider text-center text-base text-light-gray rounded-md py-1 px-2 bg-accent-gray">
                            HCD
                          </span>
                          <span class="font-semibold w-full tracking-wider text-center text-base text-light-gray rounded-md py-1 px-2 bg-accent-gray">
                            VCSB
                          </span>
                          <span class="font-semibold w-full tracking-wider text-center text-base text-light-gray rounded-md py-1 px-2 bg-accent-gray">
                            Photoshop
                          </span>
                          <span class="font-semibold w-full tracking-wider text-center text-base text-light-gray rounded-md py-1 px-2 bg-accent-gray">
                            Illustrations
                          </span>
                          <span class="font-semibold w-full tracking-wider text-center text-base text-light-gray rounded-md py-1 px-2 bg-accent-gray">
                            Figma
                          </span>
                          <span class="font-semibold w-full tracking-wider text-center text-base text-light-gray rounded-md py-1 px-2 bg-accent-gray">
                            Student Name
                          </span>
                          <span class="font-semibold w-full tracking-wider text-center text-base text-light-gray rounded-md py-1 px-2 bg-accent-gray">
                            2nd year
                          </span>
                        </TextLoop>
                      </div>
                    </div>
                    <div class="flex flex-row lg:hidden md:hidden px-16 justify-center items-center gap-2 w-full">
                      <div class="flex-none">
                        <h2 class="font-semibold w-full tracking-wide text-center text-xs  text-light-gray">
                          Search for anything, like{" "}
                        </h2>
                      </div>
                      <div class="flex-grow-0">
                        <TextLoop
                          springConfig={{ stiffness: 180, damping: 15 }}
                        >
                          <span class="font-semibold w-full tracking-wide text-center text-xs  text-light-gray rounded-md px-2 bg-accent-gray">
                            HCD
                          </span>
                          <span class="font-semibold w-full tracking-wide text-center text-xs  text-light-gray rounded-md px-2 bg-accent-gray">
                            VCSB
                          </span>
                          <span class="font-semibold w-full tracking-wide text-center text-xs  text-light-gray rounded-md px-2 bg-accent-gray">
                            Photoshop
                          </span>
                          <span class="font-semibold w-full tracking-wide text-center text-xs  text-light-gray rounded-md px-2 bg-accent-gray">
                            Illustrations
                          </span>
                          <span class="font-semibold w-full tracking-wide text-center text-xs  text-light-gray rounded-md px-2 bg-accent-gray">
                            2nd year
                          </span>
                        </TextLoop>
                      </div>
                    </div>
                    <div>
                      <h3 class="lg:hidden md:hidden block font-semibold w-full py-2 tracking-wide text-center text-mxs  text-white">
                        ⚡ PS: We've got advanced filtering on desktop ⚡
                      </h3>
                    </div>
                    <div class="flex-row flex z-10 py-2 sticky top-0">
                      <div class="flex-1 ">
                        <SearchBox
                          className="search"
                          translations={{
                            placeholder: "Type keywords to search...",
                          }}
                        />
                      </div>
                      <div
                        id="power"
                        class="px-4 flex-grow-0	lg:block md:block hidden rounded-tr-lg rounded-br-lg bg-light-gray shadow-orange"
                      >
                        <PoweredBy />
                      </div>
                    </div>
                    <div class="flex w-full">
                      <Results>
                        <div class="py-2">
                          <Hits hitComponent={Hit} />
                          <div
                            id="mobile-alg"
                            class="lg:hidden md:hidden mx-auto flex justify-center items-center"
                          >
                            <PoweredBy />
                          </div>
                        </div>
                      </Results>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </InstantSearch>
        </div>
      </div>
    </div>
  )
}

function Hit(props) {
  const items = props.hit.tools.slice(0, 1)

  return (
    <div class="px-0">
      <Link to={`/${props.hit.slug}`}>
        <div className="h-full overflow-hidden transition duration-300 ease-in-out rounded-lg bg-accent-gray group">
          <div className="h-56 transition duration-150 ease-in-out group-hover:opacity-75">
            {props.hit.thumbnailUrl ? (
              <img
                style={{ width: "444px" }}
                className="object-cover h-56"
                src={props.hit.thumbnailUrl}
              />
            ) : (
              <img
                style={{ width: "444px" }}
                className="object-cover h-56"
                src="/social.png"
              />
            )}
          </div>
  

          <div className="h-40 p-4 mb-12 sm:p-5">
          <div class="flex flex-row justify-between">
            <p class="uppercase tracking-wide mx-2 mb-1  text-sm font-bold text-light-gray "><span class="bg-purple-700 rounded-md px-2"> <Highlight attribute="major" hit={props.hit} /></span> </p>
            <p class="capitalize">      {props.hit.featured && <span class="text-xs px-4 text-yellow-500 font-bold">⭐ Featured</span>}
            </p>
          </div>
            
            <h1 className="px-2 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600">
              {" "}
              <Highlight attribute="name" hit={props.hit} />
            </h1>

            <p className="h-20 px-2 py-2 text-xs text-light-gray lg:py-4 lg:h-20 md:h-24 line-clamp-3 lg:text-sm md:text-sm">
              {
                <Highlight
                  attribute="description.description"
                  hit={props.hit}
                />
              }
            </p>
          </div>
          <div class="">
            <p className="px-6 py-1 text-sm font-semibold tracking-wider">
              <span class="text-blue-300 rounded-md px-1 py-1">
                <Highlight attribute="category" hit={props.hit} />
              </span>
            </p>
          </div>
          <div class="flex p-4 px-2 border-t mt-2 border-gray-900 text-gray-600">
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
                  <path d="M6 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6zm-5 6s-1 0-1-1s1-4 6-4s6 3 6 4s-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />{" "}
                </g>
                <rect
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                  fill="rgba(0, 0, 0, 0)"
                />{" "}
              </svg>
              <p class="text-sm text-blue-300 tracking-wider font-semibold pr-1">
                {" "}
                <Highlight attribute="year" hit={props.hit} />
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
                <p class="text-sm whitespace-normal pl-1" key={i}>
                  <span class="text-blue-300 tracking-wider font-semibold">
                    {tag}
                  </span>
                  {i < items.length - 1 ? ", " : ""}
                </p>,
              ])}
            </div>
          </div>
          <div class="px-4 pt-3 pb-4 border-t border-gray-900 bg-accent-gray">
            <div class="flex items-center">
              <div>
                <p class="font-bold px-2 text-md  text-light-gray">
                  <Highlight attribute="author" hit={props.hit} />{" "}
                  {props.hit.groupmembers && (
                    <span class="text-xs">et al.</span>
                  )}
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

//Error Handling Piece
const Results = connectStateResults(
  ({ searchState, searchResults, children }) =>
    searchResults && searchResults.nbHits !== 0 ? (
      children
    ) : (
      <div class="mx-auto flex justify-center items-center flex-col">
        <h1 class="text-4xl py-24 font-bold uppercase w-1/2 text-lime text-center">
          Okay, no idea about what {searchState.query} could be, we probably
          don't have that yet. <br></br>{" "}
          <span class="text-xs">Maybe try something else? (⊙_☉) </span>
        </h1>
      </div>
    )
)
export default SearchGrid
