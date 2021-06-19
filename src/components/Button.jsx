import PropTypes from "prop-types"
import React from "react"

const Button = ({ children, href, ...params }) => {
  const className =
    "font-bold text-center text-sm border-2 border-black rounded-md shadow-shadow-yellow py-2 px-2  hover:bg-yellow focus:outline-none hover:bg-blue-purple bg-yellow-400"

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button className={className} {...params}>
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
}

Button.defaultProps = {
  href: null,
}

export default Button
