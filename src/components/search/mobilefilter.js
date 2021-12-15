import DropdownRefinementList from "./dropdown"
import "./dropdownstyles.css"
import React from "react"
import {
  HideScroll,
} from "react-hide-on-scroll";
import Dropdown from "./dropdownrefine"



const Mobilebar = () => {
  return (
    <HideScroll variant="down">

    <div class="lg:hidden md:hidden  block w-full">

      <section 
        id="bar">
        <section class="block fixed w-full inset-x-0 bottom-0 bg-white border-t-3 py-2 border-black border-opacity-20 shadow-lg z-10">
          <div id="tabs" class="flex justify-between">
            <span class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center ">
              <span class="block text-light-gray">
              <Dropdown attribute="major" label="Major" />

              </span>
            </span>

            <span class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center ">
              <span class="tab tab-kategori block text-xs text-light-gray">
              <Dropdown attribute="category" label="Category" />

              </span>
            </span>

            <span id="tools" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center ">
              <span class="tab tab-kategori block text-xs text-light-gray">
              <Dropdown attribute="tools" label="Tools" />
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
