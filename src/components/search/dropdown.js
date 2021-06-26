import React, { Component } from "react"
import { connectRefinementList } from "react-instantsearch-dom"
import PropTypes from "prop-types"

const cx = label => `ais-DropdownRefinementList-${label}`

class DropdownRefinementList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
      mobile: false,
    }
  }

  handleEvent = e => {
    this.props.setActive();
    e.stopPropagation(); //stop event from propagating to ancestor elements
  }

  componentDidMount() {
    this.setState({
      mobile: /Mobi/.test(navigator.userAgent),
    })
  }
  capitalizeFirst(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  renderItem = (item, i) => (
    <label key={i} className="ais-DropdownRefinementList-item-label">
      <input
        type="checkbox"
        checked={item.isRefined}
        onChange={() => {
          this.selectItem(item)
        }}
      />
      <span>{item.label}</span>
      <span className={cx("item-count")}> ({item.count})</span>
    </label>
  )
  selectItem = (item, resetQuery) => {
    this.props.refine(item.value)
  }
  handleEvent = e => {
    this.setState({ active: !this.state.active })
  }
  render() {
    const { items, attribute, hoverable, currentRefinement, icon } = this.props
    const { active, mobile } = this.state
    const title = this.capitalizeFirst(attribute)
    console.log(this.state)
    return (
      <div
        className={`ais-DropdownRefinementList-container-${attribute}`}
        onMouseLeave={hoverable && !mobile && this.handleEvent}
        onMouseEnter={hoverable && !mobile && this.handleEvent}
      >
        <div className={cx("title-container")} onClick={this.handleEvent}>
          <span class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-gray-600 text-xl text-center ">
            {icon}
          </span>
          <span className="ais-DropdownRefinementList-title font-bold w-full text-gray-600">
            {title}{" "}
          </span>
        </div>
        {active && (
          <div className={`ais-DropdownRefinementList-List ${attribute}`}>
            {items.map(this.renderItem)}
          </div>
        )}
      </div>
    )
  }
}


DropdownRefinementList.propTypes = {
  attribute: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  hoverable: PropTypes.bool,
  limit: PropTypes.number,
}
DropdownRefinementList.defaultProps = {
  hoverable: false,
}

export default connectRefinementList(DropdownRefinementList)
