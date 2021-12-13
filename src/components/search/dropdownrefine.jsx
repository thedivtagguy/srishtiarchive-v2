import {  connectRefinementList } from "react-instantsearch-dom"
import React, {useState} from "react"
import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}


const RefinementList = ({ label, items, hide, refine }) => {
  const [isChecked, setIsChecked] = useState(true);
  // If hide is true, dont render the component
  if (hide) return null;
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          {label}
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-4 flex flex-col">
              {items.map(item => (
                <Menu.Item key={item.label}>
                  {({ active }) => (
                   
                       <label class="inline-flex items-center">
        <input type="checkbox" 
        // On click, check or uncheck the checkbox
        style={{ fontWeight: item.isRefined ? "bold" : "" }}
                      onClick={event => {
                        event.preventDefault()
                        refine(item.value)
                      }}
                     // On change, check only that checkbox
                      onChange={event => {
                        event.preventDefault()
                        refine(item.value)
                      }}
                      checked={item.isRefined}
                      className={classNames(
                        active ? "bg-gray-100 focus:ring-indigo-500 h-4 w-4  border-gray-300 rounded text-gray-900" : "text-gray-700",
                        "block px-4 py-2 focus:ring-indigo-500 h-4 w-4  border-gray-300 rounded text-sm"
                      )}
        />
        <span class="ml-2">{item.label} ({item.count})</span>
      </label>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

const Dropdown = connectRefinementList(RefinementList)

export default Dropdown
