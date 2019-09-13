import React, { Component } from 'react'
import './add-item.sass'

export default class AddItem extends Component {
  state = {
    label: ''
  }
  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onItemAdded(this.state.label)
    this.setState({
      label: ''
    })
  }
  render() {
    return (
      <form className="add-item d-flex"
        onSubmit={this.onSubmit}>
        <input type="text"
          className="form-control add-item__input"
          onChange={this.onLabelChange}
          placeholder="new 2do"
          value={this.state.label}
        />
        <button
          className="btn btn-success"
          type="submit"
        >Add</button>
      </form>
    )
  }
}