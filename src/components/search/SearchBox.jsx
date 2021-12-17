import React from "react"
import SearchGrid2 from "./searchV2"
import MobileSearch from "./searchV2Mobile"
import { BrowserView, MobileView } from 'react-device-detect';

const Search = (shouldHide) => {
    // Check if the user is on a mobile device
    // Define empty isMobile variable

// If shouldHide is true, pass filter and taxonomy to MobileSearch, else just render MobileSearch with empty variables
    console.log(shouldHide.shouldHide)
    return (
      <>
        <BrowserView>
            <SearchGrid2 shouldHide={shouldHide}/>
        </BrowserView>
        <MobileView>
           {shouldHide.shouldHide ? <MobileSearch shouldHide={shouldHide}  /> : <MobileSearch />}
        </MobileView>
        </>
        
    )
}


export default Search