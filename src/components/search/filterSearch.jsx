import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  Hits,
  connectStateResults,
  SearchBox,
  Configure
} from "react-instantsearch-dom"
import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import Mobilebar from "./mobilefilter"
import CustomToggleRefinement from "./toggle"
import Dropdown from "./dropdownrefine"
import Clear from "./clear"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

// Take in filter as props and then filter the index based on the filter and create a search box
const FilterSearch = ({ filter,  ...props }) => {


let taxonomy = 'major'
    return(
        <div>
             <InstantSearch searchClient={searchClient} indexName="archives">

            <Configure 
            // Filters = "taxonomy:filter"
                filters= {`major:${filter}`}/>
            {/* 
            <Mobilebar/>
            */}
            <div class="flex sticky top-0">
              <div class="w-full">
                <div class="h-full">
                  <div className="w-full">
                    <div class="flex items-center justify-items-center space-x-6 z-10 py-2 border-b-3 border-dashed border-gray-300 bg-white h-16 sticky top-0">
                      <div class="flex-1 ">
                        <SearchBox
                          className="search"
                          translations={{
                            placeholder: "Type keywords to search...",
                          }}
                        />
                      </div>
                      <div className="flex justify-items-center space-x-4 items-center">
                       
                        <div>
                          <Dropdown attribute="tools" label="Tools" />
                        </div>
                        <div>
                          <Dropdown attribute="category" label="Category" />
                        </div>
                        <div>
                          <Dropdown attribute="year" label="Year" />
                        </div>
                        <div>
                          <CustomToggleRefinement
                            attribute="featured"
                            label="Featured"
                            value={true}
                          />
                        </div>
                        <div>
                        <Clear />
                        </div>
                      </div>
                    </div>
                    <div class="flex w-full">
                      <Results>
                        <div class="py-2 px-4 w-full">
                          <Hits hitComponent={Hit} />
                          <div
                            id="mobile-alg"
                            class="lg:hidden md:hidden mx-auto flex justify-center items-center"
                          >
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

    )
}

function Hit(props) {
    const items = props.hit.tools.slice(0, 1)
    return (
      <div class=" max-w-sm">
        <Link to={`/${props.hit.slug}`}>
          <div className="h-full overflow-hidden transition duration-300 ease-in-out  bg-[#fafafa] border-gray-500 border-opacity-25 rounded-xl border-3 group">
            <div className="h-56 transition duration-150 ease-in-out group-hover:opacity-75">
              {props.hit.thumbnailUrl ? (
                <img
                  style={{ width: "444px" }}
                  className="object-cover h-56"
                  src={props.hit.thumbnailUrl}
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
                  {props.hit.major}
                </p>
                <p class="uppercase">
                  {" "}
                  {props.hit.featured && (
                    <span class="text-xs px-4 text-srishti-red font-bold">
                      Featured
                    </span>
                  )}
                </p>
              </div>
              <div class="h-20">
                <h1 className="px-2 text-xl font-extrabold ">{props.hit.name}</h1>
              </div>
            </div>
            <div class="">
              <p className="px-6 text-sm font-semibold tracking-wider">
                <span class="text-gray-800 rounded-md px-1 py-1">
                  {props.hit.author}{" "}
                  {props.hit.groupmembers && <span class="text-xs">et al.</span>}
                </span>
              </p>
              <p class="text-xs font-bold pl-6 mx-1 py-2  text-gray-700">
                {props.hit.category}
              </p>
            </div>
            <div class="flex-1 pr-4 pb-4 mx-1 inline-flex items-center">
              {items.map((tag, i) => [
                <p
                  class="text-xs whitespace-normal ml-6 px-2 py-1 rounded-md border-1 border-opacity-40 border-dashed border-black"
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
          <h1 class="text-4xl py-24 font-bold uppercase w-1/2  text-center">
            Okay, no idea about what {searchState.query} could be, we probably
            don't have that yet. <br></br>{" "}
            <span class="text-xs">Maybe try something else? (⊙_☉) </span>
          </h1>
        </div>
      )
  )
  export default FilterSearch
  