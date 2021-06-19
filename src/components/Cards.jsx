import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import Card from "./Card"

const Cards = ({ items, hideLastItemOnMobile = false }) => {
  return (
    <div className="container">
      <div className="grid grid-flow-row xl:grid-cols-4 px-8 gap-5 py-4 mb-8">
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
      </div>
    </div>
  )
}

Cards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Cards
