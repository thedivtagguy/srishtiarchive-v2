import React from "react"
import SearchGrid2 from "./searchV2"
import MobileSearch from "./searchV2Mobile"
import { BrowserView, MobileView } from 'react-device-detect';

const Search = () => {
    // Check if the user is on a mobile device
    // Define empty isMobile variable

    return (
      <>
        <BrowserView>
            <SearchGrid2 />
        </BrowserView>
        <MobileView>
            <MobileSearch />
        </MobileView>
        </>
        
    )
}


export default Search