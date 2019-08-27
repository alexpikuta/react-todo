import React, { Component } from 'react'
import './add-item.sass'

export default class AddItem extends Component {
  render() {
    return (
      <div className="add-item d-flex">
        <input type="text"
          className="add-item__input"
          placeholder="new 2do" />
        <button type="button"
          className="btn btn-success"
          onClick={() => this.props.onItemAdded('Hello world')}
        >Add</button>
      </div>
    )
  }
}