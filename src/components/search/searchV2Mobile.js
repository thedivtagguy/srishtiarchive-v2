import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  connectStateResults,
  SearchBox,
  Configure
} from "react-instantsearch-dom"
import React, {useState} from "react"
import CustomHits from "./Hits"
import {  XIcon, FilterIcon,  } from '@heroicons/react/outline'
import Clear from "./clear"
import CustomToggleRefinement from "./toggle"
import MobileDropdownSelect from "./MobileDropdown"
const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)
//Search Grid
const MobileSearch = (shouldHide, filter, taxonomy) => {

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
const configure = shouldHide.shouldHide ? {
  filters: `${shouldHide.shouldHide.taxonomy}:"${shouldHide.shouldHide.filter}"`
} : {
  filters: ""

}


// Hide and show the div when clicked
const [show, setShow] = useState(false)


  return (
    <div
      id="search-box"
      className="mx-auto px-4 bg-transparent pattern max-w-[1300px] "
    >
      <div class="search-box-contents">
      <InstantSearch searchClient={searchClient} indexName="archives">
        <div>
          <Configure {...configure} />
        </div>

          <div className="min-h-full w-full block lg:hidden sticky top-0 z-10">
        <div className="bg-white w-full">
          
            <>
              <div className="max-w-7xl mx-auto lg:px-8">
        
                 
                  <div className="-mr-2 flex h-16 w-full space-x-4 justify-between items-center md:hidden">
                  <div class="w-full flex-1" >
                        <SearchBox
                          className="w-full"
                          translations={{
                            placeholder: "Type keywords to search...",
                          }}
                        />
                    </div>
                    <button 
                    onClick={() => setShow(!show)}

                    className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {show  ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <FilterIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </button>
                  </div>
              </div>

              <div 
              // Show and hide the div when clicked
              className={classNames(
                "max-w-7xl mx-auto  md:hidden bg-gray-200  lg:px-8",
                show ? "block" : "hidden"
              )}>
                <div className="px-2 pt-2 gap-4  sm:px-3">
                  {filters.map((item) => (
                   <div>
                     {shouldHide.shouldHide ? (
                       <div className={
                          classNames(
                            item.attribute === shouldHide.shouldHide.taxonomy ? "hidden" : ""
                          )
                       }>
                         <MobileDropdownSelect  attribute={item.attribute} label={item.label} />
                       </div>
                      ) : (
                        // If
                        <MobileDropdownSelect attribute={item.attribute} label={item.label}/>

                      )}
                    </div>
                  ))}
                  <div class="flex justify-between items-center px-4 py-4 gap-4">
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
               
                    
              </div>
            </>
        </div>

       
      </div>
            <div class="flex">
              <div class="w-full">
                <div class="h-full">
                  <div className="w-full">
                    <div class="flex w-full">
                      <Results>
                        <div class="py-2  w-full">
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
export default MobileSearch
