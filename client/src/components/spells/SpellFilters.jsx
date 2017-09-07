import React from 'react'
import PropTypes from 'prop-types'
import SpellFilterLevelContainer from '../../containers/spells/SpellFilterLevelContainer'
import SpellFilterSchoolContainer from '../../containers/spells/SpellFilterSchoolContainer'
import SpellFilterClassContainer from '../../containers/spells/SpellFilterClassContainer'
import SpellFilterLevelAllContainer from '../../containers/spells/SpellFilterLevelAllContainer'
import SpellFilterSchoolAllContainer from '../../containers/spells/SpellFilterSchoolAllContainer'
import SpellFilterClassAllContainer from '../../containers/spells/SpellFilterClassAllContainer'        

const SpellFilters = ({ shouldShow, levels, schools, classes, onFilterClear }) => {
  if(shouldShow) {
    return (
      <div className="filters">
        <div className="filter-links">
          <span className="filter-label">Level: </span>
          <SpellFilterLevelAllContainer />
          {levels.map(level => {
            return <SpellFilterLevelContainer key={level} level={level} text={level} />
          })}
        </div>
        <div className="filter-links">
          <span className="filter-label">School: </span>
          <SpellFilterSchoolAllContainer />
          {schools.map(school => {
            return <SpellFilterSchoolContainer key={school} school={school} text={school} />
          })}
        </div>
        <div className="filter-links">
          <span className="filter-label">Class: </span>
          <SpellFilterClassAllContainer />
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
