import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  connectStateResults,
  SearchBox,
} from "react-instantsearch-dom"
import React from "react"
import CustomHits from "./Hits"

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, FilterIcon } from '@heroicons/react/outline'
const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)
//Search Grid
const MobileSearch = () => {


const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
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
        <div class="sticky top-0 ">
          <InstantSearch searchClient={searchClient} indexName="archives">
          <div className="min-h-full block lg:hidden sticky top-0 z-10">
        <Disclosure as="nav" className="bg-white">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
                 
                  <div className="-mr-2 flex h-16 space-x-6 justify-between items-center md:hidden">
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

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={("block px-3 py-2 rounded-md text-base font-medium")}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
        
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

       
      </div>
            <div class="flex sticky top-0">
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
