import React from "react"
import PropTypes from "prop-types"

var getTitleAtUrl = require('get-title-at-url');

const Url = ({ link, number }) => {
number = number + 1;
getTitleAtUrl("https://google.com", function(title){
    console.log(title);
});
return (
    <a href={link}  target="_blank"  rel="noreferrer" class="font-semibold text-light-gray text-center text-sm lg:text-xs border-2 border-black rounded-lg  py-1 px-2  focus:outline-none highlight-border">
                       Project link {number} </a>
)
}

Url.propTypes = {
    link: PropTypes.string,
  }
  
  Url.defaultProps = {
    link: null,
  }
export default Url