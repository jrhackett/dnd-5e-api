import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from 'react-emotion'
import colors from '../../styles/colors'
import SpellFilterLevelContainer from '../../containers/shared/filters/SpellFilterLevelContainer'
import SpellFilterSchoolContainer from '../../containers/shared/filters/SpellFilterSchoolContainer'
import SpellFilterClassContainer from '../../containers/shared/filters/SpellFilterClassContainer'

const filters = css`
  margin-bottom: 1rem;
`

const filterLinks = css`
  margin-bottom: 1rem;
  margin-right: 0.5rem;
`

const filterLabel = css`
  display: inline-block;
  width: 7rem;

  @media screen and (max-width: 960px) {
    display: block;
  }
`

const clearFilters = css`
  color: ${ colors.lightPurple };

  &:hover {
    opacity: 0.7;
    text-decoration: none;
  }
`

const SpellFilters = ({ shouldShow, levels, schools, classes, onFilterClear }) => {
  if(shouldShow) {
    return (
      <div className={ cx('container', filters) }>
        <div className={ filterLinks }>
          <span className={ filterLabel }>Level: </span>
          <SpellFilterLevelContainer text='All' />
          {levels.map(level => {
            return <SpellFilterLevelContainer key={level} text={level} />
          })}
        </div>
        <div className={ filterLinks }>
          <span className={ filterLabel }>School: </span>
          <SpellFilterSchoolContainer text='All' />
          {schools.map(school => {
            return <SpellFilterSchoolContainer key={school} text={school} />
          })}
        </div>
        <div className={ filterLinks }>
          <span className={ filterLabel }>Class: </span>
          <SpellFilterClassContainer text='All' />
          {classes.map(className => {
            return <SpellFilterClassContainer key={ className } className={ className } text={ className } />
          })}
        </div>
        <div>
          <a onClick={e => {
              e.preventDefault()
              onFilterClear()
            }}
            className={ clearFilters }
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
