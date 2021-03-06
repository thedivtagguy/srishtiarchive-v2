import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import Card from "./Card"

const Cards = ({ items, no, hideLastItemOnMobile = false }) => {
  items = items.slice(0,no)
  let grid = "FALSE"
  if (typeof window !== `undefined`){ 
    grid = /majors|authors|categories|tools|years/.test(window.location.href);

}
  return (
    <div>
      

        <div
        // Apply one class if URL is majors, 
        // Or else, apply another class
        className={
          grid ? "grid grid-flow-row gap-5 px-6 mb-8 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3" 
          : "grid grid-flow-row gap-5 px-6 mb-8 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-4" 

        }
      >
            {items.map(item => (
              <div
                className={classNames("w-full", {
                  "last:hidden lg:last:block": hideLastItemOnMobile,
                })}
                key={item.id}
              >
                <Card {...item} />
              </div>
            ))}
          </div>{" "}     
     </div>

  )
}

Cards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Cards
