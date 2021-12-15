import React from "react"
import SearchGrid2 from "./searchV2"
import MobileSearch from "./searchV2Mobile"

const Search = () => {

    // If the user is on a mobile device, display MobileSearch
    // Otherwise, display SearchGrid2
    if (typeof window !== "undefined") {
        if (window.innerWidth <= 768) {
            return(
                 <MobileSearch />)
        } else {
            return <SearchGrid2 />
        }
    }
}

export default Search