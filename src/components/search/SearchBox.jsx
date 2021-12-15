import React from "react"
import SearchGrid2 from "./searchV2"
import MobileSearch from "./searchV2Mobile"

const Search = () => {
    // Check if the user is on a mobile device
    
    let isMobile = false;
    if (typeof window !== "undefined") {
         isMobile = window.innerWidth < 768
    }
    
    return (
        <div>
            {isMobile ? (
                <MobileSearch />
            ) : (
                <SearchGrid2 />
            )}
        </div>
    )
}


export default Search