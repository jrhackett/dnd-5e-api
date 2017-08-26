import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Spell.css'

const Spell = ({ name, level, school, classes }) => (
  <div className="spell-row flex-container">
    <div className="flex-item checkbox">
      <label className="checkbox-inline"><input type="checkbox" /></label>
    </div>
    <div className="flex-item name">
      <p>{name}</p>
    </div>
    <div className="flex-item level">
      <p>{level}</p>
    </div>
    <div className="flex-item school">
      <p>{school}</p>
    </div>
    <div className="flex-item classes">
      <p>{classes.join(", ")}</p>
    </div>
    <div className="flex-item options">
      <span className="glyphicon glyphicon-option-horizontal"></span>
    </div>
  </div>
)

Spell.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  classes: PropTypes.array.isRequired
}

export default Spell