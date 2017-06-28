import React from 'react'
import PropTypes from 'prop-types'

const Spell = ({ name, level, school, classes }) => (
  <div className="row">
    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
      <p>{name}</p>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
      <p>{level}</p>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
      <p>{school}</p>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
      <p>{classes.toString()}</p>
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