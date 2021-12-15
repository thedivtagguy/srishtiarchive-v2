import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  SearchBox,
} from "react-instantsearch-dom"
import React from "react"


import CustomHits from "./Hits"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const MobileSearch = () => {
    return(
        <section class="px-6">
            <InstantSearch searchClient={searchClient} indexName="archives">
            <SearchBox
                          className="search py-4"
                          translations={{
                            placeholder: "Type keywords to search...",
                          }}
                        />
            <CustomHits />
            </InstantSearch>
        </section>)
}

export default MobileSearch