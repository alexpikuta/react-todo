import React, { Component } from 'react'
import './search-panel.sass'

export default class SearchPanel extends Component {
  state = {
    term: ''
  }

  onSearchChange = (event) => {
    const term = event.target.value
    this.setState({ term })
    this.props.onSearchChange(term)
  }

  render() {
    return (
      <input
        className="search-input"
        placeholder="search"
        value={this.state.term}
        onChange={this.onSearchChange} />
    )
  }
}
