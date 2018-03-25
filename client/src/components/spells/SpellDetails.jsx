import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'

const details = css`
  margin-top: 1rem;

  p {
    overflow-x: initial;
    white-space: initial;
    margin-bottom: 0.25rem;
  }
`

const detailLabel = css`
  font-weight: 700;
`

const extra = css`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
  }
`

const Spell = ({ shouldShow, school, classes, components, duration, casting_time, range, description, athigherlevel }) => {
  if(shouldShow) {
    return (
      <div className={ details }>
        <p className={ extra }><span className={ detailLabel }>School:</span> { school }</p>
        <p className={ extra }><span className={ detailLabel }>Classes:</span> { classes }</p>
        <p><span className={ detailLabel }>Components:</span> { components }</p>
        <p><span className={ detailLabel }>Duration:</span> { duration }</p>
        <p><span className={ detailLabel }>Casting Time:</span> { casting_time }</p>
        <p><span className={ detailLabel }>Range:</span> { range }</p>
        <p><span className={ detailLabel }>Description:</span> { description }</p>
        <p><span className={ detailLabel }>At High Levels:</span> { athigherlevel }</p>
      </div>
    )
  }
  
  return null
}

Spell.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  school: PropTypes.string.isRequired,
  classes: PropTypes.array.isRequired,
  components: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  casting_time: PropTypes.string.isRequired,
  range: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  athigherlevel: PropTypes.string.isRequired
}

export default Spell
