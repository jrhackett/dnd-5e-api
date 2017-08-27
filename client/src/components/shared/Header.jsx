import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title, children }) => {
  return (
    <div className="container spells-header">
      <h1>{ title }</h1>
      { children }
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Header
