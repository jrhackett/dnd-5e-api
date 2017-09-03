import React from 'react'
import PropTypes from 'prop-types'

const SpellsTopBar = ({ shouldShow, onFilterLevelClick, onFilterClear }) => {
  if(shouldShow) {
    return (
      <div>
        <a onClick={e => {
            e.preventDefault()
            onFilterLevelClick('0')
          }}
        >
          See all cantrips
        </a>

        <a onClick={e => {
            e.preventDefault()
            onFilterClear()
          }}
        >
          Clear Filters
        </a>
      </div>
    )
  }

  return null
}

SpellsTopBar.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  onFilterLevelClick: PropTypes.func.isRequired,
  onFilterClear: PropTypes.func.isRequired
}

export default SpellsTopBar
