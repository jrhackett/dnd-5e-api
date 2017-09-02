import React from 'react'
import PropTypes from 'prop-types'

const Spell = ({ shouldShow, components, duration, casting_time, range, description, athigherlevel }) => {
  if(shouldShow) {
    return (
      <div className="flex-item details">
        <p><span className="detail-label">Components:</span> {components}</p>
        <p><span className="detail-label">Duration:</span> {duration}</p>
        <p><span className="detail-label">Casting Time:</span> {casting_time}</p>
        <p><span className="detail-label">Range:</span> {range}</p>
        <p><span className="detail-label">Description:</span> {description}</p>
        <p><span className="detail-label">At High Levels:</span> {athigherlevel}</p>
      </div>
    )
  }
  
  return null
}

Spell.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  components: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  casting_time: PropTypes.string.isRequired,
  range: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  athigherlevel: PropTypes.string.isRequired
}

export default Spell
