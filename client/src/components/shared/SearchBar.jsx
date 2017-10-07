import React, { Component } from 'react'

class SearchBar extends Component {
  constructor() {
    super();
    this.state = { term: '' }
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onTermChange(term);
  }

  render() {
    return (
      <div className='search'>
        <input onChange={e => this.onInputChange(e.target.value)} placeholder='Search...' />
      </div>
    );
  }
}

export default SearchBar
