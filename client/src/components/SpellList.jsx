import React, { Component } from 'react';
import { spellsFetchData } from '../actions';

class SpellList extends Component {

    componentDidMount() {
        this.props.fetchData('/spells');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the spells</p>
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>
        }
        return (
            <ul>
                {this.props.spells.map((spell) => (
                    <li key={spell.id}>
                        {spell.name}
                    </li>
                ))}
            </ul>
        )
    }
}

SpellList.propTypes = {
    fetchData: React.PropTypes.func.isRequired,
    spells: React.PropTypes.array.isRequired,
    hasErrored: React.PropTypes.bool.isRequired,
    isLoading: React.PropTypes.bool.isRequired
}

export default SpellList