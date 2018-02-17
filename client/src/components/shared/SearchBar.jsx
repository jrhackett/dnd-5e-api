import React, { Component } from 'react'
import { css } from 'react-emotion'

const search = css`
  display: inline-block;
  max-width: 60%;
  margin-right: 1rem;
  height: 100%;

  input {
    width: 100%;
    height: 100%;
    padding: 0 0.5rem;

    &:focus {
      outline: none;
    }
  }
`

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  onInputChange(term) {
    this.setState({ term })
    this.props.onTermChange(term)
  }

  render() {
    return (
      <div className={ search }>
        <input onChange={ e => this.onInputChange(e.target.value) } placeholder='Search...' />
      </div>
    );
  }
}

export default SearchBar
