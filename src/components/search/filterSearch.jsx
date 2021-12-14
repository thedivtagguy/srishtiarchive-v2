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
import CustomHits from "./Hits"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

// Take in filter as props and then filter the index based on the filter and create a search box
const FilterSearch = ({ filter, taxonomy,  ...props }) => {

// If taxonomy is 'major', then add hide attribute to the dropdown where attribute is 'major'
  const isHide = taxonomy === "major" ? "hide" : ""
// If taxonomy is 'category', then add hide attribute to the dropdown where attribute is 'category'
  const isHide2 = taxonomy === "category" ? "hide" : ""
// If taxonomy is 'tools', then add hide attribute to the dropdown where attribute is 'tools'
  const isHide3 = taxonomy === "tools" ? "hide" : ""
  const isHide4 = taxonomy === "year" ? "hide" : ""
console.log(taxonomy, filter)
    return(
        <div>
             <InstantSearch searchClient={searchClient} indexName="archives">

            <Configure 
            // Filter format: taxonomy:filter
            filters={`${taxonomy}:"${filter}"`}
            />
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
                          <Dropdown 
                          // Add hide attribute to the dropdown where attribute is 'major'
                          hide={isHide}

                          attribute="major" label="Major" />
                        </div>
                        <div>
                          <Dropdown 
                          hide={isHide3}
                          attribute="tools" label="Tools" />
                        </div>
                        <div>
                          <Dropdown hide={isHide2} attribute="category" label="Category" />
                        </div>
                        <div>
                          <Dropdown hide={isHide4} attribute="year" label="Year" />
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
                          <CustomHits/>
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
  