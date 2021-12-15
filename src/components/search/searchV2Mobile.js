import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  connectStateResults,
  SearchBox,
} from "react-instantsearch-dom"
import React from "react"
import CustomHits from "./Hits"
import Dropdown from "./dropdownrefine"

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, FilterIcon } from '@heroicons/react/outline'

import MobileDropdownSelect from "./MobileDropdown"
const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)
//Search Grid
const MobileSearch = () => {



const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]

const filters = [
  { attribute: 'major', label: 'Major' },
  { attribute: 'tools', label: 'Tools' },
  { attribute: 'category', label: 'Category' },
  { attribute: 'year', label: 'Year' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
  return (
    <div
      id="search-box"
      className="mx-auto bg-transparent pattern max-w-[1300px] "
    >
      <div class="search-box-contents">
        <div>
          <InstantSearch searchClient={searchClient} indexName="archives">
          <div className="min-h-full w-full block lg:hidden sticky top-0 z-10">
        <Disclosure as="nav" className="bg-white w-full">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
                 
                  <div className="-mr-2 flex h-16 w-full space-x-6 justify-between items-center md:hidden">
                  <div class="w-full flex-1" >
                        <SearchBox
                          className="w-full"
                          translations={{
                            placeholder: "Type keywords to search...",
                          }}
                        />
                    </div>
                    <Disclosure.Button className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <FilterIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <FilterIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
              </div>

              <Disclosure.Panel className="md:hidden bg-gray-200">
                <div className="px-2 pt-2 pb-3  gap-4  sm:px-3">
                  {filters.map((item) => (
                   <MobileDropdownSelect attribute={item.attribute} label={item.label}/>
                  ))}
                </div>
                    
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

       
      </div>
            <div class="flex">
              <div class="w-full">
                <div class="h-full">
                  <div className="w-full">
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
export default MobileSearch
