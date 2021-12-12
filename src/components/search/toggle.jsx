import { connectToggleRefinement } from "react-instantsearch-dom"
import React, { useState } from "react"
import { Menu, Transition, Switch } from "@headlessui/react"

const ToggleRefinement = ({
  currentRefinement,
  label,
  count,
  refine,
  createURL,
}) => {
  const [enabled, setEnabled] = useState(false)

  return (
    <a
      href={createURL(!currentRefinement)}
      className={ currentRefinement ? "font-ibm-mono uppercase text-srishti-red -mt-1 font-bold text-sm cursor-pointer" : "font-ibm-mono uppercase text-srishti-red -mt-1 font-medium text-sm cursor-pointer" }
      onClick={event => {
        event.preventDefault()
        refine(!currentRefinement)
      }}
      
    >
      {label} {" "}
      <Switch
        checked={enabled}
        href={createURL(!currentRefinement)}
        onClick={event => {
          event.preventDefault()
          refine(!currentRefinement)
        }}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-srishti-dark-purple" : "bg-srishti-light-purple"
        }
                                 relative inline-flex flex-shrink-0 h-[24px] w-[60px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
                                 pointer-events-none inline-block h-[20px] w-[20px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </a>
  )
}

const CustomToggleRefinement = connectToggleRefinement(ToggleRefinement)

export default CustomToggleRefinement
