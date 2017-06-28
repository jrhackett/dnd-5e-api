import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Spell from './Spell'

class SpellList extends Component {

  componentDidMount() {
    this.props.fetchData('/spells');
  }

  render() {
    if(this.props.hasErrored)
      return <p>Sorry! There was an error loading the spells</p>

    if(this.props.isLoading)
      return <p>Loading…</p>

    return (
      <ul>
        {this.props.spells.map((spell) => (
          <Spell key={spell.id} name={spell.name} />
        ))}
      </ul>
    )
  }
}

SpellList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    spells: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default SpellList