import DropdownRefinementList from "./dropdown"
import "./dropdownstyles.css"
import React from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

function Mobilebar() {
  return (
    <div class="lg:hidden md:hidden  block w-full">
          <Helmet>
        <script src={withPrefix('hideshow.js')} type="text/javascript" defer />
    </Helmet>
      <section
        id="bar"
        class="md:hidden block w-full fixed inset-x-0 bottom-0 z-10 bg-accent-gray shadow">
        <section class="block fixed w-full inset-x-0 bottom-0 z-10 bg-accent-gray shadow">
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
                <DropdownRefinementList attribute={"tools"} icon={"✒️"} />
              </span>
            </span>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Mobilebar
