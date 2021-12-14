import DropdownRefinementList from "./dropdown"
import "./dropdownstyles.css"
import React from "react"
import {
  HideScroll,
} from "react-hide-on-scroll";

const Mobilebar = () => {


  return (
    <HideScroll variant="down">

    <div class="lg:hidden md:hidden  block w-full">

      <section 
        id="bar">
        <section class="block fixed w-full inset-x-0 bottom-0 bg-white border-t-3 border-black border-opacity-20 shadow-lg z-10 hit shadow">
          <div id="tabs" class="flex justify-between">
            <span class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <span class="tab tab-kategori block text-xs text-light-gray">
                <DropdownRefinementList attribute={"major"} icon={"📓"}  
                setActive={() => this.setActive(1)} />
              </span>
            </span>

            <span class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <span class="tab tab-kategori block text-xs text-light-gray">
                <DropdownRefinementList attribute={"year"} icon={"📅"}  
                setActive={() => this.setActive(2)} />
              </span>
            </span>

            <span id="tools" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <span class="tab tab-kategori block text-xs text-light-gray">
                <DropdownRefinementList attribute={"category"} icon={"✒️"} />
              </span>
            </span>
          </div>
        </section>
      </section>
    </div>
    </HideScroll>

  )
}

export default Mobilebar
