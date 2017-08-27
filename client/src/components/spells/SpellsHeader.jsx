import React from 'react'
import PropTypes from 'prop-types'

const SpellsHeader = ({ title, children }) => {
  return (
    <div className="container spells-header">
      <h1 className="spells-header">{ title }</h1>
      { children }
    </div>
  )
}

SpellsHeader.propTypes = {
  title: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired
}

export default SpellsHeader
