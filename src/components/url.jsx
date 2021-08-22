import React from "react"
import PropTypes from "prop-types"

const Url = ({ link, number }) => {
number = number + 1;

return (
    <a href={link}  target="_blank"  rel="noreferrer" class="font-semibold text-sm  inline-flex hover:text-blue-purple text-light-gray dark:text-white">
                       Project link {number} {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 ml-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg></a>
)
}

Url.propTypes = {
    link: PropTypes.string,
  }
  
  Url.defaultProps = {
    link: null,
  }
export default Url