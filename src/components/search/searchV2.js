import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  connectStateResults,
  SearchBox,
  Configure
} from "react-instantsearch-dom"
import React from "react"

// import Mobilebar from "./mobilefilter"
import CustomToggleRefinement from "./toggle"
import Dropdown from "./dropdownrefine"
import Clear from "./clear"
import CustomHits from "./Hits"
const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)
//Search Grid
const SearchGrid2 = ({filter, taxonomy, shouldHide}) => {

  console.log(shouldHide)

  const filters = [
    { attribute: 'major', label: 'Major' },
    { attribute: 'tools', label: 'Tools' },
    { attribute: 'category', label: 'Category' },
    { attribute: 'year', label: 'Year' },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  // If shouldHide is true
const configure = shouldHide ? {
  filters: `${shouldHide.taxonomy}:"${shouldHide.filter}"`
} : {
  distinct: true,
}

  return (
    <div
      id="search-box"
      className="mx-auto bg-transparent pattern max-w-[1300px] "
    >
      <div class="search-box-contents">
        <div class="sticky top-0 ">
          <InstantSearch searchClient={searchClient} indexName="archives">
          <div>
          <Configure {...configure} />
        </div>

            <div class="flex">
              <div class="w-full">
                <div class="h-full">
                  <div className="w-full">
                    <div class="flex items-center justify-items-center space-x-6  z-10 py-2 border-b-3 border-dashed border-gray-300 bg-white h-16 ">
                      <div class="flex-1 ">
                        <SearchBox
                          className="search"
                          translations={{
                            placeholder: "Type keywords to search...",
                          }}
                        />
                      </div>
                      <div className="flex justify-items-center space-x-4 items-center">
                       {filters.map((item) => (
                   <div>
                     {shouldHide ? (
                       <div className={
                          classNames(
                            item.attribute === shouldHide.taxonomy ? "hidden" : ""
                          )
                       }>
                         <Dropdown  attribute={item.attribute} label={item.label} />
                       </div>
                      ) : (
                        // If
                        <Dropdown attribute={item.attribute} label={item.label}/>

                      )}
                    </div>
                  ))}
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
      </div>
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
export default SearchGrid2
