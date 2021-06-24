import DropdownRefinementList from "./Dropdown"
import "./dropdownstyles.css"
import React from "react"
function Mobilebar() {
  return (
    <div class="lg:hidden md:hidden block w-full">
      <section
        id="bottom-navigation"
        class="md:hidden block w-full fixed inset-x-0 bottom-0 z-10 bg-accent-gray shadow"
      >
        <section
          id="bottom-navigation"
          class="block fixed w-full inset-x-0 bottom-0 z-10 bg-accent-gray shadow"
        >
          <div id="tabs" class="flex justify-between">
            <span class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <span class="tab tab-kategori block text-xs text-light-gray">
                <DropdownRefinementList attribute={"major"} icon={"📓"} />
              </span>
            </span>

            <span class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <span class="tab tab-kategori block text-xs text-light-gray">
                <DropdownRefinementList attribute={"year"} icon={"📅"} />
              </span>
            </span>

            <span id="tools" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <span class="tab tab-kategori block text-xs text-light-gray">
                <DropdownRefinementList attribute={"tools"} icon={"🧰"} />
              </span>
            </span>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Mobilebar
