import React from 'react'
import PropTypes from 'prop-types'
import SpellFilterLevelContainer from '../../containers/shared/filters/SpellFilterLevelContainer'
import SpellFilterSchoolContainer from '../../containers/shared/filters/SpellFilterSchoolContainer'
import SpellFilterClassContainer from '../../containers/shared/filters/SpellFilterClassContainer'

const SpellFilters = ({ shouldShow, levels, schools, classes, onFilterClear }) => {
  if(shouldShow) {
    return (
      <div className="container filters">
        <div className="filter-links">
          <span className="filter-label">Level: </span>
          <SpellFilterLevelContainer text='All' />
          {levels.map(level => {
            return <SpellFilterLevelContainer key={level} text={level} />
          })}
        </div>
        <div className="filter-links">
          <span className="filter-label">School: </span>
          <SpellFilterSchoolContainer text='All' />
          {schools.map(school => {
            return <SpellFilterSchoolContainer key={school} text={school} />
          })}
        </div>
        <div className="filter-links">
          <span className="filter-label">Class: </span>
          <SpellFilterClassContainer text='All' />
          {classes.map(className => {
            return <SpellFilterClassContainer key={className} className={className} text={className} />
          })}
        </div>
        <div>
          <a onClick={e => {
              e.preventDefault()
              onFilterClear()
            }}
          >
            Clear Filters
          </a>
        </div>
      </div>
    )
  }

  return null
}

SpellFilters.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  levels: PropTypes.array.isRequired,
  schools: PropTypes.array.isRequired,
  classes: PropTypes.array.isRequired,
  onFilterClear: PropTypes.func.isRequired
}

export default SpellFilters
