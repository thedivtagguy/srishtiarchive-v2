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
    <div class="flex flex-col">
      <a
        href={createURL(!currentRefinement)}
        className={ currentRefinement ? "font-ibm-mono  text-xs -mt-1 font-medium  cursor-pointer" : "font-ibm-mono  -mt-1 font-medium text-xs cursor-pointer" }
        onClick={event => {
          event.preventDefault()
         // Toggle the enabled state
          setEnabled(!enabled)
          refine(!currentRefinement)
        }
      }
      
      >
        {label}
        </a>
        <Switch
          checked={enabled}
          href={createURL(!currentRefinement)}
          onClick={event => {
            event.preventDefault()
            refine(!currentRefinement)
          }}
          // On change, toggle the enabled state and refine the search
          onChange={() => {
            setEnabled(!enabled)
            refine(!currentRefinement)
          }}
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
    
    </div>
  )
}

const CustomToggleRefinement = connectToggleRefinement(ToggleRefinement)

export default CustomToggleRefinement
