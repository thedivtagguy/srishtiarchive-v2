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
import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import Mobilebar from "./mobilefilter"
import { Fragment } from "react"
import { Menu, Transition, Switch } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import CustomToggleRefinement from "./toggle"
const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)
function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}
//Search Grid
const SearchGrid2 = () => {
  return (
    <div
      id="search-box"
      className="mx-auto bg-transparent pattern max-w-[1300px] "
    >
      <div class="search-box-contents">
        <div class="sticky top-0 ">
          <InstantSearch searchClient={searchClient} indexName="archives">
            {/* 
            <Mobilebar/>
            */}
            <div class="flex sticky top-0">
              <div class="w-full">
                <div class="h-full">
                  <div className="w-full">
                    <div class="flex items-center justify-items-center space-x-6 z-10 py-2 border-b-3 border-dashed border-gray-300 bg-white h-20 sticky top-0">
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
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <div>
                              <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                Major
                                <ChevronDownIcon
                                  className="-mr-1 ml-2 h-5 w-5"
                                  aria-hidden="true"
                                />
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                          "block px-4 py-2 text-sm"
                                        )}
                                      >
                                        Account settings
                                      </a>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    <RefinementList attribute="major" />
                                  </Menu.Item>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      
                        <div>
                          <CustomToggleRefinement
                            attribute="featured"
                            label="Featured"
                            value={true}
                          />
                        </div>
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
    <div class=" max-w-sm">
      <Link to={`/${props.hit.slug}`}>
        <div className="h-full overflow-hidden transition duration-300 ease-in-out border-black rounded-xl border-3 group">
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
export default SearchGrid2
